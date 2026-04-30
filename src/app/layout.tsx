import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Instrument_Serif } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vivezza Medical Center — Punta del Este, Uruguay',
  description:
    'Un ecosistema médico de vanguardia donde la tecnología quirúrgica más avanzada se encuentra con la calidez de la hospitalidad de lujo. Nueve especialidades, un solo estándar.',
  keywords: [
    'Vivezza', 'Medical Center', 'Punta del Este', 'Uruguay',
    'cirugía plástica', 'bariatría', 'medspa', 'oncología', 'urología',
  ],
  openGraph: {
    title: 'Vivezza Medical Center',
    description: 'Boutique medical care. Nine specialties. One standard of excellence.',
    locale: 'es_UY',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${instrumentSerif.variable} ${GeistSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
