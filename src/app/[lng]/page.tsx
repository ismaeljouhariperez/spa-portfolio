"use client";
import React, { ReactElement, useState } from 'react';
import SectionComponent from '@/components/Section';
import ScrollIndicator from '@/components/ScrollIndicators';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useScroll from '@/hooks/useScroll';

import FirstSection from '@/components/Section/FirstSection';
import ProjectsSection from '@/components/Section/SecondSection';

interface HomepageProps {
  params: {
    lng: string;
  };
}

const Homepage = ({ params: { lng } }: HomepageProps): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState(false);  

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
    console.log('Dark mode toggled')
    console.log('isDarkMode: ', isDarkMode)
  };

  const sections = [
    <SectionComponent key="section-1" sectionId="section-1">
        <FirstSection key="section-1" lng={lng} />
    </SectionComponent>,
    <SectionComponent key="section-2" sectionId="section-2"><ProjectsSection /></SectionComponent>,
    <SectionComponent key="section-3" sectionId="section-3">Section 3</SectionComponent>
  ];
  const totalSections = React.Children.count(sections);
  const { currentSection } = useScroll(totalSections);
  const isLastSection = currentSection === totalSections;
  return (
    <>
      <Header lng={lng} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <main className="z-10 flex flex-col items-center justify-center">{sections}</main>
      <ScrollIndicator totalSections={totalSections} currentSection={currentSection} />
      <Footer isLastSection={isLastSection} /> 
    </>
  );
};
export default Homepage;
