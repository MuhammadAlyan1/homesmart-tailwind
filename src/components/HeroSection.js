import React from 'react';
import Navbar from './navbar/Index';
import couch from '../assets/images/couch.png';
import appMockup from '../assets/images/app.svg';
import { FiDownload } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative">
      <section className="relative h-[80vh] bg-gradient-to-b from-yellow to-orange">
        <Navbar />
        <div className="absolute -bottom-10 sm:-bottom-28 xl:left-[50%] xl:translate-x-[-50%] ">
          <img className="block xl:min-w-[1300px]" src={couch} alt="couch" />
        </div>
        <div className="absolute -bottom-24 left-[50%] translate-x-[-50%]">
          <img
            className="block min-w-[300px] md:w-full"
            src={appMockup}
            alt="app mockup"
          />
        </div>
      </section>
      <section className="flex h-[20vh] items-end justify-center bg-black">
        <div className="mb-2 flex max-w-[190px] cursor-pointer items-center gap-2 rounded-md bg-yellow py-1 px-4 text-black">
          <div className="font-bold">
            <FiDownload />
          </div>
          <p>Download the App</p>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
