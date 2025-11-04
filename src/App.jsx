import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import ColorForm from "./Components/Color/ColorForm";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [editColor, setEditColor] = useState(false);

  function handleAddColor(newColor) {
    const newColorWithId = { id: uid(), ...newColor };
    console.log("New color: ", newColorWithId);
    setColors([newColorWithId, ...colors]);
  }
  function handleStartDelete(id) {
    /* 1. If user clicks the delete button:
        - useState variable confirmDelete to match the ID of the color that should be deleted.
        - show a confirmation text "Really delete?" + 2 buttons (cancel, delete) in Color.jsx if state changes from false to true*/

    console.log(`The color with id ${id} will start confirmation process.`);
    setConfirmDelete(id);
  }

  function handleConfirmDelete(id) {
    /* 2. If user confirms deletion:
        - filter method to filter out the color with the id that was confirmed to be deleted
        - update the state with setColors(updatedColors)*/
    const updatedColors = colors.filter((color) => color.id !== id);
    console.log(`The color with ${id} will be deleted.`);
    setColors(updatedColors);
    setConfirmDelete(false);
  }

  /* 3. If user clicks cancel button:
        - hide the confirmation text
        - reset back to false*/
  function handleCancelDelete(id) {
    setConfirmDelete(false);
    console.log(`The color with id ${id} won't be deleted.`);
  }

  function handleEditColor(id) {
    console.log(`The color with id ${id} will be edited.`);
    if (editColor === id) {
      setEditColor(false);
    } else {
      setEditColor(id);
    }
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
      <h1>Theme Creator</h1>
      <ColorForm mode="add" onAddColor={handleAddColor} />
      {colors.length === 0 ? (
        <p>No colors left... start by adding one!</p>
      ) : (
        <ul className="color-card__list">
          {colors.map((color) => (
            <li className="color-card__list-item" key={color.id}>
              <Color
                color={color}
                onDeleteClick={() => handleStartDelete(color.id)}
                showDeleteConfirm={confirmDelete === color.id}
                onConfirmClick={() => handleConfirmDelete(color.id)}
                onCancelClick={() => handleCancelDelete(color.id)}
                onEditClick={() => handleEditColor(color.id)}
                showEditForm={editColor === color.id}
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
