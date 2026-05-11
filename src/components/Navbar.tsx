import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, BookOpen, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

const navLinks = {
  en: [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ],
  ur: [
    { name: 'ہوم', href: '#' },
    { name: 'پروگرامز', href: '#courses' },
    { name: 'رابطہ', href: '#contact' },
  ]
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = language === 'ur' ? navLinks.ur : navLinks.en;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg text-white">
              <BookOpen size={24} />
            </div>
            <div>
              <span className="font-bold text-lg leading-none tracking-tight text-primary-dark block">SCA Academy</span>
              <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Science Coaching Academy</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-widest px-3 py-1 bg-primary/5 rounded-full"
            >
              <Languages size={14} />
              {language === 'ur' ? 'English' : 'اردو'}
            </button>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-text-light hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-primary-dark transition-all shadow-md active:scale-95 shadow-primary/20"
            >
              {language === 'ur' ? 'داخلہ لیں (جلدی)' : 'ENROLL (BE SCAMMED)'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="p-2 text-primary bg-primary/5 rounded-lg"
            >
              <Languages size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-blue-700 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-neutral-600 hover:text-blue-700 hover:bg-neutral-50 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button 
                  onClick={() => {
                  setIsOpen(false);
                  document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                  className="w-full bg-primary text-white px-5 py-3 rounded-xl text-base font-semibold shadow-md active:scale-98"
                >
                  {language === 'ur' ? 'داخلہ لیں' : 'Enroll Now'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
