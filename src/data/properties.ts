import type { Property } from '@/types'
import { AGENT, CONTACT } from '@/lib/contact'

const LEGAL_NOTICE = `NOTA: El precio no incluye honorarios de la agencia inmobiliaria, impuestos (IVA, ITP) y otros gastos de la compraventa (notaría, gestoría y registros). La oferta está sujeta a cambios de precio o retirada del mercado sin previo aviso. Este anuncio, incluyendo textos, fotos e imágenes, no es vinculante: la información es ofrecida por terceros y puede contener errores. Se muestra a título informativo y no contractual.

Más información: ${AGENT.name} — ${CONTACT.phone.display}.`

/** Catálogo en archivo local. */
export const DEMO_PROPERTIES: Property[] = [
  {
    id: 'piso-cebolla-toledo',
    title: 'Piso en venta en Cebolla',
    price: 92_000,
    location: 'Área de Torrijos, Toledo',
    type: 'piso',
    operation: 'venta',
    status: 'disponible',
    description: `Se vende estupendo piso de 119 m², segunda planta sin ascensor; si se entra por el garaje tiene una altura de primero. La vivienda se distribuye en hall de entrada, amplio salón independiente con acceso a una coqueta terraza, con aire acondicionado y estufa de pelet, una magnífica cocina de diseño totalmente amueblada con mucha capacidad de almacenaje y cuenta con zona de office. La zona de los dormitorios está alejada gracias a un pasillo que le aporta privacidad; cuenta con tres amplios dormitorios, todos con armarios empotrados, y el principal con baño en suite y un segundo baño completo que le añade funcionalidad a la vivienda.

Incluye una plaza de garaje, que se encuentra en superficie. Buenas calidades. En pleno centro del pueblo con acceso directo a todos los servicios. ¡Ven a verla sin compromiso!

NO COBRAMOS COMISIÓN AL COMPRADOR. Contamos con FINANCIACIÓN.

${LEGAL_NOTICE}`,
    images: JSON.stringify([
      '/images/mpv1.png',
      '/images/mpv1(1).png',
      '/images/mpv1(2).png',
    ]),
    fotocasaUrl: 'https://www.idealista.com/pro/mpv-inmobiliaria/inmueble/109673227/',
    bedrooms: 3,
    bathrooms: 2,
    sqMeters: 119,
    availability: 'Sin restricciones',
    heating: 'Calefacción individual',
    condition: 'Buen estado',
    propertyAge: '2006',
    floor: '2ª planta exterior',
    garage: 'Incluido en el precio',
    elevator: 'Sin ascensor',
    furnished: 'No',
    energyRating: 'En trámite',
    featured: true,
    createdAt: new Date('2026-06-23T10:00:00.000Z'),
    updatedAt: new Date('2026-06-23T10:00:00.000Z'),
  },
  {
    id: 'chalet-torrejon-del-rey',
    title: 'Casa o chalet independiente en venta en Torrejón del Rey',
    price: 319_000,
    location: 'Campiña, Guadalajara',
    type: 'chalet',
    operation: 'venta',
    status: 'disponible',
    description: `Chalet independiente en Urbanización Las Castillas

Descubre este impresionante chalet independiente de 214 m² en la exclusiva Urbanización Las Castillas, un lugar ideal para disfrutar de la tranquilidad y la comodidad. Este hogar se distribuye en dos plantas, con una primera planta que cuenta con una cocina independiente completamente amueblada y equipada con zona de office y despensa independiente. Además, dispone de un acogedor salón independiente con chimenea, donde podrás relajarte y disfrutar de momentos inolvidables. Desde el salón, accedes a un porche cubierto que ofrece vistas espectaculares, ideal para tus reuniones familiares.

En la primera planta también encontrarás tres amplios dormitorios dobles con armarios empotrados, proporcionando el espacio necesario para toda la familia. Un baño completo con ventana completa esta planta, asegurando comodidad y funcionalidad.

La planta baja de 101 m² es un lienzo en blanco, con una amplia superficie diáfana que puedes adaptar a tus necesidades: desde un gimnasio, bodega, salón de juegos o varios dormitorios. Tendrías la posibilidad hasta de dejarlo como una segunda vivienda totalmente independiente a la planta superior. Además, cuenta con un garaje amplio para dos coches y un baño completo.

El exterior no se queda atrás, ya que el terreno de 1.158 m² completamente llano incluye dos parcelas unidas (independientes registralmente), zonas verdes y árboles frutales, brindando un entorno natural perfecto para disfrutar al aire libre.

La vivienda está equipada con aire acondicionado frío/calor en el salón y uno de los dormitorios, asegurando tu confort durante todo el año. Situada a pocos kilómetros de Madrid y cerca de colegios, supermercados y centros de salud, esta casa es una oportunidad única que no querrás dejar pasar. ¡Ven a visitarla y descubre tu nuevo hogar!

Precio anterior: 329.000 €. NO COBRAMOS COMISIÓN AL COMPRADOR.

${LEGAL_NOTICE}`,
    images: JSON.stringify([
      '/images/mpv2.png',
      '/images/mpv2(1).png',
      '/images/mpv2(2).png',
    ]),
    fotocasaUrl: 'https://www.idealista.com/pro/mpv-inmobiliaria/inmueble/110750177/',
    bedrooms: 3,
    bathrooms: 2,
    sqMeters: 214,
    availability: 'Sin restricciones',
    heating: 'Bomba de frío/calor',
    condition: 'Buen estado',
    propertyAge: '1993',
    floor: '2 plantas',
    garage: 'Incluido en el precio',
    elevator: 'No',
    furnished: 'No',
    energyRating: 'En trámite',
    featured: true,
    createdAt: new Date('2026-06-23T10:30:00.000Z'),
    updatedAt: new Date('2026-06-23T10:30:00.000Z'),
  },
  {
    id: 'chalet-el-casar',
    title: 'Casa o chalet independiente en venta en El Casar',
    price: 305_000,
    location: 'Campiña, Guadalajara',
    type: 'chalet',
    operation: 'venta',
    status: 'disponible',
    description: `Chalet independiente en urbanización privada

Descubre este magnífico chalet independiente de 256 m² construidos sobre una generosa parcela de 629 m², ubicado en una urbanización privada con seguridad. Esta estupenda vivienda combina comodidad, espacio y tranquilidad en un entorno rodeado de naturaleza, perfecto para familias que buscan calidad de vida.

La distribución inteligente del inmueble te sorprenderá: planta principal con porche cubierto que ofrece magníficas vistas, amplio salón independiente y cocina totalmente amueblada con estilo rústico. Los tres dormitorios cuentan con prácticos armarios empotrados, garantizando orden y funcionalidad en cada espacio. Dispone de dos baños completos en planta principal (ambos con ventana, uno con ducha y otro con bañera) más un tercero en sótano.

El sótano es toda una sorpresa: amplio garaje, baño adicional, pequeña bodega y versátil sala multiusos ideal para tus proyectos. Además, encontrarás trastero y espacios de almacenamiento perfectos para guardar lo que necesites. La parcela incluye una acogedora zona de barbacoa y cenador para disfrutar en familia, así como un espacio acotado originalmente destinado a piscina, adaptable para futuras instalaciones.

Construido en 2005 en perfecto estado de conservación, el chalet cuenta con acceso adaptado para personas con movilidad reducida y sistema de calefacción por gasoil. La ubicación es estratégica: a solo 5 minutos encontrarás colegios (3 públicos, 1 privado y 2 centros de secundaria), centro de salud, comercios, iglesia, restaurantes, supermercados, veterinarios, farmacias y bancos.

¡No dejes pasar esta oportunidad! Un hogar completo donde la seguridad, el espacio y la naturaleza se fusionan perfectamente. NO COBRAMOS COMISIÓN AL COMPRADOR.

${LEGAL_NOTICE}`,
    images: JSON.stringify([
      '/images/mpv3.png',
      '/images/mpv3(1).png',
      '/images/mpv3(2).png',
    ]),
    fotocasaUrl: 'https://www.idealista.com/pro/mpv-inmobiliaria/inmueble/111827460/',
    bedrooms: 3,
    bathrooms: 3,
    sqMeters: 256,
    availability: 'Sin restricciones',
    heating: 'Gasoil',
    condition: 'Buen estado',
    propertyAge: '2005',
    floor: '2 plantas',
    garage: 'Incluido en el precio',
    elevator: 'No',
    furnished: 'No',
    energyRating: 'No indicado',
    featured: true,
    createdAt: new Date('2026-06-23T11:00:00.000Z'),
    updatedAt: new Date('2026-06-23T11:00:00.000Z'),
  },
]
