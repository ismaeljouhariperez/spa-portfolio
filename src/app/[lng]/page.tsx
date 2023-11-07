"use client";
import React, { ReactElement } from 'react';
import useScroll from '@/hooks/useScroll';
import SectionComponent from '@/components/Section';
import ScrollIndicator from '@/components/ScrollIndicators';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FirstSection from '@/components/Section/FirstSection';
import { useTranslation } from '@/app/i18n';

interface HomepageProps {
  params: {
    lng: string;
  };
}

const Homepage = ({ params: { lng } }: HomepageProps): ReactElement => {
  const { t, i18n } = useTranslation(lng, 'translation');

  if (!t) {
    return <p>Traductions en cours...</p>;
  }
  
  const sections = [
    <SectionComponent key="section-1" sectionId="section-1">
        <FirstSection key="section-1" />
    </SectionComponent>,
    <SectionComponent key="section-2" sectionId="section-2">{t('Section Deux')}</SectionComponent>,
    <SectionComponent key="section-3" sectionId="section-3">{t('Section Trois')}</SectionComponent>
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
