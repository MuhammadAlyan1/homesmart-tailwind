import React, { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './mobileNavbar/Index';

const Navbar = () => {
  const MOBILE_SIZE = 750;
  const isOnSmallScreen = window.innerWidth <= MOBILE_SIZE;
  const [isOnMobileDevice, setIsOnMobileDevice] = useState(isOnSmallScreen);

  useEffect(() => {
    const resizeEventListener = window.addEventListener('resize', (e) => {
      if (e.target.innerWidth >= 750) {
        setIsOnMobileDevice(false);
      } else {
        setIsOnMobileDevice(true);
      }
    });

    return () => window.removeEventListener('resize', resizeEventListener);
  }, []);

  if (isOnMobileDevice) {
    return <MobileNavbar />;
  }

  return <DesktopNavbar />;
};

export default Navbar;
