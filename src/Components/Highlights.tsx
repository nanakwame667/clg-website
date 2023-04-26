import { AboutData } from "../Data/AboutData";
import check from "../assets/images/check.svg";

const Highlights = () => {
  return (
    <div className="flex flex-col items-center text-center w-full my-10 px-24 ">
      {AboutData.map(({ id, title }) => (
        <div key={id} className="flex flex-row my-8 space-x-4 items-center">
          <img src={check} alt="" />
          <h1 className="text-black font-light text-[24px] w-[92%] ">
            {title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
