export type Lang = 'es' | 'en'

export interface SpecialtyContent {
  name: string
  tag: string
  desc: string
  doctor: string
  doctorRole: string
  procedures: string[]
}

export interface Specialty {
  id: string
  accent: string
  accentSoft: string
  code: string
  photo: string
  es: SpecialtyContent
  en: SpecialtyContent
}

export const SPECIALTIES: Specialty[] = [
  {
    id: 'cirugia-plastica',
    accent: '#FF7F50',
    accentSoft: '#FCE3D8',
    code: '01',
    photo: '/photos/plastic-surgery.png',
    es: {
      name: 'Cirugía Plástica',
      tag: 'Estética & Reconstructiva',
      desc: 'Resultados naturales con técnicas de última generación. Diseñamos cada procedimiento alrededor de tu anatomía y tus metas.',
      doctor: 'Dra. Isabel Montero',
      doctorRole: 'Jefa de Cirugía Plástica',
      procedures: ['Mamoplastia', 'Lipo Vaser HD', 'Rinoplastia', 'Lifting Facial'],
    },
    en: {
      name: 'Plastic Surgery',
      tag: 'Aesthetic & Reconstructive',
      desc: 'Natural results crafted with the latest techniques. Every procedure is designed around your anatomy and your goals.',
      doctor: 'Dr. Isabel Montero',
      doctorRole: 'Head of Plastic Surgery',
      procedures: ['Breast Surgery', 'Vaser HD Lipo', 'Rhinoplasty', 'Facelift'],
    },
  },
  {
    id: 'bariatria',
    accent: '#50C878',
    accentSoft: '#DDF1E2',
    code: '02',
    photo: '/photos/surgery-team.png',
    es: {
      name: 'Bariatría',
      tag: 'Cirugía Metabólica',
      desc: 'Programas integrales de pérdida de peso supervisados por endocrinos, cirujanos y nutriólogos en un único ecosistema.',
      doctor: 'Dr. Andrés Villarreal',
      doctorRole: 'Cirujano Bariatra Titular',
      procedures: ['Manga Gástrica', 'Bypass', 'Balón Intragástrico', 'Seguimiento 24m'],
    },
    en: {
      name: 'Bariatrics',
      tag: 'Metabolic Surgery',
      desc: 'Integrated weight-loss programs supervised by endocrinologists, surgeons, and nutritionists under one roof.',
      doctor: 'Dr. Andrés Villarreal',
      doctorRole: 'Lead Bariatric Surgeon',
      procedures: ['Gastric Sleeve', 'Bypass', 'Gastric Balloon', '24-mo follow-up'],
    },
  },
  {
    id: 'medspa',
    accent: '#7BD9B5',
    accentSoft: '#E0F5EC',
    code: '03',
    photo: '/photos/patient-consultation.png',
    es: {
      name: 'Spa / MedSpa',
      tag: 'Bienestar Médico',
      desc: 'El santuario de Vivezza: tratamientos no invasivos respaldados por medicina regenerativa y dermatología clínica.',
      doctor: 'Dra. Camila Reyes',
      doctorRole: 'Directora MedSpa',
      procedures: ['Hydrafacial Pro', 'IV Therapy', 'Láser Pico', 'Botox & Fillers'],
    },
    en: {
      name: 'Spa / MedSpa',
      tag: 'Medical Wellness',
      desc: 'The Vivezza sanctuary: non-invasive treatments backed by regenerative medicine and clinical dermatology.',
      doctor: 'Dr. Camila Reyes',
      doctorRole: 'MedSpa Director',
      procedures: ['Hydrafacial Pro', 'IV Therapy', 'Pico Laser', 'Botox & Fillers'],
    },
  },
  {
    id: 'cirugia-general',
    accent: '#8FC7E0',
    accentSoft: '#E2F0F7',
    code: '04',
    photo: '/photos/recovery-room.png',
    es: {
      name: 'Cirugía General',
      tag: 'Mínimamente Invasiva',
      desc: 'Quirófanos híbridos con torres laparoscópicas 4K. Recuperación más rápida, cicatrices imperceptibles.',
      doctor: 'Dr. Rafael Ortega',
      doctorRole: 'Jefe de Cirugía General',
      procedures: ['Hernias', 'Vesícula', 'Apendicectomía', 'Reflujo'],
    },
    en: {
      name: 'General Surgery',
      tag: 'Minimally Invasive',
      desc: 'Hybrid operating rooms with 4K laparoscopic towers. Faster recovery, near-invisible scars.',
      doctor: 'Dr. Rafael Ortega',
      doctorRole: 'Chief, General Surgery',
      procedures: ['Hernia', 'Gallbladder', 'Appendectomy', 'Reflux'],
    },
  },
  {
    id: 'traumatologia',
    accent: '#4682B4',
    accentSoft: '#DEE9F3',
    code: '05',
    photo: '/photos/surgery-team.png',
    es: {
      name: 'Traumatología',
      tag: 'Ortopedia de Alto Rendimiento',
      desc: 'Reemplazos articulares robóticos y medicina deportiva para devolverte movimiento sin dolor.',
      doctor: 'Dr. Lucas Pereda',
      doctorRole: 'Ortopedista — Cirugía Robótica',
      procedures: ['Prótesis de Rodilla', 'Cadera', 'Artroscopía', 'Plasma Rico'],
    },
    en: {
      name: 'Orthopedics',
      tag: 'High-Performance Care',
      desc: 'Robotic joint replacement and sports medicine, designed to restore movement without pain.',
      doctor: 'Dr. Lucas Pereda',
      doctorRole: 'Orthopedic Surgeon — Robotics',
      procedures: ['Knee Replacement', 'Hip', 'Arthroscopy', 'PRP Therapy'],
    },
  },
  {
    id: 'ginecologia',
    accent: '#F4A4A4',
    accentSoft: '#FBE4E4',
    code: '06',
    photo: '/photos/patient-consultation.png',
    es: {
      name: 'Ginecología',
      tag: 'Salud Femenina Integral',
      desc: 'Desde fertilidad hasta menopausia: cuidado individualizado en un entorno cálido, discreto y de confianza.',
      doctor: 'Dra. Valentina Solís',
      doctorRole: 'Ginecóloga — Fertilidad',
      procedures: ['Fertilidad', 'Histeroscopía', 'Menopausia', 'Wellness Hormonal'],
    },
    en: {
      name: 'Gynecology',
      tag: "Integral Women's Health",
      desc: 'From fertility to menopause: personalized care in a warm, discreet, trustworthy setting.',
      doctor: 'Dr. Valentina Solís',
      doctorRole: 'Gynecologist — Fertility',
      procedures: ['Fertility', 'Hysteroscopy', 'Menopause', 'Hormone Wellness'],
    },
  },
  {
    id: 'oncologia',
    accent: '#B8A8E0',
    accentSoft: '#ECE6F7',
    code: '07',
    photo: '/photos/doctor-portrait.png',
    es: {
      name: 'Oncología',
      tag: 'Tratamiento Multidisciplinario',
      desc: 'Tumor board internacional. Terapias dirigidas, inmunoterapia y acompañamiento humano en cada etapa.',
      doctor: 'Dr. Mateo Zamora',
      doctorRole: 'Oncólogo Médico',
      procedures: ['Inmunoterapia', 'Cirugía Oncológica', 'Radioterapia', 'Cuidados de soporte'],
    },
    en: {
      name: 'Oncology',
      tag: 'Multidisciplinary Care',
      desc: 'International tumor board. Targeted therapies, immunotherapy, and human support at every step.',
      doctor: 'Dr. Mateo Zamora',
      doctorRole: 'Medical Oncologist',
      procedures: ['Immunotherapy', 'Oncologic Surgery', 'Radiation', 'Supportive Care'],
    },
  },
  {
    id: 'urologia',
    accent: '#0047AB',
    accentSoft: '#D9E2F2',
    code: '08',
    photo: '/photos/recovery-room.png',
    es: {
      name: 'Urología',
      tag: 'Cirugía Robótica DaVinci',
      desc: 'Próstata, riñón y salud masculina con precisión robótica. Discreción y resultados de excelencia.',
      doctor: 'Dr. Sebastián Iturra',
      doctorRole: 'Urólogo — Cirugía Robótica',
      procedures: ['Próstata', 'Cálculos', 'Andrología', 'Vasectomía'],
    },
    en: {
      name: 'Urology',
      tag: 'DaVinci Robotic Surgery',
      desc: "Prostate, kidney, and men's health with robotic precision. Discreet, world-class outcomes.",
      doctor: 'Dr. Sebastián Iturra',
      doctorRole: 'Urologist — Robotic Surgery',
      procedures: ['Prostate', 'Stones', 'Andrology', 'Vasectomy'],
    },
  },
  {
    id: 'oto-maxilo',
    accent: '#C8A57F',
    accentSoft: '#EFE6D8',
    code: '09',
    photo: '/photos/doctor-portrait.png',
    es: {
      name: 'Otorrino & Maxilofacial',
      tag: 'Cabeza, Cuello & Sueño',
      desc: 'Septoplastia funcional, cirugía maxilar guiada por 3D y tratamiento integral del ronquido y apnea.',
      doctor: 'Dr. Joaquín Bravo',
      doctorRole: 'Otorrino — Cirugía Maxilofacial',
      procedures: ['Septoplastia', 'Apnea del sueño', 'Maxilar 3D', 'Sinusal'],
    },
    en: {
      name: 'ENT & Maxillofacial',
      tag: 'Head, Neck & Sleep',
      desc: 'Functional septoplasty, 3D-guided maxillary surgery, and full snoring & apnea care.',
      doctor: 'Dr. Joaquín Bravo',
      doctorRole: 'ENT — Maxillofacial Surgery',
      procedures: ['Septoplasty', 'Sleep Apnea', '3D Maxillary', 'Sinus'],
    },
  },
]

