import "./Color.css";
import { useState } from "react";
import ColorForm from "./ColorForm";
import ContrastScore from "./ContrastScore";
import CopyToClipboard from "./CopyToClipboard";

export default function Color({ color, onConfirmDelete, onUpdateColor }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <div className="color-card__inner-content">
        <section className="color-card__hex-row">
          <h3 className="color-card-highlight">{color.hex}</h3>
          <CopyToClipboard text={color.hex} />
        </section>
        <h4>{color.role}</h4>
        <p>contrast: {color.contrastText}</p>
        <ContrastScore hex={color.hex} contrastText={color.contrastText} />

        {/* Default mode */}
        {!showDeleteConfirm && !showEditForm && (
          <div className="color-card__default-mode">
            <button onClick={() => setShowDeleteConfirm(true)}>Delete</button>
            <button onClick={() => setShowEditForm(true)}>Edit</button>
          </div>
        )}

        {/* Delete mode */}
        {showDeleteConfirm && (
          <div className="color-card__delete-mode">
            <p className="color-card-highlight">Really delete…?</p>
            <button onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
            <button onClick={() => onConfirmDelete(color.id)}>Delete</button>
          </div>
        )}

        {/* Edit mode */}
        {showEditForm && (
          <div className="color-card__modes-container">
            <ColorForm
              mode="edit"
              onUpdateColor={onUpdateColor}
              color={color}
            />
            <button onClick={() => setShowEditForm(false)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}
