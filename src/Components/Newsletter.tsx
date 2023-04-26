import React, { useState } from "react";
import arrow from "../assets/images/arrow-right.svg";
import Button from "./Button";
import InputField from "./InputField";

const Newsletter = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col space-y-6 pt-14 ">
      <h1>
        Subscribe to our newsletter and get <br /> all latest updates.
      </h1>
      <form className="flex flex-row items-center" action="submit">
        <InputField
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Email"
          required
          className="w-full"
        />
        <Button variant="primary" size="lg" onClick={() => "Hello"}>
          <img src={arrow} alt="" width={20} />
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
