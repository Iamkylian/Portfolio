"use client";

import { useRouter } from "next/navigation";
import Portfolio from "../../pages/Projects";
import { skills } from "../../skills";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/app/components/Footer";

export function CompetencePage({ slug }: { slug: string }) {
  const router = useRouter();
  const skill = skills.find((skill) => skill.slug === slug);

  if (!skill) {
    return <p>Compétence non trouvée.</p>;
  }

  const handleReturnToSkills = () => {
    router.push("/#skills");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Section d'en-tête */}
        <header className="relative w-full bg-gray-100">
          <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
          <img
            src={`/Portfolio/images/skills/${slug}.jpg`}
            alt="Compétence Background"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold">{skill.name}</h1>
            <p className="mt-4 text-lg">
              Découvrez les projets et niveaux liés à la compétence{" "}
              <strong>{skill.name}</strong>.
            </p>
          </div>
        </header>

        {/* Section des niveaux */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Niveaux de compétence
            </h2>
            <div className="space-y-4">
              {skill.levels.map((level) => (
                <div
                  key={level.niveau}
                  className="bg-gray-50 p-4 rounded-lg shadow"
                >
                  <h3 className="font-semibold text-gray-700">
                    Niveau {level.niveau}
                  </h3>
                  <p className="text-gray-600">{level.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section des projets */}
        <section className="py-10 bg-gray-100">
          <div className="mx-auto px-4 py-8">
            <Portfolio skills={skill.id} />
          </div>
        </section>
      </main>

      <Footer />

      <button
        onClick={handleReturnToSkills}
        className="fixed bottom-5 left-5 bg-gray-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out flex items-center justify-center"
        title="Retour aux compétences"
      >
        <FaArrowLeft className="mr-2" />
        <span>Retour aux compétences</span>
      </button>
    </div>
  );
}
