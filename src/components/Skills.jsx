import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Database, Wrench, Layers, CheckCircle2, 
  Terminal, Cpu, Sparkles 
} from 'lucide-react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava, 
  FaPython, FaServer, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiSpringboot, SiHibernate, SiDjango, 
  SiMysql, SiPostgresql, SiPostman, 
  SiIntellijidea, SiEclipseide 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { skills } = portfolioData;

  // Icon mapping helper
  const renderSkillIcon = (iconName, color) => {
    const props = { className: "w-6 h-6", style: { color: color || '#818cf8' } };
    
    switch (iconName) {
      case 'FaHtml5': return <FaHtml5 {...props} />;
      case 'FaCss3Alt': return <FaCss3Alt {...props} />;
      case 'FaJs': return <FaJs {...props} />;
      case 'FaReact': return <FaReact {...props} />;
      case 'SiTailwindcss': return <SiTailwindcss {...props} />;
      case 'FaBootstrap': return <FaBootstrap {...props} />;
      case 'FaJava': return <FaJava {...props} />;
      case 'SiSpringboot': return <SiSpringboot {...props} />;
      case 'SiHibernate': return <SiHibernate {...props} />;
      case 'FaServer': return <FaServer {...props} />;
      case 'FaPython': return <FaPython {...props} />;
      case 'SiDjango': return <SiDjango {...props} />;
      case 'SiMysql': return <SiMysql {...props} />;
      case 'SiPostgresql': return <SiPostgresql {...props} />;
      case 'FaGitAlt': return <FaGitAlt {...props} />;
      case 'FaGithub': return <FaGithub className="w-6 h-6 text-slate-100" />;
      case 'SiPostman': return <SiPostman {...props} />;
      case 'SiVisualstudiocode': return <VscVscode {...props} />;
      case 'SiIntellijidea': return <SiIntellijidea className="w-6 h-6 text-purple-400" />;
      case 'SiEclipseide': return <SiEclipseide {...props} />;
      default: return <Code2 className="w-6 h-6 text-indigo-400" />;
    }
  };

  const categories = [
    { id: 'all', name: 'All Skills', icon: Layers },
    { id: 'frontend', name: 'Frontend', icon: Code2 },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'tools', name: 'Tools & IDEs', icon: Wrench },
    { id: 'other', name: 'Concepts & Methodologies', icon: Sparkles },
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-700/40 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Categorized technical stack based on practical development experience and technical training expertise.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Cards Display */}
        <motion.div layout className="space-y-12">
          
          {/* Frontend Category */}
          {(activeCategory === 'all' || activeCategory === 'frontend') && (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-left"
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <span>Frontend Development</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.frontend.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-xl glass-card border border-slate-800 flex flex-col items-center text-center space-y-3 hover:border-indigo-500/50 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                      {renderSkillIcon(skill.icon, skill.color)}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Backend Category */}
          {(activeCategory === 'all' || activeCategory === 'backend') && (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-left"
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                <Server className="w-5 h-5 text-purple-400" />
                <span>Backend Engineering & APIs</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.backend.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-xl glass-card border border-slate-800 flex flex-col items-center text-center space-y-3 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                      {renderSkillIcon(skill.icon, skill.color)}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Database Category */}
          {(activeCategory === 'all' || activeCategory === 'database') && (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-left"
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                <Database className="w-5 h-5 text-emerald-400" />
                <span>Databases & ORM</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.database.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-xl glass-card border border-slate-800 flex flex-col items-center text-center space-y-3 hover:border-emerald-500/50 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                      {renderSkillIcon(skill.icon, skill.color)}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tools Category */}
          {(activeCategory === 'all' || activeCategory === 'tools') && (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-left"
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                <Wrench className="w-5 h-5 text-amber-400" />
                <span>Developer Tools & IDEs</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.tools.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-xl glass-card border border-slate-800 flex flex-col items-center text-center space-y-3 hover:border-amber-500/50 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                      {renderSkillIcon(skill.icon, skill.color)}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Other / Methodologies Category */}
          {(activeCategory === 'all' || activeCategory === 'other') && (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-left"
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <span>Concepts & Problem Solving</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.other.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl glass-card border border-slate-800 flex items-center gap-3 hover:border-pink-500/50 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
