import React from "react";

import ImagePetShop from "../assets/pet_shop_600.jpeg";

const AboutUsPage: React.FC = () => {
  return (
    <div className="pt-20 md:pt-40 bg-shiba-yellow h-screen">
      <div className="grid md:grid-flow-col gap-10 bg-white p-10 md:mx-40 mt-10 shadow-xl animate-fade-in">
        <div>
          <h1 className="text-3xl font-semibold">About Us</h1>
          <p className="pt-5 text-base">
            Our first shop was opened in April 1970 at Thanon Phutthamonthon Sai
            3, Salathammasop, Bangkok, Thailand. At first, we sold food, treats,
            and toys for dogs and cats. My father, founder, brought the food,
            treats and toys from London, England. Because in that time, My
            country did not have the good things that produced in own country.
          </p>
          <br />
          <p>
            However, In 2019, My father wanted to close the shop because he had
            another business to take care which use muck time. So, I took over
            one of the family businesses, pet shop, to keep the shop to be
            modern and updated for the present world that have internet,
            shopping online. I have decided to sell things in the online. That's
            how "Tada & Shiba" website has began.
          </p>
        </div>

        <img
          className="max-w-1/2 md:max-w-full"
          src={ImagePetShop}
          alt="pet shop"
        />
      </div>
    </div>
  );
};

export default AboutUsPage;
