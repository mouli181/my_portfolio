import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Code2, Server, Database, GraduationCap, 
  Terminal, ShieldCheck, Cpu, Users, Award, Briefcase, TrendingUp 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { fullBio, aboutHighlights } = portfolioData;
  const stats = portfolioData.stats;

  const getStatIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-purple-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-pink-400" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-400" />;
      default: return <Award className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-700/40 text-indigo-300 text-xs font-mono uppercase tracking-widest">
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Bridging the gap between software development and technical education with hands-on enterprise application building and student mentorship.
          </p>
        </div>

        {/* Top Grid: Bio + Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Bio Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-2xl glass-card p-6 sm:p-8 text-left space-y-6 flex flex-col justify-between border border-slate-800"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                  <Terminal className="w-5 h-5" />
                </span>
                Developer & Mentor
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {portfolioData.personal.fullBio}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                My dual experience allows me to approach code both from an engineering efficiency standpoint and an instructional clarity perspective. Whether designing backend microservices or guiding students through complex CRUD operations, I prioritize clarity, scalability, and practical results.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="block text-xs font-semibold text-white">Full Stack Engineering</span>
                <span className="text-[11px] text-slate-400">Java, Spring Boot & React</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="block text-xs font-semibold text-white">Technical Mentorship</span>
                <span className="text-[11px] text-slate-400">Live Coding & Guidance</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl glass-card p-5 text-left flex flex-col justify-between border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {getStatIcon(stat.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-500">PRO</span>
                </div>

                <div className="mt-6 space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono group-hover:text-indigo-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Highlights Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl glass-card p-6 sm:p-8 text-left border border-slate-800"
        >
          <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-400" />
            <span>Key Competencies & Practical Capabilities</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutHighlights.map((highlight, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3 hover:border-indigo-500/30 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-300 leading-snug">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
