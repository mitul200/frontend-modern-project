import React from "react";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import sitepoint from "../assets/sitepoint.png";
import meundies from "../assets/meundies.png";

const CompanyLogo = () => {
  const logos = [slack, woocommerce, sitepoint, meundies, amazon];
  return (
    <div className=" overflow-hidden py-20 w-full container mx-auto  flex sm:flex-row flex-col items-center sm:items-start">
      <h1 className=" w-[300px] shrink-0 px-8 text-left text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 text-xl font-semibold">
        proud patner at <br /> Hubspot & Segment
      </h1>

      <div className=" flex whitespace-nowrap animate-marquee my-auto">
        {logos.map((logo, index) => (
          <img
            key={index + 1}
            src={logo}
            alt=""
            className=" mx-12 h-8 w-36 object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
        {/* logos  */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt=""
            className=" mx-12 h-8 w-36 object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
