'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { useViewportSize, useHotkeys, useToggle } from '@mantine/hooks';

interface NavLink
{
  id: number;
  list: {
    list: any[];
  };
}

const useDropdown = () =>
{
  const [ isDropdownOpened, toggle ] = useToggle();
  const [ listIndex, setListIndex ] = useState<number | null>( null );
  const [ backgroundImage, setBackgroundImage ] = useState<string>( '' );
  const [ lastScrollY, setLastScrollY ] = useState<number>( 0 );
  const [ list, setList ] = useState<any[]>( [] );
  const { height } = useViewportSize();

  const handleScroll = useCallback( () =>
  {
    if ( window.scrollY > lastScrollY )
    {
      toggle( false );
    }
    setLastScrollY( window.scrollY );
  }, [ lastScrollY, toggle ] );

  const renderList = useCallback( ( index: number, navLinks: NavLink[] ) =>
  {
    const list = navLinks.find( navLink => navLink.id === index )?.list.list ?? [];
    setList( list );
  }, [] );

  const toggleDropdown = useCallback( () =>
  {
    toggle();
    setListIndex( null );
    setBackgroundImage( '' );
  }, [ toggle ] );

  const onNavLinkClicked = useCallback( ( index: number, navLinks: NavLink[], backgroundImage: string ) =>
  {
    setListIndex( index );
    renderList( index, navLinks );
    setBackgroundImage( backgroundImage );
  }, [ renderList ] );

  const onEscapeClicked = useCallback( () =>
  {
    toggle( false );
    setListIndex( null );
  }, [ toggle ] );

  useHotkeys( [ [ 'Escape', onEscapeClicked ] ] );
  useEffect( () =>
  {
    handleScroll();
    window.addEventListener( "scroll", handleScroll );
    return () =>
    {
      window.removeEventListener( "scroll", handleScroll );
    };
  }, [ handleScroll ] );

  return useMemo( () => ( {
    isDropdownOpened,
    listIndex,
    list,
    toggleDropdown,
    onNavLinkClicked,
    backgroundImage,
    height,
  } ), [
    isDropdownOpened,
    listIndex,
    list,
    toggleDropdown,
    onNavLinkClicked,
    backgroundImage,
    height ] );
};

export { useDropdown };
