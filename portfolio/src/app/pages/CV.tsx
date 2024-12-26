import React from 'react';
import resume from '../assets/Resume.pdf';


const CV: React.FC = () => {
  return (
    <section id="cv" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Curriculum Vitae</h2>
        <div className="w-40 h-1 bg-blue-500 mx-auto mb-20 rounded-full"></div>
        <p className="mb-6">Download my CV to find out more about my background and skills.</p>
        <a 
          href={resume}
          download="Resume"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out inline-flex items-center"
        >
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
          </svg>
          <span>Download CV</span>
        </a>
      </div>
    </section>
  );
};

export default CV;