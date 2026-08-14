import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://am-concierge-worldwide.ahmedmubaraks.chatgpt.site"),
  title: "AM Concierge | The Art of Movement",
  description: "Private concierge and lifestyle support for seamless travel, stays and personal arrangements worldwide.",
  openGraph: {
    title: "AM Concierge | The Art of Movement",
    description: "Private concierge, wherever you are.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AM Concierge - Private concierge, wherever you are" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AM Concierge | The Art of Movement",
    description: "Private concierge, wherever you are.",
    images: ["/og.png"],
  },
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
