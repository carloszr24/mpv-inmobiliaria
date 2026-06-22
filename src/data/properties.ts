import type { Property } from '@/types'
import { AGENT, CONTACT } from '@/lib/contact'

const LEGAL_NOTICE = `NOTA: El precio no incluye honorarios de la agencia inmobiliaria, impuestos (IVA, ITP) y otros gastos de la compraventa (notaría, gestoría y registros). La oferta está sujeta a cambios de precio o retirada del mercado sin previo aviso. Este anuncio, incluyendo textos, fotos e imágenes, no es vinculante: la información es ofrecida por terceros y puede contener errores. Se muestra a título informativo y no contractual.

Más información: ${AGENT.name} — ${CONTACT.phone.display}.`

/** Catálogo en archivo local. */
export const DEMO_PROPERTIES: Property[] = [
  {
    id: 'chalet-san-antonio-requena',
    title: 'Chalet adosado en venta en Calle Ollería San Antonio',
    price: 235_000,
    location: 'Requena, Valencia',
    type: 'chalet',
    operation: 'venta',
    status: 'disponible',
    description: `DOS VIVIENDAS UNIFAMILIARES EN SAN ANTONIO: UN PROYECTO CON INFINITAS POSIBILIDADES

Ponemos a la venta un conjunto de dos viviendas unifamiliares situadas en San Antonio (Requena), una excelente oportunidad para quienes desean crear un hogar totalmente personalizado o para inversores que buscan un proyecto con gran potencial.

Las viviendas se asientan sobre una parcela de aproximadamente 209 m² y se encuentran en una fase avanzada de construcción. Exteriormente, los edificios están prácticamente terminados, disponiendo de estructura ejecutada, cubiertas inclinadas, fachadas finalizadas y carpintería exterior instalada. Sin embargo, el interior permanece diáfano, sin distribución ni acabados, quedando pendiente aproximadamente un 35% de la obra proyectada, así como la finalización de los trámites necesarios para su legalización. Aunque posee la preinstalación de servicios de agua y luz.

Cada vivienda se distribuye en tres alturas, ofreciendo una gran versatilidad para adaptar los espacios al gusto y necesidades de sus futuros propietarios.

Vivienda A
• Superficie construida aproximada: 202 m²
• Tres plantas con amplias posibilidades de distribución.

Vivienda B
• Superficie construida aproximada: 166 m²
• Tres plantas preparadas para desarrollar un proyecto completamente personalizado.

Gracias a su estado actual, los futuros propietarios podrán diseñar la distribución interior, elegir materiales, acabados y crear espacios únicos adaptados a su estilo de vida, evitando las limitaciones de una vivienda ya terminada.

Precio conjunto de las dos viviendas: 235.000 €

Una oportunidad excepcional para adquirir dos viviendas con gran potencial en una de las zonas más demandadas de San Antonio, con la ventaja de poder terminarlas completamente a medida.

Solicita más información y descubre todas las posibilidades que ofrece este interesante proyecto inmobiliario.

${LEGAL_NOTICE}`,
    images: JSON.stringify([
      '/images/inmoanalista1.png',
      '/images/inmoanalista1-1.png',
      '/images/inmoanalista1-2.png',
      '/images/inmoanalista1-3.png',
    ]),
    fotocasaUrl: null,
    bedrooms: null,
    bathrooms: null,
    sqMeters: 369,
    availability: 'Sin restricciones',
    condition: 'Para reformar',
    propertyAge: null,
    floor: '3 plantas',
    garage: 'Incluido en el precio',
    elevator: 'No',
    furnished: 'No',
    energyRating: 'No indicado',
    featured: true,
    createdAt: new Date('2026-06-22T15:00:00.000Z'),
    updatedAt: new Date('2026-06-22T15:00:00.000Z'),
  },
  {
    id: 'finca-rustica-zarra',
    title: 'Finca rústica en venta en Zarra',
    price: 350_000,
    location: 'El Valle de Ayora, Valencia',
    type: 'casa',
    operation: 'venta',
    status: 'disponible',
    description: `Casa de campo con extenso terreno en venta en Zarra (Valencia)

${AGENT.name} te presenta esta fantástica casa de campo con terreno, ideal para quienes buscan tranquilidad, naturaleza y múltiples posibilidades de uso.

La propiedad, orientada al suroeste, cuenta con una superficie construida de 186 m² sobre un amplio terreno de 64.607 m², perfecto para distintos proyectos, incluida la explotación ecuestre.

La vivienda, de excelente calidad, se distribuye en:
• 2 dormitorios amplios.
• 1 baño completo.
• Gran comedor con mucho encanto.
• Terraza con porche en la parte delantera, ideal para disfrutar de las vistas y del entorno.

Otros detalles:
• Puertas y ventanas de madera.
• Construcción sólida del año 2003.
• Fácil acceso desde la carretera.
• Terreno amplio, con infinitas posibilidades para ocio, cultivo o uso ganadero.
• Jardín y trastero.

Todo ello por 350.000 €, una oportunidad para disfrutar de la naturaleza sin renunciar a la comodidad de un hogar moderno y bien construido.

${LEGAL_NOTICE}`,
    images: JSON.stringify([
      '/images/inmoanalista2.png',
      '/images/inmoanalista2-1.png',
      '/images/inmoanalista2-2.png',
      '/images/inmoanalista2-3.png',
    ]),
    fotocasaUrl: null,
    bedrooms: 2,
    bathrooms: 1,
    sqMeters: 186,
    availability: 'Sin restricciones',
    heating: 'Calefacción individual',
    condition: 'Buen estado',
    propertyAge: '2003',
    garage: 'Incluido en el precio',
    furnished: 'No',
    energyRating: 'No indicado',
    featured: true,
    createdAt: new Date('2026-06-22T15:30:00.000Z'),
    updatedAt: new Date('2026-06-22T15:30:00.000Z'),
  },
  {
    id: 'duplex-libertad-requena',
    title: 'Dúplex en venta en Calle Libertad',
    price: 190_000,
    location: 'Requena, Valencia',
    type: 'atico',
    operation: 'venta',
    status: 'disponible',
    description: `Se vende ático dúplex de 104 m² construidos, ubicado en la Calle Libertad de Requena, una zona tranquila y bien comunicada.

La vivienda, en muy buen estado de conservación, cuenta con una orientación este, lo que le proporciona una excelente luminosidad durante toda la mañana. Además, cuenta con una amplia terraza ideal para disfrutar del aire libre y las vistas.

El inmueble incluye una plaza de garaje amplia, con espacio suficiente para un coche y una moto.

Distribuido en dos plantas, dispone de tres dormitorios, dos baños completos y un aseo.

Las calidades son excelentes: ventanales de aluminio con climalit, puerta blindada, suelo de gres cerámico y armario empotrado.

Dispone de un sistema de calefacción biomasa muy eficiente que proporciona un gran confort en el hogar y cuenta con preinstalación para radiadores de gas. El agua caliente funciona mediante bombona de gas.

Además dispone de aire acondicionado en la primera planta.

En conjunto, se trata de una vivienda cómoda, luminosa y lista para entrar a vivir, ideal tanto como residencia habitual como inversión.

${LEGAL_NOTICE}`,
    images: JSON.stringify([
      '/images/inmoanalista3.png',
      '/images/inmoanalista3-1.png',
      '/images/inmoanalista3-2.png',
      '/images/inmoanalista3-3.png',
    ]),
    fotocasaUrl: null,
    bedrooms: 3,
    bathrooms: 2,
    sqMeters: 104,
    availability: 'Sin restricciones',
    hotWater: 'Bombona de gas',
    heating: 'Biomasa (preinstalación gas)',
    condition: 'Buen estado',
    propertyAge: '2010',
    floor: '2ª planta exterior',
    garage: 'Incluido en el precio',
    elevator: 'Con ascensor',
    furnished: 'No',
    energyRating: 'No indicado',
    featured: true,
    createdAt: new Date('2026-06-22T16:00:00.000Z'),
    updatedAt: new Date('2026-06-22T16:00:00.000Z'),
  },
]
