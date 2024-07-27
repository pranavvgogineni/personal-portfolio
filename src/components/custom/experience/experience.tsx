import React from 'react';
import { BackgroundGradientWork } from './work-card';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 to-black text-black p-8">
      <div>
        <h2 className="text-3xl font-bold text-white text-center mb-8">Experience</h2>
        <BackgroundGradientWork />
      </div>
    </section>
  );
};

export default Experience;
