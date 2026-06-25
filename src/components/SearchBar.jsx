import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchBar({ placeholder }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  function handleChange(event) {
    const value = event.target.value;
    if (value.trim() === '') {
      setSearchParams({});
    } else {
      setSearchParams({ keyword: value });
    }
  }

  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        id="search-notes"
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder={placeholder || 'Cari catatan berdasarkan judul...'}
        autoComplete="off"
      />
    </div>
  );
}

export default SearchBar;
