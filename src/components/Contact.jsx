import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Let's <span className="text-teal-600">Connect</span></h2>
        <div className="w-20 h-1.5 bg-teal-600 rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="glass p-10 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h3>
          <form 
            action="https://formspree.io/f/xbdpqvaa" 
            method="POST"
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
              <input 
                type="text" 
                name="subject"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm"
                placeholder="HS Classification Inquiry"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea 
                rows="5" 
                name="message"
                required
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-teal-600/20 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="flex flex-col justify-center space-y-8">
          <div className="glass p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-6 card-hover">
            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 text-2xl border border-teal-100">📧</div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">Email</h4>
              <p className="text-slate-500 mb-2">For inquiries related to trade compliance and classification.</p>
              <a href="mailto:nikhilchaudhari.aut@gmail.com" className="text-teal-600 font-semibold hover:underline">
                nikhilchaudhari.aut@gmail.com
              </a>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-6 card-hover">
            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 text-2xl border border-teal-100">📱</div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">Phone</h4>
              <p className="text-slate-500 mb-2">Direct contact for urgent consultations.</p>
              <a href="tel:+919016550518" className="text-teal-600 font-semibold hover:underline">
                +91-9016550518
              </a>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-6 card-hover">
            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 text-2xl border border-teal-100">🔗</div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">LinkedIn</h4>
              <p className="text-slate-500 mb-2">Professional networking and career history.</p>
              <a href="https://linkedin.com/in/nikhil-chaudhari-5692bb23b" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline">
                nikhil-chaudhari
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
