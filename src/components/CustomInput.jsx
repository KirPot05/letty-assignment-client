function CustomInput({ type, value, setField }) {
  return <input type={type || "text"} value={value} onChange={setField} />;
}

export default CustomInput;
