import React from "react";

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {/* heading text  */}
          <div className="">
            <p className="text-sm lg:text-lg text-purple-500 font-medium mb-2 ">
              Achive More
            </p>
            <h2 className=" text-3xl md:w-4/5 md:text-4xl font-bold texy-gray-900">
              Lorem, ipsum dolor sit amet consectetur.
            </h2>
          </div>
          {/* bullet poient  */}
          <div className=" grid col-span-2 grid-cols-1 md:grid-cols-2  justify-between gap-8">
            {features.map((feature, index) => (
              <div key={index + 1} className=" flex items-center space-x-4">
                <div className=" w-12 h-12 flex justify-start items-start rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h1 className=" text-gray-900 font-bold text-lg mb-2">
                    {feature.title}
                  </h1>
                  <p className=" text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
