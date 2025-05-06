"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ItemCard } from "@/components/item-card"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import type { Item } from "@/lib/types"
import { useAuth } from "@/hooks/use-auth"

export function MyItems() {
  const { user } = useAuth()
  const [myItems, setMyItems] = useState<Item[]>([])

  useEffect(() => {
    if (!user) {
      setMyItems([])
      return
    }
    const fetchMyItems = async () => {
      const q = query(collection(db, "items"), where("userId", "==", user.uid))
      const querySnapshot = await getDocs(q)
      setMyItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Item)))
    }
    fetchMyItems()
  }, [user])

  return (
    <div className="space-y-6 pt-4 pb-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Items</h1>
      </div>

      <Tabs defaultValue="reported" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="reported">Reported</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>
        <TabsContent value="reported" className="space-y-4">
          {myItems.length > 0 ? (
            myItems.map((item) => <ItemCard key={item.id} item={item} isOwner={true} />)
          ) : (
            <div className="text-center py-8 text-muted-foreground">You haven't reported any items yet</div>
          )}
        </TabsContent>
        <TabsContent value="saved" className="space-y-4">
          <div className="text-center py-8 text-muted-foreground">You haven't saved any items yet</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
