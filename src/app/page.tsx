import React from 'react';
import Hero from '@/components/custom/hero';
import Education from '@/components/custom/education/education';
import Experience from '@/components/custom/experience/experience';
import Projects from  '@/components/custom/projects';
import Footer from   '@/components/custom/footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;
