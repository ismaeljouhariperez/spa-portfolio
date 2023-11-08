"use client";
import React, { ReactElement } from 'react';
import SectionComponent from '@/components/Section';
import ScrollIndicator from '@/components/ScrollIndicators';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FirstSection from '@/components/Section/FirstSection';
import useScroll from '@/hooks/useScroll';

interface HomepageProps {
  params: {
    lng: string;
  };
}
  const Homepage = ({ params: { lng } }: HomepageProps): ReactElement => {
  const sections = [
    <SectionComponent key="section-1" sectionId="section-1">
        <FirstSection key="section-1" lng={lng} />
    </SectionComponent>,
    <SectionComponent key="section-2" sectionId="section-2">
      </SectionComponent>,
    <SectionComponent key="section-3" sectionId="section-3">
      </SectionComponent>
  ];
  const totalSections = React.Children.count(sections);
  const { currentSection } = useScroll(totalSections);
  const isLastSection = currentSection === totalSections;
  return (
    <>
      <Header lng={lng}/>
      <main className="flex flex-col items-center justify-center">{sections}</main>
      <ScrollIndicator totalSections={totalSections} currentSection={currentSection} />
      <Footer isLastSection={isLastSection} /> 
    </>
  );
};
export default Homepage;
