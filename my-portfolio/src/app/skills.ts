// app/skills.ts
export const skills = [
  { 
    id: "1", 
    name: "Développement d'applications", 
    slug: "developpement-applications",
    levels: [
      { niveau: 1, description: "Développer des applications informatiques simples" },
      { niveau: 2, description: "Partir des exigences et aller jusqu'à une application complète" },
      { niveau: 3, description: "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)" }
    ]
  },
  { 
    id: "2", 
    name: "Gestion des données", 
    slug: "gestion-donnees",
    levels: [
      { niveau: 1, description: "Concevoir et mettre en place une base de données à partir d'un cahier des charges client" },
      { niveau: 2, description: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité" }
    ]
  },
  { 
    id: "3", 
    name: "Analyse et optimisation", 
    slug: "analyse-optimisation",
    levels: [
      { niveau: 1, description: "Appréhender et construire des algorithmes" },
      { niveau: 2, description: "Sélectionner les algorithmes adéquats pour répondre à un problème donné" }
    ]
  },
  { 
    id: "4", 
    name: "Conduite de projet", 
    slug: "conduite-projet",
    levels: [
      { niveau: 1, description: "Identifier les besoins métiers des clients et des utilisateurs" },
      { niveau: 2, description: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs" }
    ]
  },
  { 
    id: "5", 
    name: "Administration", 
    slug: "administration",
    levels: [
      { niveau: 1, description: "Installer et configurer un poste de travail" },
      { niveau: 2, description: "Déployer des services dans une architecture réseau" },
      { niveau: 3, description: "Faire évoluer et maintenir un système informatique communicant en conditions opérationnelles" }
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
    { name: "Python", level: 90, icon: "python" },
    { name: "Java", level: 85, icon: "java" },
    { name: "C", level: 75, icon: "c" },
    { name: "C#", level: 65, icon: "csharp" },
    { name: "PHP", level: 70, icon: "php" }
  ],
  web: [
    { name: "HTML5", level: 95, icon: "html5" },
    { name: "CSS3", level: 90, icon: "css3" },
    { name: "JavaScript", level: 85, icon: "javascript" },
    { name: "React", level: 80, icon: "react" },
    { name: "TypeScript", level: 75, icon: "typescript" },
    { name: "Angular", level: 60, icon: "angular" },
    { name: "Symfony", level: 65, icon: "symfony" },
    { name: "Vue.js", level: 70, icon: "vuejs" },
    { name: "Tailwind", level: 85, icon: "tailwind" },
    { name: "Bootstrap", level: 90, icon: "bootstrap" }
  ],
  data: [
    { name: "SQL", level: 85, icon: "database" },
    { name: "Python (Data)", level: 90, icon: "python" },
    { name: "Spark", level: 75, icon: "spark" },
    { name: "Jupyterhub", level: 85, icon: "jupyter" },
    { name: "ETL", level: 80, icon: "etl" }
  ],
  tools: [
    { name: "Docker", level: 80, icon: "docker" },
    { name: "Git", level: 85, icon: "git" },
    { name: "Linux", level: 75, icon: "linux" },
    { name: "VS Code", level: 90, icon: "vscode" },
    { name: "GitHub", level: 85, icon: "github" }
  ]
};

// Soft skills
export const softSkills = [
  { name: "Travail d'équipe", level: 90 },
  { name: "Communication", level: 85 },
  { name: "Résolution de problèmes", level: 90 },
  { name: "Gestion du temps", level: 80 },
  { name: "Adaptabilité", level: 85 },
  { name: "Autonomie", level: 90 }
];

// Compétences linguistiques
export const languageSkills = [
  { name: "Français", level: 100, icon: "fr" },
  { name: "Anglais", level: 65, icon: "en" },
  { name: "Allemand", level: 25, icon: "de" }
];
