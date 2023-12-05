import React from "react";

interface FooterProps {
  isLastSection?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLastSection }) => {

  const footerClassName = `fixed z-30 flex lg:h-16 bottom-0 w-screen justify-center items-center transition-bg duration-500 lg:delay-500 ${
    isLastSection ? 'bg-gray-200' : ' '
  }`;

  const heartClassName = isLastSection ? 'text-red-500' : 'text-gray-600';

  return (
    <footer className={footerClassName}>
      <p className="text-gray-600 text-sm">
        Made with <span className={`transition duration-500 lg:delay-500 ${heartClassName}`}>&#10084;</span> in Next.js | Design by Pauline Mischler
      </p>
    </footer>
  );
};

export default Footer;

