import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Mail, Code, Terminal, Sparkles, CheckCircle2, Play } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ onResumeClick }) => {
  const { name, role, location, shortBio, heroBadges } = portfolioData.personal;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status / Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs font-mono backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              <span>{location}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-tight">
                Hi, I'm <span className="text-white font-bold">{name}</span>
              </h2>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Java Full Stack Developer
                </span>
                <br />
                <span className="text-slate-200 text-2xl sm:text-4xl font-bold font-mono">
                  & Technical Trainer
                </span>
              </h1>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              "{shortBio}"
            </p>

            {/* Technology Badges */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                Core Technologies:
              </span>
              <div className="flex flex-wrap gap-2">
                {heroBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 border border-slate-700/60 text-indigo-300 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 rounded-xl transition-all duration-200 hover:text-white"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>

              {/* Download Resume Secondary Link */}
              <button
                onClick={onResumeClick}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-indigo-300 underline underline-offset-4 transition-colors px-2 py-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Developer Profile Graphic Card */}
          {/* Right Column: Developer Profile Graphic Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.2 },
              scale: { duration: 0.6, delay: 0.2 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative gradient border ring with pulse */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-lg transition duration-1000 group-hover:opacity-75 animate-pulse" />
              
              <div className="relative rounded-2xl glass-card p-4 sm:p-6 text-left space-y-4 shadow-2xl border border-slate-800 backdrop-blur-xl">
                {/* Code Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <motion.div whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" />
                    <motion.div whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" />
                    <motion.div whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" />
                    <span className="ml-2 font-mono text-xs text-slate-400">DeveloperProfile.java</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
                    <span>v2026.1</span>
                  </div>
                </div>

                {/* Developer Visual / Profile Code Window */}
                <div className="font-mono text-xs text-slate-300 space-y-1.5 bg-[#080c14] p-4 rounded-xl border border-slate-800/80 overflow-hidden relative group">
                  <p><span className="text-purple-400">public class</span> <span className="text-yellow-300">DeveloperProfile</span> &#123;</p>
                  <p className="pl-4"><span className="text-purple-400">private String</span> name = <span className="text-emerald-300">"{name}"</span>;</p>
                  <p className="pl-4"><span className="text-purple-400">private String</span> role = <span className="text-emerald-300">"Full Stack & Trainer"</span>;</p>
                  <p className="pl-4"><span className="text-purple-400">private String[]</span> stack = &#123;<span className="text-cyan-300">"Java"</span>, <span className="text-cyan-300">"Spring Boot"</span>, <span className="text-cyan-300">"React"</span>&#125;;</p>
                  <p className="pl-4"><span className="text-purple-400">private boolean</span> readyToDeploy = <span className="text-amber-300">true</span>;</p>
                  <p className="pl-4 pt-1"><span className="text-blue-400">public void</span> <span className="text-green-300">buildAndTrain</span>() &#123;</p>
                  <p className="pl-8 text-slate-400">// Transforming concepts into scalable systems</p>
                  <p className="pl-8 text-indigo-300">
                    System.out.println(<span className="text-emerald-300">"Ready for impact!"</span>);
                    <span className="inline-block w-2 h-4 ml-1 bg-indigo-400 animate-pulse align-middle" />
                  </p>
                  <p className="pl-4">&#125;</p>
                  <p>&#125;</p>
                </div>

                {/* Live Stats Pill Overlays */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <motion.div 
                    whileHover={{ y: -3, backgroundColor: 'rgba(30, 27, 75, 0.6)' }}
                    className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-800/40 flex items-center gap-3 transition-colors cursor-default"
                  >
                    <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-white">Full Stack</span>
                      <span className="text-[10px] text-slate-400">Backend & Frontend</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -3, backgroundColor: 'rgba(58, 12, 89, 0.6)' }}
                    className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-center gap-3 transition-colors cursor-default"
                  >
                    <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-white">Tech Trainer</span>
                      <span className="text-[10px] text-slate-400">500+ Mentees</span>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
