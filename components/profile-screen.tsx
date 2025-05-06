"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { LogOut } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { db } from "@/lib/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  studentId: z.string().min(1, {
    message: "Please enter your student ID.",
  }),
})

export function ProfileScreen() {
  const { user, loading, error, signIn, signUp, signOut } = useAuth()
  const [isSignUp, setIsSignUp] = useState(false)
  const [authEmail, setAuthEmail] = useState("")
  const [authPassword, setAuthPassword] = useState("")
  const [profileLocked, setProfileLocked] = useState(false)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null)
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(null)

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "John Doe",
      email: user?.email || "",
      studentId: "S12345678",
    },
  })

  // Load profile from Firestore
  useEffect(() => {
    if (!user) return;
    const fetchProfile = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        form.reset({
          name: data.name || "",
          email: user.email || "",
          studentId: data.studentId || "",
        });
        setProfileImage(data.profilePicture || null);
        if (data.name && data.studentId) setProfileLocked(true);
      } else {
        form.reset({
          name: "",
          email: user.email || "",
          studentId: "",
        });
        setProfileImage(null);
        setProfileLocked(false);
      }
    };
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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

  async function handleProfileImageUpload() {
    if (!user || !profileImageFile) return;
    try {
      const url = await uploadToImgbb(profileImageFile);
      await setDoc(doc(db, "users", user.uid), { profilePicture: url }, { merge: true });
      setProfileImage(url);
      setProfileImageFile(null);
      setProfileImagePreview(null);
      alert("Profile picture updated!");
    } catch (err) {
      alert("Failed to upload profile picture.");
    }
  }

  async function onSubmit(values: z.infer<typeof profileFormSchema>) {
    if (!user) return;
    await setDoc(doc(db, "users", user.uid), values);
    setProfileLocked(true);
    alert("Profile updated successfully!");
  }

  const name = form.watch("name") || "John Doe";
  const initials = name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);

  if (loading) {
    return <div className="pt-8 text-center">Loading...</div>
  }

  if (!user) {
    return (
      <div className="space-y-6 pt-4 pb-16">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{isSignUp ? "Sign Up" : "Sign In"}</CardTitle>
            <CardDescription>
              {isSignUp
                ? "Create an account to report and retrieve lost items."
                : "Sign in to access your lost and found items."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={authEmail}
                onChange={e => setAuthEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={authPassword}
                onChange={e => setAuthPassword(e.target.value)}
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button
              className="w-full"
              onClick={async () => {
                if (isSignUp) {
                  await signUp(authEmail, authPassword)
                } else {
                  await signIn(authEmail, authPassword)
                }
              }}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            <Button
              variant="link"
              className="w-full text-xs"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6 pt-4 pb-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>

      <div className="flex flex-col items-center justify-center mb-6">
        <Avatar className="h-24 w-24 mb-4">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover"
            />
          ) : (
            <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
          )}
        </Avatar>
        <input
          type="file"
          accept="image/*"
          id="profile-image-upload"
          className="hidden"
          onChange={handleProfileImageChange}
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => document.getElementById("profile-image-upload")?.click()}
          className="mb-2"
        >
          {profileImage ? "Change Profile Picture" : "Upload Profile Picture"}
        </Button>
        {profileImagePreview && (
          <div className="flex flex-col items-center gap-2 mb-2">
            <img src={profileImagePreview} alt="preview" className="h-24 w-24 rounded-full object-cover" />
            <Button type="button" size="sm" onClick={handleProfileImageUpload}>
              Save Profile Picture
            </Button>
            <Button type="button" size="sm" variant="destructive" onClick={() => { setProfileImageFile(null); setProfileImagePreview(null); }}>
              Cancel
            </Button>
          </div>
        )}
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-muted-foreground">Student</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} disabled={profileLocked} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="studentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student ID</FormLabel>
                <FormControl>
                  <Input {...field} disabled={profileLocked} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </Form>

      <div className="pt-6 border-t">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          onClick={signOut}
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
