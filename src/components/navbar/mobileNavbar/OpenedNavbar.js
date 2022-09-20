import React from 'react';
import { GrClose } from 'react-icons/gr';
import homesmartLogo from '../../../assets/images/logo.svg';

const OpenedNavbar = ({ setIsNavbarOpened }) => {
  const closeNavbar = () => {
    // enable scroll when modal is closed
    document.body.style.overflow = 'unset';
    setIsNavbarOpened(false);
  };

  return (
    <nav>
      <section className="absolute inset-0 z-10 bg-black/30">
        <div className="flex items-center justify-between rounded-t-md bg-yellow px-6 py-6">
          <div className="max-w-[200px] cursor-pointer">
            <img src={homesmartLogo} alt="homesmart logo" />
          </div>
          <div className="cursor-pointer text-3xl" onClick={closeNavbar}>
            <GrClose />
          </div>
        </div>
        <div className="bg-yellow pb-4">
          <ul className="py-4">
            <li className="link mb-6">Home</li>
            <li className="link mb-6">Contact</li>
            <li className="link mb-2">Login</li>
          </ul>
          <button className="button mx-auto">Sign Up</button>
        </div>
      </section>
    </nav>
  );
};

export default OpenedNavbar;
