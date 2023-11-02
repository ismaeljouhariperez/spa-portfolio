"use client";

import { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';

const useScroll = (totalSections: number) => {
  const isClient = typeof document !== 'undefined';

  const determineCurrentSection = (): number => {
    if (!isClient) return 1;

    for (let i = 1; i <= totalSections; i++) {
      const sectionElement = document.getElementById(`section-${i}`);

      if (sectionElement && sectionElement.getBoundingClientRect().top <= window.innerHeight / 2 && sectionElement.getBoundingClientRect().bottom >= window.innerHeight / 2) {
        return i;
      }
    }

    console.warn("No section detected in the viewport. Defaulting to section 1.");
    return 1;
  };

  const [currentSection, setCurrentSection] = useState<number>(determineCurrentSection());
  const [canScroll, setCanScroll] = useState<boolean>(true);

  useEffect(() => {
    if (!isClient) return;

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
  };

  const scrollPrev = () => {
    setCurrentSection(prev => {
      const prevSection = prev - 1;
      scrollToSection(prevSection);
      return prevSection;
    });
  };

  const scrollToSection = (sectionNumber: number) => {
    if (!isClient) return;

    setCanScroll(false);
    scroller.scrollTo(`section-${sectionNumber}`, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart"
    });
    setTimeout(() => {
      setCanScroll(true);
    }, 1000);
  };

  return { currentSection, scrollNext, scrollPrev, canScroll };
};

export default useScroll;
