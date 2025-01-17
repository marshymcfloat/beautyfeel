import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Landing/Footer";
import TanstackProvider from "@/components/Provider/TanstackProvider";
import Login from "@/components/Landing/Login";
export const metadata: Metadata = {
  title: "BeautyFeel",
  description: "your beauty, our passion. come to BeautyFeel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-y-hidden">
        <Login />
        <TanstackProvider>{children}</TanstackProvider>
        <Footer />
      </body>
    </html>
  );
}
