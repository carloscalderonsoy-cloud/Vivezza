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
    <header className="absolute top-0 left-0 right-0 z-30 section-pad pt-5">
      <div className="flex items-center gap-8 bg-white/80 backdrop-blur border border-ink/8 rounded-2xl px-5 py-3 shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div
            className="h-9 w-9 rounded-xl grid place-items-center text-white text-[15px] font-bold"
            style={{ background: '#1B5FBE' }}
          >
            V
          </div>
          <div className="leading-none">
            <div className="text-[17px] font-bold tracking-tight text-ink">Vivezza</div>
            <div className="text-[9px] font-bold tracking-[0.22em] uppercase text-clinic/70 mt-0.5">
              {lang === 'es' ? 'CENTRO QUIRÚRGICO' : 'SURGICAL CENTER'}
            </div>
          </div>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium text-ink/65">
          <a href="#filosofia" className="hover:text-clinic transition-colors">{S.navAbout}</a>
          <a href="#especialidades" className="hover:text-clinic transition-colors">{S.navSpecialties}</a>
          <a href="#medicos" className="hover:text-clinic transition-colors">{S.navDoctors}</a>
          <a href="#contacto" className="hover:text-clinic transition-colors">{S.navContact}</a>
        </nav>

        {/* Language toggle */}
        <div className="inline-flex items-center rounded-full border border-ink/10 bg-stone p-0.5 text-[11.5px] font-semibold shrink-0">
          <button
            onClick={() => setLang('es')}
            className={`px-2.5 py-1 rounded-full transition-colors ${lang === 'es' ? 'text-white bg-clinic' : 'text-ink/55'}`}
          >
            ES
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-2.5 py-1 rounded-full transition-colors ${lang === 'en' ? 'text-white bg-clinic' : 'text-ink/55'}`}
          >
            EN
          </button>
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-clinic text-white px-4 py-2 text-[12.5px] font-semibold hover:bg-ink transition-colors shrink-0"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          {S.navBook}
        </a>
      </div>
    </header>
  )
}
