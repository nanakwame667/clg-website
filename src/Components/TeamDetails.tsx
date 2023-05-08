import React, { memo } from "react";
import TeamsItem from "./TeamsItem";

const TeamDetails = () => {
  return (
    <div className="lg:px-24">
      <div className="main-section flex flex-col h-full py-20  items-center space-y-12 justify-center w-full text-center">
        <h1
          className="text-secondary-500 font-semibold text-[50px]"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Management Team
        </h1>
      </div>
      <TeamsItem />
    </div>
  );
};

export default memo(TeamDetails);
