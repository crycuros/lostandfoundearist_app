"use client"

import { Home, Search, PlusCircle, Bookmark, MessageCircle, LogOut, User } from "lucide-react"
import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"

export function MobileNavbar() {
  const pathname = usePathname()
  const { signOut } = useAuth()

  return (
    <TabsList className="fixed bottom-0 left-0 right-0 h-16 grid grid-cols-7 bg-background border-t border-border rounded-none gap-0 p-0 z-50">
      <TabsTrigger
        value="home"
        className="flex flex-col items-center justify-center h-full rounded-none data-[state=active]:bg-muted"
      >
        <Home className="h-5 w-5" />
        <span className="text-xs mt-1">Home</span>
      </TabsTrigger>
      <TabsTrigger
        value="browse"
        className="flex flex-col items-center justify-center h-full rounded-none data-[state=active]:bg-muted"
      >
        <Search className="h-5 w-5" />
        <span className="text-xs mt-1">Browse</span>
      </TabsTrigger>
      <TabsTrigger
        value="report"
        className="flex flex-col items-center justify-center h-full rounded-none data-[state=active]:bg-muted"
      >
        <PlusCircle className="h-5 w-5" />
        <span className="text-xs mt-1">Report</span>
      </TabsTrigger>
      <TabsTrigger
        value="myitems"
        className="flex flex-col items-center justify-center h-full rounded-none data-[state=active]:bg-muted"
      >
        <Bookmark className="h-5 w-5" />
        <span className="text-xs mt-1">My Items</span>
      </TabsTrigger>
      <TabsTrigger
        value="chat"
        className="flex flex-col items-center justify-center h-full rounded-none data-[state=active]:bg-muted"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-xs mt-1">Chat</span>
      </TabsTrigger>
      <TabsTrigger
        value="profile"
        className="flex flex-col items-center justify-center h-full rounded-none data-[state=active]:bg-muted"
      >
        <User className="h-5 w-5" />
        <span className="text-xs mt-1">Profile</span>
      </TabsTrigger>
      <TabsTrigger
        value="logout"
        className="flex flex-col items-center justify-center h-full rounded-none data-[state=active]:bg-muted"
        onClick={signOut}
      >
        <LogOut className="h-5 w-5" />
        <span className="text-xs mt-1">Logout</span>
      </TabsTrigger>
    </TabsList>
  )
}
