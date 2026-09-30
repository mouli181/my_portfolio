import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, Code2, Layers, CheckCircle2, 
  HelpCircle, Sparkles, X, ChevronRight 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const { projects } = portfolioData;

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-700/40 text-indigo-300 text-xs font-mono uppercase tracking-widest">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Full-stack web applications and backend API projects designed with production-grade architecture.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 border ${
                activeFilter === cat
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl glass-card border border-slate-800 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-950/80 backdrop-blur-md border border-slate-700 text-indigo-300">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 text-left space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Problem Statement snippet */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1">
                      <HelpCircle className="w-3 h-3" /> Problem Statement:
                    </span>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {project.problem}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Features bullet snippet */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Highlights:
                    </span>
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges & Action Buttons */}
                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-800 text-indigo-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-2xl glass-card border border-slate-700 bg-slate-900/95 p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-left shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-950 border border-indigo-800 text-indigo-300">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white pt-1">
                {selectedProject.title}
              </h3>
            </div>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-xl border border-slate-800"
            />

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-amber-200 space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-amber-400" /> Problem Addressed
                </span>
                <p className="text-sm">{selectedProject.problem}</p>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase text-slate-400 font-bold mb-1">
                  Full Project Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase text-slate-400 font-bold mb-2">
                  Key Features & Functional Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase text-slate-400 font-bold mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-950 text-indigo-300 border border-indigo-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
