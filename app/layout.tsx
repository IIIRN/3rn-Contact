import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css";

// Configure Sarabun with a CSS Variable
const sarabun = Sarabun({ 
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: '--font-sarabun', // Add CSS variable
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Corporate | Data Management System",
  description: "Enterprise Customer and Employee Data Management System",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${sarabun.variable} font-sans bg-brand-gray text-brand-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
