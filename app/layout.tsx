import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './providers'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'Al Marina Holding - Strategic Investments for the UAE',
  description: 'Al Marina Holding is an integrated asset owner and investment manager driving long-term economic growth in Abu Dhabi through strategic investments in real estate, hospitality, retail, construction, and transportation.',
  applicationName: 'Al Marina Holding',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Al Marina Holding - Strategic Investments for the UAE',
    description: 'Al Marina Holding is an integrated asset owner and investment manager driving long-term economic growth in Abu Dhabi.',
    locale: 'en_AE',
    alternateLocale: ['ar_AE'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
