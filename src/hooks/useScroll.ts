'use client';

import { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';

const useScroll = (totalSections: number) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [canScroll, setCanScroll] = useState(true);
  const ScrollDuration = 1000;

  // Helper function to scroll to a section
  const scrollToSection = (sectionNumber: number) => {
    scroller.scrollTo(`section-${sectionNumber}`, {
      duration: ScrollDuration,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  // Navigate to a section with optional click bypass
  const navigateToSection = (sectionId: string | number, clicked: boolean = false) => {
    if (!canScroll && !clicked) return;

    const sectionNumber = typeof sectionId === 'string' ? parseInt(sectionId.split('-')[1], 10) : sectionId;
    setCurrentSection(sectionNumber);
    scrollToSection(sectionNumber);

    if (!clicked) {
      // Temporarily disable scroll after navigation
      setCanScroll(false);
      setTimeout(() => {
        setCanScroll(true);
      }, ScrollDuration);
    }
  };

  // Handle wheel scroll event
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (!canScroll) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const targetSection = Math.min(Math.max(currentSection + direction, 1), totalSections);
      navigateToSection(targetSection);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection, canScroll, totalSections]);

  // Determine the current section based on scroll position
  useEffect(() => {
    const handleScrollPosition = () => {
      // Implement logic to determine the section based on scroll position
      // This can be done by checking the scroll position relative to the top of the document
      // and updating the currentSection state accordingly.
    };

    window.addEventListener('scroll', handleScrollPosition);

    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, []);

  return { currentSection, navigateToSection };
};

export default useScroll;
