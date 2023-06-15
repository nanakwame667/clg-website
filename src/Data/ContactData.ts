import { ContactProps } from "../models/Contact";
import location from "../assets/images/location.svg";
import email from "../assets/images/email.svg";
import phone from "../assets/images/phone.svg";
import clock from "../assets/images/time.svg";

export const ContactData: ContactProps[] = [
  {
    id: 1,
    name: "42 Brook Street, London, W1K 5DB",
    svg: location,
  },
  {
    id: 2,
    name: "charles@clgcap.com",
    svg: email,
  },
  {
    id: 3,
    name: "(+44) (0) 207 129 1410",
    svg: phone,
  },
];
