import { useState, useEffect } from 'react';

const useTextRotation = (texts: string[], intervalTime: number) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % texts.length);
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [texts, intervalTime]);

  const currentText = texts.length > 0 ? texts[index] : '';

  return currentText;
};

export default useTextRotation;