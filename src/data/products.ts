export type ProductKey =
  | "granitos"
  | "marmolinas"
  | "escallas"
  | "cuarzos"
  | "ferrites"
  | "otros";

export interface Product {
  title: string;
  description: string;
  details: string;
  applications: string[];
  image: string;
  slug: string;
}

const defaultImage =
  "https://images.unsplash.com/photo-1585749864755-f1adb4ec8e29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const productsData: Record<ProductKey, Product> = {
  granitos: {
    title: "Granitos",
    description:
      "Nuestros granitos son extraídos de las mejores canteras de Argentina.",
    details:
      "Disponibles en diferentes granulometrías, ideales para la construcción, diseño de interiores y exteriores.",
    applications: [
      "Construcción",
      "Jardinería",
      "Acabados arquitectónicos",
      "Superficies decorativas",
    ],
    image: defaultImage,
    slug: "granitos",
  },
  marmolinas: {
    title: "Marmolinas",
    description: "Marmolinas de alta pureza y calidad excepcional.",
    details:
      "Procesadas con los más altos estándares para garantizar uniformidad y consistencia.",
    applications: [
      "Fabricación de pinturas",
      "Elaboración de adhesivos",
      "Morteros especiales",
      "Decoración",
    ],
    image: defaultImage,
    slug: "marmolinas",
  },
  escallas: {
    title: "Escallas",
    description: "Escallas obtenidas del acerrado de bochones.",
    details:
      "Disponibles en diferentes tamaños y colores para satisfacer todas sus necesidades.",
    applications: [
      "Decoración de jardines",
      "Morteros especiales",
      "Diseño de interiores",
      "Paisajismo",
    ],
    image: defaultImage,
    slug: "escallas",
  },
  cuarzos: {
    title: "Cuarzos",
    description:
      "Cuarzos de alta pureza procesados para diferentes aplicaciones.",
    details:
      "Nuestros cuarzos son seleccionados cuidadosamente para garantizar la mejor calidad.",
    applications: [
      "Industria del vidrio",
      "Filtración de agua",
      "Elaboración de adhesivos",
      "Industria electrónica",
    ],
    image: defaultImage,
    slug: "cuarzos",
  },
  ferrites: {
    title: "Ferrites",
    description: "Ferrites de alta calidad para aplicaciones industriales.",
    details:
      "Procesados para satisfacer las demandas más exigentes de la industria.",
    applications: [
      "Industria electrónica",
      "Fabricación de imanes",
      "Sistemas de telecomunicaciones",
      "Dispositivos de potencia",
    ],
    image: defaultImage,
    slug: "ferrites",
  },
  otros: {
    title: "Otros Productos",
    description: "Diversa gama de productos complementarios.",
    details:
      "Incluyendo mica, fibras, aditivos, cemento blanco, abrasivos, pigmentos y más.",
    applications: [
      "Industria de la construcción",
      "Elaboración de pinturas",
      "Industria cerámica",
      "Múltiples aplicaciones industriales",
    ],
    image: defaultImage,
    slug: "otros",
  },
};
