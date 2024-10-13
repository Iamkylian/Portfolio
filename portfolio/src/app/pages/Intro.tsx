import React from 'react';
{/* import ParticlesBackground from 'app/components/ParticlesBackground';*/}

const Intro = () => {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center relative bg-section">
        {/* <ParticlesBackground /> */}
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Looking for a developer?
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-white">
          Over the years, I&apos;ve developed a wide range of skills and acquired a wealth of experience, 
          which today enables me to approach projects with a global vision and in-depth expertise. 
          I&apos;ve also had the opportunity to work on complex projects, both in technical development and management.
        </p>
      </div>
    </section>
  );
};

export default Intro;