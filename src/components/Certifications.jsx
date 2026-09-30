import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative bg-slate-950/60 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-700/40 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <Award className="w-4 h-4 text-purple-400" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Verified technical certifications in Java Full Stack Development and Web Engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl glass-card border border-slate-800 overflow-hidden hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Preview */}
              <div className="relative h-44 bg-slate-900 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-950/90 border border-purple-800 text-purple-300">
                  {cert.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-400">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-purple-600 transition-colors border border-slate-700"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl glass-card border border-slate-700 bg-slate-900 p-6 text-left space-y-4 shadow-2xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono text-purple-400">{selectedCert.issuer} • {selectedCert.date}</span>
              <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
            </div>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-72 object-cover rounded-xl border border-slate-800"
            />

            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedCert.description}
            </p>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Certifications;
