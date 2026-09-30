import React from 'react';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    window.open(portfolioData.personal.resumeUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl glass-card border border-slate-700 bg-slate-900 p-6 text-left space-y-5 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 inline-block">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white pt-1">
            Download Resume
          </h3>
          <p className="text-xs text-slate-400">
            Select the targeted resume version for your recruitment or training requirement:
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleDownload('Java Full Stack Developer')}
            className="w-full p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-indigo-500 flex items-center justify-between group transition-all"
          >
            <div className="space-y-0.5 text-left">
              <span className="block text-sm font-bold text-white group-hover:text-indigo-300">
                Java Full Stack Developer Resume
              </span>
              <span className="text-[11px] text-slate-400">
                Focused on Spring Boot, React.js, REST APIs & SQL
              </span>
            </div>
            <Download className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => handleDownload('Technical Trainer & Mentor')}
            className="w-full p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-emerald-500 flex items-center justify-between group transition-all"
          >
            <div className="space-y-0.5 text-left">
              <span className="block text-sm font-bold text-white group-hover:text-emerald-300">
                Technical Trainer & Mentor Resume
              </span>
              <span className="text-[11px] text-slate-400">
                Focused on Curriculum, Live Coding & College Workshops
              </span>
            </div>
            <Download className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Updated for 2026 Recruitment</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
