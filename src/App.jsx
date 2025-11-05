import { initialColors } from "./lib/colors";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  function handleAddColor(newColor) {
    const newColorWithId = { id: uid(), ...newColor };
    setColors([newColorWithId, ...colors]);
  }

  function handleConfirmDelete(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  function handleUpdateColor(updatedColor) {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
  }

  return (
    <>
      <h1 className="header__title">Theme Creator</h1>

      <ColorForm mode="add" onAddColor={handleAddColor} />

      {colors.length === 0 ? (
        <p>No colors left... start by adding one!</p>
      ) : (
        <ul className="color-card__list">
          {colors.map((color) => (
            <li className="color-card__list-item" key={color.id}>
              <Color
                color={color}
                onConfirmDelete={handleConfirmDelete}
                onUpdateColor={handleUpdateColor}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
