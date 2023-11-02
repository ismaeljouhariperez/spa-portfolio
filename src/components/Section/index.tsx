import React from 'react';

interface SectionProps {
  sectionId: string;
  children: React.ReactNode;
}

const SectionComponent: React.FC<SectionProps> = ({ sectionId, children }) => {
  return (
    <section id={sectionId} className="flex flex-col items-center justify-center h-screen transition-all duration-1000">
      {children}
    </section>
  );
}

export default SectionComponent;
