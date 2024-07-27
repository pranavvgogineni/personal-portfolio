import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-gray-800 text-white p-4">
      <ul className="flex justify-around">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
