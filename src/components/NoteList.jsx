import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, emptyMessage }) {
  if (notes.length === 0) {
    return (
      <div className="notes-list-empty">
        <div className="empty-state">
          <span className="empty-icon">🗒️</span>
          <p>{emptyMessage || 'Tidak ada catatan'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
