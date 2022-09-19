import React from 'react';
import { FiDownload } from 'react-icons/fi';
import lampImage from '../../assets/images/lamp.png';
import appMockup from '../../assets/images/app.svg';

const Lamp = () => {
  return (
    <section className="bg-black pb-12 lg:basis-1/2 lg:pb-0">
      <div>
        <img src={lampImage} alt="lamp" className="mx-auto" />
      </div>
      <div className="mx-auto mt-4 flex max-w-[190px] cursor-pointer items-center gap-2 rounded-md bg-yellow py-1 px-4 pb-2 text-black">
        <div className="font-bold">
          <FiDownload />
        </div>
        <p>Download the App</p>
      </div>
      <div className="relative mx-auto mt-8 hidden h-[320px] w-[320px] rounded-full border-8 border-yellow lg:block">
        <img
          src={appMockup}
          alt="app mockup"
          className="absolute left-6 -top-4 w-[260px]"
        />
      </div>
    </section>
  );
};

export default Lamp;
