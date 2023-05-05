import { ContactData } from "../Data/ContactData";

export interface ContactDetailsProps {
  className?: string;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      {ContactData.map(({ id, svg, name }) => (
        <div>
          <ul>
            <li
              key={id}
              className={`flex flex-row space-x-4 items-center pt-6 ${className}`}
            >
              <img src={svg} alt="" className={`${className}`} />
              <p>{name}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
