import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Engineer – Trade Compliance",
      company: "Atlas Copco Group",
      period: "Jul 2025 – Present",
      location: "Pune (Hybrid)",
      activities: [
        "Manage trade compliance and export control activities across global operations",
        "Ensure compliance with international trade regulations and sanctions",
        "Perform classification using HS/HTS codes and ECCN",
        "Work on SAP GTS for compliance screening and trade processes",
        "Handle export control compliance and legal compliance requirements",
        "Support business planning and compliance monitoring using ERP tools",
        "Contribute to dashboards and reporting using Power BI and analytics"
      ],
      keySkills: ["Trade Compliance", "Export Control Compliance", "Legal Compliance", "ECCN", "SAP GTS", "BPCS"]
    },
    {
      title: "Engineer – Technical Services",
      company: "DesignTech Systems Pvt. Ltd.",
      period: "Jun 2022 – Jul 2025",
      location: "Pune (Hybrid)",
      activities: [
        "Determined CN, Taric, HSN, HTSUS, Schedule B codes for multiple regions",
        "Assigned ECCN and handled EU dual-use regulations",
        "Conducted Russia sanctions compliance checks as per EU regulations",
        "Performed Anti-Dumping & Countervailing Duty analysis",
        "Coordinated with customs authorities and compliance teams",
        "Maintained classification records and documentation",
        "Created SOPs and tracked KPIs"
      ],
      keySkills: ["Customs Regulations", "Analytical Skills", "WTO Knowledge", "SAP ERP", "Teamwork"]
    },
    {
      title: "Computer Aided Design Engineer",
      company: "Cube CAD Centre",
      period: "Jan 2021 – Feb 2022",
      location: "",
      activities: [
        "Designed automotive components using CATIA V5",
        "Developed 2D/3D models and manufacturing drawings",
        "Worked on sheet metal design and GD&T",
        "Contributed to TATA Motors CNG system project"
      ]
    },
    {
      title: "Service Engineer",
      company: "Autoboost Automotive Service",
      period: "Dec 2017 – Jan 2019",
      location: "",
      activities: [
        "Performed maintenance, troubleshooting, and repair of vehicles",
        "Managed spare parts and service operations",
        "Ensured preventive maintenance and customer issue resolution"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Professional <span className="text-teal-600">Journey</span></h2>
        <div className="w-20 h-1.5 bg-teal-600 rounded-full"></div>
      </div>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-teal-200 bg-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-teal-500 group-hover:border-teal-500">
               <div className="w-2 h-2 rounded-full bg-teal-500 group-hover:bg-white"></div>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-slate-200 shadow-sm card-hover">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                  <p className="text-teal-600 font-medium">{exp.company} {exp.location && `| ${exp.location}`}</p>
                </div>
                <div className="mt-2 md:mt-0 text-xs font-semibold px-3 py-1 bg-teal-50 text-teal-700 rounded-full border border-teal-100">
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.activities.map((item, iIndex) => (
                  <li key={iIndex} className="text-slate-600 text-sm flex gap-3 leading-relaxed">
                    <span className="text-teal-500 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              {exp.keySkills && (
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.keySkills.map((skill, sIndex) => (
                      <span key={sIndex} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-bold border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
