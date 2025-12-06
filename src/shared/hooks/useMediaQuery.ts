import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

export function useMediaQuery() {
  const [width, setWidth] = useState(window.innerWidth);
  const debouncedWidth = useDebounce(width);

  useEffect(() => {
    function handleChangeWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleChangeWidth);
    return () => {
      window.removeEventListener('resize', handleChangeWidth);
    };
  }, []);

  return debouncedWidth;
}
