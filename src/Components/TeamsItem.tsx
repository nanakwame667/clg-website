import React from "react";
import { TeamsData } from "../Data/TeamsData";
import check from "../assets/images/check.svg";

const TeamsItem = () => {
  return (
    <div className="mt-20">
      {TeamsData.map(({ id, title, name, image, responsibility, career }) => (
        <div key={id} className="border-border border-2 px-12 py-12 mb-20">
          <div className="flex flex-row ">
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <div>
                <h1>{name}</h1>
                <h2>{title}</h2>
              </div>
              <div>
                <h1>Responsibilities</h1>
                <div></div>
              </div>
              {responsibility.map(({ id, title }) => (
                <div key={id}>
                  <img src={check} alt="" />
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h1>Career Highlights</h1>
              <div></div>
            </div>
            {career.map(({ id, title }) => (
              <div key={id}>
                <img src={check} alt="" />
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamsItem;
