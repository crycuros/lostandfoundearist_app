"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Item } from "@/lib/types"
import { MapPin, Calendar, MessageSquare, Bookmark, Edit, Trash2 } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { useAuth } from "@/hooks/use-auth"
import { db } from "@/lib/firebase"
import { collection, query, where, getDocs, addDoc, serverTimestamp, doc, deleteDoc, updateDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

interface ItemCardProps {
  item: Item
  isOwner?: boolean
}

export function ItemCard({ item, isOwner = false }: ItemCardProps) {
  const [isSaved, setIsSaved] = useState(false)
  const { user } = useAuth()
  const router = useRouter()
  const [editing, setEditing] = useState(false);
  const [editValues, setEditValues] = useState({
    title: item.title,
    description: item.description,
    category: item.category,
    location: item.location,
    date: item.date,
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [alert, setAlert] = useState<{ open: boolean, message: string }>({ open: false, message: "" })

  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  const handleContact = async () => {
    if (!user) {
      setAlert({ open: true, message: "You must be logged in to start a chat." })
      return
    }
    if (user.uid === item.userId) {
      setAlert({ open: true, message: "You cannot chat with yourself about your own item." })
      return
    }
    // Check if a chat already exists between these users
    const participants = [user.uid, item.userId].sort()
    const q = query(collection(db, "chats"), where("participants", "==", participants))
    const querySnapshot = await getDocs(q)
    let chatId = ""
    if (!querySnapshot.empty) {
      chatId = querySnapshot.docs[0].id
    } else {
      // Create a new chat
      const chatDoc = await addDoc(collection(db, "chats"), {
        participants,
        name: item.title,
        lastMessage: "",
        lastMessageTime: serverTimestamp(),
      })
      chatId = chatDoc.id
    }
    // Navigate to chat screen (optionally, you can set selectedChat in a global state)
    router.push("/?tab=chat&chatId=" + chatId)
  }

  const handleDelete = async () => {
    if (!user || user.uid !== item.userId) {
      setAlert({ open: true, message: "You can only delete your own items." })
      return;
    }
    if (confirm("Are you sure you want to delete this item?")) {
      await deleteDoc(doc(db, "items", item.id));
      setAlert({ open: true, message: "Item deleted!" })
      window.location.reload();
    }
  }

  const handleEdit = () => {
    setEditing(true);
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateDoc(doc(db, "items", item.id), editValues);
    setAlert({ open: true, message: "Item updated!" })
    setEditing(false);
    window.location.reload();
  };

  return editing ? (
    <Card>
      <CardContent className="p-4">
        <form onSubmit={handleEditSubmit} className="space-y-3">
          <label className="block text-sm font-medium">Item Title</label>
          <input name="title" value={editValues.title} onChange={handleEditChange} className="w-full border p-2 rounded" placeholder="e.g. Blue Backpack" required />
          <label className="block text-sm font-medium">Description</label>
          <textarea name="description" value={editValues.description} onChange={handleEditChange} className="w-full border p-2 rounded" placeholder="Provide details about the item..." required />
          <label className="block text-sm font-medium">Category</label>
          <input name="category" value={editValues.category} onChange={handleEditChange} className="w-full border p-2 rounded" placeholder="e.g. Electronics, Books, Accessories" required />
          <label className="block text-sm font-medium">Location</label>
          <input name="location" value={editValues.location} onChange={handleEditChange} className="w-full border p-2 rounded" placeholder="e.g. Library, Science Building" required />
          <label className="block text-sm font-medium">Date</label>
          <input name="date" type="date" value={editValues.date} onChange={handleEditChange} className="w-full border p-2 rounded" required />
          <div className="flex gap-2 mt-2">
            <Button type="submit" size="sm">Save</Button>
            <Button type="button" size="sm" variant="outline" onClick={() => setEditing(false)}>Cancel</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  ) : (
    <Card>
      <CardContent className="p-0">
        {item.imageUrl ? (
          <div className="relative h-48 w-full">
            <img
              src={item.imageUrl || "/placeholder.svg"}
              alt={item.title}
              className="h-full w-full object-cover rounded-t-lg cursor-pointer"
              onClick={() => setPreviewImage(item.imageUrl || null)}
            />
            <Badge className={`absolute top-2 right-2 ${item.type === "lost" ? "bg-red-500" : "bg-green-500"}`}>
              {item.type === "lost" ? "Lost" : "Found"}
            </Badge>
          </div>
        ) : (
          <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center rounded-t-lg">
            <p className="text-gray-500">No image available</p>
            <Badge className={`absolute top-2 right-2 ${item.type === "lost" ? "bg-red-500" : "bg-green-500"}`}>
              {item.type === "lost" ? "Lost" : "Found"}
            </Badge>
          </div>
        )}

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <Badge variant="outline">{item.category}</Badge>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{item.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{formatDate(item.date)}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-4 py-3 border-t flex justify-between">
        {isOwner ? (
          <>
            <Button variant="outline" size="sm" onClick={handleEdit}>
              <Edit className="h-4 w-4 mr-1" /> Edit
            </Button>
            <Button variant="outline" size="sm" onClick={handleDelete}>
              <Trash2 className="h-4 w-4 mr-1" /> Delete
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" size="sm" onClick={handleContact}>
              <MessageSquare className="h-4 w-4 mr-1" /> Contact
            </Button>
            <Button variant={isSaved ? "default" : "outline"} size="sm" onClick={handleSave}>
              <Bookmark className="h-4 w-4 mr-1" />
              {isSaved ? "Saved" : "Save"}
            </Button>
          </>
        )}
      </CardFooter>

      {previewImage && (
        <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <img src={previewImage} alt="preview" className="max-h-[80vh] max-w-[90vw] rounded shadow-lg" />
          </div>
        </Dialog>
      )}
      <Dialog open={alert.open} onOpenChange={open => setAlert(prev => ({ ...prev, open }))}>
        <DialogContent>
          <DialogTitle>Notice</DialogTitle>
          <p>{alert.message}</p>
        </DialogContent>
      </Dialog>
    </Card>
  )
}
