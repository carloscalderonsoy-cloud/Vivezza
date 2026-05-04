'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/* ─── Brand tokens ───────────────────────────────────────── */
const ACCENT = '#FF7F50'
const ACCENT_SOFT = '#FCE3D8'
const CLINIC = '#1B5FBE'

/* ─── Icons ───────────────────────────────────────────────── */
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.9L4 20l4.22-1.1a7.93 7.93 0 0 0 3.82.97h.01a7.94 7.94 0 0 0 7.94-7.94 7.88 7.88 0 0 0-2.39-5.61Zm-5.55 12.2h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 1 1 12.25-3.5 6.6 6.6 0 0 1-6.65 6.6Zm3.62-4.94c-.2-.1-1.18-.58-1.36-.65-.18-.07-.32-.1-.45.1-.13.2-.51.65-.63.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.6-.53-1-1.18-1.12-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34h-.38c-.13 0-.35.05-.53.25-.18.2-.7.69-.7 1.67 0 .98.72 1.94.82 2.07.1.13 1.4 2.14 3.4 3 .47.2.84.32 1.13.41.47.15.9.13 1.24.08.38-.06 1.18-.48 1.34-.94.17-.46.17-.86.12-.94-.05-.08-.18-.13-.38-.23Z" />
    </svg>
  )
}

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function CheckIcon({ size = 16, color = ACCENT }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function StarIcon({ size = 13, color = ACCENT }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7Z" />
    </svg>
  )
}

