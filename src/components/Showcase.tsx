'use client'

import { useEffect, useRef, useState } from 'react'
import { SPECIALTIES, type Lang, type StringDict, type Specialty } from '@/data'

/* ── Specialty icons ─────────────────────────────────────── */
const ICON_PATHS: Record<string, React.ReactNode> = {
  'cirugia-plastica': (
    <path d="M12 4c-3 3-5 6-5 9a5 5 0 0 0 10 0c0-3-2-6-5-9Z"
      fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  ),
  'bariatria': (
    <g>
      <path d="M5 9h14l-1.5 9.5a2 2 0 0 1-2 1.5h-7a2 2 0 0 1-2-1.5L5 9Z"
        fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3"
        fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  'medspa': (
    <g>
      <path d="M12 4c2 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2-5 4-8Z"
        fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 20c2 0 3-1 7-1s5 1 7 1"
        fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  'cirugia-general': (
    <path d="M3 14 14 3l3 3-2 2 5 5-3 3-5-5-2 2-3-3Z"
      fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  ),
  'traumatologia': (
    <path d="M6 4c0 2 2 2 2 4s-2 2-2 4 2 2 2 4-2 2-2 4M18 4c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M9 12h6"
      fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  ),
  'ginecologia': (
    <g>
      <circle cx="12" cy="9" r="5"
        fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14v7M9 18h6"
        fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  'oncologia': (
    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"
      fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  ),
  'urologia': (
    <g>
      <path d="M8 4h8v6a4 4 0 0 1-8 0V4Z"
        fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14v6M9 20h6"
        fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  'oto-maxilo': (
    <path d="M9 4c-3 0-5 2-5 5 0 3 2 4 2 7 0 2 1 4 4 4s4-2 4-4M14 8a4 4 0 0 1 0 8"
      fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  ),
}

function Icon({ id, size = 18 }: { id: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      {ICON_PATHS[id]}
    </svg>
  )
}

/* ── Bento selector (3×3 grid) ───────────────────────────── */
function BentoSelector({
  items,
  activeIdx,
  setActiveIdx,
  lang,
}: {
  items: Specialty[]
  activeIdx: number
  setActiveIdx: (i: number) => void
  lang: Lang
}) {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {items.map((sp, i) => {
        const active = i === activeIdx
        return (
          <button
            key={sp.id}
            onClick={() => setActiveIdx(i)}
            className={`relative text-left rounded-2xl p-4 border transition-all duration-300 ${
              active ? '' : 'border-ink/10 bg-white/60 hover:bg-white hover:border-ink/20'
            }`}
            style={
              active
                ? {
                    borderColor: sp.accent + '88',
                    backgroundColor: sp.accentSoft,
                    boxShadow: `0 18px 40px -16px ${sp.accent}80`,
                  }
                : {}
            }
          >
            <div className="flex items-start justify-between mb-3">
              <div
                className="h-9 w-9 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: active ? sp.accent : '#fff',
                  color: active ? '#fff' : sp.accent,
                  border: active ? 'none' : `1px solid ${sp.accent}55`,
                }}
              >
                <Icon id={sp.id} size={16} />
              </div>
              <span className="font-mono text-[10px] tracking-wider text-ink/40">{sp.code}</span>
            </div>
            <div className="text-[13.5px] font-medium text-ink leading-tight">{sp[lang].name}</div>
            <div className="text-[11px] text-ink/55 mt-1 leading-tight">{sp[lang].tag}</div>
          </button>
        )
      })}
    </div>
  )
}

/* ── Specialty card ───────────────────────────────────────── */
function SpecialtyCard({
  sp,
  lang,
  S,
}: {
  sp: Specialty
  lang: Lang
  S: StringDict
}) {
  const content = sp[lang]
  return (
    <div className="showcase-fade grid lg:grid-cols-5 gap-5">
      {/* LEFT — content panel */}
      <div
        className="lg:col-span-3 relative rounded-3xl p-6 sm:p-9 overflow-hidden border accent-glow"
        style={{
          backgroundColor: sp.accentSoft,
          borderColor: sp.accent + '40',
          ['--accent-shadow' as string]: sp.accent + '55',
        }}
      >
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-60"
          style={{ background: `radial-gradient(closest-side, ${sp.accent}88, transparent 70%)` }}
        />

        <div className="relative flex items-center justify-between mb-7">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-ink/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em]"
            style={{ color: sp.accent }}
          >
            <span className="font-mono">{sp.code}</span>
            <span className="h-3 w-px bg-ink/15" />
            <span>{content.tag}</span>
          </div>
          <div
            className="h-12 w-12 rounded-2xl flex items-center justify-center text-white"
            style={{ backgroundColor: sp.accent, boxShadow: `0 14px 30px -10px ${sp.accent}99` }}
          >
            <Icon id={sp.id} size={22} />
          </div>
        </div>

        <h3 className="relative font-display text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[0.98] tracking-tight text-ink mb-4">
          {content.name}
        </h3>

        <p className="relative text-[15px] md:text-[16.5px] leading-[1.55] text-ink/75 max-w-[48ch] mb-7">
          {content.desc}
        </p>

        <div className="relative mb-7">
          <div className="text-[10.5px] uppercase tracking-[0.16em] text-ink/55 mb-3">
            {S.proceduresLabel}
          </div>
          <div className="flex flex-wrap gap-2">
            {content.procedures.map((p) => (
              <span
                key={p}
                className="inline-flex items-center rounded-full border bg-white/75 backdrop-blur px-3 py-1.5 text-[12px] text-ink/75"
                style={{ borderColor: sp.accent + '55' }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex flex-wrap items-center gap-3">
          <button
            className="inline-flex items-center gap-2 rounded-full text-white font-medium px-5 py-3 text-[13.5px] transition-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: sp.accent,
              boxShadow: `0 14px 30px -12px ${sp.accent}cc`,
            }}
          >
            {S.bookSpecialty}
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 backdrop-blur px-5 py-3 text-[13.5px] text-ink/80 hover:bg-white transition">
            {S.learnMore}
          </button>
        </div>
      </div>

      {/* RIGHT — doctor */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        <div className="placeholder-warm-2 relative overflow-hidden rounded-3xl aspect-[4/5] ring-soft grain">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: `linear-gradient(180deg, transparent 45%, ${sp.accent}66 100%)` }}
          />
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-2.5 py-1 text-[10.5px] uppercase tracking-[0.14em] text-ink/75 border border-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {S.titularLabel}
          </div>
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div
              className="font-display text-[1.6rem] leading-tight"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}
            >
              {content.doctor}
            </div>
            <div className="text-[11px] uppercase tracking-[0.14em] mt-1 opacity-90">
              {content.doctorRole}
            </div>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="rounded-3xl border border-ink/10 bg-white/70 backdrop-blur p-5">
          <div className="flex items-center gap-1.5 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={sp.accent}>
                <path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7Z" />
              </svg>
            ))}
            <span className="ml-1 text-[11.5px] text-ink/65 num-stat">4.98 · 1.2k pacientes</span>
          </div>
          <p className="text-[12.5px] leading-[1.55] text-ink/65 italic">
            {lang === 'es'
              ? '"Cada paciente recibe una experiencia diseñada como si fuera el único."'
              : '"Each patient receives an experience designed as if they were the only one."'}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Showcase section ────────────────────────────────────── */
