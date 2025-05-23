"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ItemCard } from "@/components/item-card"
import { mockItems } from "@/lib/mock-data"
import type { Item } from "@/lib/types"
import { db } from "@/lib/firebase"
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"
import { Info } from "lucide-react"

export function HomeScreen({ setTab }: { setTab: (tab: string) => void }) {
  const [recentItems, setRecentItems] = useState<Item[]>([])
  const [aboutOpen, setAboutOpen] = useState(false)

  useEffect(() => {
    const fetchRecentItems = async () => {
      const q = query(collection(db, "items"), orderBy("createdAt", "desc"), limit(5));
      const querySnapshot = await getDocs(q);
      setRecentItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Item)));
    };
    fetchRecentItems();
  }, []);

  return (
    <div className="space-y-6 pt-4 pb-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Campus Lost & Found</h1>
        <Button variant="ghost" size="icon" onClick={() => setAboutOpen(true)} title="About">
          <Info className="h-5 w-5" />
        </Button>
      </div>

      <Card className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">Lost something?</h2>
          <p className="mb-4">Report it or browse found items</p>
          <div className="flex gap-3">
            <Button variant="secondary" className="w-full" onClick={() => setTab("browse")}>
              Browse Items
            </Button>
            <Button variant="secondary" className="w-full" onClick={() => setTab("report")}>
              Report Item
            </Button>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recently Reported</h2>
        <Tabs defaultValue="lost" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="lost">Lost Items</TabsTrigger>
            <TabsTrigger value="found">Found Items</TabsTrigger>
          </TabsList>
          <TabsContent value="lost" className="space-y-4">
            {recentItems
              .filter((item) => item.type === "lost")
              .map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
          </TabsContent>
          <TabsContent value="found" className="space-y-4">
            {recentItems
              .filter((item) => item.type === "found")
              .map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <DialogContent className="max-w-sm w-full animate-fade-in">
          <DialogTitle>About This App</DialogTitle>
          <p className="mb-4 text-sm text-muted-foreground">
            Campus Lost & Found helps students report, find, and recover lost items on campus. Features include item reporting, browsing, chat, image uploads, and more. Built with Next.js, Firebase, and a mobile-friendly design.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  )
}
