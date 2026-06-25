import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';

// Predefined vibrant accent colors for note cards
const ACCENT_COLORS = [
  '#BB86FC',
  '#03DAC6',
  '#F39C12',
  '#E74C3C',
  '#3498DB',
  '#2ECC71',
  '#9B59B6',
  '#E67E22',
];

function getAccentColor(id) {
  // Pick a consistent color based on note id
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return ACCENT_COLORS[Math.abs(hash) % ACCENT_COLORS.length];
}

function NoteItem({ note }) {
  const accent = getAccentColor(note.id);

  return (
    <Link to={`/notes/${note.id}`} className="note-item-link">
      <article className="note-item" style={{ borderTopColor: accent }}>
        <div className="note-item__header">
          <h3 className="note-item__title">{note.title}</h3>
          {note.archived && <span className="note-item__badge">Arsip</span>}
        </div>
        <p className="note-item__createdAt">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </article>
    </Link>
  );
}

export default NoteItem;
