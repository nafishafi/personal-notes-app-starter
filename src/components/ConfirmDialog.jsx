import React from 'react';

function ConfirmDialog({ isOpen, title, message, onConfirm, onCancel, confirmLabel = 'Hapus', cancelLabel = 'Batal', variant = 'danger' }) {
  if (!isOpen) return null;

  return (
    <div className="confirm-overlay" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
      <div className="confirm-dialog">
        <div className={`confirm-icon confirm-icon--${variant}`}>
          {variant === 'danger' ? '🗑️' : '⚠️'}
        </div>

        <h3 id="confirm-title" className="confirm-title">{title}</h3>
        {message && <p className="confirm-message">{message}</p>}

        <div className="confirm-actions">
          <button
            id="confirm-cancel-btn"
            className="confirm-btn confirm-btn--cancel"
            onClick={onCancel}
            autoFocus
          >
            {cancelLabel}
          </button>
          <button
            id="confirm-confirm-btn"
            className={`confirm-btn confirm-btn--${variant}`}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
