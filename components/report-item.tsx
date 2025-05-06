"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Upload } from "lucide-react"
import { db, storage } from "@/lib/firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useAuth } from "@/hooks/use-auth"

const formSchema = z.object({
  type: z.enum(["lost", "found"], {
    required_error: "Please select if the item is lost or found",
  }),
  title: z.string().min(3, {
    message: "Title must be at least 3 characters",
  }),
  category: z.string({
    required_error: "Please select a category",
  }),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters",
  }),
  date: z.string().min(1, {
    message: "Please select a date",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters",
  }),
})

export function ReportItem() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const router = useRouter()
  const { user } = useAuth()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "lost",
      title: "",
      category: "",
      location: "",
      date: new Date().toISOString().split("T")[0],
      description: "",
    },
  })

  async function uploadToImgbb(file: File): Promise<string> {
    const apiKey = "f874dd9a211c74267a679bd61a45e1ac";
    const formData = new FormData();
    formData.append("image", file);
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      return data.data.url;
    } else {
      throw new Error("Image upload to imgbb failed");
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) {
      alert("You must be logged in to report an item.")
      return
    }
    let imageUrl = ""
    try {
      if (imageFile) {
        imageUrl = await uploadToImgbb(imageFile)
      }
    } catch (err) {
      console.error("Image upload error:", err)
      alert("Failed to upload image. Please try again.")
      return
    }
    try {
      await addDoc(collection(db, "items"), {
        ...values,
        imageUrl,
        userId: user.uid,
        status: "open",
        createdAt: Timestamp.now(),
      })
      alert("Item reported successfully!")
      form.reset()
      setImagePreview(null)
      setImageFile(null)
    } catch (err) {
      console.error("Firestore add error:", err)
      alert("Failed to report item. Please try again.")
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6 pt-4 pb-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Report an Item</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="lost">Lost Item</SelectItem>
                    <SelectItem value="found">Found Item</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Blue Backpack" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Library" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Provide details about the item..." className="min-h-[100px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <label className="block text-sm font-medium mb-2">Item Photo</label>
            <div className="flex items-center gap-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center w-full">
                {imagePreview ? (
                  <div className="relative w-full">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setImagePreview(null)}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <>
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Upload a photo of the item</p>
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="item-photo"
                      onChange={handleImageChange}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("item-photo")?.click()}
                    >
                      Select Image
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Submit Report
          </Button>
        </form>
      </Form>
    </div>
  )
}
