"use client";

import React, { useState, useEffect } from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useGesture } from 'react-use-gesture';
import ScrollIndicator from '@/components/Scroll/ScrollIndicators';

const Homepage: React.FC = () => {
  const totalSections = 3;

  const determineCurrentSection = (): number => {
    for (let i = 1; i <= totalSections; i++) {
        const sectionElement = document.getElementById(`section-${i}`);
        
        // Check if sectionElement exists and it's within the viewport
        if (sectionElement && sectionElement.getBoundingClientRect().top <= window.innerHeight/2 && sectionElement.getBoundingClientRect().bottom >= window.innerHeight/2) {
            return i;
        }
    }

    // If no sections were detected in the viewport, default to section 1
    // Or you can handle this case differently based on your requirements
    console.warn("No section detected in the viewport. Defaulting to section 1.");
    return 1;
};


  const [currentSection, setCurrentSection] = useState<number>(determineCurrentSection());
  const [canScroll, setCanScroll] = useState<boolean>(true);
 
  useEffect(() => {
    console.log("Current Section:", currentSection);  
    setCurrentSection(determineCurrentSection());

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      
      if (!canScroll) return;

      if (e.deltaY > 0 && currentSection < totalSections) {
        scrollNext();
      } else if (e.deltaY < 0 && currentSection > 1) {
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
        <section id="section-1" className="flex flex-col items-center justify-center h-screen transition-all duration-1000">
          Section 1
        </section>
        <section id="section-2" className="flex flex-col items-center justify-center h-screen transition-all duration-1000">
          Section 2
        </section>
        <section id="section-3" className="flex flex-col items-center justify-center h-screen transition-all duration-1000">
          Section 3
        </section>
      </main>
      <ScrollIndicator totalSections={totalSections} currentSection={currentSection} />
      <Footer />
    </div>
  );
}

export default Homepage;
