import { useState, useEffect } from 'react';

// Define breakpoints
const breakpoints = {
  mobile: 768,
  tablet: 992,
  desktop: 1200,
};

const useDeviceDetection = () => {
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < breakpoints.mobile) {
        setDevice('mobile');
      } else if (width >= breakpoints.mobile && width < breakpoints.tablet) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // initialize the value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
};

export default useDeviceDetection;
