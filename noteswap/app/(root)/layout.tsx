import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import LeftSidebar from "@/components/shared/Leftsidebar";
import Topbar from "@/components/shared/Topbar";
import RightSidebar from "@/components/shared/Rightsidebar";
import Bottombar from "@/components/shared/Bottombar";

export const metadata = {
  title: "noteswap",
  description: "An app note exchange book",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />

          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4x1">{children}</div>
            </section>
            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
