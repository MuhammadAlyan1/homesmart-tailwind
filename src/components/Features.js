import React from 'react';

const Features = () => {
  return (
    <section className="flex flex-wrap justify-center gap-8 bg-black bg-[position:center_right,_center_left] bg-no-repeat py-40 px-4 sm:bg-featuresPattern sm:px-24">
      <article>
        <div className="featureSvg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-14 w-14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <div className="text-slate-50">
          <h3 className="featureTitle">Safe</h3>
          <p className="featureDescription">
            Our products are secure and private out-of-the-box
          </p>
        </div>
      </article>
      <article>
        <div className="featureSvg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-14 w-14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div className="text-slate-50">
          <h3 className="featureTitle">Efficient</h3>
          <p className="featureDescription">
            Feel good about your wallet and the environment
          </p>
        </div>
      </article>
      <article>
        <div className="featureSvg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-14 w-14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
        <div className="text-slate-50">
          <h3 className="featureTitle">Proven</h3>
          <p className="featureDescription">
            Leading the Smart Home world for 10 years
          </p>
        </div>
      </article>
    </section>
  );
};

export default Features;
