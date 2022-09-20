import React, { useState } from 'react';
import ClosedNavbar from './ClosedNavbar';
import OpenedNavbar from './OpenedNavbar';

const MobileNavbar = () => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  return (
    <div>
      <ClosedNavbar
        isNavbarOpened={isNavbarOpened}
        setIsNavbarOpened={setIsNavbarOpened}
      />
      {isNavbarOpened && <OpenedNavbar setIsNavbarOpened={setIsNavbarOpened} />}
    </div>
  );
};

export default MobileNavbar;
