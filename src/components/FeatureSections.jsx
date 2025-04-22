import React from "react";

const FeatureSections = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];

  return (
    <section className=" max-w-7xl mx-auto  px-4 py-16">
      {/* heading text  */}
      <div>
        <h1 className=" text-4xl font-bold text-center ">
          How can we help your buissenss ?
        </h1>
        <p className=" text-gray-600 text-center mt-3 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit hello.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {features.map((feature, index) => (
          <div key={index + 1} className=" flex flex-col items-center p-6">
            <div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFF0" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
            >
              <div className="text-3xl  ">{feature.icon}</div>
            </div>
            <h1 className=" text-2xl font-medium mb-3">{feature.title}</h1>
            <p className=" text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* btn  */}
      <div className=" text-center mt-12">
        <button className="px-8 py-3 cursor-pointer transition-colors shadow-2xl bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 relative">
          Become a Partner
        </button>

        <div className=" -z-10 w-full h-full bg-blue-600/50 blur-xl top-0 left-0"></div>
      </div>
    </section>
  );
};

export default FeatureSections;
