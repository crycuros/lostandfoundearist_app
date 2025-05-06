"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { mockChats, mockMessages } from "@/lib/mock-data"
import type { Chat, Message } from "@/lib/types"
import { Send, Trash2 } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, query, where, getDocs, addDoc, orderBy, serverTimestamp, onSnapshot, deleteDoc, doc as firestoreDoc } from "firebase/firestore"
import { useAuth } from "@/hooks/use-auth"
import { useSearchParams } from "next/navigation"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

export function ChatScreen() {
  const { user } = useAuth()
  const [chats, setChats] = useState<Chat[]>([])
  const [selectedChat, setSelectedChat] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const [alert, setAlert] = useState<{ open: boolean, message: string }>({ open: false, message: "" })

  useEffect(() => {
    if (!user) return
    const q = query(collection(db, "chats"), where("participants", "array-contains", user.uid))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chatList: Chat[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Chat))
      setChats(chatList)
      if (chatList.length > 0 && !selectedChat) {
        setSelectedChat(chatList[0].id)
      }
    })
    return () => unsubscribe()
  }, [user])

  useEffect(() => {
    if (!selectedChat) return
    const q = query(collection(db, "chats", selectedChat, "messages"), orderBy("timestamp"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Message)))
      scrollToBottom()
    })
    return () => unsubscribe()
  }, [selectedChat])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const chatIdFromUrl = searchParams.get("chatId")
    if (chatIdFromUrl) setSelectedChat(chatIdFromUrl)
  }, [searchParams])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  async function uploadToImgbb(file: File): Promise<string> {
    const apiKey = "f874dd9a211c74267a679bd61a45e1ac"
    const formData = new FormData()
    formData.append("image", file)
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: formData,
    })
    const data = await response.json()
    if (data.success) {
      return data.data.url
    } else {
      throw new Error("Image upload to imgbb failed")
    }
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      try {
        let imageUrl = ""
        if (imageFile) {
          imageUrl = await uploadToImgbb(imageFile)
        }
        await addDoc(collection(db, "chats", selectedChat, "messages"), {
          chatId: selectedChat,
          senderId: user.uid,
          text: newMessage,
          imageUrl,
          timestamp: serverTimestamp(),
        })
        setNewMessage("")
        setImageFile(null)
        setImagePreview(null)
      } catch (err) {
        setAlert({ open: true, message: "Failed to upload image. Please try again." })
      }
    }
  }

  const handleSendMessage = async () => {
    if ((!newMessage.trim() && !imageFile) || !selectedChat || !user) return
    let imageUrl = ""
    try {
      if (imageFile) {
        imageUrl = await uploadToImgbb(imageFile)
      }
    } catch (err) {
      alert("Failed to upload image. Please try again.")
      return
    }
    await addDoc(collection(db, "chats", selectedChat, "messages"), {
      chatId: selectedChat,
      senderId: user.uid,
      text: newMessage,
      imageUrl,
      timestamp: serverTimestamp(),
    })
    setNewMessage("")
    setImageFile(null)
    setImagePreview(null)
  }

  const handleDeleteMessage = async (msgId: string) => {
    if (!selectedChat) return
    await deleteDoc(firestoreDoc(db, "chats", selectedChat, "messages", msgId))
  }

  const handleDeleteConversation = async () => {
    if (!selectedChat) return;
    if (!confirm("Are you sure you want to delete this conversation? This cannot be undone.")) return;
    // Delete all messages in the chat
    const messagesRef = collection(db, "chats", selectedChat, "messages");
    const messagesSnapshot = await getDocs(messagesRef);
    const batch = (await import("firebase/firestore")).writeBatch(db);
    messagesSnapshot.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
    // Delete the chat document
    await deleteDoc(firestoreDoc(db, "chats", selectedChat));
    setSelectedChat(null);
  };

  if (!user) return <div className="pt-8 text-center">You must be logged in to view chats.</div>;

  return (
    <div className="space-y-6 pt-4 pb-16 h-[calc(100vh-8rem)]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Messages</h1>
      </div>

      {selectedChat ? (
        <div className="flex flex-col h-[calc(100%-4rem)]">
          <div className="border-b pb-2 mb-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => setSelectedChat(null)}>
                Back
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarFallback>{chats.find((c) => c.id === selectedChat)?.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{chats.find((c) => c.id === selectedChat)?.name}</span>
              <Button
                size="icon"
                variant="ghost"
                className="ml-2 mt-2"
                onClick={handleDeleteConversation}
                title="Delete conversation"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => {
              const isCurrentUser = message.senderId === user.uid
              return (
                <div key={message.id} className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-lg ${
                      isCurrentUser
                        ? "bg-blue-500 text-white rounded-br-none"
                        : "bg-gray-100 dark:bg-gray-800 rounded-bl-none"
                    }`}
                  >
                    {message.text && <div>{message.text}</div>}
                    {message.imageUrl && (
                      <img
                        src={message.imageUrl}
                        alt="chat-img"
                        className="mt-2 max-w-xs rounded cursor-pointer"
                        onClick={() => setPreviewImage(message.imageUrl || null)}
                      />
                    )}
                    {isCurrentUser && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="ml-2 mt-2"
                        onClick={() => handleDeleteMessage(message.id)}
                        title="Delete message"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              )
            })}
            <div ref={messagesEndRef} />
          </div>

          <div className="mt-auto">
            <div className="flex gap-2 items-center">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage()
                  }
                }}
              />
              <input
                type="file"
                accept="image/*"
                id="chat-image-upload"
                className="hidden"
                onChange={handleImageChange}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => document.getElementById("chat-image-upload")?.click()}
                title="Attach image"
              >
                📷
              </Button>
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            {imagePreview && (
              <div className="mt-2 flex items-center gap-2">
                <img src={imagePreview} alt="preview" className="max-h-24 rounded" />
                <Button type="button" size="sm" variant="destructive" onClick={() => { setImageFile(null); setImagePreview(null); }}>
                  Remove
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {chats.length > 0 ? (
            chats.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setSelectedChat(chat.id)}
              >
                <Avatar>
                  <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{chat.name}</div>
                  <div className="text-sm text-muted-foreground">{chat.lastMessage}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">No conversations yet</div>
          )}
        </div>
      )}

      {previewImage && (
        <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <img src={previewImage} alt="preview" className="max-h-[80vh] max-w-[90vw] rounded shadow-lg" />
            <Button
              type="button"
              variant="destructive"
              className="absolute top-4 right-4"
              onClick={() => setPreviewImage(null)}
            >
              Close
            </Button>
          </div>
        </Dialog>
      )}

      <Dialog open={alert.open} onOpenChange={open => setAlert(prev => ({ ...prev, open }))}>
        <DialogContent>
          <DialogTitle>Notice</DialogTitle>
          <p>{alert.message}</p>
        </DialogContent>
      </Dialog>
    </div>
  )
}
