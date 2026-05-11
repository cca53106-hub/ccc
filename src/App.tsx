/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Leadership from './components/Leadership.tsx';
import Features from './components/Features.tsx';
import Courses from './components/Courses.tsx';
import Faculty from './components/Faculty.tsx';
import Achievements from './components/Achievements.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import SatiricalTutor from './components/SatiricalTutor.tsx';
import FunnyNewsTicker from './components/FunnyNewsTicker.tsx';
import FeesCalculator from './components/FeesCalculator.tsx';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-base font-sans text-text-main selection:bg-accent/20 selection:text-primary-dark transition-colors duration-300">
        <FunnyNewsTicker />
        <Navbar />
        <main>
          <Hero />
          <Leadership />
          <Features />
          <Courses />
          <Faculty />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        <SatiricalTutor />
        <FeesCalculator />
      </div>
    </LanguageProvider>
  );
}
