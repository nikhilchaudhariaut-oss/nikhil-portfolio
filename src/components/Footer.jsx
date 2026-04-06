import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent mb-2">
            NC.
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Nikhil Chaudhari. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8">
          <a href="#about" className="text-slate-500 hover:text-teal-600 transition-colors text-sm font-medium">About</a>
          <a href="#experience" className="text-slate-500 hover:text-teal-600 transition-colors text-sm font-medium">Experience</a>
          <a href="#projects" className="text-slate-500 hover:text-teal-600 transition-colors text-sm font-medium">Projects</a>
          <a href="#contact" className="text-slate-500 hover:text-teal-600 transition-colors text-sm font-medium">Contact</a>
        </div>
        
        <div className="text-slate-400 text-xs">
          Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
