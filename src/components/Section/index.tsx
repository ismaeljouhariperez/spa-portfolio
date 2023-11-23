import React, { memo } from 'react';

interface SectionProps {
  sectionId: string;
  sectionClass: string;
  children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
const SectionComponent: React.FC<SectionProps> = memo(({ children, sectionId, sectionClass }) => {
  return (
    <section id={sectionId} className={`flex flex-col items-center justify-center h-screen transition-all duration-1000 w-screen ${sectionClass}`}>
      {children}
    </section>
  );
});

export default SectionComponent;
