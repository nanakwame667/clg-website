import React from "react";
import { TeamsData } from "../Data/TeamsData";
import check from "../assets/images/check.svg";

const TeamsItem = () => {
  return (
    <div className="items-center justify-center px-10 lg:px-0 mt-20 lg:flex-col flex flex-col space-x-10">
      {TeamsData.map(({ id, title, name, image, portfolio }) => (
        <div
          key={id}
          className="border-border border px-10 py-16 mb-20 rounded-xl lg:w-3/4  items-center "
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-center justify-center lg:flex-row w-full lg:items-center lg:space-x-12 3xl:space-x-0 ">
            <div className="lg:w-[30%]">
              <img
                src={image}
                alt=""
                className="w-[90%] lg:w-[400px] lg:h-[400px] "
              />
            </div>
            <div className="lg:w-2/4 space-y-6">
              <div className="flex flex-col items-start space-y-0 mt-10">
                <h1 className="font-semibold text-[35px]">{name}</h1>
                <h2 className="text-xl text-black font-semibold">{title}</h2>
              </div>
              <div>
                <p className="2xl:text-[20px]">{portfolio}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamsItem;
