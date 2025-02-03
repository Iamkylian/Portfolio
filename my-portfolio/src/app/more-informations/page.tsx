import Link from "next/link";

const MoreInformations = () => {
  return (
    <section
      id="more-informations"
      className="min-h-screen items-center justify-center"
    >
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Plus d'informations
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Il s'agit d'un site web statique React construit principalement avec
            Next.js et Tailwind et actuellement hébergé sur Github.
          </p>
          <Link
            href="/"
            className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Retour à la page d'accueil
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MoreInformations;
