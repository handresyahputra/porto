/* =============================================================
   MAIN.JS
   ============================================================
   Logika untuk merender data (dari data.js) ke dalam HTML,
   ditambah semua interaksi (menu mobile, scroll reveal,
   efek tilt ID Card). Biasanya TIDAK PERLU diubah — cukup
   edit js/data.js untuk mengganti konten.
============================================================= */

/* =============================================================
   1. ISI HERO & ID CARD DARI OBJEK PROFILE
============================================================= */
document.getElementById('heroGreeting').textContent = PROFILE.greeting;
document.getElementById('heroName').textContent = PROFILE.name;
document.getElementById('heroRole').textContent = PROFILE.role;
document.getElementById('heroTagline').textContent = PROFILE.tagline;
document.getElementById('heroResumeLink').href = PROFILE.resumeUrl;

document.getElementById('cardInstitution').textContent = PROFILE.idCard.institution;
document.getElementById('cardPhoto').src = PROFILE.idCard.photoUrl;
document.getElementById('cardName').textContent = PROFILE.name;
document.getElementById('cardMajor').textContent = PROFILE.idCard.major;
document.getElementById('cardId').textContent = PROFILE.idCard.idNumber;
document.getElementById('cardValid').textContent = PROFILE.idCard.validThru;

document.getElementById('footerName').textContent = PROFILE.name;
document.getElementById('footerYear').textContent = new Date().getFullYear();

/* =============================================================
   2. GENERATE POLA QR CODE TIRUAN (deterministik, bukan gambar asli)
============================================================= */
const qrPattern = [
  1,1,1,0,1,1,1,
  1,0,1,0,0,0,1,
  1,0,1,1,1,0,1,
  0,0,0,1,0,0,0,
  1,1,0,1,1,0,1,
  1,0,0,0,1,0,1,
  1,1,1,0,1,1,1,
];
const qrEl = document.getElementById('qrCode');
qrPattern.forEach(cell => {
  const dot = document.createElement('div');
  dot.className = cell ? 'bg-cyan/90 rounded-[1px]' : 'bg-transparent';
  qrEl.appendChild(dot);
});

/* =============================================================
   3. RENDER SKILLS (dari array SKILLS di data.js)
============================================================= */
const skillsGrid = document.getElementById('skillsGrid');
SKILLS.forEach(skill => {
  const item = document.createElement('div');
  item.className = 'flex items-center gap-4 border border-border rounded-2xl px-4 py-3 bg-surface/40 hover:border-cyan/40 transition-colors';
  item.innerHTML = `
    <div class="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
      <i data-lucide="${skill.icon}" class="w-5 h-5 text-cyan"></i>
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-sm text-white font-medium truncate">${skill.name}</p>
      <div class="h-1.5 rounded-full bg-white/5 mt-2 overflow-hidden">
        <div class="h-full bg-gradient-to-r from-cyan to-amber rounded-full" style="width:${skill.level}%"></div>
      </div>
    </div>
  `;
  skillsGrid.appendChild(item);
});

/* =============================================================
   4. RENDER PROJECTS (dari array PROJECTS di data.js)
============================================================= */
const projectsGrid = document.getElementById('projectsGrid');
PROJECTS.forEach(project => {
  const card = document.createElement('div');
  card.className = 'reveal group border border-border rounded-2xl overflow-hidden bg-surface/40 hover:border-cyan/40 transition-colors flex flex-col';
  card.innerHTML = `
    <div class="aspect-[3/2] overflow-hidden">
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
    </div>
    <div class="p-5 flex flex-col flex-1">
      <h3 class="font-display font-semibold text-white text-lg mb-2">${project.title}</h3>
      <p class="text-muted text-sm leading-relaxed mb-4 flex-1">${project.desc}</p>
      <div class="flex flex-wrap gap-2 mb-5">
        ${project.tags.map(tag => `<span class="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/20">${tag}</span>`).join('')}
      </div>
      <div class="flex gap-3 text-sm">
        <a href="${project.demoUrl}" class="inline-flex items-center gap-1.5 text-white hover:text-cyan transition-colors">
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i> Demo
        </a>
        <a href="${project.codeUrl}" class="inline-flex items-center gap-1.5 text-muted hover:text-cyan transition-colors">
          <i data-lucide="github" class="w-3.5 h-3.5"></i> Kode
        </a>
      </div>
    </div>
  `;
  projectsGrid.appendChild(card);
});

/* =============================================================
   5. RENDER SOCIALS (dari array SOCIALS di data.js)
============================================================= */
const socialsGrid = document.getElementById('socialsGrid');
SOCIALS.forEach(social => {
  const link = document.createElement('a');
  link.href = social.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'flex items-center gap-4 border border-border rounded-2xl px-5 py-4 bg-surface/40 hover:border-cyan/40 hover:-translate-y-0.5 transition-all text-left';
  link.innerHTML = `
    <div class="w-11 h-11 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
      <i data-lucide="${social.icon}" class="w-5 h-5 text-cyan"></i>
    </div>
    <div>
      <p class="text-sm text-white font-medium">${social.name}</p>
      <p class="text-xs text-muted font-mono">${social.handle}</p>
    </div>
  `;
  socialsGrid.appendChild(link);
});

/* =============================================================
   6. RENDER SEMUA IKON LUCIDE
      (harus dipanggil setelah semua elemen di atas ditambahkan)
============================================================= */
lucide.createIcons();

/* =============================================================
   7. INTERAKSI: MENU MOBILE
============================================================= */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

/* =============================================================
   8. INTERAKSI: SCROLL REVEAL
============================================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* =============================================================
   9. INTERAKSI: EFEK TILT 3D PADA ID CARD
============================================================= */
const idCard = document.getElementById('idCard');
const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

if (idCard && !isCoarsePointer) {
  const glare = idCard.querySelector('.glare');

  idCard.addEventListener('mousemove', (e) => {
    const rect = idCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10; // maksimal 10 derajat
    const rotateX = -((y - centerY) / centerY) * 10;

    idCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    glare.style.setProperty('--gx', `${(x / rect.width) * 100}%`);
    glare.style.setProperty('--gy', `${(y / rect.height) * 100}%`);
  });

  idCard.addEventListener('mouseleave', () => {
    idCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
}
