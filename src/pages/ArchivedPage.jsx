import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/local-data';

function ArchivedPage({ notesVersion }) {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const archivedNotes = getArchivedNotes();
  const filteredNotes = keyword.trim()
    ? archivedNotes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
      )
    : archivedNotes;

  return (
    <main>
      <div className="page-header">
        <h2 className="page-title">Catatan Terarsip</h2>
        <p className="page-subtitle">
          {filteredNotes.length} catatan terarsip
          {keyword ? ` ditemukan untuk "${keyword}"` : ''}
        </p>
      </div>

      <SearchBar placeholder="Cari catatan terarsip..." />

      <NoteList
        notes={filteredNotes}
        emptyMessage={keyword ? `Tidak ada arsip dengan judul "${keyword}"` : 'Arsip kosong'}
      />
    </main>
  );
}

export default ArchivedPage;
