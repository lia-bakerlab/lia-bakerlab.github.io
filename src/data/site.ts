export const site = {
  name: 'Estate Excellence',

  url: 'https://lia-bakerlab.github.io',

  seo: {
    title: 'Residencia Privada | Estate Excellence',

    description:
      'Descubre una residencia excepcional definida por su arquitectura, ubicación y atención al detalle.',

    image: '../../public/images/og-cover.jpg',

    locale: 'es_ES',

    type: 'website',

    robots: 'index, follow',

    twitterCard: 'summary_large_image',
  },

  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX',
  },

   navigation: [
    {
      label: 'Residencia',
      href: '#residencia',
    },
    {
      label: 'Galería',
      href: '#galeria',
    },
    {
      label: 'Características',
      href: '#caracteristicas',
    },
    {
      label: 'Ubicación',
      href: '#ubicacion',
    },
  ],

  hero: {
    eyebrow: 'Residencia privada',
    title: 'Arquitectura excepcional. Una forma distinta de vivir.',
    location: 'Ubicación · Ciudad',
    image: '/images/hero.webp',
  },

  intro: {
    eyebrow: 'La residencia',
    title: 'Una propiedad concebida para trascender el tiempo.',
    text:
      'Una propuesta residencial donde arquitectura, materiales y proporciones se combinan para crear una experiencia serena, sofisticada y profundamente privada.',
  },

  stats: [
    {
      value: '000',
      label: 'm² construidos',
    },
    {
      value: '0',
      label: 'Dormitorios',
    },
    {
      value: '0',
      label: 'Baños',
    },
    {
      value: '0',
      label: 'Estacionamientos',
    },
  ],

  gallery: [
    {
      src: '/images/gallery-01.webp',
      alt: 'Vista principal de la residencia',
    },
    {
      src: '/images/gallery-02.webp',
      alt: 'Interior de la residencia',
    },
    {
      src: '/images/gallery-03.webp',
      alt: 'Detalle arquitectónico',
    },
    {
      src: '/images/gallery-04.webp',
      alt: 'Espacio exterior',
    },
  ],

  features: [
    {
      number: '01',
      title: 'Arquitectura',
      description:
        'Espacios proporcionados cuidadosamente para potenciar luz, privacidad y continuidad visual.',
    },
    {
      number: '02',
      title: 'Materialidad',
      description:
        'Una selección sobria de materiales y acabados concebidos para envejecer con elegancia.',
    },
    {
      number: '03',
      title: 'Privacidad',
      description:
        'Distribución y accesos planteados para ofrecer una experiencia residencial reservada.',
    },
  ],

  location: {
    eyebrow: 'Ubicación',
    title: 'Una dirección excepcional.',
    text:
      'Una ubicación cuidadosamente elegida, próxima a los principales servicios, espacios culturales y puntos estratégicos de la ciudad.',
  },

  contact: {
    eyebrow: 'Contacto privado',
    title: 'Solicita información sobre la propiedad.',
    text:
      'Contáctanos para conocer disponibilidad, detalles y coordinar una visita privada.',
    email: 'info@example.com',
    phone: '+00 000 000 000',
  }
  
} as const;
