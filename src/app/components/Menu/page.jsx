"use client"
import useResponsiveWidth from './useResposiveWidth.jsx';
import HamburgerMenu from './hamburger.jsx';
import AltMenu from './altMenu.jsx';

const Nav = () => {

    const windowWidth = useResponsiveWidth();

    return( 
    windowWidth > 500 ?
    <AltMenu />
    :
    <HamburgerMenu />       
    )
}

export default Nav