export interface StringDict {
  eyebrow: string
  locator: string
  navAbout: string
  navSpecialties: string
  navDoctors: string
  navContact: string
  navBook: string
  heroBadge: string
  heroTitleA: string
  heroTitleB: string
  heroTitleC: string
  heroSub: string
  heroCta: string
  heroCtaSub: string
  heroSecondary: string
  statSpecialties: string
  statDoctors: string
  statSatisfaction: string
  statYears: string
  showcaseEyebrow: string
  showcaseTitle: string
  showcaseTitleEm: string
  showcaseSub: string
  learnMore: string
  bookSpecialty: string
  titularLabel: string
  proceduresLabel: string
}

export const STRINGS: Record<Lang, StringDict> = {
  es: {
    eyebrow: 'Vivezza · Medical Center',
    locator: 'Punta del Este · Uruguay',
    navAbout: 'Filosofía',
    navSpecialties: 'Especialidades',
    navDoctors: 'Médicos',
    navContact: 'Contacto',
    navBook: 'Solicitar Evaluación',
    heroBadge: 'JCI Acreditado · Programa VIP Internacional',
    heroTitleA: 'Vivezza:',
    heroTitleB: 'tu salud',
    heroTitleC: 'es nuestra prioridad.',
    heroSub: 'Experiencia médica integral con apoyo humano incondicional. Nueve especialidades, instalaciones de vanguardia y un solo estándar de excelencia.',
    heroCta: 'Solicitar Evaluación Gratuita',
    heroCtaSub: 'Respuesta en menos de 30 min',
    heroSecondary: 'Recorrido virtual',
    statSpecialties: 'Especialidades',
    statDoctors: 'Médicos titulares',
    statSatisfaction: 'Satisfacción',
    statYears: 'Años de tradición',
    showcaseEyebrow: 'Nuestras especialidades',
    showcaseTitle: 'Nueve especialidades.',
    showcaseTitleEm: 'Un mismo estándar de excelencia.',
    showcaseSub: 'Cada especialidad opera con su propio equipo titular, infraestructura y protocolos — orquestados bajo el sello Vivezza.',
    learnMore: 'Conocer al equipo',
    bookSpecialty: 'Agendar evaluación',
    titularLabel: 'Médico Titular',
    proceduresLabel: 'Procedimientos destacados',
  },
  en: {
    eyebrow: 'Vivezza · Medical Center',
    locator: 'Punta del Este · Uruguay',
    navAbout: 'Philosophy',
    navSpecialties: 'Specialties',
    navDoctors: 'Physicians',
    navContact: 'Contact',
    navBook: 'Book Evaluation',
    heroBadge: 'JCI Accredited · International VIP Program',
    heroTitleA: 'Vivezza:',
    heroTitleB: 'your health',
    heroTitleC: 'is our priority.',
    heroSub: 'Comprehensive medical experience with unconditional human support. Nine specialties, state-of-the-art facilities, and one standard of excellence.',
    heroCta: 'Request a Free Evaluation',
    heroCtaSub: 'We reply in under 30 min',
    heroSecondary: 'Virtual tour',
    statSpecialties: 'Specialties',
    statDoctors: 'Lead physicians',
    statSatisfaction: 'Satisfaction',
    statYears: 'Years of legacy',
    showcaseEyebrow: 'Our specialties',
    showcaseTitle: 'Nine specialties.',
    showcaseTitleEm: 'One standard of excellence.',
    showcaseSub: 'Each specialty runs its own lead team, infrastructure, and protocols — orchestrated under the Vivezza seal.',
    learnMore: 'Meet the team',
    bookSpecialty: 'Book evaluation',
    titularLabel: 'Lead Physician',
    proceduresLabel: 'Featured procedures',
  },
}
