import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

const MAX_TITLE_LENGTH = 50;

function AddNotePage({ onDataChange }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleTitleChange(event) {
    const value = event.target.value;
    if (value.length <= MAX_TITLE_LENGTH) {
      setTitle(value);
    }
  }

  function handleBodyChange(event) {
    setBody(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim()) return;
    addNote({ title: title.trim(), body: body.trim() });
    onDataChange();
    navigate('/');
  }

  function handleCancel() {
    navigate(-1);
  }

  const remaining = MAX_TITLE_LENGTH - title.length;

  return (
    <main>
      <div className="add-note-header">
        <button className="btn-back" onClick={handleCancel}>
          ← Batal
        </button>
        <h2 className="page-title">Catatan Baru</h2>
      </div>

      <form className="add-new-page__input" onSubmit={handleSubmit}>
        <div className="title-input-wrapper">
          <input
            id="note-title"
            type="text"
            className="add-new-page__input__title"
            placeholder="Judul catatan..."
            value={title}
            onChange={handleTitleChange}
            autoFocus
            required
          />
          <span
            className={`title-char-count ${remaining <= 10 ? 'warning' : ''}`}
          >
            {remaining} karakter tersisa
          </span>
        </div>

        <textarea
          id="note-body"
          className="add-new-page__input__body"
          placeholder="Tulis catatan di sini..."
          value={body}
          onChange={handleBodyChange}
        />

        <div className="add-new-page__action">
          <button
            type="button"
            className="action action--cancel"
            onClick={handleCancel}
            title="Batal"
          >
            ✕
          </button>
          <button
            type="submit"
            className="action action--save"
            title="Simpan Catatan"
            disabled={!title.trim()}
          >
            ✓
          </button>
        </div>
      </form>
    </main>
  );
}

export default AddNotePage;
