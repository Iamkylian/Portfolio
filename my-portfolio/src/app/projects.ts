import imageApplicationRAG from '../../public/images/imageApplicationRAG.png';
import imagePlaceholder from '../../public/images/placeholder-project.png';

// Types
export interface Project {
  id: number;
  title: string;
  slug: string;
  image: any;
  description: string;
  longDescription?: string;
  technologies: string[];
  link: string;
  skills: string[];
  context?: string;
  objectives?: string[];
  methodology?: string;
  results?: string[];
  type: 'university' | 'personal';
  date: string;
  isHighlighted?: boolean;
}

// Liste des projets
export const projects: Project[] = [
  {
    id: 1,
    title: "Mémoire sur le RAG & Application pratique",
    slug: "memoire-rag-application",
    image: imageApplicationRAG,
    description:
      "Recherche approfondie sur le RAG (Retrieval-Augmented Generation) et développement d'une application permettant d'interroger des documents PDF en exploitant cette technologie d'IA générative.",
    longDescription:
      "Ce projet combine un travail de recherche théorique et une implémentation pratique sur le RAG (Retrieval-Augmented Generation). Le mémoire analyse l'évolution des IA génératives et leurs limites actuelles, tout en explorant les concepts fondamentaux et techniques du RAG. L'application développée démontre concrètement ces principes en permettant aux utilisateurs d'interroger leurs propres documents PDF via une interface web intuitive.",
    technologies: ["React", "Django", "ChromaDB", "pgVector", "Langchain", "Ollama", "Python", "HTML", "Tokenisation", "Embedding", "LLM"],
    link: "https://github.com/Iamkylian/rag-qa-system",
    skills: ["1", "2", "3"],
    context: "Projet universitaire réalisé à l'IUT de Blagnac (novembre 2024 - décembre 2024) combinant un mémoire de recherche sur les systèmes de RAG et le développement d'une application démontrant leurs applications pratiques.",
    objectives: [
      "Analyser l'évolution des IA génératives et identifier leurs limites actuelles",
      "Présenter les différents types d'IA (ANI, AGI, ASI) et leurs caractéristiques",
      "Expliquer les mécanismes fondamentaux de l'IA: neurones artificiels, régression linéaire, etc.",
      "Explorer en détail le concept du RAG: besoins initiaux et principes essentiels",
      "Détailler les composants techniques du RAG: tokenisation, bases de données vectorielles, similarité cosinus",
      "Développer une application démontrant concrètement l'utilisation du RAG",
      "Évaluer les avantages, limites et cas d'usage du RAG dans différents domaines"
    ],
    methodology: "Recherche bibliographique approfondie sur les IA génératives et le RAG. Implémentation pratique utilisant React pour le frontend, Django pour le backend, ChromaDB/pgVector pour le stockage vectoriel des données, et integration d'Ollama pour les modèles de langage. Langchain a été utilisé pour orchestrer les flux de données entre les différents composants du système.",
    results: [
      "Mémoire complet analysant les aspects théoriques et techniques du RAG",
      "Application fonctionnelle démontrant l'utilisation pratique du RAG",
      "Interface utilisateur claire permettant l'upload de documents et l'interrogation via langage naturel",
      "Démonstration concrète des avantages du RAG pour l'amélioration de la pertinence des réponses des LLM"
    ],
    type: "university",
    date: "2024",
    isHighlighted: true
  },
  {
    id: 2,
    title: "RoomService - Gestion de l'occupation des salles",
    slug: "roomservice-gestion-salles",
    image: imagePlaceholder,
    description: "Système de gestion et de visualisation en temps réel de l'occupation des salles de l'IUT de Blagnac, avec transmission des données via MQTT et déploiement containerisé.",
    longDescription: "Ce projet (SAE S3.A.01) visait à développer une solution complète de gestion des salles pour l'IUT. Il comprend un système de transmission de données en temps réel depuis des capteurs, une interface intuitive pour la visualisation de l'occupation, et une architecture robuste basée sur des containers pour faciliter le déploiement.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Python", "SQL", "MQTT", "Docker", "PhpMyAdmin"],
    link: "https://github.com/Iamkylian/roomservice",
    skills: ["1", "2", "4"],
    context: "Projet universitaire (SAE S3.A.01) réalisé à l'IUT de Blagnac (janvier 2024 - février 2024) pour résoudre les problèmes de gestion des salles et optimiser leur utilisation.",
    objectives: [
      "Développer un système de transmission de données en temps réel via MQTT",
      "Mettre en place une architecture containerisée avec Docker pour faciliter le déploiement",
      "Créer une interface utilisateur intuitive pour la visualisation de l'occupation des salles",
      "Concevoir et implémenter une base de données pour stocker les informations des capteurs",
      "Assurer la portabilité et la scalabilité de l'application"
    ],
    methodology: "Développement de l'interface côté serveur avec Python, conception du front-end avec HTML, CSS et JavaScript, gestion du back-end avec PHP, et utilisation de SQL pour la base de données. Implémentation de MQTT pour la transmission des données en temps réel et Docker pour la containerisation.",
    results: [
      "Système fonctionnel de transmission de données en temps réel",
      "Interface utilisateur interactive et réactive",
      "Architecture containerisée facilitant le déploiement",
      "Base de données optimisée pour la gestion des données issues des capteurs"
    ],
    type: "university",
    date: "2024",
    isHighlighted: true
  },
  {
    id: 3,
    title: "Exploitation des bases de données - BeachAffairs",
    slug: "exploitation-bases-donnees-beachaffairs",
    image: imagePlaceholder,
    description: "Projet d'analyse, rétro-conception et amélioration d'une base de données existante pour le système de gestion BeachAffairs, réalisé à l'IUT de Blagnac.",
    longDescription: "Ce projet (SAE S2.04) a consisté en l'exploration, la rétro-conception et l'amélioration d'une base de données existante pour le système BeachAffairs. Le travail a inclus l'analyse de la structure actuelle, l'identification des défauts, et l'implémentation d'améliorations basées sur de nouveaux besoins exprimés.",
    technologies: ["SQL", "SQL-LDD", "SQL-LMD", "SQL-LID", "Win'Design", "UML"],
    link: "https://github.com/Iamkylian/BeachAffairs-DB",
    skills: ["2", "3"],
    context: "Projet universitaire réalisé à l'IUT de Blagnac (mai 2023 - juin 2023) visant à approfondir les compétences en analyse, conception et optimisation de bases de données.",
    objectives: [
      "Explorer et rétro-concevoir une base de données existante",
      "Réaliser le schéma logique et conceptuel de la base de données",
      "Créer une nouvelle version améliorée de la base de données",
      "Traduire le diagramme de classes en schéma relationnel",
      "Développer des scripts SQL pour transformer la base de données",
      "Interroger la base de données avec des requêtes SQL-LID"
    ],
    methodology: "Analyse de la base existante, création de schémas logiques avec les règles de dérivation, modélisation conceptuelle avec Win'Design, développement de scripts SQL-LDD et SQL-LMD pour la transformation de la base, et réalisation de requêtes SQL-LID pour l'interrogation des données.",
    results: [
      "Schéma logique complet de la base de données existante",
      "Schéma conceptuel et dictionnaire de données avec Win'Design",
      "Nouvelle version améliorée de la base de données",
      "Diagramme de classes pour la nouvelle base de données",
      "Scripts SQL-LDD et SQL-LMD fonctionnels",
      "Requêtes SQL-LID pour l'interrogation des données"
    ],
    type: "university",
    date: "2023",
    isHighlighted: false
  },
  {
    id: 4,
    title: "Site Web Portfolio",
    slug: "site-portfolio",
    image: imagePlaceholder,
    description: "Développement de mon portfolio personnel utilisant les technologies modernes du web pour présenter mes compétences et réalisations de manière interactive.",
    longDescription: "Ce portfolio est conçu pour mettre en valeur mes compétences et projets de manière moderne et interactive. Il utilise les dernières technologies web pour offrir une expérience utilisateur optimale tout en respectant les meilleures pratiques de développement.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/Iamkylian/Portfolio",
    skills: ["1", "4"],
    context: "Projet personnel visant à créer une vitrine professionnelle de mes compétences et réalisations.",
    objectives: [
      "Concevoir un site web moderne et réactif",
      "Présenter mes compétences et projets de manière claire et attrayante",
      "Implémenter des animations subtiles pour améliorer l'expérience utilisateur",
      "Assurer l'accessibilité et les performances"
    ],
    methodology: "Utilisation de Next.js pour le rendu côté serveur, TypeScript pour la sécurité du typage, Tailwind CSS pour le design responsive, et Framer Motion pour les animations.",
    results: [
      "Interface utilisateur intuitive et esthétique",
      "Excellentes performances (scores Lighthouse optimaux)",
      "Site entièrement responsive et accessible"
    ],
    type: "university",
    date: "2025",
    isHighlighted: true
  },
  {
    id: 5,
    title: "Amélioration RAG",
    slug: "amelioration-rag",
    image: imagePlaceholder,
    description: "Projet d'amélioration des systèmes RAG (Retrieval-Augmented Generation) par l'intégration de techniques avancées de traitement du langage naturel.",
    longDescription: "Ce projet personnel étend mon travail académique sur les systèmes RAG en explorant des techniques avancées comme la reformulation de requêtes, la diversification des résultats et l'adaptation des modèles à des domaines spécifiques.",
    technologies: ["Python", "Django", "ChromaDB", "Langchain", "ollama", "API Rest", "React"],
    link: "https://github.com/Iamkylian/advanced-rag",
    skills: ["1", "3"],
    context: "Prolongement de mon mémoire RAG, ce projet personnel vise à approfondir et améliorer les techniques de RAG pour des applications spécifiques.",
    objectives: [
      "Créer une API accessible pour intégrer ces améliorations dans d'autres systèmes",
      "Mise en place d'une interface utilisateur pour interagir avec le système",
      "Amélioration de la pertinence des réponses générées par les systèmes RAG"
    ],
    methodology: "Utilisation de modèles pré-entraînés de ollama, développement d'une API avec Django, et implémentation d'un frontend de démonstration en React.",
    results: [
      "Interface utilisateur interactive et esthétique",
      "API Rest pour l'intégration dans d'autres systèmes",
      "Réduction du temps de traitement des requêtes complexes"
    ],
    type: "personal",
    date: "2024",
    isHighlighted: true
  },
  {
    id: 6,
    title: "Anime Face Recognition",
    slug: "anime-face-recognition",
    image: imagePlaceholder,
    description: "Système de reconnaissance de visages de personnages d'anime utilisant des techniques de deep learning pour identifier des personnages à partir d'images.",
    longDescription: "Ce projet utilise des techniques avancées de computer vision et de deep learning pour reconnaître des personnages d'anime à partir d'images. Il inclut un modèle entraîné sur une large base de données d'images de personnages d'anime populaires.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
    link: "https://github.com/Iamkylian/anime-face-rec",
    skills: ["1", "3"],
    context: "Projet personnel né de ma passion pour les animes et le machine learning, visant à explorer les capacités des réseaux de neurones dans la reconnaissance d'images stylisées.",
    objectives: [
      "Développer un système de reconnaissance faciale adaptée aux visages stylisés d'anime",
      "Analyser les performances du modèle sur différents styles d'illustration"
    ],
    methodology: "Création d'un dataset de visages d'anime, entraînement d'un réseau de neurones convolutif avec TensorFlow.",
    results: [
      "Précision de reconnaissance de 82% sur le dataset de test"
    ],
    type: "personal",
    date: "2023",
    isHighlighted: false
  },
  {
    id: 7,
    title: "Apprentissage outils IA",
    slug: "apprentissage-outils-ia",
    image: imagePlaceholder,
    description: "Projet de formation et d'exploration des outils d'intelligence artificielle modernes, incluant des tutoriels et des cas d'usage pratiques.",
    longDescription: "Ce projet rassemble mes expériences et apprentissages dans le domaine de l'IA, notamment les modèles génératifs, les techniques d'apprentissage automatique et leur application pratique dans différents domaines.",
    technologies: ["Python", "Jupyter", "TensorFlow", "PyTorch", "Stable Diffusion"],
    link: "https://github.com/Iamkylian/ai-learning-journey",
    skills: ["1", "3"],
    context: "Démarche personnelle d'auto-formation sur les technologies d'IA les plus récentes et documentation de ce parcours d'apprentissage.",
    objectives: [
      "Explorer les différents modèles et frameworks d'IA existants",
      "Se renseigner sur les bonnes pratiques et les limitations actuelles",
    ],
    methodology: "",
    results: [],
    type: "personal",
    date: "2022-2024",
    isHighlighted: false
  },
  {
    id: 8,
    title: "Slave Narratives - Visualisation des récits d'esclaves",
    slug: "slave-narratives",
    image: imagePlaceholder,
    description: "Amélioration du site web de visualisation des récits d'esclaves historiques pour l'Université Toulouse Jean Jaurès & Université Paul Sabatier, permettant de cartographier et retracer leurs parcours de vie.",
    longDescription: "Ce projet (SAE S5.A.01) visait à développer et améliorer une application web de visualisation des récits d'esclaves historiques. Le système permet de cartographier et visualiser les parcours de vie des esclaves (lieux de naissance, de mort, de publication) et offre de nouvelles fonctionnalités pour faciliter la recherche académique dans ce domaine.",
    technologies: ["PHP", "CodeIgniter", "MVC", "MariaDB", "HTML", "CSS", "JavaScript", "API Zotero", "PhpMyAdmin", "XAMPP"],
    link: "https://github.com/Iamkylian/sae-5-a-01-2024-2025-esclaves-rouge",
    skills: ["1", "2", "4"],
    context: "Projet universitaire (SAE S5.A.01) réalisé à l'IUT de Blagnac (septembre 2024 - novembre 2024) en collaboration avec l'Université Toulouse Jean Jaurès et l'Université Paul Sabatier pour améliorer leur site existant (slave-narratives.univ-tlse2.fr).",
    objectives: [
      "Améliorer et moderniser l'interface utilisateur et administrateur du site",
      "Développer de nouvelles fonctionnalités pour enrichir l'expérience utilisateur",
      "Implémenter un système d'export PDF des données",
      "Intégrer l'API bibliographique Zotero pour faciliter les références académiques",
      "Créer un moteur de recherche avancé pour explorer efficacement les récits"
    ],
    methodology: "Développement basé sur l'architecture MVC avec CodeIgniter, utilisation de MariaDB pour la base de données, et intégration de l'API Zotero. Travail en équipe avec utilisation de XAMPP comme environnement de développement local.",
    results: [
      "Refonte complète des interfaces administrateur et utilisateur",
      "Implémentation réussie de l'export PDF",
      "Intégration fonctionnelle de l'API bibliographique Zotero",
      "Développement d'un moteur de recherche avancé",
      "Site responsive et modernisé facilitant la recherche historique"
    ],
    type: "university",
    date: "2024",
    isHighlighted: true
  },
  {
    id: 9,
    title: "Mise en place d'un environnement de développement",
    slug: "environnement-developpement-ubuntu",
    image: imagePlaceholder,
    description: "Configuration complète d'une machine virtuelle Ubuntu pour le développement, avec installation de logiciels spécifiques et automatisation par scripts.",
    longDescription: "Ce projet (SAE S1.03) consistait à mettre en place et configurer un environnement de développement complet sur une machine virtuelle Ubuntu. L'objectif était de créer un système fonctionnel pouvant être utilisé par 200 utilisateurs, avec tous les outils de développement nécessaires et des scripts d'automatisation.",
    technologies: ["Ubuntu", "VirtualBox", "Bash", "Shell Script", "Java", "ProjectLibre", "Asciidoctor", "Terminator"],
    link: "https://github.com/Iamkylian/sae-s1-03-vm-config",
    skills: ["2", "4"],
    context: "Projet universitaire (SAE S1.03) réalisé à l'IUT de Blagnac (novembre 2022 - décembre 2022) visant à apprendre la configuration et la gestion d'un environnement Linux pour le développement logiciel.",
    objectives: [
      "Créer et configurer une machine virtuelle sous Ubuntu avec VirtualBox",
      "Installer et configurer divers logiciels de développement",
      "Mettre en place un système multi-utilisateurs (200 comptes)",
      "Développer un script de test en Bash pour valider la configuration",
      "Configurer les options de partage entre machine hôte et machine virtuelle",
      "Présenter la solution fonctionnelle lors d'une soutenance"
    ],
    methodology: "Travail en équipe pour la configuration progressive de la machine virtuelle, développement de scripts Bash pour automatiser la création des utilisateurs et les tests, documentation des procédures d'installation et de configuration.",
    results: [
      "Machine virtuelle Ubuntu entièrement configurée et fonctionnelle",
      "Installation réussie de l'ensemble des logiciels requis",
      "Configuration de 200 utilisateurs avec droits appropriés",
      "Scripts de test opérationnels validant la configuration",
      "Documentation complète du processus d'installation et de configuration",
      "Présentation réussie lors de la soutenance"
    ],
    type: "university",
    date: "2022",
    isHighlighted: false
  },
  {
    id: 10,
    title: "Suivi d'entraînements sportifs et coaching",
    slug: "suivi-entrainements-sportifs-coaching",
    image: imagePlaceholder,
    description: "Développement d'une application web complète de gestion d'un club de sport orienté coaching, comprenant un back-office administratif, une API REST et une application front-end pour les sportifs.",
    longDescription: "Ce projet (SAE S6) consistait à concevoir et développer une solution complète pour un club de sport, permettant la gestion des coachs, des sportifs, des séances d'entraînement et des exercices. L'architecture inclut un back-office Symfony avec EasyAdmin pour les coachs et responsables, une API REST pour la communication entre les composants, et une application Angular pour les sportifs et internautes.",
    technologies: ["Symfony", "Angular", "EasyAdmin", "API REST", "JWT", "MySQL", "MVC", "TypeScript", "Bootstrap", "Git"],
    link: "https://github.com/Iamkylian/sae-s6-sport-coaching",
    skills: ["1", "2", "3", "4"],
    context: "Projet universitaire (SAE S6) réalisé à l'IUT de Blagnac visant à mettre en pratique l'ensemble des compétences acquises durant la formation à travers le développement d'une application web complète avec architecture distribuée.",
    objectives: [
      "Développer un back-office avec Symfony et EasyAdmin pour la gestion administrative",
      "Créer une API REST sécurisée pour la communication entre les composants",
      "Concevoir une application front-end avec Angular pour les sportifs",
      "Implémenter des fonctionnalités avancées comme la planification de séances",
      "Mettre en place un système de statistiques et de suivi des performances",
      "Gérer les règles métier complexes (réservations, annulations, validations)",
      "Développer un webservice de bilan d'entraînement personnalisé"
    ],
    methodology: "Architecture distribuée avec séparation claire des responsabilités : back-office Symfony pour l'administration, API REST pour l'exposition des données, et application Angular pour l'interface utilisateur. Implémentation des règles métier complexes dans les contrôleurs Symfony et utilisation de JWT pour l'authentification sécurisée.",
    results: [
      "Back-office fonctionnel permettant la gestion complète des utilisateurs, séances et exercices",
      "API REST sécurisée exposant les données nécessaires à l'application front-end",
      "Interface Angular intuitive pour les sportifs avec planning, réservations et suivi",
      "Webservice de bilan d'entraînement personnalisé avec visualisations graphiques",
      "Système de statistiques pour les responsables (taux d'occupation, popularité des séances)",
      "Gestion automatisée des fiches de paie pour les coachs"
    ],
    type: "university",
    date: "2025",
    isHighlighted: true
  },
  {
    id: 11,
    title: "Automatisation CI/CD pour une application existante",
    slug: "automatisation-cicd",
    image: imagePlaceholder,
    description: "Mise en place d'un processus complet d'intégration et déploiement continus (CI/CD) sur une application existante, utilisant GitLab CI pour l'automatisation du build, des tests et du déploiement.",
    longDescription: "Ce projet (R5.A.07) consistait à mettre en place un pipeline d'intégration continue et de déploiement continu pour une application existante. Le processus comprenait l'automatisation complète du cycle de développement, des tests à la production, avec des environnements distincts pour les tests et la production.",
    technologies: ["GitLab CI/CD", "Docker", "Tests Automatisés", "Déploiement Continu", "Git", "Shell Script", "YAML"],
    link: "https://github.com/Iamkylian/automatisation-cicd",
    skills: ["1", "4"],
    context: "Projet universitaire (R5.A.07) portant sur l'automatisation des processus de développement et de déploiement d'applications, avec pour objectif d'améliorer la qualité et la fiabilité des livraisons.",
    objectives: [
      "Configurer un pipeline d'intégration continue avec tests automatisés",
      "Mettre en place un processus de déploiement continu vers différents environnements",
      "Créer des environnements distincts pour les tests et la production",
      "Générer automatiquement des livrables ou déployer l'application sur un serveur",
      "Intégrer des mécanismes de qualité de code et de documentation"
    ],
    methodology: "Configuration d'un dépôt GitLab avec un fichier .gitlab-ci.yml structuré en stages (build, test, deploy) et jobs. Utilisation de runners GitLab pour exécuter les différentes étapes du pipeline. Mise en place de mécanismes de déploiement automatique vers des environnements spécifiques.",
    results: [
      "Pipeline CI/CD fonctionnel avec détection automatique des erreurs",
      "Environnements de test et de production distincts et opérationnels",
      "Génération automatique de documentation et de rapports de qualité",
      "Déploiement automatisé sur serveur web ou génération de releases",
      "Documentation complète du processus d'automatisation"
    ],
    type: "university",
    date: "2024",
    isHighlighted: false
  },
  {
    id: 12,
    title: "Analyse et optimisation d'algorithmes de pathfinding sur des données géographiques",
    slug: "optimisation-algorithmes-pathfinding",
    image: imagePlaceholder,
    description: "Implémentation et optimisation d'algorithmes de calcul de chemin (Dijkstra et A*) sur des données OpenStreetMap, avec analyse des performances sur différentes tailles de territoires.",
    longDescription: "Ce projet (R5.A.04) consistait à analyser et optimiser des algorithmes de pathfinding appliqués à des données géographiques réelles. L'objectif était de comparer différentes approches pour calculer rapidement les distances et les chemins entre points dans des ensembles de données de taille croissante, depuis une petite région jusqu'à l'échelle nationale.",
    technologies: ["Python", "Pandas", "Polar", "Matplotlib", "Dijkstra", "A*", "OpenStreetMap", "Analyse de performance", "Optimisation algorithmique"],
    link: "https://github.com/Iamkylian/optimisation-algorithmes-pathfinding",
    skills: ["1", "3"],
    context: "Projet universitaire (R5.A.04) portant sur l'analyse et l'optimisation de code, avec application concrète sur des données géographiques réelles issues d'OpenStreetMap.",
    objectives: [
      "Implémenter l'algorithme de Dijkstra pour calculer des distances sur un graphe représentant une carte",
      "Développer une version optimisée avec l'algorithme A* pour améliorer les performances",
      "Analyser et comparer les performances des différentes approches",
      "Optimiser la gestion de la mémoire pour traiter des ensembles de données volumineux",
      "Réaliser un benchmark complet avec visualisation des résultats"
    ],
    methodology: "Implémentation initiale de l'algorithme de Dijkstra, puis optimisation avec A*. Utilisation de Pandas pour la manipulation des données CSV issues d'OpenStreetMap. Analyse des performances avec différentes tailles de territoires (région locale, département, région, pays) et visualisation des résultats avec Matplotlib.",
    results: [
      "Implémentation fonctionnelle des algorithmes Dijkstra et A* sur des données cartographiques",
      "Amélioration significative des performances grâce à l'heuristique de A*",
      "Optimisation de la gestion mémoire permettant de traiter des jeux de données à l'échelle nationale",
      "Analyse comparative détaillée des performances avec visualisations",
      "Documentation des stratégies d'optimisation et des compromis espace-temps"
    ],
    type: "university",
    date: "2023",
    isHighlighted: false
  }
];