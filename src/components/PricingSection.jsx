import { useState } from "react";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  const staterPrice = Math.round(4000 * (productCount / 50));
  const buisnessPrice = Math.round(7500 * (productCount / 50));
  return (
    <section className="py-20 px-4">
      <div className=" max-w-6xl mx-auto">
        <h1 className=" text-3xl md:text-4xl font-bold text-center mb-16">
          Pricing
        </h1>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* stater plane  */}
          <div className=" p-8 bg-white rounded-lg shadow-lg">
            <h3 className=" text-gray-500 text-xl mb-4">Starter</h3>
            <p className="text-3xl md:text-4xl font-bold mb-6">
              ${staterPrice}/mo
            </p>
          </div>
          <div>
            {/* buisness plane  */}
            <div className=" p-8 bg-white rounded-lg shadow-lg">
              <h3 className=" text-gray-500 text-xl mb-4">Buissness</h3>
              <p className="text-3xl md:text-4xl font-bold mb-6">
                ${buisnessPrice}/mo
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-4">
            Product {productCount}
          </p>
          <div className=" relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <input
                className=" bg-gray-200 appearance-none flex-1 h-2 rounded-xl"
                type="range"
                min={1}
                max={50}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
                value={productCount}
              />
              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </div>

          <div className=" text-center mt-10 space-y-6 ">
            <p className=" font-semibold text-3xl text-gray-600">
              Ready to get start
            </p>
            <button className=" bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer transform-content">
              Get start
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
