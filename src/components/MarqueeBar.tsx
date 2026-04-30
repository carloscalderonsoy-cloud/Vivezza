import { type Lang } from '@/data'

const ITEMS: Record<Lang, string[]> = {
  es: [
    'JCI Acreditado',
    'ISO 9001:2015',
    '47 médicos titulares',
    'Concierge VIP internacional',
    'Punta del Este · Uruguay',
    'Cirugía robótica DaVinci',
  ],
  en: [
    'JCI Accredited',
    'ISO 9001:2015',
    '47 lead physicians',
    'International VIP concierge',
    'Punta del Este · Uruguay',
    'DaVinci Robotic Surgery',
  ],
}

export default function MarqueeBar({ lang }: { lang: Lang }) {
  const items = ITEMS[lang]
  const list = [...items, ...items, ...items]

  return (
    <div className="border-y border-ink/10 bg-paper/80 overflow-hidden">
      <div
        className="flex gap-12 py-4 whitespace-nowrap"
        style={{ animation: 'marquee 38s linear infinite' }}
      >
        {list.map((t, i) => (
          <span
            key={i}
            className="text-[12px] uppercase tracking-[0.22em] text-ink/55 inline-flex items-center gap-3"
          >
            <span className="h-1 w-1 rounded-full bg-ink/30" />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
