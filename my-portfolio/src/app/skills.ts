// app/skills.ts
export const skills = [
  { 
    id: "1", 
    name: "Développement d'applications",
    nameEn: "Application Development",
    slug: "developpement-applications",
    levels: [
      { 
        niveau: 1, 
        description: "Développer des applications informatiques simples",
        descriptionEn: "Develop simple computer applications"
      },
      { 
        niveau: 2, 
        description: "Partir des exigences et aller jusqu'à une application complète",
        descriptionEn: "Start from requirements and build a complete application"
      },
      { 
        niveau: 3, 
        description: "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)",
        descriptionEn: "Adapt applications to various platforms (embedded, web, mobile, IoT...)"
      }
    ]
  },
  { 
    id: "2", 
    name: "Gestion des données",
    nameEn: "Data Management", 
    slug: "gestion-donnees",
    levels: [
      { 
        niveau: 1, 
        description: "Concevoir et mettre en place une base de données à partir d'un cahier des charges client",
        descriptionEn: "Design and implement a database from client specifications"
      },
      { 
        niveau: 2, 
        description: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
        descriptionEn: "Optimize a database, interact with an application and implement security"
      }
    ]
  },
  { 
    id: "3", 
    name: "Analyse et optimisation",
    nameEn: "Analysis and Optimization", 
    slug: "analyse-optimisation",
    levels: [
      { 
        niveau: 1, 
        description: "Appréhender et construire des algorithmes",
        descriptionEn: "Understand and build algorithms"
      },
      { 
        niveau: 2, 
        description: "Sélectionner les algorithmes adéquats pour répondre à un problème donné",
        descriptionEn: "Select the appropriate algorithms to solve a given problem"
      }
    ]
  },
  { 
    id: "4", 
    name: "Conduite de projet",
    nameEn: "Project Management", 
    slug: "conduite-projet",
    levels: [
      { 
        niveau: 1, 
        description: "Identifier les besoins métiers des clients et des utilisateurs",
        descriptionEn: "Identify business needs of clients and users"
      },
      { 
        niveau: 2, 
        description: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
        descriptionEn: "Apply a project monitoring approach based on the business needs of clients and users"
      }
    ]
  },
  { 
    id: "5", 
    name: "Administration",
    nameEn: "Administration", 
    slug: "administration",
    levels: [
      { 
        niveau: 1, 
        description: "Installer et configurer un poste de travail",
        descriptionEn: "Install and configure a workstation"
      },
      { 
        niveau: 2, 
        description: "Déployer des services dans une architecture réseau",
        descriptionEn: "Deploy services in a network architecture"
      },
      { 
        niveau: 3, 
        description: "Faire évoluer et maintenir un système informatique communicant en conditions opérationnelles",
        descriptionEn: "Evolve and maintain a communicating computer system in operational conditions"
      }
    ]
  },
  { 
    id: "6", 
    name: "Gestion d'une équipe informatique", 
    slug: "gestion-equipe-informatique",
    levels: [
      { niveau: 1, description: "Identifier ses aptitudes pour travailler dans une équipe" },
      { niveau: 2, description: "Situer son rôle et ses missions au sein d'une équipe informatique" },
      { niveau: 3, description: "Manager une équipe informatique" }
    ]
  },
];

// Compétences techniques
export const technicalSkills = {
  development: [
    { name: "Python", nameEn: "Python", level: 90, icon: "python" },
    { name: "Java", nameEn: "Java", level: 85, icon: "java" },
    { name: "C", nameEn: "C", level: 75, icon: "c" },
    { name: "C#", nameEn: "C#", level: 65, icon: "csharp" },
    { name: "PHP", nameEn: "PHP", level: 70, icon: "php" }
  ],
  web: [
    { name: "HTML5", nameEn: "HTML5", level: 95, icon: "html5" },
    { name: "CSS3", nameEn: "CSS3", level: 90, icon: "css3" },
    { name: "JavaScript", nameEn: "JavaScript", level: 85, icon: "javascript" },
    { name: "React", nameEn: "React", level: 80, icon: "react" },
    { name: "TypeScript", nameEn: "TypeScript", level: 75, icon: "typescript" },
    { name: "Angular", nameEn: "Angular", level: 60, icon: "angular" },
    { name: "Symfony", nameEn: "Symfony", level: 65, icon: "symfony" },
    { name: "Vue.js", nameEn: "Vue.js", level: 70, icon: "vuejs" },
    { name: "Tailwind", nameEn: "Tailwind", level: 85, icon: "tailwind" },
    { name: "Bootstrap", nameEn: "Bootstrap", level: 90, icon: "bootstrap" }
  ],
  data: [
    { name: "SQL", nameEn: "SQL", level: 85, icon: "database" },
    { name: "Python (Data)", nameEn: "Python (Data)", level: 90, icon: "python" },
    { name: "Spark", nameEn: "Spark", level: 75, icon: "spark" },
    { name: "Jupyterhub", nameEn: "Jupyterhub", level: 85, icon: "jupyter" },
    { name: "ETL", nameEn: "ETL", level: 80, icon: "etl" }
  ],
  tools: [
    { name: "Docker", nameEn: "Docker", level: 80, icon: "docker" },
    { name: "Git", nameEn: "Git", level: 85, icon: "git" },
    { name: "Linux", nameEn: "Linux", level: 75, icon: "linux" },
    { name: "VS Code", nameEn: "VS Code", level: 90, icon: "vscode" },
    { name: "GitHub", nameEn: "GitHub", level: 85, icon: "github" }
  ]
};

// Soft skills
export const softSkills = [
  { name: "Travail d'équipe", nameEn: "Teamwork", level: 90 },
  { name: "Communication", nameEn: "Communication", level: 85 },
  { name: "Résolution de problèmes", nameEn: "Problem Solving", level: 90 },
  { name: "Gestion du temps", nameEn: "Time Management", level: 80 },
  { name: "Adaptabilité", nameEn: "Adaptability", level: 85 },
  { name: "Autonomie", nameEn: "Autonomy", level: 90 }
];

// Compétences linguistiques
export const languageSkills = [
  { name: "Français", nameEn: "French", level: 100, icon: "fr" },
  { name: "Anglais", nameEn: "English", level: 65, icon: "en" },
  { name: "Allemand", nameEn: "German", level: 25, icon: "de" }
];
