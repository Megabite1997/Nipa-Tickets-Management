import React, { FC } from "react";

import ImageContactUs from "../assets/contact-us.jpeg";

interface ContactUsProps {}

const ContactUs: FC<ContactUsProps> = ({}) => {
  return (
    <div className="pt-20 md:pt-40 bg-shiba-yellow h-screen">
      <div className="grid md:grid-flow-col gap-10 bg-white p-10 md:mx-20 lg:mx-40 mt-10 shadow-xl justify-between animate-fade-in">
        <div>
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <h4 className="pt-10 text-lg font-semibold">Shop location</h4>
          <p>Thanon Phutthamonthon Sai 3, Salathammasop, Bangkok, Thailand</p>
          <br />
          <h4 className="text-lg font-semibold">Contact</h4>
          <div className="flex gap-1">
            <p>Email:</p>
            <a
              className="hover:underline hover:text-shiba-yellow"
              href="mailto:fendersdtua@hotmail.com"
            >
              fendersdtua@hotmail.com
            </a>
          </div>

          <p>Phone: 094-444-9494</p>
        </div>

        <img src={ImageContactUs} alt="Contact Us" />
      </div>
    </div>
  );
};

export default ContactUs;
