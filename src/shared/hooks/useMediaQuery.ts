import { useEffect, useState } from 'react';

export function useMediaQuery() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleChangeWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleChangeWidth);
    return () => {
      window.removeEventListener('resize', handleChangeWidth);
    };
  }, []);

  return width;
}
