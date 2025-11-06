import "./ColorForm.css";
import ColorInput from "./ColorInput";

// function Greeting(felixName, johannaName, isJohannaMode) {
//   console.log("Hello" + isJohannaMode ? johannaName : felixName);
// }
// Greeting("Felix", "Johanna", true);

export default function ColorForm({ onAddColor, mode, onUpdateColor, color }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (mode === "edit") {
      onUpdateColor({ id: color.id, ...data });
    } else {
      onAddColor(data);
    }
    // console.log("Does everything work? ", data);
    event.target.reset();
  }
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="color-role">Role:</label>
      <input
        id="color-role"
        type="text"
        defaultValue="define role here"
        name="role"
      ></input>
      <label htmlFor="color-hex">Hex Value:</label>
      <ColorInput
        id="color-hex"
        type="color"
        defaultValue="#802922"
        name="hex"
      />
      <label htmlFor="color-contrast-text">Contrast Text:</label>
      <ColorInput
        id="color-contrast-text"
        type="color"
        defaultValue="#FFFFFF"
        name="contrastText"
      />
      <button className="color-form__button" type="submit">
        {mode === "edit" ? "Update color" : "Add color"}
      </button>
    </form>
  );
}
