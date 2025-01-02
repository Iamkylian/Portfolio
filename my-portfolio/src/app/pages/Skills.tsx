import Link from "next/link";

export default function Skills() {
  const skills = [
    { name: "Développement d'applications", slug: "developpement-applications" },
    { name: "Gestion des données", slug: "gestion-donnees" },
    { name: "Analyse et optimisation", slug: "analyse-optimisation" },
    { name: "Conduite de projet", slug: "conduite-projet" },
    { name: "Administration", slug: "administration" },
    { name: "Gestion d'une équipe informatique", slug: "gestion-equipe-informatique" },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-blue-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Compétences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Link key={index} href={`/skills/${skill.slug}`}>
              <div className="bg-blue-800 text-white text-center py-8 px-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition duration-300">
                {skill.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
