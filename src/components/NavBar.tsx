'use client'

import { type Lang, type StringDict } from '@/data'

interface Props {
  lang: Lang
  setLang: (l: Lang) => void
  S: StringDict
  accent: string
}

export default function NavBar({ lang, setLang, S, accent }: Props) {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 section-pad pt-6">
      {/* All items grouped left — aligned with the hero content column */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div
            className="h-9 w-9 rounded-full grid place-items-center text-white font-display italic text-[18px]"
            style={{ background: '#15171A' }}
          >
            v
          </div>
          <div className="font-display text-[20px] tracking-tight text-ink leading-none">
            Vivezza
            <span className="block text-[9.5px] tracking-[0.22em] uppercase text-ink/55 mt-0.5 font-sans not-italic">
              {lang === 'es' ? 'CENTRO QUIRÚRGICO' : 'SURGICAL CENTER'}
            </span>
          </div>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] text-ink/70">
          <a href="#filosofia" className="hover:text-ink transition">{S.navAbout}</a>
          <a href="#especialidades" className="hover:text-ink transition">{S.navSpecialties}</a>
          <a href="#medicos" className="hover:text-ink transition">{S.navDoctors}</a>
          <a href="#contacto" className="hover:text-ink transition">{S.navContact}</a>
        </nav>

        {/* Language toggle */}
        <div className="inline-flex items-center rounded-full border border-ink/10 bg-white/60 backdrop-blur p-0.5 text-[11.5px] font-medium shrink-0">
          <button
            onClick={() => setLang('es')}
            className={`px-2.5 py-1 rounded-full transition-colors ${lang === 'es' ? 'text-white' : 'text-ink/60'}`}
            style={lang === 'es' ? { backgroundColor: accent } : {}}
          >
            ES
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-2.5 py-1 rounded-full transition-colors ${lang === 'en' ? 'text-white' : 'text-ink/60'}`}
            style={lang === 'en' ? { backgroundColor: accent } : {}}
          >
            EN
          </button>
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ink text-paper px-4 py-2 text-[12.5px] shrink-0"
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
          {S.navBook}
        </a>
      </div>
    </header>
  )
}
