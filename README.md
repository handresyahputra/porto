# Struktur Proyek Portofolio

```
portofolio/
├── index.html              ← struktur halaman (HTML murni, jarang perlu diubah)
├── css/
│   └── style.css           ← styling custom (efek ID Card, animasi, dll)
├── js/
│   ├── tailwind.config.js  ← warna & font tema (ubah di sini jika ganti warna aksen)
│   ├── data.js              ← ⭐ FILE YANG PALING SERING KAMU EDIT
│   └── main.js              ← logika render & interaksi (jarang perlu diubah)
└── assets/
    └── images/
        └── profile-placeholder.jpg  ← ganti dengan foto profil kamu sendiri
```

## Cara mengganti isi konten

Buka **`js/data.js`**. Semua teks, foto, skill, proyek, dan link sosial media
diatur lewat 4 variabel di file itu:

| Variabel   | Isi                                              |
|------------|---------------------------------------------------|
| `PROFILE`  | Nama, role, tagline, link CV, dan data ID Card    |
| `SKILLS`   | Daftar keahlian (nama, ikon, level %)             |
| `PROJECTS` | Daftar proyek (judul, deskripsi, gambar, tag, link)|
| `SOCIALS`  | Link GitHub, LinkedIn, Email, Instagram           |

Kamu tidak perlu menyentuh `index.html`, `main.js`, atau `style.css` sama sekali
untuk mengganti konten — cukup edit `data.js`.

## Cara menambahkan foto/asset sendiri

1. Taruh file foto/gambar di folder `assets/images/`
   (contoh: `assets/images/foto-saya.jpg`, `assets/images/project-1.jpg`).
2. Buka `js/data.js`, ganti nilai `photoUrl` di `PROFILE.idCard` atau `image`
   di tiap objek `PROJECTS` dengan path relatif ke file tersebut, misalnya:
   ```js
   photoUrl: "assets/images/foto-saya.jpg",
   ```
3. Simpan — foto langsung tampil, tidak perlu ubah HTML.

## Cara mengganti warna tema

Buka `js/tailwind.config.js`, ubah nilai hex pada `colors.cyan` (warna aksen
utama) atau `colors.ink` (warna latar dark). Semua komponen otomatis
mengikuti warna baru karena memakai Tailwind utility class.

## Cara ganti ikon

Ikon memakai [Lucide Icons](https://lucide.dev/icons). Cari nama ikon yang
kamu mau di situs tersebut, lalu tulis namanya di field `icon` pada `SKILLS`
atau `SOCIALS` di `data.js`.

## Menjalankan secara lokal

Karena semua file terhubung lewat path relatif, buka `index.html` langsung
di browser sudah cukup — tidak perlu server khusus. Jika ingin lebih rapi,
bisa juga jalankan server lokal sederhana, misalnya:

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000` di browser.
