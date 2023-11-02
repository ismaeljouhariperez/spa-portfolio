import React from 'react';
import SectionComponent from '@/components/Section';

const MainComponent: React.FC = () => {
  return (
    <main>
      <SectionComponent sectionId="section-1">Section 1</SectionComponent>
      <SectionComponent sectionId="section-2">Section 2</SectionComponent>
      <SectionComponent sectionId="section-3">Section 3</SectionComponent>
    </main>
  );
}

export default MainComponent;
