import { useState, useEffect, useCallback, useRef } from "react";
import { scroller } from "react-scroll";
import { debounce } from "lodash";
import useDeviceDetection from "@/hooks/useDeviceDetection";

const useScroll = (totalSections: number) => {
  /**
   * Constants, variables and state
   */

  // All
  const [currentSection, setCurrentSection] = useState(1);
  const [canScroll, setCanScroll] = useState(true);
  const sectionIds = Array.from(
    { length: totalSections },
    (_, i) => `section-${i + 1}`
  );
  const scrollDurationRef = useRef(1000);

  // Mobile
  const device = useDeviceDetection(); // Get device type
  const isMobile = device === "mobile"; // Or however you determine if it's mobile

  // Touch swipe event
  const linkHrefRef = useRef<string | null>(null);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  let deltaY = touchStartY - touchEndY;

  /**
   * Helpers
   */

  // Set Current Section
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetCurrentSection = useCallback(
    debounce((section) => {
      setCurrentSection(section);
    }, 100),
    []
  );

  // Scroll to a section
  const scrollToSection = useCallback(
    (sectionNumber: number) => {
      scrollDurationRef.current = isMobile ? 800 : 1000;
      scroller.scrollTo(`section-${sectionNumber}`, {
        duration: scrollDurationRef.current,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    },
    [isMobile]
  );

  // Navigate to a section (with optional click bypass)
  const navigateToSection = useCallback(
    (sectionId: string | number, clicked: boolean = false) => {
      // console.log(`canScroll = ${canScroll}, clicked = ${clicked}`);
      if (!canScroll && !clicked) return;
      const sectionNumber =
        typeof sectionId === "string"
          ? parseInt(sectionId.split("-")[1], 10)
          : sectionId;
      setCurrentSection(sectionNumber);
      scrollToSection(sectionNumber);

      if (!clicked && !isMobile) {
        console.log("Preventing scroll");
        setCanScroll(false);
        setTimeout(() => {
          setCanScroll(true);
        }, scrollDurationRef.current);
      }
    },
    [canScroll, isMobile, scrollToSection]
  );

  /**
   * Main functions
   */

  // Function to update the viewport height
  const updateVH = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  // Navigate function
  const navigate = useCallback(
    (direction: number) => {
      if (!canScroll) return;
      // console.log(`Navigate function: direction = ${direction} currentSection = ${currentSection} targetSection = ${currentSection + direction}`);
      const targetSection = Math.min(
        Math.max(currentSection + direction, 1),
        totalSections
      );
      navigateToSection(targetSection);
    },
    [currentSection, canScroll, totalSections, navigateToSection]
  );

  // Check current section
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
    // console.log('Detected current section:', currentSectionIndex);
    debouncedSetCurrentSection(currentSectionIndex); // Use the debounced function
  }, [sectionIds, debouncedSetCurrentSection]);

  // Keyboard events
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (device === "mobile" || !canScroll) {
        return; //
      }
      if (!["ArrowUp", "ArrowDown"].includes(e.key)) return;
      e.preventDefault();
      const direction = e.key === "ArrowUp" ? -1 : 1;
      navigate(direction);
      console.log(`Keyboard event: ${e.key} = navigate(${direction})`);
    },
    [canScroll, device, navigate]
  );

  // Handle wheel scroll event
  const handleScroll = useCallback(
    (e: WheelEvent) => {
      if (device === "mobile" || !canScroll) {
        return; // Exit early if it's a mobile device or scrolling is not allowed
      }
      // console.log(`Wheel scroll event: deltaY = ${e.deltaY}`);
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      navigate(direction);
    },
    [canScroll, device, navigate]
  );

  // Touch start event
  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touchedElement = e.target as HTMLElement;
    const linkElement = touchedElement.closest("a");
    const startY = e.touches[0].clientY;
    setTouchStartY(startY);

    if (startY > 100) {
      e.preventDefault();
      if (linkElement) {
        linkHrefRef.current = linkElement.href;
      } else {
        linkHrefRef.current = null;
      }
    }
  }, []);

  // Touch end event
  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      setTouchEndY(endY);
      const deltaY = touchStartY - endY;
      console.log(`Touch end event: deltaY = ${deltaY}`);

      if (Math.abs(deltaY) === 0 && linkHrefRef.current) {
        window.location.href = linkHrefRef.current;
        linkHrefRef.current = null;
      } else if (Math.abs(deltaY) !== 0) {
        e.preventDefault();
        const direction = deltaY > 0 ? 1 : -1;
        navigate(direction);
      }
      // Reset touch positions
      setTouchStartY(0);
      setTouchEndY(0);
    },
    [navigate, touchStartY]
  );
  /**
   * Use Effects
   */

  // Log current section state
  // useEffect(() => {
  //   console.log('Current section state updated:', currentSection);
  // }, [currentSection]);

  // Keyboard events
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Wheel events
  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  // Update vh on component mount and window resize
  useEffect(() => {
    updateVH(); // Update vh on component mount
    window.addEventListener("resize", updateVH);

    return () => {
      window.removeEventListener("resize", updateVH);
    };
  }, []);

  // Check current section on load, resize, and scroll
  useEffect(() => {
    checkCurrentSection();
    window.addEventListener("resize", checkCurrentSection);
    window.addEventListener("scroll", checkCurrentSection);
    return () => {
      window.removeEventListener("resize", checkCurrentSection);
      window.removeEventListener("scroll", checkCurrentSection);
    };
  }, [checkCurrentSection]);

  // Disable scroll on mobile
  useEffect(() => {
    if (device === "mobile") {
      document.body.style.overflow = "hidden";
    }
    return () => {
      if (device === "mobile") {
        document.body.style.overflow = "";
      }
    };
  }, [device]);

  // Touch events
  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);

  return { currentSection, navigateToSection };
};

export default useScroll;
