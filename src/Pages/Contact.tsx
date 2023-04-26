import { useState } from "react";
import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/contact-banner.jpg";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(event.target.value);
  };
  return (
    <div>
      <HeroSection backgroundImage={Banner}>
        <h1 className=" font-medium text-[60px]">
          CONTACT
          <span className="text-primary-500">US</span>
        </h1>
      </HeroSection>
      <div className="flex flex-col w-full items-center px-24 py-44">
        <div className="flex flex-col items-center mt-6">
          <h1 className="text-secondary-500 font-semibold text-[36px]">
            Get In Touch
          </h1>
          <div className="bg-primary-500 w-[100px] h-[2px] mt-2"></div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
