import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-slate-200/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
          NC.
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-teal-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-teal-600 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-teal-600 transition-colors">Skills</a>
          <a href="#education" className="hover:text-teal-600 transition-colors">Education</a>
          <a href="#projects" className="hover:text-teal-600 transition-colors">Projects & Internships</a>
          <a href="#achievements" className="hover:text-teal-600 transition-colors">Awards</a>
          <a href="#contact" className="hover:text-teal-600 transition-colors">Contact</a>
        </div>
        <a href="mailto:nikhilchaudhari.aut@gmail.com" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-teal-600/10 active:scale-95">
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
