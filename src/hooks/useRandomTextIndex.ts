'use client';
import { useState, useEffect } from 'react';
import getRandomNumber from '@/utils/getRandomNumber';

const useRandomTextIndex = (arrayLength: number) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Ensuring this runs only on the client side
    if (typeof window === 'undefined') {
      return;
    }
    const interval = setInterval(() => {
      setTextIndex(getRandomNumber(0, arrayLength - 1));
    }, 2000);
    
    return () => clearInterval(interval);
  }, [arrayLength]);

  return textIndex;
};


export default useRandomTextIndex;
