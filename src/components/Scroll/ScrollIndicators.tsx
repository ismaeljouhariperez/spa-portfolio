import React from 'react';

interface Props {
  totalSections: number;
  currentSection: number;
}

const ScrollIndicator: React.FC<Props> = ({ totalSections, currentSection }) => {
  return (
    <div className="fixed right-4 bottom-1/2 transform translate-y-1/2 z-10">
      {Array.from({ length: totalSections }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 mb-2 rounded-full transition duration-200 ${
            index + 1 === currentSection ? 'bg-gray-800' : 'bg-gray-200'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default ScrollIndicator;
