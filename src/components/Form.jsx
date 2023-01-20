import { useState } from "react";
import CustomInput from "./CustomInput";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form>
      <CustomInput value={firstName} setField={setFirstName} />
      <CustomInput value={lastName} setField={setLastName} />
      <CustomInput type="email" value={email} setField={setEmail} />
      <CustomInput type="tel" value={phone} setField={setPhone} />
    </form>
  );
}

export default Form;
