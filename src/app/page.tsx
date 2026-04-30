'use client'

import { useState } from 'react'
import { SPECIALTIES, STRINGS, type Lang } from '@/data'
import NavBar from '@/components/NavBar'
import MarqueeBar from '@/components/MarqueeBar'
import Hero from '@/components/Hero'
import Showcase from '@/components/Showcase'
import Footer from '@/components/Footer'

export default function Page() {
  const [lang, setLang] = useState<Lang>('es')
  const [activeIdx, setActiveIdx] = useState(0)

  const sp = SPECIALTIES[activeIdx]
  const accent = sp.accent
  const accentSoft = sp.accentSoft
  const S = STRINGS[lang]

  return (
    <div className="relative min-h-screen paper-texture">
      <NavBar lang={lang} setLang={setLang} S={S} accent={accent} />

      <Hero lang={lang} accent={accent} accentSoft={accentSoft} S={S} />

      <MarqueeBar lang={lang} />

      <Showcase
        lang={lang}
        activeIdx={activeIdx}
        setActiveIdx={setActiveIdx}
        S={S}
      />

      <Footer lang={lang} accent={accent} />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  )
}
