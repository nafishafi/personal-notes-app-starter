import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/local-data';

function HomePage({ notesVersion }) {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const activeNotes = getActiveNotes();
  const filteredNotes = keyword.trim()
    ? activeNotes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
      )
    : activeNotes;

  return (
    <main>
      <div className="page-header">
        <h2 className="page-title">Catatan Aktif</h2>
        <p className="page-subtitle">
          {filteredNotes.length} catatan{keyword ? ` ditemukan untuk "${keyword}"` : ''}
        </p>
      </div>

      <SearchBar placeholder="Cari catatan berdasarkan judul..." />

      <NoteList
        notes={filteredNotes}
        emptyMessage={
          keyword
            ? `Tidak ada catatan dengan judul "${keyword}"`
            : 'Tidak ada catatan. Mulai buat catatan baru!'
        }
      />
    </main>
  );
}

export default HomePage;
