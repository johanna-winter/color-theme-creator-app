import "./Color.css";
import ColorForm from "./ColorForm";
import ContrastScore from "./ContrastScore";
import CopyToClipboard from "./CopyToClipboard";

export default function Color({
  color,
  onDeleteClick,
  onConfirmClick,
  onCancelClick,
  showDeleteConfirm,
  onEditClick,
  showEditForm,
  onUpdateColor,
}) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <CopyToClipboard text={color.hex} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <ContrastScore hex={color.hex} contrastText={color.contrastText} />
      {/* 
      1. When both delete and edit states are false, show both buttons
      2. When delete mode is on (true), show only cancel/delete buttons
      3. When edit mode is on (true), show only the edit form and hide the delete button
       */}
      {/* Default mode */}
      {!showDeleteConfirm && !showEditForm && (
        <>
          <button type="submit" onClick={onDeleteClick}>
            Delete
          </button>
          <button type="submit" onClick={onEditClick}>
            Edit
          </button>
        </>
      )}
      {/* Delete mode */}
      {showDeleteConfirm && (
        <>
          <p className="color-card-highlight">Really delete...?</p>
          <button type="submit" onClick={onCancelClick}>
            Cancel
          </button>
          <button type="submit" onClick={onConfirmClick}>
            Delete
          </button>
        </>
      )}
      {/* Edit mode */}
      {showEditForm && (
        <>
          <ColorForm mode="edit" onUpdateColor={onUpdateColor} color={color} />
          <button onClick={onEditClick}>Cancel</button>
        </>
      )}
    </div>
  );
}
