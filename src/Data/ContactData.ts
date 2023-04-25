import { ContactProps } from "../models/Contact";
import location from "../assets/images/location.svg";
import email from "../assets/images/email.svg";
import phone from "../assets/images/phone.svg";
import clock from "../assets/images/time.svg";

export const ContactData: ContactProps[] = [
  {
    id: 1,
    name: "20 North Audley Street",
    svg: location,
  },
  {
    id: 2,
    name: "Charles@clgcap.com",
    svg: email,
  },
  {
    id: 3,
    name: "+ 91 3453334436",
    svg: phone,
  },
  {
    id: 4,
    name: "08:00AM - 5:00PM",
    svg: clock,
  },
];
