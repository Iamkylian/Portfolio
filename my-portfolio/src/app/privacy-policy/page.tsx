import Link from "next/link";

const Privacy = () => {
  return (
    <section
      id="more-informations"
      className="min-h-screen items-center justify-center"
    >
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Confidentialité
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            C'est assez simple. Les seules données que je recueille sont des
            données analytiques anonymes permettant de suivre les pages
            consultées.
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

export default Privacy;
