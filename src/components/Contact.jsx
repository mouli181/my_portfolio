import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, github, linkedin, location } = portfolioData.personal;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    const accessKey = portfolioData.personal.web3formsKey;

    try {
      if (accessKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: formData.name,
          }),
        });

        const result = await response.json();
        if (result.success) {
          setStatus({ submitting: false, submitted: true, error: false });
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        }
      }

      // Direct mailto backup if Web3Forms key is not configured
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/70 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-700/40 text-indigo-300 text-xs font-mono uppercase tracking-widest">
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto">
            "Whether you're looking for a developer, technical trainer, project mentor, or someone to collaborate with, feel free to connect."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Open for full-stack developer roles, technical training contracts, college workshops, and software engineering opportunities.
              </p>

              <div className="space-y-4 pt-2">
                
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">Direct Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">Current Location</span>
                    <span className="text-sm font-semibold text-white">
                      {location}
                    </span>
                  </div>
                </div>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 group-hover:scale-110 transition-transform">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">LinkedIn Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      linkedin.com/in/moulitharan-c
                    </span>
                  </div>
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 group-hover:scale-110 transition-transform">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">GitHub Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      github.com/mouli181
                    </span>
                  </div>
                </a>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="text-xs text-slate-400">Fill out the form below and I will get back to you promptly.</p>
              </div>

              {status.submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 space-y-2 text-center">
                  <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. I have received your message and will respond shortly.
                  </p>
                  <button
                    onClick={() => setStatus({ ...status, submitted: false })}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-semibold block">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-semibold block">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Technical Training / Full-Stack Role"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-50"
                  >
                    {status.submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
