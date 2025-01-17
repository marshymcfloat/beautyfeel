import type { Metadata } from "next";
import "@/app/(marketing)/globals.css";
import TanstackProvider from "@/components/Provider/TanstackProvider";
import ReduxProvider from "@/components/Provider/ReduxProvider";
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
      <body className="overflow-y-hidden bg-customOffWhite">
        <ReduxProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
