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
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
