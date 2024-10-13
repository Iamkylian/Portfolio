import React from 'react';

const CV: React.FC = () => {
  return (
    <section id="cv" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Curriculum Vitae</h2>
        <p className="mb-6">Téléchargez mon CV pour en savoir plus sur mon parcours et mes compétences.</p>
        <a 
          href="../assets/CV.pdf" 
          download="CV.pdf"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out inline-flex items-center"
        >
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
          </svg>
          <span>Télécharger CV</span>
        </a>
      </div>
    </section>
  );
};

export default CV;