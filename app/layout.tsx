import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import AuthSession from "./AuthSession";
import SideNavbar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import UiProvider from "./uiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ABGame",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UiProvider>
          <AuthSession>
            <SideNavbar />
            {children}
          </AuthSession>
        </UiProvider>
      </body>
    </html>
  );
}
