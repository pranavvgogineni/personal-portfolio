'use client';
import React from 'react';
import { BackgroundGradientDemo1, BackgroundGradientDemo2 } from './school';

const Education: React.FC = () => {
  return (
    <section id="education" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-950 to-black text-white p-8">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="flex space-x-8">
        <BackgroundGradientDemo1 />
        <BackgroundGradientDemo2 />
      </div>
    </section>
  );
};

export default Education;
