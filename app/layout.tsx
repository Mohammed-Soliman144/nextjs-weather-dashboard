import type { Metadata } from "next";
import { Inter, Almarai } from "next/font/google";
import "./globals.css";


/* Main font => Inter import from next.js */
const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

/* Almarai font for arabic weight is mandatory property */
const almaraiFont = Almarai({
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
  subsets: ["arabic"],
})

export const metadata: Metadata = {
  title: "Next.js Weather Dashboard",
  description: "Weather Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} ${almaraiFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
