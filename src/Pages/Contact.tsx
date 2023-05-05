import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/contact-banner.jpeg";
import { ContactData } from "../Data/ContactData";
import FooterImage from "../Components/FooterImage";

const Contact = () => {
  return (
    <div>
      <HeroSection backgroundImage={Banner}>
        <h1 className="header font-bold text-[60px]">
          CONTACT
          <span className="text-white font-light pl-4">US</span>
        </h1>
      </HeroSection>
      <div className="flex flex-col w-full items-center px-6 md:px-12 lg:px-60 py-44 space-y-20">
        <div
          className="flex flex-col items-center mt-6 "
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-secondary-500 font-semibold text-[36px]">
              Get In Touch
            </h1>
            <div className="bg-primary-500 w-[100px] h-[2px] mt-2"></div>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          {ContactData.map(({ id, svg, name }) => (
            <div>
              <ul>
                <li
                  key={id}
                  className={`flex flex-col space-x-4 items-center pt-6 text-[30px] mb-10 space-y-4 `}
                >
                  <img src={svg} alt="" className={`w-12`} />
                  <p>{name}</p>
                </li>
              </ul>
            </div>
          ))}
        </div>
        {/* <ContactForm /> */}
      </div>
      <FooterImage backgroundImage={Banner} />
    </div>
  );
};

export default Contact;
