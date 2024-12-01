import React from "react";

import ImageFounder from "../assets/nipa/founder-company.webp";

const AboutUsPage: React.FC = () => {
  return (
    <div className="pt-20 md:pt-40 bg-pink-500 h-screen">
      <div className="grid md:grid-flow-col gap-10 bg-white p-10 md:mx-40 mt-10 shadow-xl animate-fade-in">
        <div>
          <h1 className="text-3xl font-semibold">About Us</h1>
          <p className="pt-5 text-base">
            NIPA Cloud Company Limited was founded in 1996. Inicially, we
            provided the domain service known as “Thai Keywords” or
            “ชื่อไทยไม่มีดอท” before launching the digital market agency in
            2005. We were relocated to the CAT Tower to operate our first data
            center in 2009. Since then, "NIPA Cloud" has been introduced as a
            public cloud service from 2017 to the present.
          </p>
          <br />
          <p>
            All NIPA Cloud products and services are developed in-house by our
            R&D team with the intention of researching and developing the cloud
            from scratch using the open-source software Open Stack.
          </p>
          <br />
          <p>
            NIPA Cloud presently provides public cloud, private cloud, and large
            cloud storage with an SLA guarantee of up to 99.99% and a 24/7
            support team. We offer various cloud solutions to serve all business
            needs. There are currently 4 availability zones located in Thailand
            to support High Availability (HA) and disaster recovery, with a plan
            to expand to other regions of the country. To better prepare all
            businesses for forthcoming technologies, we intend to be the center
            of cloud innovation in Thailand.
          </p>
        </div>

        <img
          className="max-w-1/2 md:max-w-full"
          src={ImageFounder}
          alt="founder Nipa"
        />
      </div>
    </div>
  );
};

export default AboutUsPage;
