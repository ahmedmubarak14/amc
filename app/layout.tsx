import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AM Concierge | The Art of Movement",
  description: "Private concierge and lifestyle services, personally curated worldwide.",
  icons: {
    icon: "/images/am-logo.png",
    shortcut: "/images/am-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
