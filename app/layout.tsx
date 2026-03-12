import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.auronex.com"),
  title: "Auronex",
  description:
    "Auronex delivers cutting-edge IT services, software solutions, and scalable technology systems for modern businesses.",
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  openGraph: {
    title: "Auronex",
    description:
      "Auronex delivers cutting-edge IT services, software solutions, and scalable technology systems for modern businesses.",
    url: "https://www.auronex.com",
    siteName: "Auronex",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Auronex IT Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auronex",
    description:
      "Auronex delivers cutting-edge IT services, software solutions, and scalable technology systems for modern businesses.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} bg-[var(--color-bg)] font-sans text-[var(--color-text)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
