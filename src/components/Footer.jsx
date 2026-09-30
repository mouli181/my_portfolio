import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { name, role, email, github, linkedin } = portfolioData.personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070a12] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {name}
            </h3>
            <p className="text-xs font-mono text-indigo-400 font-medium">
              {role}
            </p>
            <p className="text-slate-400 italic text-xs pt-1">
              "Building applications. Teaching technology. Creating impact."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${email}`}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4 text-blue-400" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-colors"
              title="GitHub"
            >
              <FaGithub className="w-4 h-4 text-slate-200" />
            </motion.a>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 font-mono text-[11px]">
            © {new Date().getFullYear()} {name}. All rights reserved. Built with React & Tailwind CSS.
          </p>

          <motion.button
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-950/50 border border-indigo-800/60 text-indigo-300 hover:text-white hover:bg-indigo-900/60 transition-all text-[11px] font-mono shadow-md"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400 animate-bounce" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
