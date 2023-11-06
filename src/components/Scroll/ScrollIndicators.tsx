import React from 'react';

interface Props {
  totalSections: number;
  currentSection: number;
}

const ScrollIndicator: React.FC<Props> = ({ totalSections, currentSection }) => {
  return (
    <div className="fixed right-10 bottom-1/2 transform translate-y-1/2 z-10">
      {Array.from({ length: totalSections }).map((_, index) => (
        <div
          key={index}
          className={ `w-1 h-10 mb-2 transition duration-1000 my-8 ${
            index + 1 === currentSection ? 'bg-gray-800' : 'bg-gray-200'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default ScrollIndicator;
