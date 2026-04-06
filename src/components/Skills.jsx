import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: "ERP & Trade Systems",
      skills: ["SAP GTS", "SAP ERP (SD/MM)", "BPCS", "Windchill", "Inventor", "Enovia", "Catia v5", "SolidWorks"]
    },
    {
      title: "Compliance & Trade Controls",
      skills: ["HS/HTS Classification", "ECCN / EU Dual-Use", "SCOMET (India)", "Sanctions Screening", "Dumping Duties (AD/CVD)", "Rules of Origin", "Export Control Audits"]
    },
    {
      title: "Data & Risk Management",
      skills: ["Power BI", "Data Analytics", "Risk Modeling", "Process Optimization", "VBA & SQL", "Compliance Dashboards", "Operational Excellence"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Core <span className="text-teal-600">Competencies</span></h2>
        <div className="w-20 h-1.5 bg-teal-600 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <div key={index} className="glass p-8 rounded-2xl border border-slate-200 shadow-sm card-hover">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-2 h-6 bg-teal-500 rounded-full"></span>
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIndex) => (
                <span 
                  key={sIndex} 
                  className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium border border-teal-100/50 hover:bg-teal-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
