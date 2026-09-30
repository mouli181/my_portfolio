import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-700/40 text-indigo-300 text-xs font-mono uppercase tracking-widest">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Formal university education in Computer Science & Information Technology.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="rounded-2xl glass-card border border-slate-800 p-6 sm:p-8 space-y-6 hover:border-indigo-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-300 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-400 mt-0.5">
                    {item.field}
                  </p>
                </div>

                <div className="space-y-1 text-xs text-slate-300">
                  <p className="font-medium text-slate-200">{item.institution}</p>
                  <p className="text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {item.location}
                  </p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/80">
                  {item.highlights}
                </p>
              </div>

              {/* GPA Score Badge */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Academic Rating:</span>
                <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {item.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
