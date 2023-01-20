import { useState } from "react";
import { createProfile } from "../services";
import CustomInput from "./CustomInput";

function Form({ setUserProfile, setShowProfile }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const profile = await createProfile({
        firstName,
        lastName,
        email,
        phone,
      });

      if (profile.success) {
        setUserProfile((state) => [profile.response, ...state]);
        setShowProfile(true);
      } else {
        throw new Error(profile.message);
      }
    } catch (err) {
      alert(err?.message);
    }
  };

  return (
    <form
      className="d-flex flex-column flex-grow-1 align-items-center"
      onSubmit={formSubmitHandler}
      style={{ minHeight: "400px" }}
    >
      <h2 className="mb-4">Enter the details here</h2>

      <CustomInput
        value={firstName}
        setField={setFirstName}
        isRequired={true}
        classNames="my-1 bg-white w-100"
        placeholder="First Name"
      />

      <CustomInput
        value={lastName}
        setField={setLastName}
        isRequired={true}
        classNames="my-1 bg-white w-100"
        placeholder="Last Name"
      />

      <CustomInput
        type="email"
        value={email}
        setField={setEmail}
        isRequired={true}
        classNames="my-1 bg-white w-100"
        placeholder="Email"
      />

      <CustomInput
        type="tel"
        value={phone}
        setField={setPhone}
        isRequired={true}
        classNames="my-1 bg-white w-100"
        placeholder="Phone"
      />

      <button type="submit" className="btn btn-primary mt-2">
        {" "}
        Create{" "}
      </button>
    </form>
  );
}

export default Form;
