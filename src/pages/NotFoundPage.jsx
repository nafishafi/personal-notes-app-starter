import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NotFoundPage() {
  const location = useLocation();

  return (
    <main>
      <div className="not-found-container">
        <div className="not-found-number">404</div>
        <div className="not-found-icon">🗺️</div>
        <h2>Halaman Tidak Ditemukan</h2>
        <p>
          URL <code className="not-found-url">{location.pathname}</code> tidak diketahui.
        </p>
        <Link to="/" className="btn-back btn-home">
          ← Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
