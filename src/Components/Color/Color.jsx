import "./Color.css";
import ColorForm from "./ColorForm";

export default function Color({
  color,
  onDeleteClick,
  onConfirmClick,
  onCancelClick,
  showDeleteConfirm,
  onEditClick,
  showEditForm,
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
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {!showDeleteConfirm ? (
        <>
          <button type="submit" onClick={onDeleteClick}>
            Delete
          </button>
        </>
      ) : (
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
      {!showEditForm ? (
        <button type="submit" onClick={onEditClick}>
          Edit
        </button>
      ) : (
        <ColorForm />
      )}
    </div>
  );
}
