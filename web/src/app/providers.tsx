"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChatWidget = dynamic(() => import("@/components/ChatWidget"), { ssr: false });

export default function Providers({ children }: { children: React.ReactNode }) {
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowChat(true), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <>
      {children}
      {showChat && <ChatWidget />}
    </>
  );
}