interface ShowcaseProps {
  lang: Lang
  activeIdx: number
  setActiveIdx: (i: number) => void
  S: StringDict
}

export default function Showcase({ lang, activeIdx, setActiveIdx, S }: ShowcaseProps) {
  const sp = SPECIALTIES[activeIdx]

  return (
    <section id="especialidades" className="section-pad py-20 lg:py-28 relative">
      {/* Section header */}
      <div className="flex flex-col gap-6 mb-10 lg:mb-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink/55">
          <span className="h-px w-6 bg-ink/30" />
          {S.showcaseEyebrow}
        </div>
        <h2 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.98] tracking-tight text-ink">
          {S.showcaseTitle}
          <br />
          <span className="italic text-ink/65">{S.showcaseTitleEm}</span>
        </h2>
        <p className="text-[15px] leading-[1.6] text-ink/65 max-w-[58ch]">{S.showcaseSub}</p>
      </div>

      {/* Bento: side-by-side (selector left, card right) */}
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <div className="lg:col-span-4">
          <BentoSelector
            items={SPECIALTIES}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
            lang={lang}
          />
        </div>
        <div className="lg:col-span-8">
          <SpecialtyCard key={sp.id} sp={sp} lang={lang} S={S} />
        </div>
      </div>
    </section>
  )
}
