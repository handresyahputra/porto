/* =============================================================
   KONFIGURASI TEMA TAILWIND
   Ganti warna di sini jika ingin mengubah nuansa keseluruhan
   website (misalnya dari cyan ke warna lain).
============================================================= */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: '#0A0E1A',      // GANTI warna background utama (dark)
        inkalt: '#0E1424',   // background section alternatif (sedikit lebih terang)
        surface: '#131A2E',  // background kartu/panel
        surface2: '#171F38',
        border: 'rgba(231,236,247,0.08)',
        muted: '#8B93A7',    // warna teks sekunder
        cyan: '#5EEAD4',     // GANTI warna aksen utama
        amber: '#F5B942',    // warna aksen kedua (gradasi skill bar, hologram)
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'], // font judul
        body: ['Inter', 'sans-serif'],                // font paragraf
        mono: ['"JetBrains Mono"', 'monospace'],      // font data/ID card
      }
    }
  }
}
