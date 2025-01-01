export default function Education() {
  // Tableau d'objets pour stocker les informations sur l'éducation
  const certificationItems = [
    {
      title: "TOEIC Anglais",
      institution: "ETS",
      dates: "Octobre 2024",
      description: "Niveau B2 - 830/990",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-gray-600 font-bold mb-8 text-right">
          Certification
        </h2>
        <div className="relative border-r-2 border-gray-300 pr-8">
          {certificationItems.map((item, index) => (
            <div key={index} className="mb-10 relative text-right">
              <h3 className="text-xl font-semibold text-gray-700">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.institution} • {item.dates}
              </p>
              <p className="text-gray-500 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
