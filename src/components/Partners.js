import React from 'react';
import partner1Image from '../assets/images/partner1.svg';
import partner2Image from '../assets/images/partner2.svg';
import partner3Image from '../assets/images/partner3.svg';
import partner4Image from '../assets/images/partner4.svg';
import partner5Image from '../assets/images/partner5.svg';
import partner6Image from '../assets/images/partner6.svg';
import partner7Image from '../assets/images/partner7.svg';

const Partners = () => {
  return (
    <section className=" bg-black py-20 px-8">
      <section className="mx-auto max-w-[500px]">
        <h2 className="py-4 text-center text-4xl font-bold text-yellow">
          Our Partners
        </h2>
        <p className="pb-8 text-center text-lg text-slate-200">
          We've partnered with hundreds of smart home brands to help you create
          a smart home that fits your needs and doesn't lock you in.
        </p>
      </section>
      <section className="mx-auto flex max-w-[600px] flex-wrap justify-center gap-8">
        <div className="partnerImage">
          <img src={partner1Image} alt="partnet" />
        </div>
        <div className="partnerImage">
          <img src={partner2Image} alt="partnet" />
        </div>
        <div className="partnerImage">
          <img src={partner3Image} alt="partnet" />
        </div>
        <div className="partnerImage">
          <img src={partner4Image} alt="partnet" />
        </div>
        <div className="partnerImage">
          <img src={partner5Image} alt="partnet" />
        </div>
        <div className="partnerImage">
          <img src={partner6Image} alt="partnet" />
        </div>
        <div className="partnerImage">
          <img src={partner7Image} alt="partnet" />
        </div>
      </section>
    </section>
  );
};

export default Partners;
