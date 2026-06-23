export const AGENT = {
  name: 'MPV Inmobiliaria',
  title: 'Inmobiliaria',
  city: 'Guadalajara',
  province: 'Guadalajara',
  tagline: 'Asesoramiento personalizado para compra, venta y alquiler en Guadalajara y provincia.',
} as const

export const CONTACT = {
  address: {
    line1: 'C. la Giralda, 1793',
    line2: '19170 El Casar, Guadalajara',
    full: 'C. la Giralda, 1793, 19170 El Casar, Guadalajara',
    mapsQuery: 'C.+la+Giralda,+1793,+19170+El+Casar,+Guadalajara',
  },
  phone: {
    display: '682 82 72 69',
    e164: '+34682827269',
    wa: '34682827269',
  },
  email: '',
} as const

export const OPENING_HOURS = [
  { day: 'Lunes', hours: '10:00–19:00' },
  { day: 'Martes', hours: '10:00–19:00' },
  { day: 'Miércoles', hours: '10:00–19:00' },
  { day: 'Jueves', hours: '10:00–19:00' },
  { day: 'Viernes', hours: '10:00–19:00' },
  { day: 'Sábado', hours: 'Cerrado' },
  { day: 'Domingo', hours: 'Cerrado' },
] as const

export const mapsHref = `https://maps.google.com/?q=${CONTACT.address.mapsQuery}`
export const phoneHref = `tel:${CONTACT.phone.e164}`
export const whatsappHref = `https://wa.me/${CONTACT.phone.wa}`
export const hasEmail = CONTACT.email.trim().length > 0
export const emailHref = hasEmail ? `mailto:${CONTACT.email}` : ''
export const whatsappDisplay = `+34 ${CONTACT.phone.display}`

export const scheduleSummary = 'Lun–Vie: 10:00–19:00 · Sáb y Dom: Cerrado'
