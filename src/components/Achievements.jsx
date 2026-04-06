import React from 'react';
import teamSuccess from '../assets/awards/team_success.jpeg';
import shiningStar from '../assets/awards/shining_star.jpeg';
import deliveryRecognition from '../assets/awards/delivery_recognition.jpeg';

const Achievements = () => {
  const honors = [
    {
      title: "Team Success Recognition",
      organization: "Atlas Copco Group",
      period: "Jan 2026",
      image: teamSuccess,
      description: "Recognized for strong collaborative spirit and unwavering commitment to inclusivity. Inspired others by fostering teamwork and creating a respected environment."
    },
    {
      title: "Quarterly Shining Star Award",
      organization: "Atlas Copco Group",
      period: "Sep 2025",
      image: shiningStar,
      description: "Awarded for growth mindset, adaptability, and independently managing PTBA Reporting and Master File Analysis projects in a dynamic environment."
    },
    {
      title: "On-Time Delivery Recognition",
      organization: "DesignTech Systems",
      period: "Sep 2024",
      image: deliveryRecognition,
      description: "Commended for 'herculean effort' in successfully completing urgent tasks within challenging scheduled deadlines."
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Honors & <span className="text-teal-600">Awards</span></h2>
        <div className="w-20 h-1.5 bg-teal-600 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {honors.map((honor, index) => (
          <div key={index} className="glass rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col card-hover">
            <div className="aspect-video overflow-hidden group bg-slate-100 flex items-center justify-center">
              <img 
                src={honor.image} 
                alt={honor.title} 
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{honor.title}</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-teal-50 text-teal-700 rounded-full border border-teal-100 whitespace-nowrap">
                  {honor.period}
                </span>
              </div>
              <p className="text-teal-600 font-medium text-sm mb-4">{honor.organization}</p>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                "{honor.description}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
