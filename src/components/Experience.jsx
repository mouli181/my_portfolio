import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-700/40 text-indigo-300 text-xs font-mono uppercase tracking-widest">
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work & Training <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Professional trajectory spanning software engineering and technical instruction.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform sm:-translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center group"
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 sm:left-1/2 top-0 sm:top-6 w-8 h-8 rounded-full bg-[#0b0f19] border-2 border-indigo-500 text-indigo-400 flex items-center justify-center transform -translate-x-1/2 shadow-lg shadow-indigo-500/20 z-10 group-hover:scale-125 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    {exp.id === 1 ? (
                      <Terminal className="w-4 h-4" />
                    ) : exp.id === 2 ? (
                      <Briefcase className="w-4 h-4" />
                    ) : (
                      <GraduationCap className="w-4 h-4" />
                    )}
                  </div>

                  {/* Card Container Layout */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:ml-auto sm:text-left'}`}>
                    <div className="rounded-2xl glass-card p-6 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 text-left space-y-4">
                      
                      {/* Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-indigo-950/60 border border-indigo-800/60 text-indigo-300">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Title & Company */}
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-indigo-400 flex items-center gap-2 mt-0.5">
                          <span>{exp.company}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-xs text-slate-400 font-normal flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            {exp.location}
                          </span>
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                          Key Responsibilities & Scope:
                        </span>
                        <ul className="space-y-1.5">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
