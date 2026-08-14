import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://am-concierge-worldwide.ahmedmubaraks.chatgpt.site"),
  title: "AM Concierge | The Art of Movement",
  description: "From the everyday to the exceptional, handled personally, discreetly and worldwide.",
  openGraph: {
    title: "AM Concierge | The Art of Movement",
    description: "Everything, handled. Personally, discreetly and worldwide.",
    type: "website",
    images: [{ url: "/og-v4.png", width: 1200, height: 630, alt: "AM Concierge - Everything, handled" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AM Concierge | The Art of Movement",
    description: "Everything, handled. Personally, discreetly and worldwide.",
    images: ["/og-v4.png"],
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
