'use client';

import { useState, useEffect } from 'react';
import getRandomNumber from '@/utils/getRandomNumber';

const useRandomTextIndex = (arrayLength: number) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(getRandomNumber(0, arrayLength - 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [arrayLength]);

  return textIndex;
};

export default useRandomTextIndex;
