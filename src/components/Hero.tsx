'use client'

import { type Lang, type StringDict } from '@/data'

interface HeroProps {
  lang: Lang
  accent: string
  accentSoft: string
  S: StringDict
}

function WhatsAppIcon({ size = 18, color = '#fff' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.9L4 20l4.22-1.1a7.93 7.93 0 0 0 3.82.97h.01a7.94 7.94 0 0 0 7.94-7.94 7.88 7.88 0 0 0-2.39-5.61Zm-5.55 12.2h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 1 1 12.25-3.5 6.6 6.6 0 0 1-6.65 6.6Zm3.62-4.94c-.2-.1-1.18-.58-1.36-.65-.18-.07-.32-.1-.45.1-.13.2-.51.65-.63.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.6-.53-1-1.18-1.12-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34h-.38c-.13 0-.35.05-.53.25-.18.2-.7.69-.7 1.67 0 .98.72 1.94.82 2.07.1.13 1.4 2.14 3.4 3 .47.2.84.32 1.13.41.47.15.9.13 1.24.08.38-.06 1.18-.48 1.34-.94.17-.46.17-.86.12-.94-.05-.08-.18-.13-.38-.23Z"
        fill={color}
      />
    </svg>
  )
}

function HeroBadge({ accent, label }: { accent: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3.5 py-1.5 text-[11px] tracking-[0.14em] uppercase text-ink/70">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: accent, boxShadow: `0 0 0 3px ${accent}33` }}
      />
      {label}
    </div>
  )
}

function HeroStats({ S, accent }: { S: StringDict; accent: string }) {
  const stats = [
    { v: '09', l: S.statSpecialties, plus: false },
    { v: '47', l: S.statDoctors, plus: false },
    { v: '98%', l: S.statSatisfaction, plus: false },
    { v: '24', l: S.statYears, plus: true },
  ]
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col gap-1">
          <div className="font-display num-stat text-3xl md:text-[2.4rem] leading-none text-ink">
            {s.v}
            {s.plus && (
              <span className="text-base align-top ml-0.5" style={{ color: accent }}>
                +
              </span>
            )}
          </div>
          <div className="text-[10.5px] uppercase tracking-[0.16em] text-ink/55">{s.l}</div>
        </div>
      ))}
    </div>
  )
}

function HeroCTA({ S, accent }: { S: StringDict; accent: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
      <a
        href="#contacto"
        className="whatsapp-btn pulse group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#16A34A] px-7 py-4 text-white font-medium shadow-[0_18px_40px_-12px_rgba(22,163,74,0.5)]"
        style={{ '--pulse-color': '#16A34A55' } as React.CSSProperties}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
          <WhatsAppIcon size={16} />
        </span>
        <span className="flex flex-col items-start leading-tight text-left">
          <span className="text-[15px]">{S.heroCta}</span>
          <span className="text-[11px] opacity-80 font-light">{S.heroCtaSub}</span>
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          className="ml-1 transition-transform group-hover:translate-x-0.5"
        >
          <path
            d="M3 7h8M7 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 backdrop-blur px-5 py-3.5 text-[13.5px] text-ink/80 hover:bg-white transition"
      >
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full"
          style={{ backgroundColor: accent + '33', color: accent }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M3 1l5 4-5 4V1z" fill="currentColor" />
          </svg>
        </span>
        {S.heroSecondary}
      </button>
    </div>
  )
}

function HeroImageCard({ accent, accentSoft }: { accent: string; accentSoft: string }) {
  return (
    <div className="relative">
      {/* Main image placeholder */}
      <div
        className="placeholder-warm relative overflow-hidden rounded-[28px] aspect-[4/5] ring-soft accent-glow grain"
        style={{ '--accent-shadow': accent + '40' } as React.CSSProperties}
      >
        <div className="absolute inset-0 flex items-end p-6">
          <div className="text-white/85 text-[10.5px] uppercase tracking-[0.18em] mix-blend-overlay">
            Suite ejecutiva · Vivezza
          </div>
        </div>
      </div>

      {/* Floating chip — accreditation */}
      <div className="absolute -top-4 right-6 sm:-right-6 bg-paper border border-black/5 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: accentSoft, color: accent }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2 4 6v6c0 5 3.4 9.3 8 10 4.6-.7 8-5 8-10V6l-8-4Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="m9 12 2 2 4-4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-[0.14em] text-ink/55">JCI Accredited</span>
          <span className="text-[13px] font-medium text-ink">Standard 2025</span>
        </div>
      </div>

      {/* Floating chip — doctors online */}
      <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-paper border border-black/5 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 max-w-[260px]">
        <div className="flex -space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full ring-2 ring-paper placeholder-warm-2"
              style={{ filter: `hue-rotate(${i * 30}deg)` }}
            />
          ))}
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[12px] font-medium text-ink">3 médicos en línea</span>
          <span className="text-[10.5px] text-ink/55">Te responden ahora</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero({ accent, accentSoft, S }: HeroProps) {
  return (
    <section className="paper-texture pt-10 pb-24 lg:pb-28 section-pad relative overflow-hidden">
      {/* Accent halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl transition-colors duration-700"
        style={{ background: `radial-gradient(closest-side, ${accent}30, transparent 70%)` }}
      />

      {/* Editorial layout: 7 + 5 columns */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 flex flex-col gap-7">
          <HeroBadge accent={accent} label={S.heroBadge} />

          <h1 className="font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.98] tracking-tight text-ink text-balance">
            {S.heroTitleA}{' '}
            <span className="italic" style={{ color: accent }}>
              {S.heroTitleB}
            </span>
            <br />
            {S.heroTitleC}
          </h1>

          <p className="text-[15.5px] md:text-[17px] leading-[1.55] text-ink/70 max-w-[58ch]">
            {S.heroSub}
          </p>

          <HeroCTA S={S} accent={accent} />

          <div className="pt-6 border-t border-ink/10">
            <HeroStats S={S} accent={accent} />
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-6">
          <HeroImageCard accent={accent} accentSoft={accentSoft} />
        </div>
      </div>
    </section>
  )
}
