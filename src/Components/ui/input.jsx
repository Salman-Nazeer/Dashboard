export default function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      className="p-2 rounded"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
