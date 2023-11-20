'use client';

import React from 'react';
import SectionComponent from '@/components/Section';
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

const Homepage : React.FC<HomepageProps> = ({ params: { lng } }) => {

  const sectionConfigs = [
    { id: 'section-1', Component: IntroSection },
    { id: 'section-2', Component: ProjectsSection },
    { id: 'section-3', Component: ProfileSection },
    { id: 'section-4', Component: SkillsSection },
    { id: 'section-5', Component: ContactSection },
  ];
  const sections = sectionConfigs.map(({ id, Component }) => (
    <SectionComponent key={id} sectionId={id}>
      <Component lng={lng}/>
    </SectionComponent>
  ));

  const totalSections = React.Children.count(sections);
  const { currentSection, navigateToSection} = useScroll(totalSections);
  const isLastSection = currentSection === totalSections;

  return (
    <>
      <Header lng={lng} currentSection={currentSection} navigateToSection={navigateToSection}/>
      <main className="z-10 flex flex-col items-center justify-center">{sections}</main>
      <Footer isLastSection={isLastSection} /> 
    </>
  );
};
export default Homepage;
