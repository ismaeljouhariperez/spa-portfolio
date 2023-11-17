"use client";
import React, { ReactElement, useState } from 'react';
import SectionComponent from '@/components/Section';
// import ScrollIndicator from '@/components/ScrollIndicators';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useScroll from '@/hooks/useScroll';
import IntroSection from '@/components/Section/IntroSection';
import ProjectsSection from '@/components/Section/ProjectsSection';
import ProfileSection from '@/components/Section/ProfileSection';
import SkillsSection from '@/components/Section/SkillsSection';
import ContactSection from '@/components/Section/ContactSection';

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
  };

  const sections = [
    <SectionComponent key="section-1" sectionId="section-1"><IntroSection lng={lng} /></SectionComponent>,
    <SectionComponent key="section-2" sectionId="section-2"><ProjectsSection lng={lng} /></SectionComponent>,
    <SectionComponent key="section-3" sectionId="section-3"><ProfileSection lng={lng}/></SectionComponent>,
    <SectionComponent key="section-4" sectionId="section-4"><SkillsSection lng={lng}></SkillsSection></SectionComponent>,
    <SectionComponent key="section-5" sectionId="section-5"><ContactSection lng={lng}/></SectionComponent>,
  ];
  const totalSections = React.Children.count(sections);
  const { currentSection, navigateToSection} = useScroll(totalSections);
  const isLastSection = currentSection === totalSections;

  return (
    <>
      <Header lng={lng} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} currentSection={currentSection} navigateToSection={navigateToSection}/>
      <main className="z-10 flex flex-col items-center justify-center">{sections}</main>
      {/* <ScrollIndicator totalSections={totalSections} currentSection={currentSection} /> */}
      <Footer isLastSection={isLastSection} /> 
    </>
  );
};
export default Homepage;
