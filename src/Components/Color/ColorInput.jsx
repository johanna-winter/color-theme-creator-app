import { useState } from "react";

export default function ColorInput({ id, name, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="color-input__grouped">
      <input
        id={id}
        value={value}
        name={name}
        type="text"
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <input
        type="color"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
    </div>
  );
}
