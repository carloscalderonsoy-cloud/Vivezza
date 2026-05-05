'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

/* ─── Brand tokens ───────────────────────────────────────── */
const ACCENT = '#FF7F50'
const ACCENT_SOFT = '#FCE3D8'
const CLINIC = '#1B5FBE'

type Lang = 'es' | 'en'

/* ─── Strings ────────────────────────────────────────────── */
const S = {
  es: {
    navPre: 'Pre-consulta', navWA: 'WhatsApp',
    breadcrumb: 'Cirugía Plástica',
    heroBadge: 'CMCPER Certificado #2600 · Vivezza',
    heroAvailable: 'Disponible hoy',
    heroH1a: 'Armonía, proporción', heroH1b: 'y resultados', heroH1c: 'naturales.',
    heroP: 'El Dr. Zuriel Michel no sigue tendencias virales. Diseña cada procedimiento alrededor de tu anatomía, tu proporción y tus metas — con acompañamiento one-on-one desde la valoración hasta la recuperación completa.',
    heroChips: ['CMCPER Certificado #2600', 'Body Contour Internacional', 'Quirófano JCI Acreditado', 'Acompañamiento 1 a 1'],
    heroCta: 'Agenda tu valoración gratuita',
    certLabel: 'Certificación', certSub: 'CMCPER',
    doctorName: 'Dr. Zuriel Michel Barrera',
    doctorRole: 'Cirujano Plástico, Estético y Reconstructivo',
    doctorCert: 'Cert. CMCPER #2600',
    trustBarLabel: 'Respaldo institucional',
    trustItems: [
      { label: 'CMCPER', sub: 'Consejo Mexicano de Cirugía Plástica' },
      { label: 'AMCPER', sub: 'Asociación Mexicana de Cirugía Plástica' },
      { label: 'JCI', sub: 'Joint Commission International' },
      { label: 'ISO 9001', sub: 'Gestión de Calidad' },
    ],
    /* when */
    whenEyebrow: 'Señales de consulta',
    whenTitle: '¿Cuándo es el momento',
    whenTitleEm: 'de verte con el Dr. Michel?',
    whenSub: 'No necesitas esperar al "momento perfecto". Si alguna de estas situaciones te describe, una valoración sin costo puede darte claridad y un plan real.',
    whenSituations: [
      { emoji: '🤱', title: 'Después de la maternidad', desc: 'Tu figura cambió con los embarazos y el ejercicio ya no es suficiente para recuperarla.' },
      { emoji: '⚖️', title: 'Bajaste de peso y tienes piel sobrante', desc: 'La cirugía contorna lo que la dieta y el gym no pueden eliminar.' },
      { emoji: '👃', title: 'Tu nariz no armoniza con tu rostro', desc: 'No se trata de moda. Se trata de proporción y de sentirte en paz con tu reflejo.' },
      { emoji: '💪', title: 'Quieres definición real, no solo bajar de peso', desc: 'La Lipo HD y el BBL esculpen lo que el entrenamiento no puede lograr.' },
      { emoji: '🪞', title: 'El tiempo está cambiando tu rostro', desc: 'Párpados caídos, ptosis o pérdida de contorno que afectan tu confianza.' },
      { emoji: '💊', title: 'Asimetría o corrección reconstructiva', desc: 'El Dr. Michel atiende diferencias congénitas, post-accidente o revisiones de cirugías previas.' },
    ],
    whenCta: 'Me identifico — quiero consultar',
    /* procedures (simplified 3 trending) */
    procsEyebrow: 'Procedimientos destacados',
    procsTitle: 'Los más solicitados.',
    procsSub: 'Tres procedimientos de alto impacto, diseñados para resultados naturales y recuperación optimizada.',
    procsExploreCta: 'Especialidades del Dr. Michel',
    procsCollapseCta: 'Ocultar lista',
    procsAllTags: ['Todos', 'Contorno Corporal', 'Mamaria', 'Facial'],
    procsAll: [
      { name: 'Liposucción HD / Lipo Vaser', tag: 'Contorno Corporal', desc: 'Definición muscular de alta definición mediante ultrasonido. Abdomen, flancos, espalda y muslos con precisión milimétrica.' },
      { name: 'Lipoescultura', tag: 'Contorno Corporal', desc: 'Remodelado integral de la silueta redistribuyendo grasa para lograr proporciones naturales y armónicas.' },
      { name: 'Abdominoplastia (Tummy Tuck)', tag: 'Contorno Corporal', desc: 'Extirpación de piel sobrante y reparación muscular del abdomen. Ideal post-maternidad o tras pérdida de peso significativa.' },
      { name: 'Mini Abdominoplastia', tag: 'Contorno Corporal', desc: 'Versión de menor alcance para exceso localizado bajo el ombligo. Cicatriz discreta y recuperación más rápida.' },
      { name: 'Mommy Makeover', tag: 'Contorno Corporal', desc: 'Protocolo combinado: abdominoplastia, mamoplastia y lipo en una sola intervención. Recuperación única, resultados integrales.' },
      { name: 'BBL (Brazilian Butt Lift)', tag: 'Contorno Corporal', desc: 'Transferencia de grasa propia con técnica segura para proyección y forma en glúteos. Sin implantes, resultado natural.' },
      { name: 'Aumento de busto', tag: 'Mamaria', desc: 'Implantes de silicón de alta cohesividad. Enfoque en proporción y armonía, no solo en tamaño.' },
      { name: 'Reducción mamaria', tag: 'Mamaria', desc: 'Alivia dolor de espalda, mejora postura y redefine la silueta cuando el volumen genera molestias.' },
      { name: 'Mastopexia (levantamiento)', tag: 'Mamaria', desc: 'Reposiciona el busto caído sin cambiar necesariamente el volumen. Puede combinarse con aumento.' },
      { name: 'Lip Lift', tag: 'Facial', desc: 'Eleva y define el labio superior para rejuvenecer el tercio inferior del rostro. Resultado permanente y natural.' },
      { name: 'Lipopapada (Chin Lipo)', tag: 'Facial', desc: 'Elimina la grasa submentoniana para definir el contorno del cuello y la mandíbula. Mínimamente invasivo.' },
      { name: 'Jaw Contouring', tag: 'Facial', desc: 'Redefinición del ángulo y la línea mandibular para un contorno facial más simétrico y definido.' },
      { name: 'Mini Lifting Facial', tag: 'Facial', desc: 'Reposiciona tejidos caídos de mejillas y cuello con incisiones mínimas. Rejuvenece sin cambiar tu identidad.' },
      { name: 'Blefaroplastia', tag: 'Facial', desc: 'Corrección de párpados superiores e inferiores caídos o con exceso de piel. Alta precisión, procedimiento ambulatorio.' },
      { name: 'FaceTite & Endolift', tag: 'Facial', desc: 'Radiofrecuencia para tensar la piel sin cirugía abierta. Ideales como complemento o alternativa al lifting.' },
    ],
    procsFeatured: [
      {
        name: 'Mommy Makeover',
        tag: 'Transformación integral',
        icon: '🤱',
        desc: 'Abdominoplastia + mamoplastia + lipo en una sola cirugía. Una recuperación, resultados completos. El protocolo más solicitado post-maternidad.',
        bullets: ['Abdominoplastia incluida', 'Mamoplastia a tu medida', 'Lipo de zonas tratadas', 'Recuperación única'],
      },
      {
        name: 'Lipo HD + BBL',
        tag: 'Contorno corporal',
        icon: '💪',
        desc: 'Liposucción de alta definición con transferencia de grasa propia a glúteos. Definición muscular y proyección natural — sin implantes.',
        bullets: ['Lipo Vaser HD 4K', 'BBL con técnica segura', 'Sin implantes', 'Resultado permanente'],
      },
      {
        name: 'Abdominoplastia',
        tag: 'Abdomen plano',
        icon: '⚖️',
        desc: 'Extirpación de piel sobrante y reparación del músculo abdominal. Versión completa o mini según tu caso. Cicatriz discreta, resultado definitivo.',
        bullets: ['Tummy Tuck completo', 'Mini Abdominoplastia', 'Reparación muscular', 'Cicatriz baja y discreta'],
      },
    ],
    /* before/after */
    beforeAfterEyebrow: 'Resultados',
    beforeAfterTitle: 'Antes y después.',
    beforeAfterTitleEm: 'Resultados reales.',
    beforeAfterSub: 'Casos del Dr. Michel. El archivo fotográfico completo se presenta en consulta privada, con pleno respeto a la privacidad de cada paciente.',
    beforeAfterNote: '🔒 Material adicional disponible en consulta con autorización firmada de cada paciente.',
    beforeAfterCases: [
      { label: 'Caso 1', proc: 'Lipo HD + BBL' },
      { label: 'Caso 2', proc: 'Abdominoplastia' },
      { label: 'Caso 3', proc: 'Mommy Makeover' },
    ],
    beforeLabel: 'Antes', afterLabel: 'Después',
    /* why */
    whyEyebrow: 'La filosofía del Dr. Michel',
    whyTitle: 'Ética médica y', whyTitleEm: 'precisión artística.',
    whySub: 'Honestidad clínica, proporciones estudiadas y seguimiento real. No todos los procedimientos son para todos los pacientes — y el Dr. Michel te lo dice con claridad.',
    whyDiffs: [
      { icon: '🎯', title: 'Resultados naturales, no tendencias virales', desc: 'El Dr. Michel rechaza las modas estéticas de redes sociales que no son médicamente adecuadas. La cirugía mejora versiones, no transforma identidades.' },
      { icon: '🏥', title: 'Quirófano hospitalario, no clínica ambulatoria', desc: 'Cada procedimiento se realiza en instalaciones certificadas con equipo de soporte hospitalario completo disponible en todo momento.' },
      { icon: '🤝', title: 'Acompañamiento one-on-one', desc: 'El Dr. Michel no deja a sus pacientes solos después del quirófano. Diseña contigo una recuperación óptima y tranquila desde el primer día.' },
      { icon: '🌎', title: 'Formación internacional continua', desc: 'Especialización en Body Contour Training en México y Colombia. Asistente activo a congresos AMCPER para mantener técnicas al día.' },
    ],
    whyStats: [
      { v: '#2600', l: 'Cert. CMCPER' }, { v: '3', l: 'Sedes de atención' },
      { v: '98%', l: 'Satisfacción reportada' }, { v: '24/7', l: 'Soporte post-op' },
    ],
    /* testimonials */
    testimonialsEyebrow: 'Pacientes reales',
    testimonialsTitle: 'Lo que dicen quienes', testimonialsTitleEm: 'ya confían en el Dr. Michel.',
    testimonials: [
      { quote: 'Como enfermera, sé reconocer la atención médica de calidad cuando la veo. El equipo fue increíblemente profesional. El Dr. Zuriel tiene un trato tranquilo y tranquilizador en todo momento.', name: 'Nathaly T.', proc: 'Lipopapada, FaceTite y Endolift' },
      { quote: 'Excelente cirujano. Muy atento. Explica las cosas bien. Escucha tus preocupaciones y deseos. Gran cuidado postoperatorio.', name: 'Pam C.', proc: 'Aumento de busto' },
      { quote: 'Lo que más valoro es su honestidad. Me explicó qué procedimientos eran adecuados para mí y cuáles no. Eso genera una confianza enorme antes de entrar al quirófano.', name: 'Paciente verificada', proc: 'Mommy Makeover' },
    ],
    /* form */
    formTriggerBtn: 'Iniciar mi pre-consulta',
    formTriggerSub: 'Gratis · 3 minutos · 100% confidencial',
    formEyebrow: 'Valoración gratuita', formTitle: 'Cuéntanos sobre ti',
    formSub: 'Esta información permite que el Dr. Michel llegue a tu primera consulta ya preparado para tu caso. 100% confidencial.',
    formQ: [
      'Nombre completo *', 'Edad *', '¿Qué procedimiento te interesa? *',
      '¿Cuántos partos has tenido y de qué tipo?', 'Peso actual y talla',
      '¿Has tenido cirugías estéticas previas?', '¿Tienes alguna enfermedad crónica?',
      '¿Fumas?', '¿Estás en período de lactancia o embarazo?',
      '¿Tienes fotos de referencia del resultado que buscas?',
      '¿Tienes alguien que te acompañe durante la recuperación?',
      '¿Vienes desde fuera de Tijuana o del extranjero?',
      '¿Necesitas hospedaje o transporte?', 'Fecha aproximada de interés',
    ],
    formQ7hint: '(diabetes, hipertensión, problemas de coagulación u otra)',
    formQ7detail: '¿Cuál? ¿Está controlada?',
    formQ8detail: '¿Cuántos cigarros al día aproximadamente?',
    formProcs: ['Mommy Makeover', 'BBL', 'Lipo HD', 'Aumento de busto', 'Abdominoplastia', 'Facial', 'Otro'],
    formPrevOps: ['No', 'Sí, una', 'Sí, varias'],
    formYesNo: ['No', 'Sí'],
    formSmoke: ['No', 'Ocasionalmente', 'Sí, regularmente'],
    formLactancia: ['No', 'Embarazada', 'En lactancia'],
    formPhotos: ['Sí, las tengo', 'Aún no', 'Las buscaré antes'],
    formCompanion: ['Sí', 'No, necesito apoyo', 'Aún no sé'],
    formOrigin: ['Soy de Tijuana', 'Vengo de otro estado', 'Vengo de USA / extranjero'],
    formHospedaje: ['Hospedaje', 'Transporte aeropuerto', 'Traslado clínica', 'No necesito'],
    formSubmit: 'Enviar al Dr. Michel por WhatsApp',
    formNote: 'Al enviar, se abre WhatsApp con tu información resumida. Respuesta en menos de 30 min.',
    formSuccess: '¡Tu valoración fue enviada!',
    formSuccessSub: 'Se abrió WhatsApp con tu información. El Dr. Michel o su equipo te responden en menos de 30 minutos en horario de atención.',
    formEdit: 'Editar respuestas',
    formPesoPlaceholder: 'Peso (kg)', formTallaPlaceholder: 'Talla (cm)',
    waHeader: '*Pre-consulta Cirugía Plástica — Vivezza*\n*Dr. Zuriel Michel Barrera #CMCPER2600*',
    /* final */
    finalEyebrow: 'Contáctanos hoy', finalTitle: 'Hablemos hoy mismo.',
    sedesTijuanaBadge: 'Turismo Médico · All-Inclusive',
    sedesTijuanaNote: 'Paquetes all-inclusive para pacientes de USA y Canadá. Coordinación desde el cruce fronterizo hasta la recuperación.',
    sedes: [
      { ciudad: 'Tijuana, B.C.', detalle: 'Erasmo Castellanos q.1874-102\nZona urbana Río · Tijuana, B.C.' },
      { ciudad: 'Ciudad de México', detalle: 'Hospital San Ángel Inn Satélite\nConsultorio 1406' },
      { ciudad: 'Guadalajara', detalle: 'Médica Golfo de Cortés' },
    ],
    mapTitle: 'Vivezza Tijuana',
  },
  en: {
    navPre: 'Pre-consultation', navWA: 'WhatsApp',
    breadcrumb: 'Plastic Surgery',
    heroBadge: 'CMCPER Certified #2600 · Vivezza',
    heroAvailable: 'Available today',
    heroH1a: 'Harmony, proportion', heroH1b: 'and natural', heroH1c: 'results.',
    heroP: "Dr. Zuriel Michel doesn't follow viral trends. He designs every procedure around your anatomy, your proportions and your goals — with one-on-one care from the first consultation through full recovery.",
    heroChips: ['CMCPER Certified #2600', 'International Body Contour', 'JCI Accredited OR', 'One-on-One Care'],
    heroCta: 'Schedule your free evaluation',
    certLabel: 'Certification', certSub: 'CMCPER',
    doctorName: 'Dr. Zuriel Michel Barrera',
    doctorRole: 'Plastic, Aesthetic & Reconstructive Surgeon',
    doctorCert: 'Cert. CMCPER #2600',
    trustBarLabel: 'Institutional backing',
    trustItems: [
      { label: 'CMCPER', sub: 'Mexican Board of Plastic Surgery' },
      { label: 'AMCPER', sub: 'Mexican Association of Plastic Surgery' },
      { label: 'JCI', sub: 'Joint Commission International' },
      { label: 'ISO 9001', sub: 'Quality Management' },
    ],
    whenEyebrow: 'Consultation signals',
    whenTitle: 'When is the right time',
    whenTitleEm: 'to see Dr. Michel?',
    whenSub: "You don't need to wait for the \"perfect moment.\" If any of these situations describe you, a free evaluation can give you clarity and a real plan.",
    whenSituations: [
      { emoji: '🤱', title: 'After motherhood', desc: "Your body changed through pregnancy and exercise alone isn't enough to restore your figure." },
      { emoji: '⚖️', title: 'Weight loss left excess skin', desc: "Surgery contours what diet and exercise can't remove." },
      { emoji: '👃', title: "Your nose doesn't harmonize with your face", desc: "It's not about trends. It's about proportion and feeling at peace with your reflection." },
      { emoji: '💪', title: 'You want real definition, not just weight loss', desc: 'HD Lipo and BBL sculpt what training alone cannot achieve.' },
      { emoji: '🪞', title: 'Time is changing your face', desc: 'Drooping eyelids, ptosis, or loss of contour that affects your confidence.' },
      { emoji: '💊', title: 'Asymmetry or reconstructive correction', desc: 'Dr. Michel treats congenital differences, post-accident cases, and prior surgery revisions.' },
    ],
    whenCta: 'This describes me — I want to consult',
    procsEyebrow: 'Featured procedures',
    procsTitle: 'The most requested.',
    procsSub: 'Three high-impact procedures designed for natural results and optimized recovery.',
    procsExploreCta: "Dr. Michel's specialties",
    procsCollapseCta: 'Hide list',
    procsAllTags: ['All', 'Body Contour', 'Breast', 'Facial'],
    procsAll: [
      { name: 'HD Lipo / Vaser Lipo', tag: 'Body Contour', desc: 'High-definition muscle definition using ultrasound. Abdomen, flanks, back and thighs with millimetric precision.' },
      { name: 'Liposculpture', tag: 'Body Contour', desc: 'Full silhouette remodeling by redistributing fat to achieve natural, harmonious proportions.' },
      { name: 'Abdominoplasty (Tummy Tuck)', tag: 'Body Contour', desc: 'Removal of excess skin and abdominal muscle repair. Ideal post-maternity or after significant weight loss.' },
      { name: 'Mini Abdominoplasty', tag: 'Body Contour', desc: 'Smaller-scope version for localized excess below the navel. Discreet scar and faster recovery.' },
      { name: 'Mommy Makeover', tag: 'Body Contour', desc: 'Combined protocol: abdominoplasty, breast surgery and lipo in a single session. One recovery, comprehensive results.' },
      { name: 'BBL (Brazilian Butt Lift)', tag: 'Body Contour', desc: 'Own-fat transfer with safe technique for gluteal projection and shape. No implants, natural result.' },
      { name: 'Breast augmentation', tag: 'Breast', desc: 'High-cohesion silicone implants. Focus on proportion and harmony, not just size.' },
      { name: 'Breast reduction', tag: 'Breast', desc: 'Relieves back pain, improves posture and redefines the silhouette when volume causes physical discomfort.' },
      { name: 'Mastopexy (breast lift)', tag: 'Breast', desc: 'Repositions sagging breasts without necessarily changing volume. Can be combined with augmentation.' },
      { name: 'Lip Lift', tag: 'Facial', desc: 'Lifts and defines the upper lip to rejuvenate the lower third of the face. Permanent and natural result.' },
      { name: 'Chin Lipo (Lipopapada)', tag: 'Facial', desc: 'Removes submental fat to define the neck and jawline contour. Minimally invasive.' },
      { name: 'Jaw Contouring', tag: 'Facial', desc: 'Redefinition of the jaw angle and mandibular line for a more symmetrical, defined facial contour.' },
      { name: 'Mini Facelift', tag: 'Facial', desc: 'Repositions sagging cheek and neck tissue with minimal incisions. Rejuvenates without changing your identity.' },
      { name: 'Blepharoplasty', tag: 'Facial', desc: 'Correction of drooping upper and lower eyelids or excess skin. High precision, outpatient procedure.' },
      { name: 'FaceTite & Endolift', tag: 'Facial', desc: 'Radiofrequency to tighten skin without open surgery. Ideal as a complement or alternative to facelift.' },
    ],
    procsFeatured: [
      {
        name: 'Mommy Makeover',
        tag: 'Full transformation',
        icon: '🤱',
        desc: 'Abdominoplasty + breast surgery + lipo in a single surgery. One recovery, complete results. The most requested post-maternity protocol.',
        bullets: ['Abdominoplasty included', 'Breast surgery tailored to you', 'Lipo of treated areas', 'Single recovery'],
      },
      {
        name: 'HD Lipo + BBL',
        tag: 'Body contouring',
        icon: '💪',
        desc: 'High-definition liposuction with own-fat transfer to the buttocks. Muscle definition and natural projection — no implants.',
        bullets: ['4K Vaser HD Lipo', 'Safe-technique BBL', 'No implants', 'Permanent result'],
      },
      {
        name: 'Abdominoplasty',
        tag: 'Flat abdomen',
        icon: '⚖️',
        desc: 'Removal of excess skin and abdominal muscle repair. Full or mini version depending on your case. Discreet scar, definitive result.',
        bullets: ['Full Tummy Tuck', 'Mini Abdominoplasty', 'Muscle repair', 'Low, discreet scar'],
      },
    ],
    beforeAfterEyebrow: 'Results',
    beforeAfterTitle: 'Before and after.',
    beforeAfterTitleEm: 'Real results.',
    beforeAfterSub: "Cases from Dr. Michel. The full photo archive is presented in private consultation, with full respect for each patient's privacy.",
    beforeAfterNote: '🔒 Additional material available in consultation with each patient\'s signed authorization.',
    beforeAfterCases: [
      { label: 'Case 1', proc: 'HD Lipo + BBL' },
      { label: 'Case 2', proc: 'Abdominoplasty' },
      { label: 'Case 3', proc: 'Mommy Makeover' },
    ],
    beforeLabel: 'Before', afterLabel: 'After',
    whyEyebrow: "Dr. Michel's philosophy",
    whyTitle: 'Medical ethics and', whyTitleEm: 'artistic precision.',
    whySub: "Clinical honesty, studied proportions and real follow-up. Not every procedure is right for every patient — and Dr. Michel will tell you so clearly.",
    whyDiffs: [
      { icon: '🎯', title: 'Natural results, not viral trends', desc: "Dr. Michel rejects social-media aesthetic trends that aren't medically appropriate. Surgery improves versions, it doesn't transform identities." },
      { icon: '🏥', title: 'Hospital OR, not an outpatient clinic', desc: 'Every procedure is performed in certified facilities with full hospital support equipment available at all times.' },
      { icon: '🤝', title: 'One-on-one care', desc: "Dr. Michel doesn't leave his patients alone after surgery. He designs an optimal, peaceful recovery with you from day one." },
      { icon: '🌎', title: 'Continuous international training', desc: 'Specialization in Body Contour Training in Mexico and Colombia. Active attendee at AMCPER congresses to keep techniques current.' },
    ],
    whyStats: [
      { v: '#2600', l: 'CMCPER Cert.' }, { v: '3', l: 'Practice locations' },
      { v: '98%', l: 'Reported satisfaction' }, { v: '24/7', l: 'Post-op support' },
    ],
    testimonialsEyebrow: 'Real patients',
    testimonialsTitle: 'What those who already', testimonialsTitleEm: 'trust Dr. Michel say.',
    testimonials: [
      { quote: 'As a nurse, I know how to recognize quality medical care when I see it. The team was incredibly professional. Dr. Zuriel has a calm and reassuring manner at all times.', name: 'Nathaly T.', proc: 'Chin Lipo, FaceTite & Endolift' },
      { quote: 'Excellent surgeon. Very attentive. He explains things well. He listens to your concerns and wishes. Great post-operative care.', name: 'Pam C.', proc: 'Breast augmentation' },
      { quote: "What I value most is his honesty. He explained which procedures were right for me and which weren't. That builds enormous trust before entering the operating room.", name: 'Verified patient', proc: 'Mommy Makeover' },
    ],
    formTriggerBtn: 'Start my pre-consultation',
    formTriggerSub: 'Free · 3 minutes · 100% confidential',
    formEyebrow: 'Free evaluation', formTitle: 'Tell us about yourself',
    formSub: 'This information allows Dr. Michel to arrive at your first consultation already prepared for your case. 100% confidential.',
    formQ: [
      'Full name *', 'Age *', 'Which procedure are you interested in? *',
      'How many deliveries have you had and what type?', 'Current weight and height',
      'Have you had previous cosmetic surgeries?', 'Do you have any chronic illness?',
      'Do you smoke?', 'Are you breastfeeding or pregnant?',
      "Do you have reference photos of the result you're looking for?",
      'Do you have someone to accompany you during recovery?',
      'Are you traveling from outside Tijuana or from abroad?',
      'Do you need accommodation or transportation?', 'Approximate date of interest',
    ],
    formQ7hint: '(diabetes, hypertension, clotting issues or other)',
    formQ7detail: 'Which one? Is it controlled?',
    formQ8detail: 'Approximately how many cigarettes per day?',
    formProcs: ['Mommy Makeover', 'BBL', 'HD Lipo', 'Breast augmentation', 'Abdominoplasty', 'Facial', 'Other'],
    formPrevOps: ['No', 'Yes, one', 'Yes, several'],
    formYesNo: ['No', 'Yes'],
    formSmoke: ['No', 'Occasionally', 'Yes, regularly'],
    formLactancia: ['No', 'Pregnant', 'Breastfeeding'],
    formPhotos: ["Yes, I have them", "Not yet", "I'll find them before"],
    formCompanion: ['Yes', 'No, I need support', 'Not sure yet'],
    formOrigin: ["I'm from Tijuana", 'Coming from another state', 'Coming from USA / abroad'],
    formHospedaje: ['Accommodation', 'Airport transport', 'Clinic transfer', "I don't need it"],
    formSubmit: 'Send to Dr. Michel via WhatsApp',
    formNote: 'Submitting opens WhatsApp with your summarized info. Response in under 30 min.',
    formSuccess: 'Your evaluation has been sent!',
    formSuccessSub: "WhatsApp opened with your information. Dr. Michel's team will reply within 30 minutes during office hours.",
    formEdit: 'Edit answers',
    formPesoPlaceholder: 'Weight (kg)', formTallaPlaceholder: 'Height (cm)',
    waHeader: '*Pre-consultation Plastic Surgery — Vivezza*\n*Dr. Zuriel Michel Barrera #CMCPER2600*',
    finalEyebrow: 'Contact us today', finalTitle: "Let's talk today.",
    sedesTijuanaBadge: 'Medical Tourism · All-Inclusive',
    sedesTijuanaNote: 'All-inclusive packages for patients from the US and Canada. Coordination from border crossing to recovery.',
    sedes: [
      { ciudad: 'Tijuana, B.C.', detalle: 'Erasmo Castellanos q.1874-102\nZona urbana Río · Tijuana, B.C.' },
      { ciudad: 'Mexico City', detalle: 'Hospital San Ángel Inn Satélite\nOffice 1406' },
      { ciudad: 'Guadalajara', detalle: 'Médica Golfo de Cortés' },
    ],
    mapTitle: 'Vivezza Tijuana',
  },
} as const

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
function CheckIcon({ size = 16, color = CLINIC }: { size?: number; color?: string }) {
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
function Nav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = S[lang]
  return (
    <header className="sticky top-0 z-30 section-pad py-3 bg-white/90 backdrop-blur border-b border-ink/8">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg grid place-items-center text-white text-[13px] font-bold" style={{ background: CLINIC }}>V</div>
          <div className="leading-none">
            <div className="text-[15px] font-bold tracking-tight text-ink">Vivezza</div>
            <div className="text-[8.5px] font-bold tracking-[0.2em] uppercase text-clinic/65">
              {lang === 'es' ? 'CENTRO QUIRÚRGICO' : 'SURGICAL CENTER'}
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="rounded-full border border-ink/15 bg-white px-3 py-1.5 text-[11.5px] font-bold tracking-wider text-ink/70 hover:bg-stone transition-colors">
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a href="#form" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-[12.5px] font-semibold text-ink hover:bg-stone transition-colors">
            {t.navPre}
          </a>
          <a href="https://wa.me/526649749264" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12.5px] font-semibold text-white" style={{ backgroundColor: '#22C35E' }}>
            <WhatsAppIcon size={14} />{t.navWA}
          </a>
        </div>
      </div>
    </header>
  )
}

