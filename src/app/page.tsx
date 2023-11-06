"use client";
import React from 'react';
import useScroll from '@/hooks/useScroll';
import SectionComponent from '@/components/Section';
import ScrollIndicator from '@/components/Scroll/ScrollIndicators';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FirstSection from '@/components/Section/FirstSection';

const Homepage: React.FC = () => {
  const sections = [
    <SectionComponent key="section-1" sectionId="section-1">
        <FirstSection key="section-1" />
    </SectionComponent>,
    <SectionComponent key="section-2" sectionId="section-2">Section 2</SectionComponent>,
    <SectionComponent key="section-3" sectionId="section-3">Section 3</SectionComponent>
  ];
  const totalSections = React.Children.count(sections);
  const { currentSection, scrollNext, scrollPrev, canScroll } = useScroll(totalSections);
  const isLastSection = currentSection === totalSections;
  
  return (
    <>
        <Header/>
        <main className="flex flex-col items-center justify-center">{sections}</main>
        <ScrollIndicator totalSections={totalSections} currentSection={currentSection} />
        <Footer isLastSection={isLastSection} />
    </>
  );
};

export default Homepage;
