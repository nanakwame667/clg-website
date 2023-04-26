import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import Button from "./Button";
import InputField from "./InputField";
import TextArea from "./TextArea";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  enquiry: yup.string().required("Enquiry is required"),
});

type FormInputs = {
  name: string;
  email: string;
  enquiry: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const templateParams = {
        ...data,
      };

      await emailjs.send(
        "service_98p5oxf",
        "template_cuj8ych",
        templateParams,
        "Kwame Frimpong"
      );
      alert("Email sent successfully");
    } catch (error) {
      console.log("Email sent error: ", error);
      alert("An error occurred, please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[600px] mt-16"
      noValidate
    >
      <InputField
        id="name"
        label="Name"
        {...register("name")}
        placeholder="Enter your full name"
        required
        error={errors.name?.message}
        className="mb-4 w-full"
      />
      <InputField
        id="email"
        label="Email Address"
        type="email"
        {...register("email")}
        placeholder="Enter your email address"
        required
        error={errors.email?.message}
        className="mb-4 w-full"
      />
      <TextArea
        id="enquiry"
        label="Enquiry"
        {...register("enquiry")}
        placeholder="Make your enquiry"
        error={errors.enquiry?.message}
        className="w-full h-[300px] mt-2 mb-2 pt-4 pl-4 border border-border rounded-none"
      />
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full mt-12"
      >
        Send Form
      </Button>
    </form>
  );
};

export default ContactForm;
