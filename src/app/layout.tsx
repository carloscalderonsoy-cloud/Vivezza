import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vivezza Medical Center — Tijuana, B.C.',
  description:
    'Centro médico de excelencia con 9 especialidades, instalaciones de vanguardia y atención integral. Tijuana, B.C..',
  keywords: [
    'Vivezza', 'Medical Center', 'Tijuana', 'Baja California',
    'cirugía plástica', 'bariatría', 'medspa', 'oncología', 'urología',
    'JCI acreditado', 'cirugía robótica',
  ],
  openGraph: {
    title: 'Vivezza Medical Center — Tu salud, nuestra prioridad',
    description: '9 especialidades. Instalaciones modernas. Atención integral. Tijuana, B.C..',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={manrope.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
