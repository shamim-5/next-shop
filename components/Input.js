function Input({ type, value, required, onChange }) {
  return (
    <input
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="border rounded px-3 py-1 w-80"
    />
  );
}

export default Input;