/* ─── 1. Hero ────────────────────────────────────────────── */
function HeroSection({ lang }: { lang: Lang }) {
  const t = S[lang]
  return (
    <section className="section-pad pt-14 pb-16 relative overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20"
        style={{ background: `radial-gradient(closest-side, ${ACCENT}60, transparent 70%)` }} />
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-[12px] font-semibold text-muted">
            <Link href="/" className="hover:text-clinic transition-colors">Vivezza</Link>
            <span className="text-ink/30">/</span>
            <span style={{ color: ACCENT }}>{t.breadcrumb}</span>
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase"
            style={{ color: ACCENT }}>
            <span className="h-px w-6" style={{ backgroundColor: ACCENT }} />
            {t.heroBadge}
          </div>
          <h1 className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink">
            {t.heroH1a}<br /><span style={{ color: ACCENT }}>{t.heroH1b}</span><br />{t.heroH1c}
          </h1>
          <p className="text-[16px] leading-[1.65] text-muted max-w-[54ch]">{t.heroP}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
            {t.heroChips.map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink/65">
                <CheckIcon size={11} color={ACCENT} />{c}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="#form" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: ACCENT, boxShadow: `0 18px 40px -12px ${ACCENT}80` }}>
              {t.heroCta}
              <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="tel:6649749264" className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-4 text-[15px] font-semibold text-ink hover:bg-stone transition-colors">
              <PhoneIcon size={15} />664 974 9264
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] aspect-[4/5] bg-stone">
              <Image src="/photos/dr-michel.jpg" alt="Dr. Zuriel Michel Barrera" fill className="object-cover object-top" priority />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(10,16,28,0.65) 100%)' }} />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink/80 border border-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{t.heroAvailable}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-[1.5rem] font-bold leading-tight" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>{t.doctorName}</div>
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] mt-1.5 opacity-90">{t.doctorRole}</div>
                <div className="flex items-center gap-1 mt-3">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} size={12} />)}
                  <span className="ml-2 text-[11px] font-semibold opacity-80">{t.doctorCert}</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-3 sm:-right-8 bg-white border border-ink/8 shadow-xl rounded-2xl px-4 py-3.5">
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted mb-1">{t.certLabel}</div>
              <div className="text-[1.1rem] font-extrabold text-ink leading-none">#2600</div>
              <div className="text-[10.5px] font-semibold text-muted mt-0.5">{t.certSub}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-wrap items-center gap-5 pt-8 border-t border-ink/8">
        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">{t.trustBarLabel}</div>
        <div className="flex flex-wrap items-center divide-x divide-ink/15">
          {t.trustItems.map((b) => (
            <div key={b.label} className="flex items-center gap-2 px-4 first:pl-0">
              <span className="text-[13px] font-extrabold" style={{ color: CLINIC }}>{b.label}</span>
              <span className="text-[10.5px] text-muted hidden sm:block">{b.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 2. When ────────────────────────────────────────────── */
function WhenSection({ lang }: { lang: Lang }) {
  const t = S[lang]
  return (
    <section className="section-pad py-20 bg-stone">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: ACCENT }}>
          <span className="h-px w-6" style={{ backgroundColor: ACCENT }} />{t.whenEyebrow}
        </div>
        <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-4">
          {t.whenTitle}<br /><span className="text-muted font-semibold">{t.whenTitleEm}</span>
        </h2>
        <p className="text-[15px] leading-[1.65] text-muted max-w-[56ch]">{t.whenSub}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.whenSituations.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-ink/8 p-6 hover:border-orange-200 hover:shadow-md transition-all">
            <div className="text-3xl mb-4">{s.emoji}</div>
            <div className="text-[15px] font-bold text-ink mb-2">{s.title}</div>
            <p className="text-[13.5px] leading-[1.6] text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="#form" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-bold text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: ACCENT }}>
          {t.whenCta}
        </a>
      </div>
    </section>
  )
}

/* ─── 3. Procedures (3 featured + expandable full list) ─── */
function ProceduresSection({ lang }: { lang: Lang }) {
  const t = S[lang]
  const [expanded, setExpanded] = useState(false)
  const [activeTag, setActiveTag] = useState<string>(t.procsAllTags[0])
  const allRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setActiveTag(t.procsAllTags[0]) }, [lang, t.procsAllTags])

  const handleExpand = () => {
    setExpanded(true)
    setTimeout(() => allRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }

  const filtered = activeTag === t.procsAllTags[0]
    ? t.procsAll
    : t.procsAll.filter(p => (p.tag as string) === activeTag)

  return (
    <section id="procedimientos" className="section-pad py-20 bg-white">
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: ACCENT }}>
          <span className="h-px w-6" style={{ backgroundColor: ACCENT }} />{t.procsEyebrow}
        </div>
        <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-4">{t.procsTitle}</h2>
        <p className="text-[15px] leading-[1.65] text-muted max-w-[56ch]">{t.procsSub}</p>
      </div>

      {/* 3 featured cards */}
      <div className="grid sm:grid-cols-3 gap-5 mb-8">
        {t.procsFeatured.map((p, i) => (
          <div key={i} className="rounded-3xl border border-ink/8 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            style={{ borderTop: `3px solid ${ACCENT}` }}>
            <div className="p-7">
              <div className="text-4xl mb-4">{p.icon}</div>
              <div className="flex items-center gap-1.5 mb-4">
                <span className="h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>{p.tag}</span>
              </div>
              <h3 className="text-[1.3rem] font-extrabold text-ink mb-3 leading-tight">{p.name}</h3>
              <p className="text-[13.5px] leading-[1.65] text-muted mb-5">{p.desc}</p>
              <ul className="flex flex-col gap-2">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-[13px] font-semibold text-ink/75">
                    <CheckIcon size={13} color={ACCENT} />{b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-7 pb-7">
              <a href="#form" className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-stone px-4 py-2.5 text-[13px] font-semibold text-ink hover:bg-stone/80 transition-colors">
                {lang === 'es' ? 'Consultar' : 'Inquire'}
                <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={expanded ? () => setExpanded(false) : handleExpand}
          className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-white px-6 py-3 text-[13.5px] font-semibold text-ink/80 hover:bg-stone hover:border-ink/25 transition-all"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={CLINIC} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          {expanded ? t.procsCollapseCta : t.procsExploreCta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* Expandable full list */}
      {expanded && (
        <div ref={allRef} className="rounded-3xl border border-ink/8 bg-stone p-6 sm:p-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-7">
            {t.procsAllTags.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-all ${activeTag === tag ? 'text-white border-transparent' : 'border-ink/15 bg-white text-muted hover:border-ink/30'}`}
                style={activeTag === tag ? { backgroundColor: ACCENT } : {}}>
                {tag}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p, i) => (
              <div key={i} className="rounded-2xl border border-ink/8 bg-white p-6 hover:shadow-md hover:border-orange-200 transition-all">
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>{p.tag}</span>
                </div>
                <div className="text-[15px] font-bold text-ink mb-2">{p.name}</div>
                <p className="text-[13px] leading-[1.6] text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

/* ─── 4. Why ─────────────────────────────────────────────── */
function WhySection({ lang }: { lang: Lang }) {
  const t = S[lang]
  return (
    <section className="section-pad py-20 bg-stone">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: CLINIC }}>
          <span className="h-px w-6 bg-clinic/50" />{t.whyEyebrow}
        </div>
        <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-4">
          {t.whyTitle}<br /><span className="text-muted font-semibold">{t.whyTitleEm}</span>
        </h2>
        <p className="text-[15px] leading-[1.65] text-muted max-w-[54ch]">{t.whySub}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {t.whyDiffs.map((d, i) => (
          <div key={i} className="bg-white rounded-2xl border border-ink/8 p-7 flex gap-5">
            <div className="text-3xl shrink-0 mt-0.5">{d.icon}</div>
            <div>
              <div className="text-[16px] font-bold text-ink mb-2">{d.title}</div>
              <p className="text-[13.5px] leading-[1.65] text-muted">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {t.whyStats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-ink/8 p-5 text-center">
            <div className="text-[1.7rem] font-extrabold leading-none mb-1" style={{ color: i < 2 ? ACCENT : 'inherit' }}>{s.v}</div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 5. Before/After — split-panel cards ────────────────── */
const BA_CASES = [
  { before: '/photos/A3.png',    after: '/photos/D3.png' },
  { before: '/photos/A2.png',    after: '/photos/D2.png' },
  { before: '/photos/antes.png', after: '/photos/despues.png' },
]

function CaseCard({ before, after, label, proc, beforeLabel, afterLabel }: {
  before: string; after: string; label: string; proc: string; beforeLabel: string; afterLabel: string
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-ink/8 shadow-sm bg-white">
      {/* Side-by-side image strip */}
      <div className="flex h-60 sm:h-72">
        <div className="relative flex-1 overflow-hidden">
          <Image src={before} alt={beforeLabel} fill className="object-cover grayscale brightness-90" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,transparent 55%,rgba(10,16,28,0.55) 100%)' }} />
          <span className="absolute bottom-3 left-3 text-white text-[9.5px] font-bold uppercase tracking-[0.14em] bg-ink/50 backdrop-blur-sm rounded-md px-2 py-0.5">
            {beforeLabel}
          </span>
        </div>
        {/* 1-px divider */}
        <div className="w-px bg-white/70 flex-shrink-0 relative z-10" />
        <div className="relative flex-1 overflow-hidden">
          <Image src={after} alt={afterLabel} fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,transparent 55%,rgba(10,16,28,0.45) 100%)' }} />
          <span className="absolute bottom-3 right-3 text-white text-[9.5px] font-bold uppercase tracking-[0.14em] rounded-md px-2 py-0.5" style={{ backgroundColor: ACCENT + 'dd' }}>
            {afterLabel}
          </span>
        </div>
      </div>
      {/* Footer */}
      <div className="px-5 py-3.5 flex items-center justify-between border-t border-ink/6">
        <span className="text-[12.5px] font-bold text-ink">{label}</span>
        <div className="flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full" style={{ backgroundColor: ACCENT }} />
          <span className="text-[11px] font-semibold text-muted">{proc}</span>
        </div>
      </div>
    </div>
  )
}

function BeforeAfterSection({ lang }: { lang: Lang }) {
  const t = S[lang]
  return (
    <section className="section-pad py-20 bg-white">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: ACCENT }}>
          <span className="h-px w-6" style={{ backgroundColor: ACCENT }} />{t.beforeAfterEyebrow}
        </div>
        <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-3">
          {t.beforeAfterTitle}{' '}
          <span className="text-muted font-semibold">{t.beforeAfterTitleEm}</span>
        </h2>
        <p className="text-[15px] leading-[1.65] text-muted max-w-[56ch]">{t.beforeAfterSub}</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 mb-8">
        {t.beforeAfterCases.map((c, i) => (
          <CaseCard
            key={i}
            before={BA_CASES[i].before}
            after={BA_CASES[i].after}
            label={c.label}
            proc={c.proc}
            beforeLabel={t.beforeLabel}
            afterLabel={t.afterLabel}
          />
        ))}
      </div>

      <div className="rounded-2xl border border-orange-200 bg-orange-50 p-4 flex items-start gap-3">
        <p className="text-[13px] leading-[1.65] text-ink/75">{t.beforeAfterNote}</p>
      </div>
    </section>
  )
}

/* ─── 6. Testimonials ────────────────────────────────────── */
function TestimonialsSection({ lang }: { lang: Lang }) {
  const t = S[lang]
  return (
    <section className="section-pad py-20 bg-stone">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: ACCENT }}>
          <span className="h-px w-6" style={{ backgroundColor: ACCENT }} />{t.testimonialsEyebrow}
        </div>
        <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-3">
          {t.testimonialsTitle}<br /><span className="text-muted font-semibold">{t.testimonialsTitleEm}</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        {t.testimonials.map((item, i) => (
          <div key={i} className="rounded-3xl border border-ink/8 bg-white p-7 flex flex-col gap-5">
            <div className="flex gap-1">{[1,2,3,4,5].map(j => <StarIcon key={j} size={13} />)}</div>
            <p className="text-[14px] leading-[1.7] text-ink/80 flex-1">&ldquo;{item.quote}&rdquo;</p>
            <div>
              <div className="text-[13.5px] font-bold text-ink">{item.name}</div>
              <div className="text-[11.5px] font-semibold text-muted mt-0.5">{item.proc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 7. Form (collapsible) ──────────────────────────────── */
type FormData = {
  nombre: string; edad: string; procedimiento: string; partos: string
  peso: string; talla: string; cirugiasPrevias: string; enfermedadCronica: string
  enfermedadDetalle: string; fuma: string; fumaFrecuencia: string; lactancia: string
  fotosReferencia: string; acompanante: string; fueraTijuana: string
  hospedaje: string[]; fecha: string
}
const EMPTY: FormData = {
  nombre: '', edad: '', procedimiento: '', partos: '', peso: '', talla: '',
  cirugiasPrevias: '', enfermedadCronica: '', enfermedadDetalle: '', fuma: '',
  fumaFrecuencia: '', lactancia: '', fotosReferencia: '', acompanante: '',
  fueraTijuana: '', hospedaje: [], fecha: '',
}

function PreConsultaForm({ lang }: { lang: Lang }) {
  const t = S[lang]
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<FormData>(EMPTY)
  const [sent, setSent] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  const handleOpen = () => {
    setOpen(true)
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }

  const set = (key: keyof FormData, val: string) => setForm(prev => ({ ...prev, [key]: val }))
  const toggleHospedaje = (val: string) => setForm(prev => ({
    ...prev,
    hospedaje: prev.hospedaje.includes(val) ? prev.hospedaje.filter(v => v !== val) : [...prev.hospedaje, val],
  }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `${t.waHeader}\n\n` +
      `👤 ${form.nombre}\n📅 ${form.edad}\n💉 ${form.procedimiento}\n` +
      (form.partos ? `🤱 ${form.partos}\n` : '') +
      `⚖️ ${form.peso} / ${form.talla}\n🔪 ${form.cirugiasPrevias}\n` +
      `🩺 ${form.enfermedadCronica}${form.enfermedadDetalle ? ` — ${form.enfermedadDetalle}` : ''}\n` +
      `🚬 ${form.fuma}${form.fumaFrecuencia ? ` (${form.fumaFrecuencia})` : ''}\n` +
      `🤰 ${form.lactancia}\n📸 ${form.fotosReferencia}\n👫 ${form.acompanante}\n` +
      `✈️ ${form.fueraTijuana}\n` +
      (form.hospedaje.length ? `🏨 ${form.hospedaje.join(', ')}\n` : '') +
      `📆 ${form.fecha}`
    )
    window.open(`https://wa.me/526649749264?text=${msg}`, '_blank')
    setSent(true)
  }

  const inputCls = "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[14px] font-medium text-ink placeholder-muted/60 focus:outline-none focus:border-clinic/50 focus:ring-2 focus:ring-clinic/10 transition-all"
  const labelCls = "block text-[12.5px] font-bold uppercase tracking-[0.1em] text-ink/60 mb-1.5"

  const RadioGroup = ({ value, options, onChange }: { value: string; options: readonly string[]; onChange: (v: string) => void }) => (
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
    <section id="form" className="section-pad py-20 bg-stone" ref={formRef}>
      <div className="max-w-3xl mx-auto">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: ACCENT }}>
            <span className="h-px w-6" style={{ backgroundColor: ACCENT }} />{t.formEyebrow}
          </div>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-3">{t.formTitle}</h2>
          <p className="text-[15px] leading-[1.65] text-muted">{t.formSub}</p>
        </div>

        {/* Trigger — shown when form is closed */}
        {!open && !sent && (
          <div className="bg-white rounded-3xl border border-ink/8 p-8 sm:p-10 text-center shadow-sm">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-[1.35rem] font-bold text-ink mb-2">{t.formTriggerBtn}</h3>
            <p className="text-[14px] text-muted mb-7">{t.formTriggerSub}</p>
            <button onClick={handleOpen}
              className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: ACCENT, boxShadow: `0 18px 40px -12px ${ACCENT}80` }}>
              <WhatsAppIcon size={18} />
              {t.formTriggerBtn}
            </button>
          </div>
        )}

        {/* Success state */}
        {sent && (
          <div className="bg-white rounded-3xl border border-ink/8 p-10 text-center shadow-sm">
            <div className="text-5xl mb-5">✅</div>
            <h3 className="text-[1.8rem] font-bold text-ink mb-3">{t.formSuccess}</h3>
            <p className="text-[15px] text-muted leading-[1.65] mb-6">{t.formSuccessSub}</p>
            <button onClick={() => { setSent(false); setOpen(true) }}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-[13.5px] font-semibold text-ink hover:bg-stone transition-colors">
              {t.formEdit}
            </button>
          </div>
        )}

        {/* Full form — shown when open and not sent */}
        {open && !sent && (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-ink/8 p-7 sm:p-10 flex flex-col gap-7 shadow-sm">
            <div><label className={labelCls}>1. {t.formQ[0]}</label>
              <input required className={inputCls} placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'} value={form.nombre} onChange={e => set('nombre', e.target.value)} />
            </div>
            <div><label className={labelCls}>2. {t.formQ[1]}</label>
              <input required type="number" min="18" max="80" className={`${inputCls} w-32`} placeholder="32" value={form.edad} onChange={e => set('edad', e.target.value)} />
            </div>
            <div><label className={labelCls}>3. {t.formQ[2]}</label>
              <RadioGroup value={form.procedimiento} options={t.formProcs} onChange={v => set('procedimiento', v)} />
            </div>
            {form.procedimiento === t.formProcs[0] && (
              <div className="rounded-2xl border p-5" style={{ borderColor: ACCENT + '50', backgroundColor: ACCENT_SOFT }}>
                <label className={labelCls}>4. {t.formQ[3]}</label>
                <input className={inputCls} placeholder={lang === 'es' ? 'Ej. 2 partos naturales, 1 cesárea' : 'E.g. 2 natural deliveries, 1 C-section'} value={form.partos} onChange={e => set('partos', e.target.value)} />
              </div>
            )}
            <div><label className={labelCls}>5. {t.formQ[4]}</label>
              <div className="flex gap-3">
                <input className={`${inputCls} flex-1`} placeholder={t.formPesoPlaceholder} value={form.peso} onChange={e => set('peso', e.target.value)} />
                <input className={`${inputCls} flex-1`} placeholder={t.formTallaPlaceholder} value={form.talla} onChange={e => set('talla', e.target.value)} />
              </div>
            </div>
            <div><label className={labelCls}>6. {t.formQ[5]}</label>
              <RadioGroup value={form.cirugiasPrevias} options={t.formPrevOps} onChange={v => set('cirugiasPrevias', v)} />
            </div>
            <div><label className={labelCls}>7. {t.formQ[6]}</label>
              <p className="text-[12px] text-muted mb-2">{t.formQ7hint}</p>
              <RadioGroup value={form.enfermedadCronica} options={t.formYesNo} onChange={v => set('enfermedadCronica', v)} />
              {(form.enfermedadCronica === 'Sí' || form.enfermedadCronica === 'Yes') && (
                <input className={`${inputCls} mt-3`} placeholder={t.formQ7detail} value={form.enfermedadDetalle} onChange={e => set('enfermedadDetalle', e.target.value)} />
              )}
            </div>
            <div><label className={labelCls}>8. {t.formQ[7]}</label>
              <RadioGroup value={form.fuma} options={t.formSmoke} onChange={v => set('fuma', v)} />
              {(form.fuma === t.formSmoke[1] || form.fuma === t.formSmoke[2]) && (
                <input className={`${inputCls} mt-3`} placeholder={t.formQ8detail} value={form.fumaFrecuencia} onChange={e => set('fumaFrecuencia', e.target.value)} />
              )}
            </div>
            <div><label className={labelCls}>9. {t.formQ[8]}</label>
              <RadioGroup value={form.lactancia} options={t.formLactancia} onChange={v => set('lactancia', v)} />
            </div>
            <div><label className={labelCls}>10. {t.formQ[9]}</label>
              <RadioGroup value={form.fotosReferencia} options={t.formPhotos} onChange={v => set('fotosReferencia', v)} />
            </div>
            <div><label className={labelCls}>11. {t.formQ[10]}</label>
              <RadioGroup value={form.acompanante} options={t.formCompanion} onChange={v => set('acompanante', v)} />
            </div>
            <div><label className={labelCls}>12. {t.formQ[11]}</label>
              <RadioGroup value={form.fueraTijuana} options={t.formOrigin} onChange={v => set('fueraTijuana', v)} />
            </div>
            <div><label className={labelCls}>13. {t.formQ[12]}</label>
              <div className="flex flex-wrap gap-2">
                {t.formHospedaje.map(opt => (
                  <button key={opt} type="button" onClick={() => toggleHospedaje(opt)}
                    className={`px-4 py-2 rounded-full border text-[13.5px] font-semibold transition-all ${form.hospedaje.includes(opt) ? 'text-white border-transparent' : 'border-ink/15 bg-white text-muted hover:border-ink/30'}`}
                    style={form.hospedaje.includes(opt) ? { backgroundColor: ACCENT } : {}}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div><label className={labelCls}>14. {t.formQ[13]}</label>
              <input type="date" className={`${inputCls} w-full sm:w-64`} value={form.fecha} onChange={e => set('fecha', e.target.value)} />
            </div>
            <div className="pt-4 border-t border-ink/8">
              <button type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: ACCENT, boxShadow: `0 18px 40px -12px ${ACCENT}80` }}>
                <WhatsAppIcon size={18} />{t.formSubmit}
              </button>
              <p className="mt-3 text-[12px] text-muted">{t.formNote}</p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

/* ─── 8. Final CTA ───────────────────────────────────────── */
function FinalCTA({ lang }: { lang: Lang }) {
  const t = S[lang]
  const sedesBadges = [
    { badge: t.sedesTijuanaBadge, color: ACCENT, note: t.sedesTijuanaNote },
    { badge: 'CDMX', color: CLINIC, note: '' },
    { badge: 'GDL', color: CLINIC, note: '' },
  ]
  return (
    <section id="contacto" className="section-pad py-20 bg-white border-t border-ink/8">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: ACCENT }}>
            <span className="h-px w-6" style={{ backgroundColor: ACCENT }} />{t.finalEyebrow}
          </div>
          <h2 className="text-[clamp(1.7rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink mb-6">{t.finalTitle}</h2>
          <div className="flex flex-col gap-4 mb-10">
            <a href="https://wa.me/526649749264" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-[15px] font-bold text-white w-full sm:w-auto"
              style={{ backgroundColor: '#22C35E', boxShadow: '0 14px 30px -10px rgba(34,195,94,0.5)' }}>
              <WhatsAppIcon size={20} />WhatsApp — 664 974 9264
            </a>
            <a href="tel:6649749264"
              className="inline-flex items-center gap-3 rounded-2xl border border-ink/15 bg-white px-6 py-4 text-[15px] font-semibold text-ink hover:bg-stone transition-colors w-full sm:w-auto">
              <PhoneIcon size={18} />664 974 9264
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {t.sedes.map((s, i) => (
              <div key={s.ciudad} className="rounded-2xl border border-ink/8 bg-stone p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] rounded-full px-2.5 py-1 text-white" style={{ backgroundColor: sedesBadges[i].color }}>{sedesBadges[i].badge}</span>
                  <span className="text-[14px] font-bold text-ink">{s.ciudad}</span>
                </div>
                <div className="text-[13px] font-medium text-ink/70 leading-[1.7] whitespace-pre-line">{s.detalle}</div>
                {sedesBadges[i].note && <p className="mt-2 text-[12px] text-muted leading-[1.6]">{sedesBadges[i].note}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl aspect-video bg-stone border border-ink/8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107250.57!2d-117.0382!3d32.5149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9489061bdd3ef%3A0x0!2sTijuana%2C+Baja+California!5e0!3m2!1ses!2smx!4v1"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title={t.mapTitle} className="absolute inset-0 w-full h-full" />
        </div>
      </div>
    </section>
  )
}

/* ─── Inner page ─────────────────────────────────────────── */
function PageInner() {
  const searchParams = useSearchParams()
  const initialLang: Lang = searchParams.get('lang') === 'en' ? 'en' : 'es'
  const [lang, setLang] = useState<Lang>(initialLang)

  return (
    <div className="min-h-screen bg-white">
      <Nav lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <WhenSection lang={lang} />
      <ProceduresSection lang={lang} />
      <WhySection lang={lang} />
      <BeforeAfterSection lang={lang} />
      <TestimonialsSection lang={lang} />
      <PreConsultaForm lang={lang} />
      <FinalCTA lang={lang} />

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

export default function CirugiaPlasticaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <PageInner />
    </Suspense>
  )
}
