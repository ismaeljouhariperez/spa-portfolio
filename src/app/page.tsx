"use client";

import React from 'react';
import useScroll from '@/hooks/useScroll';
import SectionComponent from '@/components/Section';
import ScrollIndicator from '@/components/Scroll/ScrollIndicators';

const Homepage: React.FC = () => {
  const sections = [
    <SectionComponent key="section-1" sectionId="section-1">Section 1</SectionComponent>,
    <SectionComponent key="section-2" sectionId="section-2">Section 2</SectionComponent>,
    <SectionComponent key="section-3" sectionId="section-3">Section 3</SectionComponent>
  ];

  const totalSections = React.Children.count(sections);
  
  const { currentSection, scrollNext, scrollPrev, canScroll } = useScroll(totalSections);
  
  return (
    <div className="flex flex-col items-center justify-center">
      <main>{sections}</main>
      <ScrollIndicator totalSections={totalSections} currentSection={currentSection} />
    </div>
  );
};

export default Homepage;
