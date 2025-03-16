// Liste des formations et expériences professionnelles
interface EducationItem {
  title: string;
  titleEn?: string;
  institution: string;
  institutionEn?: string;
  dates: string;
  datesEn?: string;
  description: string;
  descriptionEn?: string;
  type: string;
  icon: string;
}

export const educationItems: EducationItem[] = [
  {
    title: "BUT Informatique",
    titleEn: "Bachelor's Degree in Computer Science",
    institution: "IUT de Blagnac",
    institutionEn: "IUT of Blagnac",
    dates: "Septembre 2022 - Présent",
    datesEn: "September 2022 - Present",
    description:
      "Formation complète en informatique couvrant le développement logiciel, les bases de données, les réseaux et la gestion de projet. Formation réalisée en alternance.",
    descriptionEn:
      "Comprehensive computer science training covering software development, databases, networks, and project management. Work-study program.",
    type: "education",
    icon: "graduation"
  },
  {
    title: "Data Analyst",
    institution: "Airbus",
    dates: "Septembre 2023 - Présent",
    datesEn: "September 2023 - Present",
    description:
      "Conception et développement d'un outil d'approbation interne d'offres commerciales avec Google Appscript, Google Appsheet, API REST (Mulesoft), Palantir Foundry (Skywise). Traitement ETL des données du DataHub d'Airbus et analyse de données sensibles afin de fournir des indicateurs aux équipes business. Technologies : SQL, Python, Spark, Jupyterhub.",
    descriptionEn:
      "Design and development of an internal commercial offer approval tool using Google Appscript, Google Appsheet, REST API (Mulesoft), Palantir Foundry (Skywise). ETL processing of Airbus DataHub data and analysis of sensitive data to provide indicators to business teams. Technologies: SQL, Python, Spark, Jupyterhub.",
    type: "professional",
    icon: "work"
  },
  {
    title: "Employé polyvalent",
    titleEn: "Store Associate",
    institution: "Netto, Cestas",
    dates: "Été 2023",
    datesEn: "Summer 2023",
    description:
      "Travail saisonnier en grande distribution. Gestion des stocks, mise en rayon, gestion de la caisse et service client.",
    descriptionEn:
      "Seasonal work in retail. Inventory management, shelf stocking, cashier duties, and customer service.",
    type: "professional",
    icon: "work"
  },
  {
    title: "Employé polyvalent",
    titleEn: "Store Associate",
    institution: "Netto, Cestas",
    dates: "Été 2022",
    datesEn: "Summer 2022",
    description:
      "Travail saisonnier en grande distribution. Gestion des stocks, mise en rayon, gestion de la caisse et service client.",
    descriptionEn:
      "Seasonal work in retail. Inventory management, shelf stocking, cashier duties, and customer service.",
    type: "professional",
    icon: "work"
  },
  {
    title: "Certification TOEIC",
    institution: "ETS Global",
    dates: "Septembre 2024",
    datesEn: "September 2024",
    description:
      "Score de 830/990 validant un niveau B2 en anglais professionnel.",
    descriptionEn:
      "Score of 830/990 validating a B2 level in professional English.",
    type: "certification",
    icon: "certificate"
  },
  {
    title: "MOOC SecNumAcadémie",
    titleEn: "MOOC SecNumAcademy",
    institution: "ANSSI - Agence nationale de la sécurité des systèmes d'information",
    institutionEn: "ANSSI - French National Cybersecurity Agency",
    dates: "Août 2023",
    datesEn: "August 2023",
    description:
      "Formation aux fondamentaux de la cybersécurité proposée par l'Agence Nationale de la Sécurité des Systèmes d'Information.",
    descriptionEn:
      "Training in cybersecurity fundamentals offered by the French National Cybersecurity Agency.",
    type: "certification",
    icon: "certificate"
  },
  {
    title: "Introduction to Big Data",
    institution: "University of California San Diego, Coursera",
    dates: "Juillet 2024",
    datesEn: "July 2024",
    description:
      "Formation aux concepts fondamentaux du Big Data et aux technologies associées.",
    descriptionEn:
      "Training in fundamental concepts of Big Data and associated technologies.",
    type: "certification",
    icon: "certificate"
  },
  {
    title: "Certification Google Analytics Individual Qualification (GAIQ)",
    institution: "Google",
    dates: "Août 2023 - Août 2024",
    datesEn: "August 2023 - August 2024",
    description:
      "",
    type: "certification",
    icon: "certificate"
  },
  {
    title: "Baccalauréat Général",
    titleEn: "High School Diploma",
    institution: "Lycée Pape Clément, Pessac",
    dates: "Septembre 2019 - Juin 2022",
    datesEn: "September 2019 - June 2022",
    description:
      "Spécialités : Numérique et Sciences Informatiques (NSI) et Langues, Littératures et Cultures Étrangères et Régionales (LLCER) en anglais.",
    descriptionEn:
      "Specialties: Digital and Computer Science (NSI) and Foreign Languages, Literature and Cultures (LLCER) in English.",
    type: "education",
    icon: "graduation"
  }
];
