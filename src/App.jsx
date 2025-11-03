import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import ColorForm from "./Components/Color/ColorForm";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);
  function handleAddColor(newColor) {
    const newColorWithId = { id: uid(), ...newColor };
    console.log("New color: ", newColorWithId);
    setColors([newColorWithId, ...colors]);
  }
  function handleDeleteColor(id) {
    const updatedColors = colors.filter((color) => color.id !== id);
    console.log(`This color with ${id} will be deleted.`);
    setColors(updatedColors);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      <ul className="color-card__list">
        {colors.map((color) => (
          <li className="color-card__list-item">
            <Color
              key={color.id}
              color={color}
              onDelete={() => handleDeleteColor(color.id)}
            />
          </li>
        ))}
      </ul>
      {/* <Color
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}/> */}
    </>
  );
}

export default App;
