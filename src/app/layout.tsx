import type { Metadata } from 'next'
import { DM_Sans, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '700'],
})

const display = DM_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
})

const logo = Montserrat({
  subsets: ['latin'],
  variable: '--font-logo',
  weight: ['700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'MPV Inmobiliaria | Agencia inmobiliaria en Guadalajara',
  description: 'Compra, venta y alquiler de propiedades en Guadalajara y provincia con asesoramiento cercano y profesional.',
  keywords: 'mpv inmobiliaria, inmobiliaria guadalajara, agencia inmobiliaria guadalajara, compra vivienda, venta vivienda, alquiler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable} ${logo.variable}`}>
      <body className="bg-white text-stone-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
