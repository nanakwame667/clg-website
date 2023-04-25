import { ContactData } from "../Data/ContactData";

const ContactDetails = () => {
  return (
    <div>
      {ContactData.map(({ id, svg, name }) => (
        <div>
          <ul>
            <li key={id} className="flex flex-row space-x-4 items-center pt-6">
              <img src={svg} alt="" />
              <p>{name}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
