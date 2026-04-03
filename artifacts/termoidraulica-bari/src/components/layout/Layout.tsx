import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1 pt-[72px] md:pt-[84px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
