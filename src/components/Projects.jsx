import React from 'react';

const Projects = () => {
  const sections = [
    {
      title: "Trade Compliance & Analytics",
      projects: [
        {
          title: "Operational Work Dashboard",
          description: "Developed a comprehensive operational dashboard to provide real-time business insights and monitor trade compliance metrics efficiently.",
          tags: ["Power BI", "Data Analytics", "Business Insights"],
          color: "bg-teal-500"
        },
        {
          title: "Work Instruction & SOP Creation",
          description: "Led the creation of detailed work instructions and Standard Operating Procedures (SOPs) for the Export Control Classification process, ensuring regulatory consistency.",
          tags: ["SOPs", "Export Control", "Documentation"],
          color: "bg-teal-600"
        },
        {
          title: "Classification Enhancement Tool",
          description: "Developed and implemented a tool to optimize export control checks across various international regulations and regions, improving classification accuracy.",
          tags: ["Export Control", "Optimization", "Regulatory Compliance"],
          color: "bg-teal-700"
        }
      ]
    },
    {
      title: "Engineering Development",
      projects: [
        {
          title: "Prototype of Gyro-Bicycle",
          description: "Mono wheel electric cycle using gyro stabilizer, accelerometer, and electric motor – developed in 5th semester of engineering.",
          tags: ["Mechatronics", "Electric Vehicle", "Control Systems"],
          color: "bg-teal-500"
        },
        {
          title: "Asbestos-Free Brake Pad Calibration",
          description: "Studied material properties and alternate materials for automotive brake pad manufacturing to eliminate asbestos.",
          tags: ["Material Science", "Automotive", "R&D"],
          color: "bg-teal-600"
        },
        {
          title: "Turbocharger in Two-Wheelers",
          description: "Project aimed at reducing carbon emission and enhancing engine performance using exhaust gas-directed turbocharger.",
          tags: ["IC Engines", "Thermodynamics", "Performance"],
          color: "bg-teal-700"
        },
        {
          title: "3-axis CNC Mastercam Program",
          description: "Developed 3-axis CNC program for part manufacturing as part of final project in P.G. Diploma.",
          tags: ["Mastercam", "CNC Programming", "Manufacturing"],
          color: "bg-teal-500"
        }
      ]
    },
    {
      title: "Professional Internships",
      projects: [
        {
          title: "Automobile Development Internship",
          description: "Summer internship program (Advanced Level) in Engine Design and Automobile Dynamics, Ezenith Education.",
          tags: ["Engine Design", "Dynamics", "Advanced Certification"],
          color: "bg-teal-600"
        },
        {
          title: "Maruti Suzuki Uday Autolink",
          description: "15-day internship program focusing on automotive service and dealer operations.",
          tags: ["Automotive Service", "Operations", "Industrial Exposure"],
          color: "bg-teal-700"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Projects & <span className="text-teal-600">Internships</span></h2>
        <div className="w-20 h-1.5 bg-teal-600 rounded-full"></div>
      </div>
      
      <div className="space-y-16">
        {sections.map((section, sIndex) => (
          <div key={sIndex}>
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-2 h-6 bg-teal-500 rounded-full"></span>
              {section.title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.projects.map((project, pIndex) => (
                <div key={pIndex} className="glass rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col card-hover bg-white/40">
                  <div className={`h-2 ${project.color} w-full`}></div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 h-14 line-clamp-2">{project.title}</h4>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold border border-slate-200 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
