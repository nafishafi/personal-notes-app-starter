import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ArchivedPage from './pages/ArchivedPage';
import DetailPage from './pages/DetailPage';
import AddNotePage from './pages/AddNotePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // notesVersion is a counter that forces re-render when data changes
  const [notesVersion, setNotesVersion] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  function handleDataChange() {
    setNotesVersion((v) => v + 1);
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header onToggleTheme={handleToggleTheme} theme={theme} />

        <Routes>
          <Route
            path="/"
            element={<HomePage notesVersion={notesVersion} />}
          />
          <Route
            path="/archived"
            element={<ArchivedPage notesVersion={notesVersion} />}
          />
          <Route
            path="/notes/new"
            element={<AddNotePage onDataChange={handleDataChange} />}
          />
          <Route
            path="/notes/:id"
            element={<DetailPage onDataChange={handleDataChange} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
