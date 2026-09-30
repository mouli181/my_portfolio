import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, BookOpen, Code, Terminal, CheckCircle2, 
  ArrowRight, Users, Award, Play, Sparkles, Layers, Image as ImageIcon 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Training = () => {
  const { training } = portfolioData;
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section id="training" className="py-24 relative bg-slate-950/70 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>Technical Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {training.heading}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {training.subheading}
          </p>
        </div>

        {/* Visual Workflow: Learn -> Practice -> Build -> Test -> Deploy */}
        <div className="mb-20">
          <h3 className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
            Pedagogical Training Workflow
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {training.workflow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative rounded-2xl glass-card p-5 border border-slate-800 text-center space-y-3 hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-tr from-emerald-600 to-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-snug">
                    {item.desc}
                  </p>
                </div>

                {index < training.workflow.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-emerald-400">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Topics Badges Cloud */}
        <div className="rounded-2xl glass-card p-6 sm:p-8 mb-20 border border-slate-800 text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Curriculum & Technical Domain Mastery</h3>
              <p className="text-xs text-slate-400">Core technologies and practices taught to college students</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {training.topicsCovered.map((topic, tIdx) => (
              <span
                key={tIdx}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-emerald-300 hover:border-emerald-500/40 transition-all flex items-center gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{topic}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Industry-Oriented Application Development Programs Sub-section */}
        <div className="mb-20 space-y-10">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Industry-Oriented Application Development Programs
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
              Practical, hands-on training frameworks tailored to transform college students into production-ready software developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {training.programHighlights.map((prog, pIdx) => (
              <motion.div
                key={pIdx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: pIdx * 0.08 }}
                className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  {pIdx === 0 ? <BookOpen className="w-5 h-5" /> :
                   pIdx === 1 ? <Terminal className="w-5 h-5" /> :
                   pIdx === 2 ? <Code className="w-5 h-5" /> :
                   pIdx === 3 ? <Layers className="w-5 h-5" /> :
                   pIdx === 4 ? <CheckCircle2 className="w-5 h-5" /> :
                   <Users className="w-5 h-5" />}
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {prog.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {prog.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training Media / Workshop Gallery Showcase */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4 text-left">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-emerald-400" />
                <span>Training Workshops & College Programs Gallery</span>
              </h3>
              <p className="text-xs text-slate-400">Photos from live coding workshops, student project reviews, and academic programs</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {training.galleryPlaceholders.map((media, mIdx) => (
              <div
                key={mIdx}
                onClick={() => setSelectedMedia(media)}
                className="group relative rounded-2xl overflow-hidden glass-card border border-slate-800 cursor-pointer text-left shadow-lg"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={media.image}
                    alt={media.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/80 border border-emerald-800 text-emerald-300">
                    {media.category}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {media.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Gallery Image Preview Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative max-w-3xl w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-left space-y-4">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              ✕
            </button>
            <img src={selectedMedia.image} alt={selectedMedia.title} className="w-full h-80 object-cover rounded-xl" />
            <div className="px-2">
              <span className="text-xs font-mono text-emerald-400">{selectedMedia.category}</span>
              <h4 className="text-xl font-bold text-white">{selectedMedia.title}</h4>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Training;
