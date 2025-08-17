import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StackDAG - Build, Share, and Discover DAGs for Everything",
  description: "Create interactive directed acyclic graphs (DAGs) for full-stack websites, mobile apps, automation, education, research, and prototyping. Build visual workflows, share templates, and discover community-created DAGs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
