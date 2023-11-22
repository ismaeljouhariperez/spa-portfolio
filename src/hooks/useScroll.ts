import { useState, useEffect, useCallback } from 'react';
import { scroller } from 'react-scroll';
import { debounce } from 'lodash';

const useScroll = (totalSections: number) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [canScroll, setCanScroll] = useState(true);
  const ScrollDuration = 1000;
  // Generate section IDs based on totalSections
  const sectionIds = Array.from({ length: totalSections }, (_, i) => `section-${i + 1}`);

 // Debounced version of setCurrentSection
 // eslint-disable-next-line react-hooks/exhaustive-deps
 const debouncedSetCurrentSection = useCallback(debounce((section) => {
  setCurrentSection(section);
}, 100), []);

  // Helper function to scroll to a section
  const scrollToSection = useCallback((sectionNumber: number) => {
    scroller.scrollTo(`section-${sectionNumber}`, {
      duration: ScrollDuration,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }, [ScrollDuration]);

  // Navigate to a section with optional click bypass
  const navigateToSection = useCallback((sectionId: string | number, clicked: boolean = false) => {
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
  }, [canScroll, scrollToSection, ScrollDuration]);

  // Generalized navigate function
  const navigate = useCallback((direction: number) => {
    if (!canScroll) return;
    const targetSection = Math.min(Math.max(currentSection + direction, 1), totalSections);
    navigateToSection(targetSection);
  }, [currentSection, canScroll, totalSections, navigateToSection]);

  // Handle keyboard arrow key events
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!['ArrowUp', 'ArrowDown'].includes(e.key)) return;
    e.preventDefault();

    const direction = e.key === 'ArrowUp' ? -1 : 1;
    navigate(direction);
  }, [navigate]);

  // Handle wheel scroll event
  const handleScroll = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    navigate(direction);
  }, [navigate]);

  // Handle touch swipe event
  let touchStartY = 0;
  let touchEndY = 0;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY = e.touches[0].clientY;
    e.preventDefault();
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    touchEndY = e.changedTouches[0].clientY;
    e.preventDefault();

    const direction = touchStartY > touchEndY ? 1 : -1;
    navigate(direction);
  }, [navigate]);

  const checkCurrentSection = useCallback(() => {
    let currentSectionIndex = 1;
    sectionIds.forEach((id, index) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          currentSectionIndex = index + 1;
        }
      }
    });
    debouncedSetCurrentSection(currentSectionIndex); // Use the debounced function
  }, [sectionIds, debouncedSetCurrentSection]);

  // Attach event listeners in useEffect hooks
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);

  useEffect(() => {
    checkCurrentSection();
    window.addEventListener('resize', checkCurrentSection);
    window.addEventListener('scroll', checkCurrentSection);
  
    return () => {
      window.removeEventListener('resize', checkCurrentSection);
      window.removeEventListener('scroll', checkCurrentSection);
    };
  }, []);

  return { currentSection, navigateToSection };
};

export default useScroll;
