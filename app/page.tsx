"use client"

import { Tabs, TabsContent } from "@/components/ui/tabs"
import { HomeScreen } from "@/components/home-screen"
import { BrowseItems } from "@/components/browse-items"
import { ReportItem } from "@/components/report-item"
import { MyItems } from "@/components/my-items"
import { ChatScreen } from "@/components/chat-screen"
import { ProfileScreen } from "@/components/profile-screen"
import { MobileNavbar } from "@/components/mobile-navbar"
import { useAuth } from "@/hooks/use-auth"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, Suspense } from "react"

function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
      <img src="/logo.png" alt="App Logo" className="w-24 h-24 mb-6" />
      <div className="text-2xl font-bold mb-2">Campus Lost & Found</div>
      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mt-4">
        <div className="h-2 bg-blue-500 rounded-full animate-pulse w-1/2" style={{ animation: 'loadingBar 1.2s infinite alternate' }} />
      </div>
      <style>{`
        @keyframes loadingBar {
          0% { width: 20%; }
          100% { width: 100%; }
        }
      `}</style>
      <div className="mt-4 text-muted-foreground">Loading...</div>
    </div>
  );
}

function HomeWithSearchParams({ user, loading, router }: { user: any, loading: boolean, router: any }) {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "home";
  const [tab, setTab] = useState(initialTab);

  useEffect(() => {
    // Update the URL when the tab changes
    router.replace(`/?tab=${tab}`, { scroll: false });
  }, [tab, router]);

  if (loading) return null;
  if (!user) return <ProfileScreen />;

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container flex flex-col max-w-md mx-auto pb-16">
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsContent value="home">
            <HomeScreen setTab={setTab} />
          </TabsContent>
          <TabsContent value="browse">
            <BrowseItems />
          </TabsContent>
          <TabsContent value="report">
            <ReportItem />
          </TabsContent>
          <TabsContent value="myitems">
            <MyItems />
          </TabsContent>
          <TabsContent value="chat">
            <ChatScreen />
          </TabsContent>
          <TabsContent value="profile">
            <ProfileScreen />
          </TabsContent>
          <MobileNavbar />
        </Tabs>
      </div>
    </main>
  );
}

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  return (
    <Suspense fallback={<SplashScreen />}>
      <HomeWithSearchParams user={user} loading={loading} router={router} />
    </Suspense>
  );
}
