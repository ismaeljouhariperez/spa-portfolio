"use client";
import React from 'react';
import MainComponent from '@/components/Main';
import ScrollIndicator from '@/components/Scroll/ScrollIndicators';
import useScroll from '@/hooks/useScroll'

const Homepage: React.FC = () => {
  const totalSections = 3;
  const { currentSection, scrollNext, scrollPrev, canScroll } = useScroll(totalSections);

  return (
    <div className="flex flex-col items-center justify-center">
      <MainComponent />
      <ScrollIndicator totalSections={totalSections} currentSection={currentSection} />
    </div>
  );
}

export default Homepage;

