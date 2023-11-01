"use client";

import React, { useState, useEffect } from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useGesture } from 'react-use-gesture';
import ScrollIndicator from '@/components/Scroll/ScrollIndicators';

const Homepage: React.FC = () => {
  const totalSections = 3;
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [canScroll, setCanScroll] = useState<boolean>(true);
 
  useEffect(() => {
    
    const handleScroll = (e) => {
      e.preventDefault();
      
      // Check if the user is allowed to scroll
      if (!canScroll) return;

      // If scrolling down
      if (e.deltaY > 0 && currentSection < totalSections) {
        scrollNext();
      }
      // If scrolling up
      else if (e.deltaY < 0 && currentSection > 1) {
        scrollPrev();
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection, canScroll]);

  const scrollNext = () => {
    setCurrentSection(prev => {
      const nextSection = prev + 1;
      scrollToSection(nextSection);
      return nextSection;
    });
  }

  const scrollPrev = () => {
    setCurrentSection(prev => {
      const prevSection = prev - 1;
      scrollToSection(prevSection);
      return prevSection;
    });
  }

  const scrollToSection = (sectionNumber: number) => {
    setCanScroll(false);
    scroller.scrollTo(`section-${sectionNumber}`, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart"
    });
    setTimeout(() => {
      setCanScroll(true);
    }, 1000);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <main>
        <section id="section-1" className="flex flex-col items-center justify-center h-screen transition-all duration-500">
          Section 1
        </section>
        <section id="section-2" className="flex flex-col items-center justify-center h-screen transition-all duration-500">
          Section 2
        </section>
        <section id="section-3" className="flex flex-col items-center justify-center h-screen transition-all duration-500">
          Section 3
        </section>
      </main>
      <ScrollIndicator totalSections={totalSections} currentSection={currentSection} />
      <Footer />
    </div>
  );
}

export default Homepage;
