import React from 'react';
import manageLogo from '../../../assets/images/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

const ClosedNavbar = ({ setIsNavbarOpened }) => {
  const openNavbar = () => {
    // disable scroll when modal is opened
    document.body.style.overflow = 'hidden';
    setIsNavbarOpened(true);
  };

  return (
    <nav className={'mx-2 flex items-center justify-between py-4 px-4 pt-2'}>
      <div className="max-w-[200px] cursor-pointer">
        <img src={manageLogo} alt="manage logo" />
      </div>
      <div className="cursor-pointer text-3xl" onClick={openNavbar}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default ClosedNavbar;
