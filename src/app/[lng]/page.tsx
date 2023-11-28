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
import ClientsSection from '@/components/Section/ClientsSection';
import ContactSection from '@/components/Section/ContactSection';


interface HomepageProps {
  params: {
    lng: string;
  };
}

const Homepage : React.FC<HomepageProps> = ({ params: { lng } }) => {

  const sectionConfigs = [
    { id: 'section-1', className: 'introSection', Component: IntroSection},
    { id: 'section-2', className: 'clientsSection', Component: ClientsSection },
    { id: 'section-3', className: 'projectsSection', Component: ProjectsSection },
    { id: 'section-4', className: 'profileSection', Component: ProfileSection },
    { id: 'section-5', className: 'skillsSection', Component: SkillsSection },
    { id: 'section-6', className: 'contactSection', Component: ContactSection },
  ];
  const sections = sectionConfigs.map(({ id, className, Component }) => (
    <SectionComponent key={id} sectionClass={className} sectionId={id} >
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
