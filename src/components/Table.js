import React from 'react';
import tableImage from '../assets/images/table.png';

const Table = () => {
  return (
    <section className="overflow-hidden">
      <section className="relative min-h-[80vh] bg-black p-4 lg:flex lg:items-center xl:h-[40vh]">
        <div className="relative z-10 mx-auto w-fit lg:bottom-[-150px] lg:order-2">
          <img src={tableImage} alt="table" />
        </div>
        <div className="relative mx-auto w-fit  max-w-[450px] text-slate-50 lg:bottom-[-150px] lg:order-1">
          <h2 className="my-4 text-3xl font-bold">Relax, you're home!</h2>
          <p className="my-4">
            All our supported hardware includes traditional inputs so you can
            integrate our products into your house in a way that's best for
            everyone.
          </p>
          <button className="button my-4 bg-yellow text-black">Sign Up</button>
        </div>
        <div className="absolute bottom-[-150px] right-[-50px] hidden h-[300px] w-[300px] rotate-45 rounded-full border-8 border-yellow border-r-transparent border-b-transparent bg-transparent md:block"></div>
      </section>
      <section className="h-[20vh] bg-darkGreen"></section>
    </section>
  );
};

export default Table;

//
