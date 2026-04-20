import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Funnel Architect | Marketing ist kein Talent. Es ist ein System.",
  description:
    "Funnel Architect verbindet 100+ bewährte Marketing-Frameworks mit AI und macht sie für dein Business anwendbar. Kein Kurs. Kein Freelancer. Ein geführter Prozess von der Strategie bis zum fertigen Text.",
  openGraph: {
    title: "Funnel Architect | Dein Marketing braucht kein Guru. Es braucht ein System.",
    description:
      "100+ bewährte Marketing-Frameworks. Ein System. Von der Strategie bis zum fertigen Text.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${satoshi.variable} ${inter.variable} ${jetbrainsMono.variable} light antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground font-body selection:bg-indigo-500/30">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
