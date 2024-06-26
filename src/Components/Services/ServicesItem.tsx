import { Link } from "react-router-dom";
import { ServicesData } from "../../Data/ServicesData";
import TruncatedText from "../TruncatedText";

const ServicesItem = () => {
  return (
    <div className="flex flex-row items-center justify-center flex-wrap gap-20 w-full h-full px-24 lg:gap-20  xl:gap-20  2xl:gap-48 2xl:py-24">
      {ServicesData.map(({ id, title, text, svg }) => (
        <Link to={`/services`}>
          <div
            key={id}
            className="card flex flex-col items-start justify-center px-6 py-12 2xl:px-12 2xl:py-24 text-left shadow-sm hover:border-t-4 hover:border-primary-500 hover:shadow-md cursor-pointer animate-scaleIn"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="flex items-center justify-center bg-primary-50 px-4 py-4 rounded-full ">
              <img src={svg} alt="" className="w-6" />
            </div>
            <div className="space-y-4 mt-6 ">
              <h1 className="text-secondary-500 font-semibold xl:text-[20px] 2xl:text-[30px]">
                {title}
              </h1>
              <TruncatedText
                text={text}
                maxLength={175}
                className="flex flex-col flex-wrap w-[250px] text-black text-[14px] 2xl:text-[20px] 2xl:w-[400px]"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicesItem;
