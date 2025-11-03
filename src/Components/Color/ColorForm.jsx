import "./ColorForm.css";

export default function ColorForm({ onAddColor }) {
  function handleAddColor(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddColor(data);
    // console.log("Does everything work? ", data);
    event.target.reset();
  }
  return (
    <form className="color-form" onSubmit={handleAddColor}>
      <label htmlFor="color-role">Role:</label>
      <input
        id="color-role"
        type="text"
        defaultValue="primary main"
        name="role"
      ></input>
      <label htmlFor="color-hex">Hex Value:</label>
      <input
        id="color-hex"
        type="color"
        defaultValue="#802922"
        name="hex"
      ></input>
      <label htmlFor="color-contrast-text">Contrast Text:</label>
      <input
        id="color-contrast-text"
        type="color"
        defaultValue="#FFFFFF"
        name="contrastText"
      ></input>
      <button className="color-form__button" type="submit">
        Add color
      </button>
    </form>
  );
}
