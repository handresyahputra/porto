/* =============================================================
   DATA.JS
   ============================================================
   INI FILE YANG PERLU KAMU EDIT. Cukup ganti nilai di dalam
   objek/array di bawah ini — tidak perlu menyentuh file lain.

   Struktur file:
   1. PROFILE  -> data Hero + ID Card
   2. SKILLS   -> daftar keahlian
   3. PROJECTS -> daftar proyek
   4. SOCIALS  -> link sosial media
============================================================= */

// -------------------------------------------------------------
// 1. PROFILE — data Hero Section & ID Card
// -------------------------------------------------------------
const PROFILE = {
  greeting: "// Halo, saya",
  name: "HANDRE SYAHPUTRA",                                // GANTI NAMA DI SINI
  role: "Junior Developer & Junior Data Sains",         // GANTI ROLE / KEAHLIAN DI SINI
  tagline: "Saya menghidupkan data lewat analisis akurat dan membangun antarmuka web serta simulasi yang interaktif mengubah pola data mentah menjadu solusi aplikasi yang aplikatif dunia nyata.", // GANTI TAGLINE DI SINI
  resumeUrl: "#", // GANTI dengan link CV/PDF kamu, contoh: "assets/cv-nama-kamu.pdf"

  // Data untuk ID Card interaktif
  idCard: {
    institution: "Universitas Putra Indonesia \"YPTK\"", // GANTI NAMA KAMPUS / INSTANSI DI SINI
    // GANTI FOTO KAMU DI SINI. Taruh file foto di folder assets/images/
    // lalu isi path-nya di sini, contoh: "assets/images/foto-saya.jpg"
    // CATATAN: hindari spasi di nama file (pakai "-" atau "_" sebagai gantinya)
    photoUrl: "assets/images/handre-profile.jpeg",
    major: "Teknik Informatika",     // GANTI JURUSAN / DIVISI DI SINI
    idNumber: "16/08/2006",          // dipakai untuk field "Tgl Lahir" di ID Card
    validThru: "2026"                // dipakai untuk field "Tahun" di ID Card
  }
};

// -------------------------------------------------------------
// 2. SKILLS — tambah/hapus/edit sesuai kemampuanmu
//    icon: nama ikon dari https://lucide.dev/icons (cari & copy namanya)
//    level: 0–100 (persentase progress bar)
// -------------------------------------------------------------
const SKILLS = [
  { name: "python", level: 60},
  { name: "codeigniter 4",                 level: 50},

  { name: "SQL",            level: 50 },
  { name: "php",                level: 40 },
  // Tambah skill baru dengan menyalin format di atas, contoh:
  // { name: "Python", icon: "terminal", level: 65 },
];

// -------------------------------------------------------------
// 3. PROJECTS — tambah/hapus/edit sesuai proyekmu
//    image: taruh gambar di assets/images/ lalu isi path-nya,
//    atau pakai URL gambar online (Unsplash, dsb.)
// -------------------------------------------------------------
const PROJECTS = [
  {
    title: "Analisis Udara",
    desc: "Analis pengelompokan tingkat polusi udara berdasarkan kadar gas berbahaya menggunakan metode PCA.",
    image: "assets/images/analis.png", // GANTI dengan "assets/images/project-1.jpg" jika pakai gambar sendiri
    tags: ["Python", "PCA","K-Means" ],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Game Unity",
    desc: "Game balapan mobil yang menggunakan AI sebagai lawannya dengan mengunkan unity.",
    image: "assets/images/game.png",
    tags: ["C#", "Unity", ],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Sistem Pendataan Alumni ",
    desc: "Sistem pendataan alumni menggunakan php native dan sudah menggunkan crud.",
    image: "assets/images/crud.png",
    tags: ["php", "mysql", ],
    demoUrl: "#",
    codeUrl: "#"
  },
  // Tambah proyek baru dengan menyalin format objek di atas.
];

// -------------------------------------------------------------
// 4. SOCIALS — ganti link sosial media kamu
//    icon: nama ikon dari https://lucide.dev/icons
// -------------------------------------------------------------
const SOCIALS = [
  { name: "GitHub",    icon: "github",    handle: "handresyahputra",      url: "https://github.com/handresyahputra" },
  { name: "LinkedIn",  icon: "linkedin",  handle: "Handre Syahputra",      url: "https://www.linkedin.com/in/handre-syahputra-8a59b43a3?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Email",     icon: "mail",      handle: "Handre Syahputra", url: "handresyahputra13@gmail.com" },
  { name: "Instagram", icon: "instagram", handle: "handre.syahputra",      url: "https://www.instagram.com/handre.syahputra?igsh=c2xmNHV5bDB6M3B3" },
];
