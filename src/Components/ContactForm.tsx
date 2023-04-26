import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import TextArea from "./TextArea";

interface ContactFormProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ value, onChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const OnChange = (e: any) => {
    setName(e.target.value);
  };
  return (
    <form action="submit" className="w-[600px] mt-16">
      <InputField
        id="name"
        label="Name"
        value={name}
        onChange={OnChange}
        placeholder="Enter your full name"
        required
        className="mb-4 w-full"
      />
      <InputField
        id="email"
        label="Email Address"
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Enter your email address"
        required
        className="mb-4 w-full"
      />
      <TextArea
        id="example-textarea"
        label="Enquiry"
        placeholder="Make your enquiry"
        value={value}
        onChange={onChange}
        className="w-full h-[300px] mt-2 mb-16 pt-4 pl-4 border border-border rounded-none"
      />
      <Button
        onClick={() => alert("Please enter your email address")}
        variant="primary"
        size="lg"
        className="w-full"
      >
        Send Form
      </Button>
    </form>
  );
};

export default ContactForm;
