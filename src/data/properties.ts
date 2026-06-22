import type { Property } from '@/types'
import { AGENT, CONTACT } from '@/lib/contact'

const LEGAL_NOTICE = `NOTA: El precio no incluye honorarios de la agencia inmobiliaria, impuestos (IVA, ITP) y otros gastos de la compraventa (notaría, gestoría y registros). La oferta está sujeta a cambios de precio o retirada del mercado sin previo aviso. Este anuncio, incluyendo textos, fotos e imágenes, no es vinculante: la información es ofrecida por terceros y puede contener errores. Se muestra a título informativo y no contractual.

Más información: ${AGENT.name} — ${CONTACT.phone.display}.`

/** Catálogo en archivo local. */
export const DEMO_PROPERTIES: Property[] = []
