interface ServiciosFble {
  title: string,
  describe: string
}
interface AsuntosBle {
  asunto: string,
  correo: string[],
  telefono?: number[]
}

export const asuntosFble: AsuntosBle[] = [


  {
    asunto: "Faena bovinos",
    correo: ["bovinos@frigorificosble.com", "admonbovinos@frigorificosble.com"],
    telefono: [3227639981, 3208664723],
  },
  {
    asunto: "Faena porcinos",
    correo: [
      "porcinos@frigorificosble.com",
      "admonporcinos@frigorificosble.com",
    ],
    telefono: [3143332505, 3208664695],
  },
  {
    asunto: "Certificados de calidad",
    correo: ["analistadecalidad@frigorificosble.com"],
    telefono: [3102300455],
  },
  {
    asunto: "Soporte técnico sistemas",
    correo: ["sistemas@frigorificosble.com"],
    telefono: [3115313392],
  },
  {
    asunto: "Desposte bovinos",
    correo: ["	desposte@frigorificosble.com"],
    telefono: [3203717370],
  },
  {
    asunto: "Desposte porcinos",
    correo: ["desposteporcinos@frigorificosble.com"],
    telefono: [3124026486],
  },
  {
    asunto: "Turnos y atención al cliente",
    correo: ["atencionalcliente@frigorificosble.com"],
    telefono: [3208664713, 3208664707],
  },
  {
    asunto: "SST",
    correo: ["auxsst@frigorificosble.com"],
    telefono: [3112090888],
  },
  {
    asunto: "Gestión humana",
    correo: ["gestionhumana@frigorificosble.com"],
    telefono: [3202571345],
  },
  {
    asunto: "Compras",
    correo: ["compras@frigorificosble.com"],
    telefono: [3132592356],
  },
  {
    asunto: "Contabilidad",
    correo: ["contabilidad@frigorificosble.com"],
    telefono: [3107644691],
  },
  {
    asunto: "General / Otro",
    correo: ["info@frigorificosble.com"],
    telefono: [],
  },
];

export const nosotrosFble = `
<p class="describe">Somos una empresa líder en el procesamiento de carne bovina y porcina, respaldada por un equipo altamente calificado y años de experiencia en el sector. Nos especializamos en servicios de sacrificio, faenado y desposte, garantizando productos de primera calidad que cumplen con los más rigurosos estándares de inocuidad y sostenibilidad ambiental. Nuestro compromiso es satisfacer las necesidades del mercado local mientras fortalecemos la cadena cárnica colombiana, siempre priorizando la excelencia en cada etapa de nuestro proceso.</p>



`
export const serviciosFble: ServiciosFble[] = [
  {
    title: "Recepción de bovinos y porcinos en pie",
    describe: "El servicio de recepción de animales en pie (bovinos y porcinos) garantiza un manejo seguro y adecuado, asegurando el bienestar animal durante el transporte y llegada."
  },
  {
    title: "Pesaje de animales en pie",
    describe: "El servicio de pesaje de ganado porcinos se presta 24 horas 7 días a la semana y el de ganado bovino está disponible de 6:00 a.m. a 4:00 p.m., los 7 días de la semana."
  },
  {
    title: "Beneficio de ganado bovino",
    describe: "El servicio de beneficio de ganado bovino utiliza tecnología avanzada para optimizar el proceso de transformación de los animales en carne en canal, garantizando calidad e inocuidad."
  },
  {
    title: "Beneficio de ganado porcino",
    describe: "El uso de tecnología avanzada en cada etapa no solo mejora la eficiencia del proceso, sino que también asegura la integridad de la carne, reduciendo riesgos y optimizando tiempos."
  },
  {
    title: "Almacenamiento de canales refrigeradas",
    describe: "El servicio de almacenamiento de canales en cuartos fríos nos garantiza la calidad e inocuidad del producto protegiendo la salud del consumidor."
  },
  {
    title: "Desposte de canales bovinas y porcinas",
    describe: "El desposte es realizado por personal capacitado y bajo los más altos estándares de calidad, garantizando rendimientos óptimos y postas de excelente presentación."
  },
]