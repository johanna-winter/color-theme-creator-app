import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import ColorForm from "./Components/Color/ColorForm";

function App() {
  const [colors, setColors] = useState(initialColors);
  function handleAddColor(newColor) {
    console.log("New color: ", newColor);
    setColors([newColor, ...colors]);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
