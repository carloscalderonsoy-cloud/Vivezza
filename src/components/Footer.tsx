import { type Lang } from '@/data'

interface Props {
  lang: Lang
  accent: string
}

export default function Footer({ lang, accent }: Props) {
  const isEs = lang === 'es'

  return (
    <footer id="contacto" className="section-pad pt-20 pb-10 border-t border-ink/8 bg-stone">
      <div className="grid lg:grid-cols-12 gap-10 mb-12">
        {/* Brand + CTA copy */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5 mb-5">
            <div
              className="h-10 w-10 rounded-xl grid place-items-center text-white text-[16px] font-bold"
              style={{ background: '#1B5FBE' }}
            >
              V
            </div>
            <div className="leading-none">
              <div className="text-[18px] font-bold tracking-tight text-ink">Vivezza</div>
              <div className="text-[9px] font-bold tracking-[0.22em] uppercase text-clinic/65 mt-0.5">
                {isEs ? 'CENTRO QUIRÚRGICO' : 'SURGICAL CENTER'}
              </div>
            </div>
          </div>
          <p className="text-[14.5px] text-muted leading-[1.65] max-w-[44ch] mb-6">
            {isEs
              ? 'Reserva una evaluación sin costo con nuestro equipo de concierge médico. Te respondemos en menos de 30 minutos.'
              : 'Book a complimentary evaluation with our medical concierge team. We reply within 30 minutes.'}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-clinic text-white px-6 py-3 text-[13.5px] font-semibold hover:bg-ink transition-colors"
          >
            {isEs ? 'Solicitar evaluación gratuita' : 'Request free evaluation'}
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Address */}
        <div className="lg:col-span-3">
          <div className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-clinic/60 mb-3">
            {isEs ? 'Visítanos' : 'Visit us'}
          </div>
          <div className="text-[13.5px] font-medium text-ink/80 leading-[1.8]">
            Erasmo Castellanos q.1874-102<br />
            Zona urbana Río · Tijuana<br />
            <a href="tel:6649749264" className="text-clinic hover:underline">664 974 9264</a>
          </div>
        </div>

        {/* Accreditations */}
        <div className="lg:col-span-4">
          <div className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-clinic/60 mb-3">
            {isEs ? 'Acreditaciones' : 'Accreditations'}
          </div>
          <div className="flex flex-wrap gap-2">
            {['JCI', 'ISO 9001', 'ASMS', 'IFSO', 'ISAPS'].map((t) => (
              <span
                key={t}
                className="rounded-full border border-clinic/20 bg-white px-3 py-1.5 text-[11.5px] font-semibold text-clinic/75 tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 text-[12.5px] text-muted leading-[1.6]">
            {isEs
              ? 'Cumplimos con los más altos estándares internacionales de calidad y seguridad en atención médica.'
              : 'We meet the highest international standards of quality and safety in medical care.'}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between text-[11px] font-medium text-muted pt-6 border-t border-ink/8">
        <div>
          © Vivezza Centro Quirúrgico 2026 —{' '}
          {isEs ? 'Todos los derechos reservados' : 'All rights reserved'}
        </div>
        <div className="text-clinic/70 font-semibold tracking-wide">vivezza.com</div>
      </div>
    </footer>
  )
}
