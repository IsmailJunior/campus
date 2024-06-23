'use client';
import { useState, useMemo, useCallback } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import {useToggle, useDebouncedCallback} from '@mantine/hooks'

const useNavbar = () =>
{
  const { scrollY } = useScroll();
  const [ isNavbarHidden, toogle ] = useToggle();
  const [prevScroll, setPrevScroll] = useState(0);

  const update = useCallback((latest: number, prev: number): void => {
    if (latest < prev) {
      toogle(false);
    } else if (latest > 100 && latest > prev) {
      toogle(true);
    }
  }, [toogle])
  
  useMotionValueEvent( scrollY, 'change', useDebouncedCallback(( latest: number ) =>
  {
    update( latest, prevScroll );
    setPrevScroll(latest)
  }, isNavbarHidden ? 25 : 0))
  
  return useMemo(() => ({isNavbarHidden}), [isNavbarHidden])
};

export {useNavbar}