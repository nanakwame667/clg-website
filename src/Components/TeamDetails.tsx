import React from "react";
import TeamsItem from "./TeamsItem";

const TeamDetails = () => {
  return (
    <div className="lg:px-24">
      <div className="main-section flex flex-col h-full py-20  items-center space-y-12 justify-center w-full text-center">
        <h1 className="text-secondary-500 font-semibold text-[50px]">
          Leadership Team
        </h1>
        <p className="text-black text-2xl  w-2/4  ">
          The executive team possesses specialized expertise, complimentary
          skillsets and a strong working relationship
        </p>
      </div>
      <TeamsItem />
    </div>
  );
};

export default TeamDetails;
