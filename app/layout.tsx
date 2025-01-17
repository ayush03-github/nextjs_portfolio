import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/component/navigation/header";
import Footer from "@/app/component/navigation/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
        {/* <BackToTop /> */}
      </body>
    </html>
  );
}
