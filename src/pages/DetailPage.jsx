import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { showFormattedDate } from '../utils/index';
import ConfirmDialog from '../components/ConfirmDialog';

function DetailPage({ onDataChange }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  if (!note) {
    return (
      <main>
        <div className="not-found-container">
          <div className="not-found-icon">🔍</div>
          <h2>Catatan Tidak Ditemukan</h2>
          <p>Catatan dengan ID <strong>{id}</strong> tidak ditemukan atau telah dihapus.</p>
          <button className="btn-back" onClick={() => navigate('/')}>
            ← Kembali ke Daftar Catatan
          </button>
        </div>
      </main>
    );
  }

  function handleDeleteConfirmed() {
    deleteNote(id);
    onDataChange();
    navigate('/');
  }

  function handleArchiveToggle() {
    if (note.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    onDataChange();
    navigate(note.archived ? '/' : '/archived');
  }

  return (
    <main>
      <button className="btn-back" onClick={() => navigate(-1)}>
        ← Kembali
      </button>

      <div className="detail-page">
        <div className="detail-page__meta">
          {note.archived && (
            <span className="detail-badge archived">📦 Terarsip</span>
          )}
        </div>

        <h1 className="detail-page__title">{note.title}</h1>
        <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>

        <div className="detail-page__divider" />

        <p className="detail-page__body">{note.body}</p>
      </div>

      <div className="detail-page__action">
        <button
          className="action action--archive"
          onClick={handleArchiveToggle}
          title={note.archived ? 'Pindah ke Catatan Aktif' : 'Arsipkan Catatan'}
        >
          {note.archived ? '📤' : '📦'}
        </button>

        <button
          className="action action--delete"
          onClick={() => setShowDeleteConfirm(true)}
          title="Hapus Catatan"
        >
          🗑️
        </button>
      </div>

      <ConfirmDialog
        isOpen={showDeleteConfirm}
        title="Hapus Catatan?"
        message={`Catatan "${note.title}" akan dihapus secara permanen dan tidak dapat dikembalikan.`}
        confirmLabel="Hapus"
        cancelLabel="Batal"
        variant="danger"
        onConfirm={handleDeleteConfirmed}
        onCancel={() => setShowDeleteConfirm(false)}
      />
    </main>
  );
}

export default DetailPage;
