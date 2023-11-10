"use client";
import React from 'react';
import useScroll from '@/hooks/useScroll';
import SectionComponent from '@/components/Section';
import ScrollIndicator from '@/components/ScrollIndicators';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FirstSection from '@/components/Section/FirstSection';

// import i18n from 'i18next';
// import { useTranslation } from '@/app/i18n';

interface HomepageProps {
  params: {
    lng: string;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
  };
}

const Homepage: React.FC<HomepageProps> = ({ params: { lng, isDarkMode, toggleDarkMode } }) => {
  // const { t } = useTranslation();
  const sections = [
    <SectionComponent key="section-1" sectionId="section-1">
        <FirstSection lng={lng} key="section-1" />
    </SectionComponent>,
    <SectionComponent key="section-2" sectionId="section-2">Section 2</SectionComponent>,
    <SectionComponent key="section-3" sectionId="section-3">Section 3</SectionComponent>
  ];
  const totalSections = React.Children.count(sections);
  const { currentSection, scrollNext, scrollPrev, canScroll } = useScroll(totalSections);
  const isLastSection = currentSection === totalSections;
  
  return (
    <>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} lng={lng}/>
        <main className="flex flex-col items-center justify-center">{sections}</main>
        <ScrollIndicator totalSections={totalSections} currentSection={currentSection} />
        <Footer isLastSection={isLastSection} /> 
    </>
  );
};
export default Homepage;