/* ─── Nav ────────────────────────────────────────────────── */
function Nav() {
  return (
    <header className="sticky top-0 z-30 section-pad py-3 bg-white/90 backdrop-blur border-b border-ink/8">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg grid place-items-center text-white text-[13px] font-bold" style={{ background: CLINIC }}>V</div>
          <div className="leading-none">
            <div className="text-[15px] font-bold tracking-tight text-ink">Vivezza</div>
            <div className="text-[8.5px] font-bold tracking-[0.2em] uppercase text-clinic/65">CENTRO QUIRÚRGICO</div>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <a href="#form" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-[12.5px] font-semibold text-ink hover:bg-stone transition-colors">
            Pre-consulta
          </a>
          <a href="https://wa.me/526649749264" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12.5px] font-semibold text-white"
            style={{ backgroundColor: '#22C35E' }}>
            <WhatsAppIcon size={14} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

/* ─── 1. Hero ────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="section-pad pt-14 pb-16 relative overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20"
        style={{ background: `radial-gradient(closest-side, ${ACCENT}60, transparent 70%)` }} />

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left — copy */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-[12px] font-semibold text-muted">
            <Link href="/" className="hover:text-clinic transition-colors">Vivezza</Link>
            <span className="text-ink/30">/</span>
            <span style={{ color: ACCENT }}>Cirugía Plástica</span>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-full border px-3.5 py-1.5 text-[11px] font-bold tracking-[0.12em] uppercase"
            style={{ borderColor: ACCENT + '50', backgroundColor: ACCENT_SOFT, color: ACCENT }}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            CMCPER Certificado #2600 · Vivezza
          </div>

          <h1 className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink">
            Armonía, proporción<br />
            <span style={{ color: ACCENT }}>y resultados</span><br />
            naturales.
          </h1>

          <p className="text-[16px] leading-[1.65] text-muted max-w-[54ch]">
            El Dr. Zuriel Michel no sigue tendencias virales. Diseña cada procedimiento alrededor de tu anatomía, tu proporción y tus metas — con acompañamiento one-on-one desde la valoración hasta la recuperación completa.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-2.5">
            {[
              'CMCPER Certificado #2600',
              'Body Contour Internacional',
              'Quirófano JCI Acreditado',
              'Acompañamiento 1 a 1',
            ].map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-stone px-3 py-1.5 text-[11.5px] font-semibold text-ink/70">
                <CheckIcon size={11} color={CLINIC} />
                {c}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="#form"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: ACCENT, boxShadow: `0 18px 40px -12px ${ACCENT}80` }}>
              Agenda tu valoración gratuita
              <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="tel:6649749264"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-4 text-[15px] font-semibold text-ink hover:bg-stone transition-colors">
              <PhoneIcon size={15} />
              664 974 9264
            </a>
          </div>
        </div>

        {/* Right — doctor card */}
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] aspect-[4/5] bg-stone">
              <Image src="/photos/dr-michel.jpg" alt="Dr. Zuriel Michel Barrera — Cirujano Plástico"
                fill className="object-cover object-top" priority />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(10,16,28,0.65) 100%)' }} />

              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink/80 border border-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Disponible hoy
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-[1.5rem] font-bold leading-tight" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                  Dr. Zuriel Michel Barrera
                </div>
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] mt-1.5 opacity-90">
                  Cirujano Plástico, Estético y Reconstructivo
                </div>
                <div className="flex items-center gap-1 mt-3">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} size={12} color={ACCENT} />)}
                  <span className="ml-2 text-[11px] font-semibold opacity-80">Cert. CMCPER #2600</span>
                </div>
              </div>
            </div>

            {/* Floating cert card */}
            <div className="absolute -bottom-4 -right-3 sm:-right-8 bg-white border border-ink/8 shadow-xl rounded-2xl px-4 py-3.5">
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted mb-1">Certificación</div>
              <div className="text-[1.1rem] font-extrabold text-ink leading-none">#2600</div>
              <div className="text-[10.5px] font-semibold text-muted mt-0.5">CMCPER</div>
            </div>
          </div>
        </div>
      </div>

      {/* CMCPER trust bar */}
      <div className="mt-14 flex flex-wrap items-center gap-6 pt-8 border-t border-ink/8">
        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Respaldo institucional</div>
        {[
          { label: 'CMCPER', sub: 'Consejo Mexicano de Cirugía Plástica' },
          { label: 'AMCPER', sub: 'Asociación Mexicana de Cirugía Plástica' },
          { label: 'JCI', sub: 'Joint Commission International' },
          { label: 'ISO 9001', sub: 'Gestión de Calidad' },
        ].map((b) => (
          <div key={b.label} className="flex items-center gap-2.5 rounded-full border border-ink/10 bg-stone px-4 py-2">
            <span className="text-[13px] font-extrabold" style={{ color: CLINIC }}>{b.label}</span>
            <span className="text-[10.5px] text-muted hidden sm:block">{b.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 2. Cuándo verme ────────────────────────────────────── */
function WhenSection() {
  const situations = [
    { emoji: '🤱', title: 'Después de la maternidad', desc: 'Tu figura cambió con los embarazos y el ejercicio ya no es suficiente para recuperarla.' },
    { emoji: '⚖️', title: 'Bajaste de peso y tienes piel sobrante', desc: 'La cirugía contorna lo que la dieta y el gym no pueden eliminar.' },
    { emoji: '👃', title: 'Tu nariz no armoniza con tu rostro', desc: 'No se trata de moda. Se trata de proporción y de sentirte en paz con tu reflejo.' },
    { emoji: '💪', title: 'Quieres definición real, no solo bajar de peso', desc: 'La Lipo HD y el BBL esculpen lo que el entrenamiento no puede lograr.' },
    { emoji: '🪞', title: 'El tiempo está cambiando tu rostro', desc: 'Párpados caídos, ptosis o pérdida de contorno que afectan tu confianza.' },
    { emoji: '💊', title: 'Asimetría o corrección reconstructiva', desc: 'El Dr. Michel atiende diferencias congénitas, post-accidente o revisiones de cirugías previas.' },
  ]

  return (
    <section className="section-pad py-20 bg-stone">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: ACCENT }}>
          <span className="h-px w-6" style={{ backgroundColor: ACCENT }} />
          Señales de consulta
        </div>
        <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-4">
          ¿Cuándo es el momento<br /><span className="text-muted font-semibold">de verte con el Dr. Michel?</span>
        </h2>
        <p className="text-[15px] leading-[1.65] text-muted max-w-[56ch]">
          No necesitas esperar al "momento perfecto". Si alguna de estas situaciones te describe, una valoración sin costo puede darte claridad y un plan real.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {situations.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-ink/8 p-6 hover:border-orange-200 hover:shadow-md transition-all">
            <div className="text-3xl mb-4">{s.emoji}</div>
            <div className="text-[15px] font-bold text-ink mb-2">{s.title}</div>
            <p className="text-[13.5px] leading-[1.6] text-muted">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a href="#form"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-bold text-white transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: ACCENT }}>
          Me identifico — quiero consultar
        </a>
      </div>
    </section>
  )
}

/* ─── 3. Procedimientos ──────────────────────────────────── */
const PROCEDURES = [
  /* Contorno Corporal */
  { name: 'Liposucción HD / Lipo Vaser', tag: 'Contorno Corporal', desc: 'Definición muscular de alta definición mediante ultrasonido. Abdomen, flancos, espalda y muslos con precisión milimétrica.' },
  { name: 'Lipoescultura', tag: 'Contorno Corporal', desc: 'Remodelado integral de la silueta redistribuyendo grasa para lograr proporciones naturales y armónicas.' },
  { name: 'Abdominoplastia (Tummy Tuck)', tag: 'Contorno Corporal', desc: 'Extirpación de piel sobrante y reparación muscular del abdomen. Ideal post-maternidad o tras pérdida de peso significativa.' },
  { name: 'Mini Abdominoplastia', tag: 'Contorno Corporal', desc: 'Versión de menor alcance para pacientes con exceso localizado bajo el ombligo. Cicatriz discreta y recuperación más rápida.' },
  { name: 'Mommy Makeover', tag: 'Contorno Corporal', desc: 'Protocolo combinado: abdominoplastia, mamoplastia y lipo en una sola intervención. Recuperación única, resultados integrales.' },
  { name: 'BBL (Brazilian Butt Lift)', tag: 'Contorno Corporal', desc: 'Transferencia de grasa propia con técnica segura para proyección y forma en glúteos. Sin implantes, resultado natural.' },
  /* Mamaria */
  { name: 'Aumento de busto', tag: 'Mamaria', desc: 'Incremento de volumen con implantes de silicón de alta cohesividad. Enfoque en proporción y armonía, no solo en tamaño.' },
  { name: 'Reducción mamaria', tag: 'Mamaria', desc: 'Alivia dolor de espalda, mejora postura y redefine la silueta cuando el volumen genera molestias físicas o psicológicas.' },
  { name: 'Mastopexia (levantamiento)', tag: 'Mamaria', desc: 'Reposiciona el busto caído sin cambiar necesariamente el volumen. Puede combinarse con aumento para mayor plenitud.' },
  /* Facial */
  { name: 'Lip Lift', tag: 'Facial', desc: 'Eleva y define el labio superior para rejuvenecer y armonizar el tercio inferior del rostro. Resultado permanente y natural.' },
  { name: 'Lipopapada (Chin Lipo)', tag: 'Facial', desc: 'Elimina la grasa submentoniana para definir el contorno del cuello y la mandíbula. Procedimiento mínimamente invasivo.' },
  { name: 'Jaw Contouring', tag: 'Facial', desc: 'Redefinición del ángulo y la línea mandibular para un contorno facial más simétrico y definido.' },
  { name: 'Mini Lifting Facial', tag: 'Facial', desc: 'Reposiciona tejidos caídos de mejillas y cuello con incisiones mínimas. Rejuvenece sin cambiar tu identidad.' },
  { name: 'Blefaroplastia', tag: 'Facial', desc: 'Corrección de párpados superiores e inferiores caídos o con exceso de piel. Alta precisión, procedimiento ambulatorio.' },
  { name: 'FaceTite & Endolift', tag: 'Facial', desc: 'Tecnologías de radiofrecuencia para tensar la piel sin cirugía abierta. Ideales como complemento o alternativa al lifting.' },
]

function ProceduresSection() {
  const tags = ['Todos', 'Contorno Corporal', 'Mamaria', 'Facial']
  const [active, setActive] = useState('Todos')
  const filtered = active === 'Todos' ? PROCEDURES : PROCEDURES.filter(p => p.tag === active)

  return (
    <section id="procedimientos" className="section-pad py-20 bg-white">
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: ACCENT }}>
          <span className="h-px w-6" style={{ backgroundColor: ACCENT }} />
          Procedimientos especializados
        </div>
        <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-4">
          Tres pilares de especialidad
        </h2>
        <p className="text-[15px] leading-[1.65] text-muted max-w-[56ch]">
          Contorno corporal, cirugía mamaria y armonización facial avanzada — cada área con protocolos y técnicas especializadas.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map(t => (
          <button key={t} onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-all ${active === t ? 'text-white border-transparent' : 'border-ink/15 bg-white text-muted hover:border-ink/30'}`}
            style={active === t ? { backgroundColor: ACCENT } : {}}>
            {t}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <div key={i} className="rounded-2xl border border-ink/8 bg-white p-6 hover:shadow-md hover:border-orange-200 transition-all">
            <div className="flex items-start justify-between mb-3">
              <span className="rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                style={{ borderColor: ACCENT + '50', color: ACCENT, backgroundColor: ACCENT_SOFT }}>
                {p.tag}
              </span>
            </div>
            <div className="text-[15.5px] font-bold text-ink mb-2">{p.name}</div>
            <p className="text-[13px] leading-[1.6] text-muted">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 4. Filosofía & Diferenciadores ─────────────────────── */
function WhySection() {
  const diffs = [
    {
      icon: '🎯',
      title: 'Resultados naturales, no tendencias virales',
      desc: 'El Dr. Michel rechaza las modas estéticas de redes sociales que no son médicamente adecuadas. La cirugía mejora versiones, no transforma identidades.',
    },
    {
      icon: '🏥',
      title: 'Quirófano hospitalario, no clínica ambulatoria',
      desc: 'Cada procedimiento se realiza en instalaciones certificadas con equipo de soporte hospitalario completo disponible en todo momento.',
    },
    {
      icon: '🤝',
      title: 'Acompañamiento one-on-one',
      desc: 'El Dr. Michel no deja a sus pacientes solos después del quirófano. Diseña contigo una recuperación óptima y tranquila desde el primer día.',
    },
    {
      icon: '🌎',
      title: 'Formación internacional continua',
      desc: 'Especialización en Body Contour Training en México y Colombia. Asistente activo a congresos AMCPER para mantener técnicas al día.',
    },
  ]

  return (
    <section className="section-pad py-20 bg-stone">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: CLINIC }}>
          <span className="h-px w-6 bg-clinic/50" />
          La filosofía del Dr. Michel
        </div>
        <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-4">
          Ética médica y<br /><span className="text-muted font-semibold">precisión artística.</span>
        </h2>
        <p className="text-[15px] leading-[1.65] text-muted max-w-[54ch]">
          Honestidad clínica, proporciones estudiadas y seguimiento real. No todos los procedimientos son para todos los pacientes — y el Dr. Michel te lo dice con claridad.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {diffs.map((d, i) => (
          <div key={i} className="bg-white rounded-2xl border border-ink/8 p-7 flex gap-5">
            <div className="text-3xl shrink-0 mt-0.5">{d.icon}</div>
            <div>
              <div className="text-[16px] font-bold text-ink mb-2">{d.title}</div>
              <p className="text-[13.5px] leading-[1.65] text-muted">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats strip */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { v: '#2600', l: 'Cert. CMCPER' },
          { v: '3', l: 'Sedes de atención' },
          { v: '98%', l: 'Satisfacción reportada' },
          { v: '24/7', l: 'Soporte post-op' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-ink/8 p-5 text-center">
            <div className="text-[1.7rem] font-extrabold leading-none mb-1" style={{ color: i < 2 ? ACCENT : 'inherit' }}>{s.v}</div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 5. Testimonios ─────────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Como enfermera, sé reconocer la atención médica de calidad cuando la veo. El equipo fue increíblemente profesional. El Dr. Zuriel tiene un trato tranquilo y tranquilizador en todo momento.',
      name: 'Nathaly T.',
      proc: 'Lipopapada, FaceTite y Endolift',
      rating: 5,
    },
    {
      quote: 'Excelente cirujano. Muy atento. Explica las cosas bien. Escucha tus preocupaciones y deseos. Gran cuidado postoperatorio.',
      name: 'Pam C.',
      proc: 'Aumento de busto',
      rating: 5,
    },
    {
      quote: 'Lo que más valoro es su honestidad. Me explicó qué procedimientos eran adecuados para mí y cuáles no. Eso genera una confianza enorme antes de entrar al quirófano.',
      name: 'Paciente verificada',
      proc: 'Mommy Makeover',
      rating: 5,
    },
  ]

  return (
    <section className="section-pad py-20 bg-white">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: ACCENT }}>
          <span className="h-px w-6" style={{ backgroundColor: ACCENT }} />
          Pacientes reales
        </div>
        <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-3">
          Lo que dicen quienes<br /><span className="text-muted font-semibold">ya confían en el Dr. Michel.</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-3xl border border-ink/8 bg-stone p-7 flex flex-col gap-5">
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, j) => <StarIcon key={j} size={13} color={ACCENT} />)}
            </div>
            <p className="text-[14px] leading-[1.7] text-ink/80 flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <div className="text-[13.5px] font-bold text-ink">{t.name}</div>
              <div className="text-[11.5px] font-semibold text-muted mt-0.5">{t.proc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 6. Formulario pre-consulta ─────────────────────────── */
type FormData = {
  nombre: string
  edad: string
  procedimiento: string
  partos: string
  peso: string
  talla: string
  cirugiasPrevias: string
  enfermedadCronica: string
  enfermedadDetalle: string
  fuma: string
  fumaFrecuencia: string
  lactancia: string
  fotosReferencia: string
  acompanante: string
  fueraTijuana: string
  hospedaje: string[]
  fecha: string
}

const EMPTY: FormData = {
  nombre: '', edad: '', procedimiento: '', partos: '', peso: '', talla: '',
  cirugiasPrevias: '', enfermedadCronica: '', enfermedadDetalle: '', fuma: '',
  fumaFrecuencia: '', lactancia: '', fotosReferencia: '', acompanante: '',
  fueraTijuana: '', hospedaje: [], fecha: '',
}

function PreConsultaForm() {
  const [form, setForm] = useState<FormData>(EMPTY)
  const [sent, setSent] = useState(false)

  const set = (key: keyof FormData, val: string) =>
    setForm(prev => ({ ...prev, [key]: val }))

  const toggleHospedaje = (val: string) => {
    setForm(prev => ({
      ...prev,
      hospedaje: prev.hospedaje.includes(val)
        ? prev.hospedaje.filter(v => v !== val)
        : [...prev.hospedaje, val],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `*Pre-consulta Cirugía Plástica — Vivezza*\n` +
      `*Dr. Zuriel Michel Barrera #CMCPER2600*\n\n` +
      `👤 *Nombre:* ${form.nombre}\n` +
      `📅 *Edad:* ${form.edad}\n` +
      `💉 *Procedimiento:* ${form.procedimiento}\n` +
      (form.procedimiento === 'Mommy Makeover' ? `🤱 *Partos:* ${form.partos}\n` : '') +
      `⚖️ *Peso / Talla:* ${form.peso} kg / ${form.talla} cm\n` +
      `🔪 *Cirugías previas:* ${form.cirugiasPrevias}\n` +
      `🩺 *Enfermedad crónica:* ${form.enfermedadCronica}${form.enfermedadDetalle ? ` — ${form.enfermedadDetalle}` : ''}\n` +
      `🚬 *Fuma:* ${form.fuma}${form.fumaFrecuencia ? ` (${form.fumaFrecuencia})` : ''}\n` +
      `🤰 *Lactancia/embarazo:* ${form.lactancia}\n` +
      `📸 *Fotos de referencia:* ${form.fotosReferencia}\n` +
      `👫 *Acompañante:* ${form.acompanante}\n` +
      `✈️ *Viaja desde fuera:* ${form.fueraTijuana}\n` +
      (form.hospedaje.length ? `🏨 *Necesita:* ${form.hospedaje.join(', ')}\n` : '') +
      `📆 *Fecha de interés:* ${form.fecha}`
    )
    window.open(`https://wa.me/526649749264?text=${msg}`, '_blank')
    setSent(true)
  }

  if (sent) {
    return (
      <section id="form" className="section-pad py-20 bg-stone">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-5xl mb-5">✅</div>
          <h3 className="text-[1.8rem] font-bold text-ink mb-3">¡Tu valoración fue enviada!</h3>
          <p className="text-[15px] text-muted leading-[1.65] mb-6">
            Se abrió WhatsApp con tu información. El Dr. Michel o su equipo te responden en menos de 30 minutos en horario de atención.
          </p>
          <button onClick={() => setSent(false)}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-[13.5px] font-semibold text-ink hover:bg-stone transition-colors">
            Editar respuestas
          </button>
        </div>
      </section>
    )
  }

  const inputClass = "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[14px] font-medium text-ink placeholder-muted/60 focus:outline-none focus:border-clinic/50 focus:ring-2 focus:ring-clinic/10 transition-all"
  const labelClass = "block text-[12.5px] font-bold uppercase tracking-[0.1em] text-ink/60 mb-1.5"

  const RadioGroup = ({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) => (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <button key={opt} type="button" onClick={() => onChange(opt)}
          className={`px-4 py-2 rounded-full border text-[13.5px] font-semibold transition-all ${value === opt ? 'text-white border-transparent' : 'border-ink/15 bg-white text-muted hover:border-ink/30'}`}
          style={value === opt ? { backgroundColor: ACCENT } : {}}>
          {opt}
        </button>
      ))}
    </div>
  )

  return (
    <section id="form" className="section-pad py-20 bg-stone">
      <div className="max-w-3xl mx-auto">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: ACCENT }}>
            <span className="h-px w-6" style={{ backgroundColor: ACCENT }} />
            Valoración gratuita
          </div>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-3">
            Cuéntanos sobre ti
          </h2>
          <p className="text-[15px] leading-[1.65] text-muted">
            Esta información permite que el Dr. Michel llegue a tu primera consulta ya preparado para tu caso. 100% confidencial.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-ink/8 p-7 sm:p-10 flex flex-col gap-7 shadow-sm">
          <div>
            <label className={labelClass}>1. Nombre completo *</label>
            <input required className={inputClass} placeholder="Tu nombre" value={form.nombre} onChange={e => set('nombre', e.target.value)} />
          </div>

          <div>
            <label className={labelClass}>2. Edad *</label>
            <input required type="number" min="18" max="80" className={`${inputClass} w-32`} placeholder="Ej. 32" value={form.edad} onChange={e => set('edad', e.target.value)} />
          </div>

          <div>
            <label className={labelClass}>3. ¿Qué procedimiento te interesa? *</label>
            <RadioGroup value={form.procedimiento}
              options={['Mommy Makeover', 'BBL', 'Lipo HD', 'Aumento de busto', 'Abdominoplastia', 'Facial', 'Otro']}
              onChange={v => set('procedimiento', v)} />
          </div>

          {form.procedimiento === 'Mommy Makeover' && (
            <div className="rounded-2xl border p-5" style={{ borderColor: ACCENT + '50', backgroundColor: ACCENT_SOFT }}>
              <label className={labelClass}>4. ¿Cuántos partos has tenido y de qué tipo?</label>
              <input className={inputClass} placeholder="Ej. 2 partos naturales, 1 cesárea" value={form.partos} onChange={e => set('partos', e.target.value)} />
            </div>
          )}

          <div>
            <label className={labelClass}>5. Peso actual y talla</label>
            <div className="flex gap-3">
              <input className={`${inputClass} flex-1`} placeholder="Peso (kg)" value={form.peso} onChange={e => set('peso', e.target.value)} />
              <input className={`${inputClass} flex-1`} placeholder="Talla (cm)" value={form.talla} onChange={e => set('talla', e.target.value)} />
            </div>
          </div>

          <div>
            <label className={labelClass}>6. ¿Has tenido cirugías estéticas previas?</label>
            <RadioGroup value={form.cirugiasPrevias} options={['No', 'Sí, una', 'Sí, varias']} onChange={v => set('cirugiasPrevias', v)} />
          </div>

          <div>
            <label className={labelClass}>7. ¿Tienes alguna enfermedad crónica?</label>
            <p className="text-[12px] text-muted mb-2">(diabetes, hipertensión, problemas de coagulación u otra)</p>
            <RadioGroup value={form.enfermedadCronica} options={['No', 'Sí']} onChange={v => set('enfermedadCronica', v)} />
            {form.enfermedadCronica === 'Sí' && (
              <input className={`${inputClass} mt-3`} placeholder="¿Cuál? ¿Está controlada?" value={form.enfermedadDetalle} onChange={e => set('enfermedadDetalle', e.target.value)} />
            )}
          </div>

          <div>
            <label className={labelClass}>8. ¿Fumas?</label>
            <RadioGroup value={form.fuma} options={['No', 'Ocasionalmente', 'Sí, regularmente']} onChange={v => set('fuma', v)} />
            {(form.fuma === 'Ocasionalmente' || form.fuma === 'Sí, regularmente') && (
              <input className={`${inputClass} mt-3`} placeholder="¿Cuántos cigarros al día aproximadamente?" value={form.fumaFrecuencia} onChange={e => set('fumaFrecuencia', e.target.value)} />
            )}
          </div>

          <div>
            <label className={labelClass}>9. ¿Estás en período de lactancia o embarazo?</label>
            <RadioGroup value={form.lactancia} options={['No', 'Embarazada', 'En lactancia']} onChange={v => set('lactancia', v)} />
          </div>

          <div>
            <label className={labelClass}>10. ¿Tienes fotos de referencia del resultado que buscas?</label>
            <RadioGroup value={form.fotosReferencia} options={['Sí, las tengo', 'Aún no', 'Las buscaré antes']} onChange={v => set('fotosReferencia', v)} />
          </div>

          <div>
            <label className={labelClass}>11. ¿Tienes alguien que te acompañe durante la recuperación?</label>
            <RadioGroup value={form.acompanante} options={['Sí', 'No, necesito apoyo', 'Aún no sé']} onChange={v => set('acompanante', v)} />
          </div>

          <div>
            <label className={labelClass}>12. ¿Vienes desde fuera de Tijuana o del extranjero?</label>
            <RadioGroup value={form.fueraTijuana} options={['Soy de Tijuana', 'Vengo de otro estado', 'Vengo de USA / extranjero']} onChange={v => set('fueraTijuana', v)} />
          </div>

          <div>
            <label className={labelClass}>13. ¿Necesitas hospedaje o transporte?</label>
            <div className="flex flex-wrap gap-2">
              {['Hospedaje', 'Transporte aeropuerto', 'Traslado clínica', 'No necesito'].map(opt => (
                <button key={opt} type="button" onClick={() => toggleHospedaje(opt)}
                  className={`px-4 py-2 rounded-full border text-[13.5px] font-semibold transition-all ${form.hospedaje.includes(opt) ? 'text-white border-transparent' : 'border-ink/15 bg-white text-muted hover:border-ink/30'}`}
                  style={form.hospedaje.includes(opt) ? { backgroundColor: ACCENT } : {}}>
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>14. Fecha aproximada de interés</label>
            <input type="date" className={`${inputClass} w-full sm:w-64`} value={form.fecha} onChange={e => set('fecha', e.target.value)} />
          </div>

          <div className="pt-4 border-t border-ink/8">
            <button type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: ACCENT, boxShadow: `0 18px 40px -12px ${ACCENT}80` }}>
              <WhatsAppIcon size={18} />
              Enviar al Dr. Michel por WhatsApp
            </button>
            <p className="mt-3 text-[12px] text-muted">
              Al enviar, se abre WhatsApp con tu información resumida. Respuesta en menos de 30 min.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

/* ─── 7. CTA final + Sedes ───────────────────────────────── */
function FinalCTA() {
  const sedes = [
    {
      ciudad: 'Tijuana, B.C.',
      detalle: 'Erasmo Castellanos q.1874-102\nZona urbana Río · Tijuana, B.C.',
      badge: 'Turismo Médico · All-Inclusive',
      badgeColor: ACCENT,
      note: 'Paquetes all-inclusive para pacientes de USA y Canadá. Coordinación desde el cruce fronterizo hasta la recuperación.',
    },
    {
      ciudad: 'Ciudad de México',
      detalle: 'Hospital San Ángel Inn Satélite\nConsultorio 1406',
      badge: 'CDMX',
      badgeColor: CLINIC,
      note: '',
    },
    {
      ciudad: 'Guadalajara',
      detalle: 'Médica Golfo de Cortés',
      badge: 'GDL',
      badgeColor: CLINIC,
      note: '',
    },
  ]

  return (
    <section id="contacto" className="section-pad py-20 bg-white border-t border-ink/8">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact */}
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: ACCENT }}>
            <span className="h-px w-6" style={{ backgroundColor: ACCENT }} />
            Contáctanos hoy
          </div>
          <h2 className="text-[clamp(1.7rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-6">
            Hablemos hoy mismo.
          </h2>

          <div className="flex flex-col gap-4 mb-10">
            <a href="https://wa.me/526649749264"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-[15px] font-bold text-white w-full sm:w-auto"
              style={{ backgroundColor: '#22C35E', boxShadow: '0 14px 30px -10px rgba(34,195,94,0.5)' }}>
              <WhatsAppIcon size={20} />
              WhatsApp — 664 974 9264
            </a>
            <a href="tel:6649749264"
              className="inline-flex items-center gap-3 rounded-2xl border border-ink/15 bg-white px-6 py-4 text-[15px] font-semibold text-ink hover:bg-stone transition-colors w-full sm:w-auto">
              <PhoneIcon size={18} />
              664 974 9264
            </a>
          </div>

          {/* Sedes */}
          <div className="flex flex-col gap-3">
            {sedes.map((s) => (
              <div key={s.ciudad} className="rounded-2xl border border-ink/8 bg-stone p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] rounded-full px-2.5 py-1 text-white"
                    style={{ backgroundColor: s.badgeColor }}>{s.badge}</span>
                  <span className="text-[14px] font-bold text-ink">{s.ciudad}</span>
                </div>
                <div className="text-[13px] font-medium text-ink/70 leading-[1.7] whitespace-pre-line">{s.detalle}</div>
                {s.note && <p className="mt-2 text-[12px] text-muted leading-[1.6]">{s.note}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Map — Tijuana */}
        <div className="relative overflow-hidden rounded-3xl aspect-video bg-stone border border-ink/8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107250.57!2d-117.0382!3d32.5149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9489061bdd3ef%3A0x0!2sTijuana%2C+Baja+California!5e0!3m2!1ses!2smx!4v1"
            width="100%" height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vivezza Tijuana"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

/* ─── Page ───────────────────────────────────────────────── */
export default function CirugiaPlasticaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <HeroSection />
      <WhenSection />
      <ProceduresSection />
      <WhySection />
      <TestimonialsSection />
      <PreConsultaForm />
      <FinalCTA />

      {/* Sticky WhatsApp FAB */}
      <a href="https://wa.me/526649749264" target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center text-white shadow-2xl pulse"
        style={{ backgroundColor: '#22C35E', ['--pulse-color' as string]: '#22C35E55' }}>
        <WhatsAppIcon size={26} />
      </a>

      <style>{`
        @keyframes softPulse {
          0%, 100% { box-shadow: 0 0 0 0 var(--pulse-color); }
          50%       { box-shadow: 0 0 0 14px rgba(0,0,0,0); }
        }
        .pulse { animation: softPulse 2.6s ease-out infinite; }
      `}</style>
    </div>
  )
}
