function CustomInput({
  type,
  value,
  setField,
  classNames,
  isRequired,
  placeholder,
}) {
  return (
    <input
      className={`${classNames} text-black`}
      type={type || "text"}
      value={value || ""}
      onChange={(e) => setField(e.target.value)}
      required={isRequired}
      placeholder={placeholder}
    />
  );
}

export default CustomInput;
