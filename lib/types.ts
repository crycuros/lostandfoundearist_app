export interface Item {
  id: string
  type: "lost" | "found"
  title: string
  description: string
  category: string
  location: string
  date: string
  imageUrl?: string
  userId: string
  status: "open" | "closed"
  createdAt: string
}

export interface Chat {
  id: string
  name: string
  lastMessage: string
  lastMessageTime: string
  participants: string[]
}

export interface Message {
  id: string
  chatId: string
  senderId: string
  text: string
  timestamp: string
  imageUrl?: string
}

export interface User {
  id: string
  name: string
  email: string
  studentId: string
  profilePicture?: string
}
