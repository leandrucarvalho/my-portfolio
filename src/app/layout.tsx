import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "./_components/footer/footer";
import { Header } from "./_components/header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const firaSans = localFont({
  src: "./fonts/FiraCode-Medium.ttf",
  variable: "--font-fira-sans",
  weight: "100 900",
});
const firaMono = localFont({
  src: "./fonts/FiraCode-Medium.ttf",
  variable: "--font-fira-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Leandro Carvalho",
  description:
    "Portfólio de Leandro Carvalho, desenvolvedor full stack focado em tecnologias web como React, Next.js, Node.js e Tailwind, com experiência em criação de interfaces completas, modernas e responsivas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${firaSans.variable} ${firaMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
