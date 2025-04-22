import React from "react";
import scheduleImg from "../assets/stats.webp";
import { FaLongArrowAltRight } from "react-icons/fa";

const ScheduleSections = () => {
  return (
    <section className=" max-w-7xl px-8 py-16 md:py-24 mx-auto">
      <div className=" flex flex-col md:flex-row justify-between gap-12 md:gap-24 items-center">
        {/* left */}
        <div className=" w-full md:w-1/2">
          <img
            src={scheduleImg}
            alt="schedule Img"
            className=" w-full h-auto"
          />
        </div>

        {/* right */}
        <div className="w-full md:w-1/2">
          <p className=" font-semibold text-orange-500 uppercase">schedule</p>
          <h1 className=" text-3xl font-bold md:text-4xl mt-4 mb-6 text-neutral-900">
            Loreasdfm ipsum dolorasdfsd <br /> sit amet, consectetur
            adipisicing.
          </h1>
          <p className=" mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit hic
            non consectetur voluptatem fuga, temporibus, laudantium distinctio,
            accusamus nihil tempora quam eius a placeat deserunt velit pariatur
            quaerat explicabo?
          </p>
          <a
            href=""
            className=" flex items-center text-blue-600 gap-2 hover:gap-4 font-semibold"
          >
            Explore Schedule feathers{" "}
            <FaLongArrowAltRight className=" h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSections;
