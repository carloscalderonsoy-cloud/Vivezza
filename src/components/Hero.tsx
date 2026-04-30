'use client'

import Image from 'next/image'
import { type Lang, type StringDict } from '@/data'

interface HeroProps {
  lang: Lang
  accent: string
  accentSoft: string
  S: StringDict
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.9L4 20l4.22-1.1a7.93 7.93 0 0 0 3.82.97h.01a7.94 7.94 0 0 0 7.94-7.94 7.88 7.88 0 0 0-2.39-5.61Zm-5.55 12.2h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 1 1 12.25-3.5 6.6 6.6 0 0 1-6.65 6.6Zm3.62-4.94c-.2-.1-1.18-.58-1.36-.65-.18-.07-.32-.1-.45.1-.13.2-.51.65-.63.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.6-.53-1-1.18-1.12-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34h-.38c-.13 0-.35.05-.53.25-.18.2-.7.69-.7 1.67 0 .98.72 1.94.82 2.07.1.13 1.4 2.14 3.4 3 .47.2.84.32 1.13.41.47.15.9.13 1.24.08.38-.06 1.18-.48 1.34-.94.17-.46.17-.86.12-.94-.05-.08-.18-.13-.38-.23Z" />
    </svg>
  )
}

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

function HeroBadge({ accent, label }: { accent: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-clinic/20 bg-stone px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-clinic/80">
      <span
        className="h-1.5 w-1.5 rounded-full bg-emerald-500"
      />
      {label}
    </div>
  )
}

function HeroCTA({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      <a
        href="tel:+59899000000"
        className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-white font-semibold text-[14px] hover:bg-clinic transition-colors"
      >
        <PhoneIcon size={15} />
        +598 99 000 000
      </a>
      <a
        href="https://wa.me/59899000000"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn pulse inline-flex items-center justify-center gap-2.5 rounded-full bg-[#22C35E] px-6 py-3.5 text-white font-semibold text-[14px]"
        style={{ '--pulse-color': '#22C35E55' } as React.CSSProperties}
      >
        <WhatsAppIcon size={15} />
        WhatsApp
      </a>
    </div>
  )
}

function TrustPills({ lang, accent }: { lang: Lang; accent: string }) {
  type IconKey = 'briefcase' | 'building' | 'heart'
  const items: { icon: IconKey; title: string; sub: string }[] =
    lang === 'es'
      ? [
          { icon: 'briefcase', title: '+9 Especialidades', sub: 'Atención médica integral bajo un mismo techo.' },
          { icon: 'building',  title: 'Instalaciones Modernas', sub: 'Quirófanos híbridos y equipo de última generación.' },
          { icon: 'heart',     title: 'Atención Integral', sub: 'Acompañamiento antes, durante y después.' },
        ]
      : [
          { icon: 'briefcase', title: '+9 Specialties', sub: 'Comprehensive medical care under one roof.' },
          { icon: 'building',  title: 'Modern Facilities', sub: 'Hybrid OR suites, latest-generation equipment.' },
          { icon: 'heart',     title: 'Integral Care', sub: 'We support you before, during and after.' },
        ]

  const ICON: Record<IconKey, React.ReactNode> = {
    briefcase: <path d="M4 8h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Zm5-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M4 13h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
    building:  <path d="M5 21V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16M5 21h14M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
    heart:     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {items.map((it, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-2xl border border-ink/8 bg-white px-4 py-4 hover:border-clinic/25 hover:shadow-sm transition-all"
        >
          <div
            className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: accent + '16', color: accent }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">{ICON[it.icon]}</svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[13.5px] font-semibold text-ink">{it.title}</span>
            <span className="text-[11.5px] text-muted mt-1 leading-snug">{it.sub}</span>
          </div>
        </div>
      ))}
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
    <div className="grid grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col gap-1">
          <div className="num-stat text-3xl md:text-[2.2rem] font-bold leading-none text-ink">
            {s.v}
            {s.plus && (
              <span className="text-base align-top ml-0.5 font-semibold" style={{ color: accent }}>
                +
              </span>
            )}
          </div>
          <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">{s.l}</div>
        </div>
      ))}
    </div>
  )
}

function HeroPhotoCard({ accent, accentSoft }: { accent: string; accentSoft: string }) {
  return (
    <div className="relative">
      {/* Main photo */}
      <div className="relative overflow-hidden rounded-[28px] aspect-[4/5] bg-stone ring-soft grain">
        <Image
          src="/photos/surgery-team.png"
          alt="Equipo médico Vivezza"
          fill
          className="object-cover"
          priority
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(15,22,35,0.45) 100%)' }}
        />
        {/* JCI badge top-left */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/92 backdrop-blur px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink/80 border border-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          JCI Acreditado
        </div>
      </div>

      {/* Floating credential chip */}
      <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-white border border-ink/8 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 max-w-[270px]">
        <div
          className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: accentSoft, color: accent }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 4 6v6c0 5 3.4 9.3 8 10 4.6-.7 8-5 8-10V6l-8-4Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Acreditación 2026</span>
          <span className="text-[13px] font-bold text-ink">Joint Commission Intl.</span>
        </div>
      </div>

      {/* Floating doctors-online chip */}
      <div className="absolute -top-4 right-6 sm:-right-6 bg-white border border-ink/8 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3">
        <div className="flex -space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full ring-2 ring-white bg-stone"
              style={{ backgroundColor: [accentSoft, '#E2F0F7', '#DDF1E2'][i] }}
            />
          ))}
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[12px] font-semibold text-ink">3 médicos en línea</span>
          <span className="text-[10.5px] text-muted">Responden ahora</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero({ lang, accent, accentSoft, S }: HeroProps) {
  return (
    <section className="paper-texture pt-28 pb-20 lg:pb-24 section-pad relative overflow-hidden">
      {/* Subtle clinical blue halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl transition-colors duration-700"
        style={{ background: `radial-gradient(closest-side, #1B5FBE40, transparent 70%)` }}
      />

      <div className="flex flex-col gap-12">
        {/* Editorial 7+5 grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col gap-7">
            <HeroBadge accent={accent} label={S.heroBadge} />

            <h1 className="text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink">
              {S.heroTitleA}{' '}
              <span style={{ color: accent }}>{S.heroTitleB}</span>
              <br />
              {S.heroTitleC}
            </h1>

            <p className="text-[15.5px] md:text-[17px] leading-[1.6] text-muted max-w-[58ch]">
              {S.heroSub}
            </p>

            <HeroCTA accent={accent} />

            <div className="pt-6 border-t border-ink/8">
              <HeroStats S={S} accent={accent} />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <HeroPhotoCard accent={accent} accentSoft={accentSoft} />
          </div>
        </div>

        {/* Trust pills row */}
        <TrustPills lang={lang} accent={accent} />
      </div>
    </section>
  )
}
