"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ItemCard } from "@/components/item-card"
import { mockItems } from "@/lib/mock-data"
import type { Item } from "@/lib/types"
import { Search } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, getDocs } from "firebase/firestore"

export function BrowseItems() {
  const [items, setItems] = useState<Item[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true)
      const querySnapshot = await getDocs(collection(db, "items"))
      setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Item)))
      setLoading(false)
    }
    fetchItems()
  }, [])

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    const matchesType = typeFilter === "all" || item.type === typeFilter

    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <div className="space-y-6 pt-4 pb-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Browse Items</h1>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Item Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="lost">Lost Items</SelectItem>
              <SelectItem value="found">Found Items</SelectItem>
            </SelectContent>
          </Select>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="books">Books</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4 min-h-[300px]">
        {loading ? (
          <div className="flex flex-col gap-4 animate-pulse">
            {[1,2,3].map((i) => (
              <div key={i} className="h-32 bg-gray-200 dark:bg-gray-800 rounded-lg w-full" />
            ))}
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="space-y-4 animate-fade-in-scroll">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  animation: `fadeInUp 0.5s ease ${(idx * 0.07).toFixed(2)}s both`
                }}
              >
                <ItemCard item={item} />
              </div>
            ))}
            <style>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-fade-in-scroll > div {
                opacity: 0;
                animation-name: fadeInUp;
                animation-duration: 0.5s;
                animation-fill-mode: both;
              }
            `}</style>
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">No items found matching your criteria</div>
        )}
      </div>
    </div>
  )
}
