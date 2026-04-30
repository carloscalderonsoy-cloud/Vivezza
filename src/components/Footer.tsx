import { type Lang } from '@/data'

interface Props {
  lang: Lang
  accent: string
}

export default function Footer({ lang, accent }: Props) {
  const isEs = lang === 'es'

  return (
    <footer id="contacto" className="section-pad pt-20 pb-10 border-t border-ink/10">
      <div className="grid lg:grid-cols-12 gap-10 mb-12">
        {/* CTA copy */}
        <div className="lg:col-span-5">
          <div className="font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.0] text-ink mb-4">
            {isEs
              ? 'Comencemos tu historia con Vivezza.'
              : 'Begin your story with Vivezza.'}
          </div>
          <p className="text-[14.5px] text-ink/65 leading-[1.6] max-w-[48ch]">
            {isEs
              ? 'Reserva una evaluación sin costo con nuestro equipo de concierge médico. Te respondemos en menos de 30 minutos.'
              : 'Book a complimentary evaluation with our medical concierge team. We reply within 30 minutes.'}
          </p>
        </div>

        {/* Address */}
        <div className="lg:col-span-3">
          <div className="text-[10.5px] uppercase tracking-[0.18em] text-ink/45 mb-3">
            {isEs ? 'Visítanos' : 'Visit us'}
          </div>
          <div className="text-[13.5px] text-ink/80 leading-[1.7]">
            Av. del Mar 4521
            <br />
            Punta del Este · Uruguay
            <br />
            +598 99 000 000
          </div>
        </div>

        {/* Accreditations */}
        <div className="lg:col-span-4">
          <div className="text-[10.5px] uppercase tracking-[0.18em] text-ink/45 mb-3">
            {isEs ? 'Acreditaciones' : 'Accreditations'}
          </div>
          <div className="flex flex-wrap gap-2">
            {['JCI', 'ISO 9001', 'ASMS', 'IFSO', 'ISAPS'].map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/15 bg-white px-3 py-1.5 text-[11.5px] text-ink/70 font-mono tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between text-[11px] text-ink/45 pt-6 border-t border-ink/8">
        <div>
          © Vivezza Medical Center 2026 —{' '}
          {isEs ? 'Todos los derechos reservados' : 'All rights reserved'}
        </div>
        <div className="font-mono tracking-wider">vivezza.com</div>
      </div>
    </footer>
  )
}
