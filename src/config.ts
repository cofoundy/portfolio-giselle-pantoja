export const siteConfig = {
  name: "Giselle Pantoja Altamirano",
  title: "Senior Project Manager | PMP | MBA | Agile Coach",
  description: "Portfolio profesional de Giselle Pantoja — Líder en transformación digital con 20+ años de experiencia en 7+ industrias. PMP, MBA, Scrum Master, Agile Coach.",

  colors: {
    primaryDark: "#0f2b4c",   // Deep navy — authority, trust
    primary: "#1a4a7a",       // Corporate blue — headings
    primaryLight: "#4da8da",  // Sky blue — accents, hover
    accent: "#4da8da",        // Celeste — CTAs, highlights
    surface: "#e8f4fd",       // Ice blue — cards, sections
    surfaceLight: "#f4f9fd",  // Almost white — main bg
  },

  tagline: "Transformando industrias con eficiencia y agilidad",

  stats: [
    { value: "20+", label: "Años de experiencia" },
    { value: "7+", label: "Industrias transformadas" },
    { value: "6", label: "Certificaciones" },
    { value: "PMP", label: "MBA · Agile Coach" },
  ],

  profile: {
    summary: "Líder con más de 20 años de experiencia liderando iniciativas estratégicas en empresas multinacionales. Especializada en optimización de costos TI, eficiencia operativa, implementaciones de ERP y transformación digital.",
    skills: [
      "Gestión de Stakeholders",
      "Optimización FinOps",
      "Liderazgo de Equipos",
      "Metodologías Ágiles",
      "Transformación Digital",
      "Business Agility",
      "Negociación de Proveedores",
      "Presupuestos OPEX/CAPEX",
    ],
    languages: [
      { name: "Español", level: "Nativo", flag: "🇪🇸" },
      { name: "English", level: "Intermediate-Advanced", flag: "🇬🇧" },
      { name: "Français", level: "Basic-Intermediate", flag: "🇫🇷" },
    ],
  },

  industries: [
    {
      icon: "shield",
      name: "Seguros",
      company: "Rimac Seguros",
      period: "2025 – Presente",
      impact: "Comité de Eficiencia TI, prácticas FinOps",
      country: "pe",
    },
    {
      icon: "credit-card",
      name: "Fintech",
      company: "Galileo / SoFi Technologies",
      period: "2022 – 2025",
      impact: "SLA/SLO, Disaster Recovery, OKTA SSO",
      country: "cl",
    },
    {
      icon: "shopping-bag",
      name: "Retail",
      company: "Falabella Tecnología",
      period: "2021 – 2022",
      impact: "PMO Seguridad, portafolio MasterPlan",
      country: "cl",
    },
    {
      icon: "road",
      name: "Infraestructura",
      company: "Ruta del Maipo",
      period: "2018 – 2021",
      impact: "30% ahorro costos, -20% llamadas",
      country: "cl",
    },
    {
      icon: "phone",
      name: "Telecomunicaciones",
      company: "Telefónica",
      period: "2012 – 2018",
      impact: "-50% atención presencial PYMES",
      country: "cl",
    },
    {
      icon: "pickaxe",
      name: "Minería",
      company: "CODELCO",
      period: "Anterior",
      impact: "La mayor empresa de Chile",
      country: "cl",
    },
    {
      icon: "megaphone",
      name: "Marketing Digital",
      company: "Cybercenter",
      period: "Anterior",
      impact: "Agencia de marketing digital",
      country: "cl",
    },
  ],

  impact: [
    { value: "30%", label: "Ahorro en costos", detail: "Software de modelamiento de flujos de tráfico en Ruta del Maipo" },
    { value: "50%", label: "Reducción atención presencial", detail: "Rediseño de sucursal virtual para PYMES en Telefónica" },
    { value: "20%", label: "Menos llamadas al Call Center", detail: "Implementación de canal WhatsApp en Ruta del Maipo" },
  ],

  experience: [
    {
      company: "Rimac Seguros y Reaseguros",
      title: "Gestor de Eficiencia TI",
      period: "2025 – Presente",
      country: "pe",
      bullets: [
        "Identificación de eficiencias y reducción de costos en áreas tecnológicas",
        "Consultoría técnica para evaluaciones de proveedores y negociaciones contractuales",
        "Adopción interna de prácticas FinOps",
        "Coordinación del Comité de Eficiencia TI",
      ],
    },
    {
      company: "Galileo by SoFi Technologies",
      title: "Scrum Master | Engineer Manager",
      period: "2022 – 2025",
      country: "cl",
      bullets: [
        "Equipo de Excelencia Operacional: SLA, SLO & uptime",
        "Implementación de Incidentes & Disaster Recovery",
        "Integración Core Bancario con SSO vía OKTA",
        "Metodologías ágiles para eficiencia en entrega",
      ],
    },
    {
      company: "Falabella Tecnología Corporativa",
      title: "Subgerente de PMO Seguridad",
      period: "2021 – 2022",
      country: "cl",
      bullets: [
        "Planificación estratégica y auditoría de seguridad digital",
        "Control del portafolio de proyectos MasterPlan",
        "Marcos ágiles para Business Agility organizacional",
      ],
    },
    {
      company: "Ruta del Maipo Sociedad Concesionaria",
      title: "Subgerente de Proyectos",
      period: "2018 – 2021",
      country: "cl",
      bullets: [
        "Software de modelamiento de flujos de tráfico: 30% ahorro en costos",
        "Canal WhatsApp: 20% reducción en llamadas al Call Center",
        "Presupuesto TI y Roadmap Estratégico del Proyecto Free Flow",
      ],
    },
    {
      company: "Telefónica S.A.",
      title: "Scrum Master | Jefe de Proyecto Senior",
      period: "2012 – 2018",
      country: "cl",
      bullets: [
        "Rediseño sucursal virtual PYMES: 50% reducción atención presencial",
        "Proyecto de ampliación numérica (regulaciones SUBTEL)",
        "Gestión de proveedores estratégicos para proyectos críticos",
      ],
    },
  ],

  otherCompanies: ["Autopista Central S.A.", "Cybercenter S.A.", "CODELCO"],

  certifications: [
    { name: "PMP", fullName: "Project Management Professional", org: "PMI" },
    { name: "SM", fullName: "Scrum Master Certified", org: "Scrum Alliance" },
    { name: "PAL-EBM", fullName: "Professional Agile Leadership", org: "Scrum.org" },
    { name: "AC", fullName: "Agile Coaching", org: "" },
    { name: "BAF", fullName: "Business Agility Foundations", org: "" },
    { name: "ATF", fullName: "Agile Team Facilitation", org: "" },
  ],

  education: [
    { degree: "MBA", school: "Universidad Adolfo Ibáñez", icon: "graduation-cap" },
    { degree: "Ingeniería Civil Industrial", school: "Universidad de Atacama", icon: "building" },
    { degree: "Ing. Computación e Informática", school: "Universidad Contemporánea de Arica", icon: "monitor" },
  ],

  diplomas: ["Transformación Digital", "Finanzas & Inversiones", "Gestión Empresarial"],

  social: {
    email: "gpantoja7@hotmail.com",
    linkedin: "https://www.linkedin.com/in/gisellepantoja-pmp/",
    phoneCL: "+56 9 9741 6798",
    phonePE: "+51 986 012 947",
  },
};
