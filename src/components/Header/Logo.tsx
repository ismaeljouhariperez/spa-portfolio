import Image from 'next/image'
import { ReactElement } from 'react';

interface LogoProps {
  currentSection?: number;
}

const Logo = ({ currentSection }: LogoProps): ReactElement => {
  return (
      <div>
       <Image
                //  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:white"
          className={`relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:white logo ${currentSection === 1 ? 'logo-active' : ''}`}
          src="/IJ.svg"
          alt="Ismael Logo"
          width={30}
          height={30}
          priority
        />
      </div>
    );
  }
  
  export default Logo;
  