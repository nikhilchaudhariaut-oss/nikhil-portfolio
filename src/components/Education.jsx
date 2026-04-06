import React from 'react';

const Education = () => {
  const educations = [
    {
      degree: "P.G Diploma in CNC Program Development & Technician",
      institution: "Conestoga College, Kitchener",
      location: "Canada",
      period: "Sep 2019 – Jan 2021",
      description: "Specialized in advanced manufacturing processes and precision engineering."
    },
    {
      degree: "B.Eng. Automobile Engineering",
      institution: "SALITER, Gujarat Technological University",
      location: "Ahmedabad, India",
      period: "Aug 2013 – Jun 2017",
      description: "Foundational engineering degree with a focus on automotive systems and design."
    }
  ];

  return (
    <section id="education" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Academic <span className="text-teal-600">Foundation</span></h2>
        <div className="w-20 h-1.5 bg-teal-600 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {educations.map((edu, index) => (
          <div key={index} className="glass p-8 rounded-2xl border border-slate-200 shadow-sm card-hover">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 text-xl border border-teal-100">
                🎓
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-teal-50 text-teal-700 rounded-full border border-teal-100 uppercase tracking-wider">
                {edu.period}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
            <p className="text-teal-600 font-medium mb-4">{edu.institution} | {edu.location}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
