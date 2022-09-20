import React from 'react';
import homesmartLogo from '../../assets/images/logo.svg';

const DesktopNavbar = () => {
  return (
    <nav className="flex items-center justify-around py-6">
      <div>
        <ul className="flex gap-6">
          <li className="link">Home</li>
          <li className="link">Contact</li>
        </ul>
      </div>
      <div className="max-w-[250px] cursor-pointer">
        <img src={homesmartLogo} alt="homesmart logo" />
      </div>
      <div className="flex gap-8">
        <button className="link">Login</button>
        <button className="button">Sign Up</button>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
