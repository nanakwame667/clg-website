import React from "react";
import { TeamsData } from "../Data/TeamsData";
import check from "../assets/images/check.svg";

const TeamsItem = () => {
  return (
    <div className="mt-20">
      {TeamsData.map(({ id, title, name, image, responsibility, career }) => (
        <div
          key={id}
          className="border-border border px-12 py-12 mb-20 rounded-xl"
        >
          <div className="flex flex-row w-full items-start space-x-20">
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <div className="flex flex-col items-start space-y-4 mt-10">
                <h1 className="font-semibold text-[35px]">{name}</h1>
                <h2 className="font-normal text-xl text-black">{title}</h2>
              </div>
              <div>
                <h1 className="font-semibold text-[26px] text-secondary-500 mt-16">
                  Responsibilities
                </h1>
                <div className="bg-primary-500 w-[100px] h-[2px] mt-2"></div>
              </div>
              {responsibility.map(({ id, title }) => (
                <div
                  key={id}
                  className="flex flex-row space-y-6 items-center space-x-3 mt-6"
                >
                  <img src={check} alt="" />
                  <p className="font-normal text-xl text-black">{title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h1 className="font-semibold text-[26px] text-secondary-500 mt-16">
                Career Highlights
              </h1>
              <div className="bg-primary-500 w-[100px] h-[2px] mt-2"></div>
            </div>
            {career.map(({ id, title }) => (
              <div
                key={id}
                className="flex flex-row space-y-6 items-center space-x-3 mt-6"
              >
                <img src={check} alt="" />
                <p className="font-normal text-xl text-black">{title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamsItem;
