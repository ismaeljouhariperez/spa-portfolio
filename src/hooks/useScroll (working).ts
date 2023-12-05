import { useState, useEffect, useCallback } from 'react';
import { scroller } from 'react-scroll';
import { debounce } from 'lodash';
import useDeviceDetection from '@/hooks/useDeviceDetection';

const useScroll = (totalSections: number) => {
  const device = useDeviceDetection(); // Assuming this returns true for mobile devices
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
    device === 'mobile' ? sectionNumber === 1 : setCurrentSection(sectionNumber);
    scrollToSection(sectionNumber);
    console.log(`Navigating to section: ${sectionId}`);

    if (!clicked) {
      // Temporarily disable scroll after navigation
      setCanScroll(false);
      setTimeout(() => {
        setCanScroll(true);
      }, ScrollDuration);
    }
  }, [canScroll, device, scrollToSection]);
  
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
    if (device === 'mobile'){ return } // Disable scroll on mobile
    console.log(`Wheel scroll event: deltaY = ${e.deltaY}`);
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    navigate(direction);
  }, [device, navigate]);

  // Handle touch swipe event
  let touchStartY = 0;
  let touchEndY = 0;
  let touchStartTime = 0;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
  }, []);
  
    const handleTouchEnd = useCallback((e: TouchEvent) => {
    touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchEndY - touchStartY;
    const minSwipeDistance = 100; // Increased sensitivity

    if (Math.abs(deltaY) > minSwipeDistance) {
      e.preventDefault(); // Prevent default behavior during a swipe
      const direction = deltaY > 0 ? -1 : 1; // Determine swipe direction
      navigate(direction);
    }
  }, [navigate, touchStartY]);
  

  const checkCurrentSection = useCallback(() => {
    let currentSectionIndex = 1;
    sectionIds.forEach((id, index) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        // console.log(`Section ${id}: top = ${rect.top}, bottom = ${rect.bottom}, window.innerHeight / 2 = ${window.innerHeight / 2}`);
        if (rect.top <= window.innerHeight / 2) {
          currentSectionIndex = index + 1;
        }
      }
    });
    console.log('Detected current section:', currentSectionIndex);
    debouncedSetCurrentSection(currentSectionIndex); // Use the debounced function
  }, [sectionIds, debouncedSetCurrentSection]);
  
  useEffect(() => {
    console.log('Current section state updated:', currentSection);
  }, [currentSection]);
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (device === 'mobile') { return } // Disable scroll on mobile
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
        window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll, device]);

  useEffect(() => {
    const updateVH = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', updateVH);
  
    return () => window.removeEventListener('resize', updateVH);
  }, []);

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
  }, [checkCurrentSection]);

  return { currentSection, navigateToSection };
};

export default useScroll;
