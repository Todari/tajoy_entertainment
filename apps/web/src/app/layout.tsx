import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Tajoy Ent",
  description: "Tajoy Ent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
