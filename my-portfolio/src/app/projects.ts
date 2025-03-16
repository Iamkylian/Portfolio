// Types
export interface Project {
  id: number;
  title: string;
  titleEn?: string;
  slug: string;
  image: string;
  description: string;
  descriptionEn?: string;
  longDescription?: string;
  longDescriptionEn?: string;
  context?: string;
  contextEn?: string;
  objectives?: string[];
  objectivesEn?: string[];
  methodology?: string;
  methodologyEn?: string;
  results?: string[];
  resultsEn?: string[];
  technologies: string[];
  type: "university" | "personal";
  skills: string[];
  link: string;
  demo?: string;
  date: string;
  isHighlighted?: boolean;
}

// Liste des projets
export const projects: Project[] = [
  {
    id: 1,
    title: "Mémoire sur le RAG & Application pratique",
    titleEn: "RAG & Application Practical Study",
    slug: "memoire-rag-application",
    image: "/Portfolio/images/imageApplicationRAG.png",
    description:
      "Recherche approfondie sur le RAG (Retrieval-Augmented Generation) et développement d'une application permettant d'interroger des documents PDF en exploitant cette technologie d'IA générative.",
    descriptionEn:
      "In-depth research on RAG (Retrieval-Augmented Generation) and development of an application to query PDF documents using this generative AI technology.",
    longDescription:
      "Ce projet comporte deux volets : un mémoire d'étude sur les mécanismes du RAG (Retrieval-Augmented Generation) et ses applications, ainsi qu'une mise en pratique concrète. L'application développée permet d'interroger des documents PDF en utilisant la technologie RAG qui combine recherche d'information contextuelle et génération de réponses par un LLM.",
    longDescriptionEn:
      "This project has two components: a research paper on RAG (Retrieval-Augmented Generation) mechanisms and applications, and a practical implementation. The developed application allows querying PDF documents using RAG technology that combines contextual information retrieval and response generation by an LLM.",
    technologies: ["Python", "RAG", "LangChain", "Chroma DB", "Streamlit", "LLM"],
    type: "university",
    skills: ["1", "2", "3"],
    link: "https://github.com/Iamkylian/RAG-vs-IA",
    date: "2024"
  },
  {
    id: 2,
    title: "RoomService - Gestion de l'occupation des salles",
    titleEn: "RoomService - Room Occupancy Management",
    slug: "roomservice-gestion-salles",
    image: "/Portfolio/images/placeholder-project.png",
    description: "Système de gestion et de visualisation en temps réel de l'occupation des salles de l'IUT de Blagnac, avec transmission des données via MQTT et déploiement containerisé.",
    descriptionEn: "Real-time management and visualization system for room occupancy at IUT Blagnac, with data transmission via MQTT and containerized deployment.",
    longDescription: "Ce projet (SAE S3.A.01) visait à développer une solution complète de gestion des salles pour l'IUT. Il comprend un système de transmission de données en temps réel depuis des capteurs, une interface intuitive pour la visualisation de l'occupation, et une architecture robuste basée sur des containers pour faciliter le déploiement.",
    longDescriptionEn: "This project (SAE S3.A.01) aimed to develop a complete room management solution for the IUT. It includes a real-time data transmission system from sensors, an intuitive interface for occupancy visualization, and a robust container-based architecture to facilitate deployment.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Python", "SQL", "MQTT", "Docker", "PhpMyAdmin"],
    link: "https://github.com/Iamkylian/roomservice",
    skills: ["1", "2", "4"],
    context: "Projet universitaire (SAE S3.A.01) réalisé à l'IUT de Blagnac (janvier 2024 - février 2024) pour résoudre les problèmes de gestion des salles et optimiser leur utilisation.",
    contextEn: "University project (SAE S3.A.01) carried out at IUT Blagnac (January 2024 - February 2024) to solve room management issues and optimize their use.",
    objectives: [
      "Développer un système de transmission de données en temps réel via MQTT",
      "Mettre en place une architecture containerisée avec Docker pour faciliter le déploiement",
      "Créer une interface utilisateur intuitive pour la visualisation de l'occupation des salles",
      "Concevoir et implémenter une base de données pour stocker les informations des capteurs",
      "Assurer la portabilité et la scalabilité de l'application"
    ],
    objectivesEn: [
      "Develop a real-time data transmission system using MQTT",
      "Set up a containerized architecture with Docker to facilitate deployment",
      "Create an intuitive user interface for room occupancy visualization",
      "Design and implement a database to store sensor information",
      "Ensure application portability and scalability"
    ],
    methodology: "Développement de l'interface côté serveur avec Python, conception du front-end avec HTML, CSS et JavaScript, gestion du back-end avec PHP, et utilisation de SQL pour la base de données. Implémentation de MQTT pour la transmission des données en temps réel et Docker pour la containerisation.",
    methodologyEn: "Server-side interface development with Python, front-end design with HTML, CSS and JavaScript, back-end management with PHP, and SQL for the database. Implementation of MQTT for real-time data transmission and Docker for containerization.",
    results: [
      "Système fonctionnel de transmission de données en temps réel",
      "Interface utilisateur interactive et réactive",
      "Architecture containerisée facilitant le déploiement",
      "Base de données optimisée pour la gestion des données issues des capteurs"
    ],
    resultsEn: [
      "Functional real-time data transmission system",
      "Interactive and responsive user interface",
      "Containerized architecture facilitating deployment",
      "Optimized database for sensor data management"
    ],
    type: "university",
    date: "2024",
    isHighlighted: true
  },
  {
    id: 3,
    title: "Exploitation des bases de données - BeachAffairs",
    titleEn: "Database Exploitation - BeachAffairs",
    slug: "exploitation-bases-donnees-beachaffairs",
    image: "/Portfolio/images/placeholder-project.png",
    description: "Projet d'analyse, rétro-conception et amélioration d'une base de données existante pour le système de gestion BeachAffairs, réalisé à l'IUT de Blagnac.",
    descriptionEn: "Analysis, reverse engineering, and improvement project of an existing database for the BeachAffairs management system, carried out at IUT Blagnac.",
    longDescription: "Ce projet (SAE S2.04) a consisté en l'exploration, la rétro-conception et l'amélioration d'une base de données existante pour le système BeachAffairs. Le travail a inclus l'analyse de la structure actuelle, l'identification des défauts, et l'implémentation d'améliorations basées sur de nouveaux besoins exprimés.",
    longDescriptionEn: "This project (SAE S2.04) involved exploring, reverse engineering, and improving an existing database for the BeachAffairs system. The work included analyzing the current structure, identifying flaws, and implementing improvements based on newly expressed needs.",
    technologies: ["SQL", "SQL-LDD", "SQL-LMD", "SQL-LID", "Win'Design", "UML"],
    link: "https://github.com/Iamkylian/BeachAffairs-DB",
    skills: ["2", "3"],
    context: "Projet universitaire réalisé à l'IUT de Blagnac (mai 2023 - juin 2023) visant à approfondir les compétences en analyse, conception et optimisation de bases de données.",
    contextEn: "University project conducted at IUT Blagnac (May 2023 - June 2023) aimed at deepening skills in database analysis, design, and optimization.",
    objectives: [
      "Explorer et rétro-concevoir une base de données existante",
      "Réaliser le schéma logique et conceptuel de la base de données",
      "Créer une nouvelle version améliorée de la base de données",
      "Traduire le diagramme de classes en schéma relationnel",
      "Développer des scripts SQL pour transformer la base de données",
      "Interroger la base de données avec des requêtes SQL-LID"
    ],
    objectivesEn: [
      "Explore and reverse engineer an existing database",
      "Create the logical and conceptual schema of the database",
      "Create an improved new version of the database",
      "Translate the class diagram to a relational schema",
      "Develop SQL scripts to transform the database",
      "Query the database with SQL-LID queries"
    ],
    methodology: "Analyse de la base existante, création de schémas logiques avec les règles de dérivation, modélisation conceptuelle avec Win'Design, développement de scripts SQL-LDD et SQL-LMD pour la transformation de la base, et réalisation de requêtes SQL-LID pour l'interrogation des données.",
    methodologyEn: "Analysis of the existing database, creation of logical schemas with derivation rules, conceptual modeling with Win'Design, development of SQL-LDD and SQL-LMD scripts for database transformation, and implementation of SQL-LID queries for data interrogation.",
    results: [
      "Schéma conceptuel et logique complet de la base de données existante",
      "Nouvelle version améliorée de la base de données répondant aux nouveaux besoins",
      "Scripts SQL-LDD et SQL-LMD fonctionnels pour la transformation de la base",
      "Requêtes SQL-LID permettant d'extraire les informations demandées",
      "Documentation complète du processus de rétro-conception"
    ],
    resultsEn: [
      "Complete conceptual and logical schema of the existing database",
      "Improved new version of the database meeting new requirements",
      "Functional SQL-LDD and SQL-LMD scripts for database transformation",
      "SQL-LID queries to extract requested information",
      "Complete documentation of the reverse engineering process"
    ],
    type: "university",
    date: "2023",
    isHighlighted: false
  },
  {
    id: 4,
    title: "Site Web Portfolio",
    titleEn: "Portfolio Website",
    slug: "site-portfolio",
    image: "/Portfolio/images/placeholder-project.png",
    description: "Développement de mon portfolio personnel utilisant les technologies modernes du web pour présenter mes compétences et réalisations de manière interactive.",
    descriptionEn: "Development of my personal portfolio using modern web technologies to present my skills and achievements in an interactive way.",
    longDescription: "Ce portfolio est conçu pour mettre en valeur mes compétences et projets de manière moderne et interactive. Il utilise les dernières technologies web pour offrir une expérience utilisateur optimale tout en respectant les meilleures pratiques de développement.",
    longDescriptionEn: "This portfolio is designed to showcase my skills and projects in a modern and interactive way. It uses the latest web technologies to provide an optimal user experience while following development best practices.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/Iamkylian/Portfolio",
    skills: ["1", "4"],
    context: "Projet personnel visant à créer une vitrine professionnelle de mes compétences et réalisations.",
    contextEn: "Personal project aimed at creating a professional showcase of my skills and achievements.",
    objectives: [
      "Concevoir un site web moderne et réactif",
      "Présenter mes compétences et projets de manière claire et attrayante",
      "Implémenter des animations subtiles pour améliorer l'expérience utilisateur",
      "Assurer l'accessibilité et les performances"
    ],
    objectivesEn: [
      "Design a modern and responsive website",
      "Present my skills and projects in a clear and attractive way",
      "Implement subtle animations to enhance user experience",
      "Ensure accessibility and performance"
    ],
    methodology: "Utilisation de Next.js pour le rendu côté serveur, TypeScript pour la sécurité du typage, Tailwind CSS pour le design responsive, et Framer Motion pour les animations.",
    methodologyEn: "Using Next.js for server-side rendering, TypeScript for type safety, Tailwind CSS for responsive design, and Framer Motion for animations.",
    results: [
      "Interface utilisateur intuitive et esthétique",
      "Excellentes performances (scores Lighthouse optimaux)",
      "Site entièrement responsive et accessible"
    ],
    resultsEn: [
      "Intuitive and aesthetic user interface",
      "Excellent performance (optimal Lighthouse scores)",
      "Fully responsive and accessible website"
    ],
    type: "university",
    date: "2025",
    isHighlighted: true
  },
  {
    id: 5,
    title: "Amélioration RAG",
    titleEn: "RAG Enhancement",
    slug: "amelioration-rag",
    image: "/Portfolio/images/placeholder-project.png",
    description: "Projet d'amélioration des systèmes RAG (Retrieval-Augmented Generation) par l'intégration de techniques avancées de traitement du langage naturel.",
    descriptionEn: "Project to improve RAG (Retrieval-Augmented Generation) systems by integrating advanced natural language processing techniques.",
    longDescription: "Ce projet personnel étend mon travail académique sur les systèmes RAG en explorant des techniques avancées comme la reformulation de requêtes, la diversification des résultats et l'adaptation des modèles à des domaines spécifiques.",
    longDescriptionEn: "This personal project extends my academic work on RAG systems by exploring advanced techniques such as query reformulation, result diversification, and adapting models to specific domains.",
    technologies: ["Python", "Django", "ChromaDB", "Langchain", "ollama", "API Rest", "React"],
    link: "https://github.com/Iamkylian/advanced-rag",
    skills: ["1", "3"],
    context: "Prolongement de mon mémoire RAG, ce projet personnel vise à approfondir et améliorer les techniques de RAG pour des applications spécifiques.",
    contextEn: "Extension of my RAG thesis, this personal project aims to deepen and improve RAG techniques for specific applications.",
    objectives: [
      "Créer une API accessible pour intégrer ces améliorations dans d'autres systèmes",
      "Mise en place d'une interface utilisateur pour interagir avec le système",
      "Amélioration de la pertinence des réponses générées par les systèmes RAG"
    ],
    objectivesEn: [
      "Create an accessible API to integrate these improvements into other systems",
      "Set up a user interface to interact with the system",
      "Improve the relevance of responses generated by RAG systems"
    ],
    methodology: "Utilisation de modèles pré-entraînés de ollama, développement d'une API avec Django, et implémentation d'un frontend de démonstration en React.",
    methodologyEn: "Using pre-trained ollama models, developing an API with Django, and implementing a demonstration frontend in React.",
    results: [
      "Interface utilisateur interactive et esthétique",
      "API Rest pour l'intégration dans d'autres systèmes",
      "Réduction du temps de traitement des requêtes complexes"
    ],
    resultsEn: [
      "Interactive and aesthetic user interface",
      "REST API for integration into other systems",
      "Reduced processing time for complex queries"
    ],
    type: "personal",
    date: "2024",
    isHighlighted: true
  },
  {
    id: 6,
    title: "Anime Face Recognition",
    titleEn: "Anime Face Recognition",
    slug: "anime-face-recognition",
    image: "/Portfolio/images/placeholder-project.png",
    description: "Système de reconnaissance de visages de personnages d'anime utilisant des techniques de deep learning pour identifier des personnages à partir d'images.",
    descriptionEn: "Anime character face recognition system using deep learning techniques to identify characters from images.",
    longDescription: "Ce projet utilise des techniques avancées de computer vision et de deep learning pour reconnaître des personnages d'anime à partir d'images. Il inclut un modèle entraîné sur une large base de données d'images de personnages d'anime populaires.",
    longDescriptionEn: "This project uses advanced computer vision and deep learning techniques to recognize anime characters from images. It includes a model trained on a large database of popular anime character images.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
    link: "https://github.com/Iamkylian/anime-face-rec",
    skills: ["1", "3"],
    context: "Projet personnel né de ma passion pour les animes et le machine learning, visant à explorer les capacités des réseaux de neurones dans la reconnaissance d'images stylisées.",
    contextEn: "Personal project born from my passion for anime and machine learning, aiming to explore the capabilities of neural networks in stylized image recognition.",
    objectives: [
      "Développer un système de reconnaissance faciale adaptée aux visages stylisés d'anime",
      "Analyser les performances du modèle sur différents styles d'illustration"
    ],
    objectivesEn: [
      "Develop a facial recognition system adapted to stylized anime faces",
      "Analyze model performance on different illustration styles"
    ],
    methodology: "Création d'un dataset de visages d'anime, entraînement d'un réseau de neurones convolutif avec TensorFlow.",
    methodologyEn: "Creation of an anime face dataset, training a convolutional neural network with TensorFlow.",
    results: [
      "Précision de reconnaissance de 82% sur le dataset de test"
    ],
    resultsEn: [
      "Recognition accuracy of 82% on the test dataset"
    ],
    type: "personal",
    date: "2023",
    isHighlighted: false
  },
  {
    id: 7,
    title: "Apprentissage outils IA",
    titleEn: "AI Tools Learning",
    slug: "apprentissage-outils-ia",
    image: "/Portfolio/images/placeholder-project.png",
    description: "Projet de formation et d'exploration des outils d'intelligence artificielle modernes, incluant des tutoriels et des cas d'usage pratiques.",
    descriptionEn: "Training and exploration project of modern artificial intelligence tools, including tutorials and practical use cases.",
    longDescription: "Ce projet rassemble mes expériences et apprentissages dans le domaine de l'IA, notamment les modèles génératifs, les techniques d'apprentissage automatique et leur application pratique dans différents domaines.",
    longDescriptionEn: "This project brings together my experiences and learning in the field of AI, including generative models, machine learning techniques, and their practical application in different domains.",
    technologies: ["Python", "Jupyter", "TensorFlow", "PyTorch", "Stable Diffusion"],
    link: "https://github.com/Iamkylian/ai-learning-journey",
    skills: ["1", "3"],
    context: "Démarche personnelle d'auto-formation sur les technologies d'IA les plus récentes et documentation de ce parcours d'apprentissage.",
    contextEn: "Personal approach to self-training on the most recent AI technologies and documentation of this learning journey.",
    objectives: [
      "Explorer les différents modèles et frameworks d'IA existants",
      "Se renseigner sur les bonnes pratiques et les limitations actuelles"
    ],
    objectivesEn: [
      "Explore different existing AI models and frameworks",
      "Learn about best practices and current limitations"
    ],
    methodology: "",
    methodologyEn: "",
    results: [],
    resultsEn: [],
    type: "personal",
    date: "2022-2024",
    isHighlighted: false
  },
  {
    id: 8,
    title: "Slave Narratives - Visualisation des récits d'esclaves",
    titleEn: "Slave Narratives - Visualization of Slave Narratives",
    slug: "slave-narratives",
    image: "/Portfolio/images/placeholder-project.png",
    description: "Amélioration du site web de visualisation des récits d'esclaves historiques pour l'Université Toulouse Jean Jaurès & Université Paul Sabatier, permettant de cartographier et retracer leurs parcours de vie.",
    descriptionEn: "Enhancement of the historical slave narrative visualization website for Toulouse Jean Jaurès University & Paul Sabatier University, enabling mapping and tracing of their life journeys.",
    longDescription: "Ce projet (SAE S5.A.01) visait à développer et améliorer une application web de visualisation des récits d'esclaves historiques. Le système permet de cartographier et visualiser les parcours de vie des esclaves (lieux de naissance, de mort, de publication) et offre de nouvelles fonctionnalités pour faciliter la recherche académique dans ce domaine.",
    longDescriptionEn: "This project (SAE S5.A.01) aimed to develop and improve a web application for visualizing historical slave narratives. The system allows mapping and visualizing the life journeys of slaves (birthplaces, death locations, publication places) and offers new features to facilitate academic research in this field.",
    technologies: ["PHP", "CodeIgniter", "MVC", "MariaDB", "HTML", "CSS", "JavaScript", "API Zotero", "PhpMyAdmin", "XAMPP"],
    link: "https://github.com/Iamkylian/sae-5-a-01-2024-2025-esclaves-rouge",
    skills: ["1", "2", "4"],
    context: "Projet universitaire (SAE S5.A.01) réalisé à l'IUT de Blagnac (septembre 2024 - novembre 2024) en collaboration avec l'Université Toulouse Jean Jaurès et l'Université Paul Sabatier pour améliorer leur site existant (slave-narratives.univ-tlse2.fr).",
    contextEn: "University project (SAE S5.A.01) carried out at IUT Blagnac (September 2024 - November 2024) in collaboration with Toulouse Jean Jaurès University and Paul Sabatier University to improve their existing site (slave-narratives.univ-tlse2.fr).",
    objectives: [
      "Améliorer et moderniser l'interface utilisateur et administrateur du site",
      "Développer de nouvelles fonctionnalités pour enrichir l'expérience utilisateur",
      "Implémenter un système d'export PDF des données",
      "Intégrer l'API bibliographique Zotero pour faciliter les références académiques",
      "Créer un moteur de recherche avancé pour explorer efficacement les récits"
    ],
    objectivesEn: [
      "Improve and modernize the site's user and administrator interface",
      "Develop new features to enhance user experience",
      "Implement a PDF data export system",
      "Integrate the Zotero bibliographic API to facilitate academic references",
      "Create an advanced search engine to efficiently explore narratives"
    ],
    methodology: "Développement basé sur l'architecture MVC avec CodeIgniter, utilisation de MariaDB pour la base de données, et intégration de l'API Zotero. Travail en équipe avec utilisation de XAMPP comme environnement de développement local.",
    methodologyEn: "Development based on MVC architecture with CodeIgniter, using MariaDB for the database, and integration of the Zotero API. Team work using XAMPP as a local development environment.",
    results: [
      "Refonte complète des interfaces administrateur et utilisateur",
      "Implémentation réussie de l'export PDF",
      "Intégration fonctionnelle de l'API bibliographique Zotero",
      "Développement d'un moteur de recherche avancé",
      "Site responsive et modernisé facilitant la recherche historique"
    ],
    resultsEn: [
      "Complete redesign of administrator and user interfaces",
      "Successful implementation of PDF export",
      "Functional integration of the Zotero bibliographic API",
      "Development of an advanced search engine",
      "Responsive and modernized site facilitating historical research"
    ],
    type: "university",
    date: "2024",
    isHighlighted: true
  },
  {
    id: 9,
    title: "Mise en place d'un environnement de développement",
    titleEn: "Setting Up a Development Environment",
    slug: "environnement-developpement-ubuntu",
    image: "/Portfolio/images/placeholder-project.png",
    description: "Configuration complète d'une machine virtuelle Ubuntu pour le développement, avec installation de logiciels spécifiques et automatisation par scripts.",
    descriptionEn: "Complete configuration of an Ubuntu virtual machine for development, with installation of specific software and script automation.",
    longDescription: "Ce projet (SAE S1.03) consistait à mettre en place et configurer un environnement de développement complet sur une machine virtuelle Ubuntu. L'objectif était de créer un système fonctionnel pouvant être utilisé par 200 utilisateurs, avec tous les outils de développement nécessaires et des scripts d'automatisation.",
    longDescriptionEn: "This project (SAE S1.03) involved setting up and configuring a complete development environment on an Ubuntu virtual machine. The goal was to create a functional system that could be used by 200 users, with all the necessary development tools and automation scripts.",
    technologies: ["Ubuntu", "VirtualBox", "Bash", "Shell Script", "Java", "ProjectLibre", "Asciidoctor", "Terminator"],
    link: "https://github.com/Iamkylian/sae-s1-03-vm-config",
    skills: ["2", "4"],
    context: "Projet universitaire (SAE S1.03) réalisé à l'IUT de Blagnac (novembre 2022 - décembre 2022) visant à apprendre la configuration et la gestion d'un environnement Linux pour le développement logiciel.",
    contextEn: "University project (SAE S1.03) carried out at IUT Blagnac (November 2022 - December 2022) aimed at learning the configuration and management of a Linux environment for software development.",
    objectives: [
      "Créer et configurer une machine virtuelle sous Ubuntu avec VirtualBox",
      "Installer et configurer divers logiciels de développement",
      "Mettre en place un système multi-utilisateurs (200 comptes)",
      "Développer un script de test en Bash pour valider la configuration",
      "Configurer les options de partage entre machine hôte et machine virtuelle",
      "Présenter la solution fonctionnelle lors d'une soutenance"
    ],
    objectivesEn: [
      "Create and configure an Ubuntu virtual machine with VirtualBox",
      "Install and configure various development software",
      "Set up a multi-user system (200 accounts)",
      "Develop a Bash test script to validate the configuration",
      "Configure sharing options between host and virtual machine",
      "Present the functional solution during an oral defense"
    ],
    methodology: "Installation et configuration d'Ubuntu 22.04, automatisation avec des scripts Bash pour la création d'utilisateurs et l'installation des logiciels, mise en place de paramètres de partage et de persistance, et tests rigoureux de validation.",
    methodologyEn: "Installation and configuration of Ubuntu 22.04, automation with Bash scripts for user creation and software installation, setup of sharing and persistence parameters, and rigorous validation testing.",
    results: [
      "Machine virtuelle fonctionnelle avec les logiciels requis",
      "Système multi-utilisateurs opérationnel",
      "Scripts d'automatisation pour la maintenance future",
      "Documentation complète du processus d'installation et de configuration"
    ],
    resultsEn: [
      "Functional virtual machine with required software",
      "Operational multi-user system",
      "Automation scripts for future maintenance",
      "Complete documentation of the installation and configuration process"
    ],
    type: "university",
    date: "2022",
    isHighlighted: false
  },
  {
    id: 10,
    title: "Suivi d'entraînements sportifs et coaching",
    titleEn: "Sports Training and Coaching Tracking",
    slug: "suivi-entrainements-sportifs-coaching",
    image: "/Portfolio/images/placeholder-project.png",
    description: "Développement d'une application web complète de gestion d'un club de sport orienté coaching, comprenant un back-office administratif, une API REST et une application front-end pour les sportifs.",
    descriptionEn: "Development of a complete web application for managing a coaching-oriented sports club, including an administrative back-office, a REST API, and a front-end application for athletes.",
    longDescription: "Ce projet (SAE S6) consistait à concevoir et développer une solution complète pour un club de sport, permettant la gestion des coachs, des sportifs, des séances d'entraînement et des exercices. L'architecture inclut un back-office Symfony avec EasyAdmin pour les coachs et responsables, une API REST pour la communication entre les composants, et une application Angular pour les sportifs et internautes.",
    longDescriptionEn: "This project (SAE S6) involved designing and developing a complete solution for a sports club, allowing the management of coaches, athletes, training sessions, and exercises. The architecture includes a Symfony back-office with EasyAdmin for coaches and managers, a REST API for communication between components, and an Angular application for athletes and visitors.",
    technologies: ["Symfony", "Angular", "EasyAdmin", "API REST", "JWT", "MySQL", "MVC", "TypeScript", "Bootstrap", "Git"],
    link: "https://github.com/Iamkylian/sae-s6-sport-coaching",
    skills: ["1", "2", "3", "4"],
    context: "Projet universitaire (SAE S6) réalisé à l'IUT de Blagnac visant à mettre en pratique l'ensemble des compétences acquises durant la formation à travers le développement d'une application web complète avec architecture distribuée.",
    contextEn: "University project (SAE S6) carried out at IUT Blagnac aimed at putting into practice all the skills acquired during the training through the development of a complete web application with distributed architecture.",
    objectives: [
      "Développer un back-office avec Symfony et EasyAdmin pour la gestion administrative",
      "Créer une API REST sécurisée pour la communication entre les composants",
      "Concevoir une application front-end avec Angular pour les sportifs",
      "Implémenter des fonctionnalités avancées comme la planification de séances",
      "Mettre en place un système de statistiques et de suivi des performances",
      "Gérer les règles métier complexes (réservations, annulations, validations)",
      "Développer un webservice de bilan d'entraînement personnalisé"
    ],
    objectivesEn: [
      "Develop a back-office with Symfony and EasyAdmin for administrative management",
      "Create a secure REST API for communication between components",
      "Design a front-end application with Angular for athletes",
      "Implement advanced features such as session planning",
      "Set up a system for statistics and performance tracking",
      "Manage complex business rules (reservations, cancellations, validations)",
      "Develop a personalized training report webservice"
    ],
    methodology: "Architecture distribuée avec séparation claire des responsabilités : back-office Symfony pour l'administration, API REST pour l'exposition des données, et application Angular pour l'interface utilisateur. Implémentation des règles métier complexes dans les contrôleurs Symfony et utilisation de JWT pour l'authentification sécurisée.",
    methodologyEn: "Distributed architecture with clear separation of responsibilities: Symfony back-office for administration, REST API for data exposure, and Angular application for user interface. Implementation of complex business rules in Symfony controllers and use of JWT for secure authentication.",
    results: [
      "Back-office fonctionnel permettant la gestion complète des utilisateurs, séances et exercices",
      "API REST sécurisée exposant les données nécessaires à l'application front-end",
      "Interface Angular intuitive pour les sportifs avec planning, réservations et suivi",
      "Webservice de bilan d'entraînement personnalisé avec visualisations graphiques",
      "Système de statistiques pour les responsables (taux d'occupation, popularité des séances)",
      "Gestion automatisée des fiches de paie pour les coachs"
    ],
    resultsEn: [
      "Functional back-office allowing complete management of users, sessions, and exercises",
      "Secure REST API exposing data needed for the front-end application",
      "Intuitive Angular interface for athletes with planning, reservations, and tracking",
      "Personalized training report webservice with graphical visualizations",
      "Statistics system for managers (occupancy rate, session popularity)",
      "Automated management of payslips for coaches"
    ],
    type: "university",
    date: "2025",
    isHighlighted: true
  },
  {
    id: 11,
    title: "Automatisation CI/CD pour une application existante",
    titleEn: "CI/CD Automation for an Existing Application",
    slug: "automatisation-cicd",
    image: "/Portfolio/images/placeholder-project.png",
    description: "Mise en place d'un processus complet d'intégration et déploiement continus (CI/CD) sur une application existante, utilisant GitLab CI pour l'automatisation du build, des tests et du déploiement.",
    descriptionEn: "Implementation of a complete continuous integration and deployment (CI/CD) process on an existing application, using GitLab CI for build, test, and deployment automation.",
    longDescription: "Ce projet (R5.A.07) consistait à mettre en place un pipeline d'intégration continue et de déploiement continu pour une application existante. Le processus comprenait l'automatisation complète du cycle de développement, des tests à la production, avec des environnements distincts pour les tests et la production.",
    longDescriptionEn: "This project (R5.A.07) involved setting up a continuous integration and continuous deployment pipeline for an existing application. The process included complete automation of the development cycle, from testing to production, with separate environments for testing and production.",
    technologies: ["GitLab CI/CD", "Docker", "Tests Automatisés", "Déploiement Continu", "Git", "Shell Script", "YAML"],
    link: "https://github.com/Iamkylian/automatisation-cicd",
    skills: ["1", "4"],
    context: "Projet universitaire (R5.A.07) portant sur l'automatisation des processus de développement et de déploiement d'applications, avec pour objectif d'améliorer la qualité et la fiabilité des livraisons.",
    contextEn: "University project (R5.A.07) focused on automating application development and deployment processes, with the goal of improving delivery quality and reliability.",
    objectives: [
      "Configurer un pipeline d'intégration continue avec tests automatisés",
      "Mettre en place un processus de déploiement continu vers différents environnements",
      "Créer des environnements distincts pour les tests et la production",
      "Générer automatiquement des livrables ou déployer l'application sur un serveur",
      "Intégrer des mécanismes de qualité de code et de documentation"
    ],
    objectivesEn: [
      "Configure a continuous integration pipeline with automated tests",
      "Set up a continuous deployment process to different environments",
      "Create separate environments for testing and production",
      "Automatically generate deliverables or deploy the application to a server",
      "Integrate code quality and documentation mechanisms"
    ],
    methodology: "Configuration d'un dépôt GitLab avec un fichier .gitlab-ci.yml structuré en stages (build, test, deploy) et jobs. Utilisation de runners GitLab pour exécuter les différentes étapes du pipeline. Mise en place de mécanismes de déploiement automatique vers des environnements spécifiques.",
    methodologyEn: "Configuration of a GitLab repository with a .gitlab-ci.yml file structured in stages (build, test, deploy) and jobs. Use of GitLab runners to execute the different pipeline stages. Implementation of automatic deployment mechanisms to specific environments.",
    results: [
      "Pipeline CI/CD fonctionnel avec détection automatique des erreurs",
      "Environnements de test et de production distincts et opérationnels",
      "Génération automatique de documentation et de rapports de qualité",
      "Déploiement automatisé sur serveur web ou génération de releases",
      "Documentation complète du processus d'automatisation"
    ],
    resultsEn: [
      "Functional CI/CD pipeline with automatic error detection",
      "Separate and operational test and production environments",
      "Automatic generation of documentation and quality reports",
      "Automated deployment to web server or release generation",
      "Complete documentation of the automation process"
    ],
    type: "university",
    date: "2024",
    isHighlighted: false
  },
  {
    id: 12,
    title: "Analyse et optimisation d'algorithmes de pathfinding sur des données géographiques",
    titleEn: "Analysis and Optimization of Pathfinding Algorithms on Geographic Data",
    slug: "optimisation-algorithmes-pathfinding",
    image: "/Portfolio/images/placeholder-project.png",
    description: "Implémentation et optimisation d'algorithmes de calcul de chemin (Dijkstra et A*) sur des données OpenStreetMap, avec analyse des performances sur différentes tailles de territoires.",
    descriptionEn: "Implementation and optimization of path calculation algorithms (Dijkstra and A*) on OpenStreetMap data, with performance analysis on different territory sizes.",
    longDescription: "Ce projet (R5.A.04) consistait à analyser et optimiser des algorithmes de pathfinding appliqués à des données géographiques réelles. L'objectif était de comparer différentes approches pour calculer rapidement les distances et les chemins entre points dans des ensembles de données de taille croissante, depuis une petite région jusqu'à l'échelle nationale.",
    longDescriptionEn: "This project (R5.A.04) involved analyzing and optimizing pathfinding algorithms applied to real geographic data. The goal was to compare different approaches to quickly calculate distances and paths between points in datasets of increasing size, from a small region to a national scale.",
    technologies: ["Python", "Pandas", "Polar", "Matplotlib", "Dijkstra", "A*", "OpenStreetMap", "Analyse de performance", "Optimisation algorithmique"],
    link: "https://github.com/Iamkylian/optimisation-algorithmes-pathfinding",
    skills: ["1", "3"],
    context: "Projet universitaire (R5.A.04) portant sur l'analyse et l'optimisation de code, avec application concrète sur des données géographiques réelles issues d'OpenStreetMap.",
    contextEn: "University project (R5.A.04) focusing on code analysis and optimization, with practical application on real geographic data from OpenStreetMap.",
    objectives: [
      "Implémenter l'algorithme de Dijkstra pour calculer des distances sur un graphe représentant une carte",
      "Développer une version optimisée avec l'algorithme A* pour améliorer les performances",
      "Analyser et comparer les performances des différentes approches",
      "Optimiser la gestion de la mémoire pour traiter des ensembles de données volumineux",
      "Réaliser un benchmark complet avec visualisation des résultats"
    ],
    objectivesEn: [
      "Implement Dijkstra's algorithm to calculate distances on a graph representing a map",
      "Develop an optimized version with the A* algorithm to improve performance",
      "Analyze and compare the performance of different approaches",
      "Optimize memory management to process large datasets",
      "Conduct a complete benchmark with visualization of results"
    ],
    methodology: "Implémentation initiale de l'algorithme de Dijkstra, puis optimisation avec A*. Utilisation de Pandas pour la manipulation des données CSV issues d'OpenStreetMap. Analyse des performances avec différentes tailles de territoires (région locale, département, région, pays) et visualisation des résultats avec Matplotlib.",
    methodologyEn: "Initial implementation of Dijkstra's algorithm, then optimization with A*. Use of Pandas for manipulating CSV data from OpenStreetMap. Performance analysis with different territory sizes (local area, department, region, country) and visualization of results with Matplotlib.",
    results: [
      "Implémentation fonctionnelle des algorithmes Dijkstra et A* sur des données cartographiques",
      "Amélioration significative des performances grâce à l'heuristique de A*",
      "Optimisation de la gestion mémoire permettant de traiter des jeux de données à l'échelle nationale",
      "Analyse comparative détaillée des performances avec visualisations",
      "Documentation des stratégies d'optimisation et des compromis espace-temps"
    ],
    resultsEn: [
      "Functional implementation of Dijkstra and A* algorithms on map data",
      "Significant performance improvement thanks to A*'s heuristic",
      "Memory management optimization allowing processing of nationwide datasets",
      "Detailed comparative analysis of performance with visualizations",
      "Documentation of optimization strategies and space-time trade-offs"
    ],
    type: "university",
    date: "2023",
    isHighlighted: false
  }
];