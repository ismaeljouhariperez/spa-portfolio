'use client';

import { useState, useEffect, useCallback } from 'react';
import { scroller } from 'react-scroll';
import debounce from 'lodash.debounce'; 

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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


  // Debounce the navigateToSection function
  const debouncedNavigateToSection = useCallback(
    debounce((sectionId: string | number) => {
      navigateToSection(sectionId);
    }, 300), // Adjust debounce time as needed
    [navigateToSection]
  );


  // Handle keyboard arrow key events
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    // This checks if an arrow key was pressed
    if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault(); // Prevents the default arrow key behavior (scrolling)

      if (!canScroll) return;

      let targetSection = currentSection;

      if (e.key === 'ArrowUp') {
        targetSection = Math.max(currentSection - 1, 1);
      } else if (e.key === 'ArrowDown') {
        targetSection = Math.min(currentSection + 1, totalSections);
      }

      if (targetSection !== currentSection) {
        navigateToSection(targetSection);
      }
    }
  };

  window.addEventListener('keydown', handleKeyDown, { passive: false });

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [currentSection, canScroll, totalSections, navigateToSection]);

// ...




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
