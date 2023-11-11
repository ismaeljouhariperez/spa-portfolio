'use client';

import { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';

const useScroll = (totalSections: number) => {
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [canScroll, setCanScroll] = useState<boolean>(true);

  const navigateToSection = (sectionId) => {
    const sectionNumber = typeof sectionId === 'string' ? parseInt(sectionId.split('-')[1], 10) : sectionId;
    setCurrentSection(sectionNumber); // Update the current section
    setCanScroll(false);

    scroller.scrollTo(`section-${sectionNumber}`, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });

    setTimeout(() => {
      setCanScroll(true);
    }, 800);
  };

  const determineCurrentSection = (): number => {
    let closestSection = 1;
    let smallestDistance = Infinity;
  
    for (let i = 1; i <= totalSections; i++) {
      const sectionElement = document.getElementById(`section-${i}`);
      if (sectionElement) {
        const distanceToTop = Math.abs(sectionElement.getBoundingClientRect().top);
        if (distanceToTop < smallestDistance) {
          smallestDistance = distanceToTop;
          closestSection = i;
        }
      }
    }
  
    if (smallestDistance === Infinity) {
      console.warn("No section detected in the viewport. Defaulting to section 1.");
      return 1;
    }

    return closestSection;
  };

  useEffect(() => {
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

  useEffect(() => {
    setCurrentSection(determineCurrentSection());
  }, []);

  return { currentSection, scrollNext, scrollPrev, canScroll, navigateToSection };
};

export default useScroll;
