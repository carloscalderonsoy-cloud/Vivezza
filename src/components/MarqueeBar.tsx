import { type Lang } from '@/data'

const ITEMS: Record<Lang, string[]> = {
  es: [
    'JCI Acreditado',
    'ISO 9001:2015',
    '47 médicos titulares',
    'Concierge VIP internacional',
    'Punta del Este · Uruguay',
    'Cirugía robótica DaVinci',
    'Instalaciones de vanguardia',
    'Atención integral 24/7',
  ],
  en: [
    'JCI Accredited',
    'ISO 9001:2015',
    '47 lead physicians',
    'International VIP concierge',
    'Punta del Este · Uruguay',
    'DaVinci Robotic Surgery',
    'State-of-the-art facilities',
    '24/7 Integral care',
  ],
}

export default function MarqueeBar({ lang }: { lang: Lang }) {
  const items = ITEMS[lang]
  const list = [...items, ...items, ...items]

  return (
    <div className="border-y border-clinic/12 bg-stone overflow-hidden">
      <div
        className="flex gap-12 py-3.5 whitespace-nowrap"
        style={{ animation: 'marquee 42s linear infinite' }}
      >
        {list.map((t, i) => (
          <span
            key={i}
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-clinic/60 inline-flex items-center gap-3"
          >
            <span className="h-1 w-1 rounded-full bg-clinic/40" />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
