import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, BookOpen, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const WhyWorkWithMe = () => {
  const { whyWorkWithMe } = portfolioData;

  const getCardIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-6 h-6 text-indigo-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-purple-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-pink-400" />;
      default: return <Terminal className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section className="py-24 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-700/40 text-indigo-300 text-xs font-mono uppercase tracking-widest">
            <span>Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why <span className="gradient-text">Work With Me</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Combining software engineering proficiency with instructional clarity to deliver maximum technical value.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {whyWorkWithMe.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl glass-card p-6 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group space-y-4 shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getCardIcon(card.icon)}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    "{card.title}"
                  </h3>
                  <p className="text-xs font-semibold text-indigo-400 mt-0.5">
                    {card.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Verified Competency</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyWorkWithMe;
