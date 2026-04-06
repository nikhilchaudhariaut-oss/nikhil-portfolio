import React from 'react';
import nikhilImg from '../assets/Nikhil_img_1.jpeg';

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-semibold mb-6 border border-teal-100">
            Specialist: HS & Export Control Classification
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
            Nikhil <span className="text-teal-600">Chaudhari</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-6 font-light italic">
            Trade Compliance Analyst | HS & Export Control Specialist
          </p>
          <div className="flex flex-wrap gap-4 mb-8 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center text-[10px] text-teal-600 border border-teal-100">📍</span>
              Pune, India
            </span>
            <a href="mailto:nikhilchaudhari.aut@gmail.com" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
              <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center text-[10px] text-teal-600 border border-teal-100">📧</span>
              nikhilchaudhari.aut@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center text-[10px] text-teal-600 border border-teal-100">📞</span>
              +91-9016550518
            </span>
          </div>
          <div className="text-slate-600 mb-10 leading-relaxed text-lg max-w-2xl space-y-4">
            <p>
              I am a <span className="text-slate-900 font-medium">Global Trade Compliance Analyst</span> with hands-on expertise in <span className="text-slate-900 font-medium">HS/HTS classification</span> and export control regulations, including <span className="text-teal-700 font-medium whitespace-nowrap">ECCN, EU Dual-Use, India SCOMET</span>, UK Dual-Use, and China Export Controls. I actively perform trade sanctions compliance checks, particularly for <span className="text-teal-700 font-medium">Russia and Belarus</span>, along with anti-dumping and countervailing duty assessments.
            </p>
            <p>
              I leverage <span className="text-teal-700 font-medium">Power BI and data analytics</span> to identify risks and improve compliance visibility, while using <span className="text-teal-700 font-medium">SAP GTS and BPCS</span> to streamline international trade operations.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#experience" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-teal-600/20 active:scale-95">
              Expertise & Experience
            </a>
            <a href="#skills" className="glass hover:bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold transition-all border border-slate-200 active:scale-95">
              Core Competencies
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-teal-100/50 blur-3xl rounded-full"></div>
          <div className="relative glass rounded-3xl p-4 border border-slate-200/50 flex items-center justify-center overflow-hidden">
            <img
              src={nikhilImg}
              alt="Nikhil Chaudhari"
              className="max-w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
