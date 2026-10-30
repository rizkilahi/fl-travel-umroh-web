import { TRAVEL_PROFILE, PACKAGES, SCHEDULES, TESTIMONIALS, CINEMATIC_VIDEOS, GALLERY_PHOTOS } from './data.js';

// Utility: Format Rupiah
export function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
}

// State
let currentCategory = 'all';
let currentGalleryCat = 'all';
let activePackage = null;

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initHeaderAndProfile();
  renderPackages();
  renderSchedules();
  renderTestimonials();
  renderVideos();
  renderGallery();
  setupEventListeners();
});

function initHeaderAndProfile() {
  // Populate Travel Profile info
  document.querySelectorAll('.travel-name').forEach(el => el.textContent = TRAVEL_PROFILE.name);
  document.querySelectorAll('.travel-tagline').forEach(el => el.textContent = TRAVEL_PROFILE.tagline);
  document.querySelectorAll('.travel-license').forEach(el => el.textContent = TRAVEL_PROFILE.license);
  document.querySelectorAll('.travel-phone').forEach(el => el.textContent = TRAVEL_PROFILE.phone);
  document.querySelectorAll('.travel-email').forEach(el => el.textContent = TRAVEL_PROFILE.email);
  document.querySelectorAll('.travel-address').forEach(el => el.textContent = TRAVEL_PROFILE.address);

  // Render stats
  const statsContainer = document.getElementById('stats-container');
  if (statsContainer) {
    statsContainer.innerHTML = TRAVEL_PROFILE.stats.map(s => `
      <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
        <div class="text-3xl md:text-4xl font-extrabold text-amber-300 font-arabic mb-1">${s.value}</div>
        <div class="text-sm text-emerald-100 font-medium">${s.label}</div>
      </div>
    `).join('');
  }
}

function renderPackages() {
  const container = document.getElementById('packages-container');
  if (!container) return;

  const filtered = currentCategory === 'all' 
    ? PACKAGES 
    : PACKAGES.filter(p => p.category === currentCategory);

  container.innerHTML = filtered.map(pkg => `
    <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover-card border border-stone-100 flex flex-col">
      <div class="relative h-60 overflow-hidden">
        <img src="${pkg.image}" alt="${pkg.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <div class="absolute top-4 left-4 bg-emerald-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-400/30 flex items-center gap-1.5">
          <i class="fas fa-star text-xs"></i> ${pkg.badge}
        </div>
        <div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
          <i class="far fa-clock"></i> ${pkg.duration}
        </div>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-stone-900 mb-2 line-clamp-2">${pkg.name}</h3>
          <div class="space-y-2 mb-4 text-xs text-stone-600">
            <div class="flex items-center gap-2">
              <i class="fas fa-hotel text-emerald-600 w-4"></i>
              <span class="line-clamp-1"><strong>Makkah:</strong> ${pkg.hotelMakkah}</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fas fa-mosque text-emerald-600 w-4"></i>
              <span class="line-clamp-1"><strong>Madinah:</strong> ${pkg.hotelMadinah}</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fas fa-plane text-emerald-600 w-4"></i>
              <span><strong>Penerbangan:</strong> ${pkg.airline}</span>
            </div>
          </div>
          <div class="border-t border-dashed border-stone-200 pt-3 mb-4">
            <div class="text-xs text-stone-500 mb-0.5">Harga Mulai Dari (Kamar Quad)</div>
            <div class="text-2xl font-black text-emerald-800 font-arabic">
              ${formatRupiah(pkg.priceQuad)}<span class="text-xs text-stone-500 font-sans font-normal"> /pax</span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 pt-2">
          <button class="btn-detail px-3 py-2.5 rounded-xl border border-emerald-800 text-emerald-800 font-semibold text-sm hover:bg-emerald-50 transition" data-id="${pkg.id}">
            <i class="fas fa-info-circle mr-1"></i> Detail
          </button>
          <button class="btn-order px-3 py-2.5 rounded-xl bg-emerald-800 text-white font-semibold text-sm hover:bg-emerald-900 transition shadow-sm" data-id="${pkg.id}">
            <i class="fas fa-ticket-alt mr-1"></i> Pesan Paket
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Bind package buttons
  container.querySelectorAll('.btn-detail').forEach(btn => {
    btn.addEventListener('click', () => openPackageDetail(btn.dataset.id));
  });
  container.querySelectorAll('.btn-order').forEach(btn => {
    btn.addEventListener('click', () => openBookingModal(btn.dataset.id));
  });
}

function renderSchedules() {
  const tbody = document.getElementById('schedule-body');
  if (!tbody) return;

  tbody.innerHTML = SCHEDULES.map(sch => {
    let statusBadge = 'bg-emerald-100 text-emerald-800 border-emerald-200';
    if (sch.status === 'Terbatas') statusBadge = 'bg-amber-100 text-amber-800 border-amber-200';
    if (sch.status === 'Hampir Penuh') statusBadge = 'bg-rose-100 text-rose-800 border-rose-200';
    if (sch.status === 'Selektif') statusBadge = 'bg-purple-100 text-purple-800 border-purple-200';

    return `
      <tr class="border-b border-stone-100 hover:bg-emerald-50/40 transition">
        <td class="py-4 px-4 font-bold text-stone-900">
          ${sch.packageName}
          <div class="text-xs text-stone-500 font-normal mt-0.5"><i class="fas fa-plane text-emerald-700 mr-1"></i>${sch.airline}</div>
        </td>
        <td class="py-4 px-4 text-stone-700">
          <div class="font-semibold text-stone-900">${sch.departureDate}</div>
          <div class="text-xs text-stone-500">s/d ${sch.returnDate}</div>
        </td>
        <td class="py-4 px-4 text-center">
          <span class="inline-block px-2.5 py-1 text-xs font-semibold rounded-full border ${statusBadge}">
            ${sch.status} (Sisa ${sch.remainingSeats} Seat)
          </span>
        </td>
        <td class="py-4 px-4 font-extrabold text-emerald-800 text-right">
          ${sch.priceStart}
        </td>
        <td class="py-4 px-4 text-center">
          <button class="btn-book-sch px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-sm transition" data-pkg="${sch.packageId}">
            Booking Seat
          </button>
        </td>
      </tr>
    `;
  }).join('');

  tbody.querySelectorAll('.btn-book-sch').forEach(btn => {
    btn.addEventListener('click', () => openBookingModal(btn.dataset.pkg));
  });
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover-card flex flex-col justify-between">
      <div>
        <div class="flex text-amber-400 mb-4">
          ${Array(t.rating).fill('<i class="fas fa-star"></i>').join('')}
        </div>
        <p class="text-stone-700 italic text-sm leading-relaxed mb-6">"${t.text}"</p>
      </div>
      <div class="flex items-center gap-4 pt-4 border-t border-stone-100">
        <img src="${t.avatar}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover border-2 border-emerald-600" />
        <div>
          <div class="font-bold text-stone-900 text-sm">${t.name}</div>
          <div class="text-xs text-stone-500">${t.city} &bull; <span class="text-emerald-700 font-medium">${t.package}</span></div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderVideos() {
  const container = document.getElementById('videos-container');
  if (!container) return;

  container.innerHTML = CINEMATIC_VIDEOS.map(v => `
    <div class="bg-stone-900 rounded-3xl overflow-hidden shadow-lg border border-stone-800 group relative">
      <div class="relative h-56 overflow-hidden cursor-pointer btn-play-video" data-title="${v.title}" data-url="${v.videoUrl}">
        <img src="${v.thumbnail}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition">
          <div class="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition">
            <i class="fas fa-play text-lg ml-1"></i>
          </div>
        </div>
        <div class="absolute top-3 right-3 bg-black/70 text-white text-xs px-2.5 py-1 rounded-md">
          <i class="fas fa-clock mr-1"></i> ${v.duration}
        </div>
        <div class="absolute bottom-3 left-3 bg-emerald-800 text-amber-300 text-xs font-bold px-3 py-1 rounded-md">
          ${v.category}
        </div>
      </div>
      <div class="p-5 text-white">
        <h4 class="font-bold text-base line-clamp-2 mb-2 group-hover:text-amber-400 transition">${v.title}</h4>
        <p class="text-xs text-stone-400 line-clamp-2">${v.description}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.btn-play-video').forEach(el => {
    el.addEventListener('click', () => {
      openVideoModal(el.dataset.title, el.dataset.url);
    });
  });
}

function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  const filtered = currentGalleryCat === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(g => g.category === currentGalleryCat);

  container.innerHTML = filtered.map(g => `
    <div class="relative rounded-2xl overflow-hidden shadow-sm group h-64 cursor-pointer">
      <img src="${g.url}" alt="${g.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
        <div class="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">${g.category}</div>
        <div class="text-white font-bold text-sm">${g.title}</div>
      </div>
    </div>
  `).join('');
}

// Package Detail Modal
function openPackageDetail(pkgId) {
  const pkg = PACKAGES.find(p => p.id === pkgId);
  if (!pkg) return;

  const modal = document.getElementById('detail-modal');
  const content = document.getElementById('detail-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="relative h-64 overflow-hidden rounded-t-3xl">
      <img src="${pkg.image}" alt="${pkg.name}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
        <span class="bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full w-max mb-2">${pkg.badge}</span>
        <h3 class="text-2xl font-black">${pkg.name}</h3>
        <div class="text-xs text-stone-300"><i class="far fa-clock mr-1"></i> Durasi Perjalanan: ${pkg.duration}</div>
      </div>
    </div>
    <div class="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
      <div>
        <h4 class="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-3">Akomodasi & Transportasi</h4>
        <div class="grid sm:grid-cols-2 gap-3 text-sm">
          <div class="bg-stone-50 p-3 rounded-xl border border-stone-200">
            <div class="text-xs text-stone-500">Hotel Makkah</div>
            <div class="font-bold text-stone-800 mt-0.5">${pkg.hotelMakkah}</div>
          </div>
          <div class="bg-stone-50 p-3 rounded-xl border border-stone-200">
            <div class="text-xs text-stone-500">Hotel Madinah</div>
            <div class="font-bold text-stone-800 mt-0.5">${pkg.hotelMadinah}</div>
          </div>
          <div class="bg-stone-50 p-3 rounded-xl border border-stone-200 sm:col-span-2">
            <div class="text-xs text-stone-500">Maskapai Penerbangan</div>
            <div class="font-bold text-stone-800 mt-0.5">${pkg.airline}</div>
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-3">Pilihan Kamar & Biaya</h4>
        <div class="grid grid-cols-3 gap-2 text-center">
          <div class="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
            <div class="text-xs text-emerald-800 font-semibold">Quad (4 Orang)</div>
            <div class="font-black text-emerald-950 text-base mt-1">${formatRupiah(pkg.priceQuad)}</div>
          </div>
          <div class="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
            <div class="text-xs text-emerald-800 font-semibold">Triple (3 Orang)</div>
            <div class="font-black text-emerald-950 text-base mt-1">${formatRupiah(pkg.priceTriple)}</div>
          </div>
          <div class="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
            <div class="text-xs text-emerald-800 font-semibold">Double (2 Orang)</div>
            <div class="font-black text-emerald-950 text-base mt-1">${formatRupiah(pkg.priceDouble)}</div>
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-3">Fasilitas Termasuk (Include)</h4>
        <ul class="grid sm:grid-cols-2 gap-2 text-xs text-stone-700">
          ${pkg.facilities.map(f => `<li class="flex items-center gap-2"><i class="fas fa-check-circle text-emerald-600"></i> ${f}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="p-6 bg-stone-50 border-t border-stone-200 rounded-b-3xl flex justify-end gap-3">
      <button id="btn-close-detail" class="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 font-semibold text-sm hover:bg-stone-100">Tutup</button>
      <button id="btn-proceed-order" class="px-6 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-sm hover:bg-emerald-900 shadow-md">Lanjut Booking</button>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  document.getElementById('btn-close-detail').addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  });

  document.getElementById('btn-proceed-order').addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    openBookingModal(pkgId);
  });
}

// Booking / Order Modal
function openBookingModal(pkgId) {
  activePackage = PACKAGES.find(p => p.id === pkgId) || PACKAGES[0];
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  const selectPackage = document.getElementById('booking-package-select');
  if (selectPackage) {
    selectPackage.innerHTML = PACKAGES.map(p => `
      <option value="${p.id}" ${p.id === activePackage.id ? 'selected' : ''}>${p.name}</option>
    `).join('');
  }

  updateBookingCalculation();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function updateBookingCalculation() {
  const selectPackage = document.getElementById('booking-package-select');
  const roomType = document.getElementById('booking-room-type').value;
  const pilgrimCount = parseInt(document.getElementById('booking-pilgrim-count').value || '1', 10);

  if (selectPackage) {
    activePackage = PACKAGES.find(p => p.id === selectPackage.value) || PACKAGES[0];
  }

  let pricePerPax = activePackage.priceQuad;
  if (roomType === 'triple') pricePerPax = activePackage.priceTriple;
  if (roomType === 'double') pricePerPax = activePackage.priceDouble;

  const total = pricePerPax * pilgrimCount;

  document.getElementById('calc-price-pax').textContent = formatRupiah(pricePerPax);
  document.getElementById('calc-total').textContent = formatRupiah(total);
}

function handleOrderSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('order-name').value.trim();
  const phone = document.getElementById('order-phone').value.trim();
  const city = document.getElementById('order-city').value.trim();
  const notes = document.getElementById('order-notes').value.trim();
  const roomType = document.getElementById('booking-room-type').value;
  const pilgrimCount = document.getElementById('booking-pilgrim-count').value;
  const total = document.getElementById('calc-total').textContent;

  if (!name || !phone) {
    alert('Mohon lengkapi Nama dan Nomor WhatsApp.');
    return;
  }

  // Format WhatsApp Message
  const waText = `*FORMULIR BOOKING UMROH / HAJI*\n` +
    `Website: ${TRAVEL_PROFILE.name}\n` +
    `----------------------------------------\n` +
    `*Nama Pemesan:* ${name}\n` +
    `*Nomor WA:* ${phone}\n` +
    `*Kota Asal:* ${city || '-'}\n` +
    `*Paket Dipilih:* ${activePackage.name}\n` +
    `*Tipe Kamar:* Kamar ${roomType.toUpperCase()}\n` +
    `*Jumlah Jemaah:* ${pilgrimCount} Orang\n` +
    `*Estimasi Total:* ${total}\n` +
    `*Catatan Khusus:* ${notes || '-'}\n` +
    `----------------------------------------\n` +
    `Bismillah, mohon informasi ketersediaan seat dan tahapan pendaftaran selanjutnya. Terima kasih.`;

  const waUrl = `https://wa.me/${TRAVEL_PROFILE.whatsapp}?text=${encodeURIComponent(waText)}`;
  
  // Close modal and open WhatsApp
  const modal = document.getElementById('booking-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');

  window.open(waUrl, '_blank');
}

// Video Modal
function openVideoModal(title, url) {
  const modal = document.getElementById('video-modal');
  const frame = document.getElementById('video-modal-frame');
  const titleEl = document.getElementById('video-modal-title');
  if (!modal || !frame) return;

  titleEl.textContent = title;
  frame.src = url;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function setupEventListeners() {
  // Package Category Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('bg-emerald-800', 'text-white');
        b.classList.add('bg-white', 'text-stone-700');
      });
      btn.classList.add('bg-emerald-800', 'text-white');
      btn.classList.remove('bg-white', 'text-stone-700');
      currentCategory = btn.dataset.category;
      renderPackages();
    });
  });

  // Gallery Filters
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter-btn').forEach(b => {
        b.classList.remove('bg-emerald-800', 'text-white');
        b.classList.add('bg-white', 'text-stone-700');
      });
      btn.classList.add('bg-emerald-800', 'text-white');
      btn.classList.remove('bg-white', 'text-stone-700');
      currentGalleryCat = btn.dataset.category;
      renderGallery();
    });
  });

  // Booking Modal Inputs
  const selectPackage = document.getElementById('booking-package-select');
  const roomType = document.getElementById('booking-room-type');
  const pilgrimCount = document.getElementById('booking-pilgrim-count');

  if (selectPackage) selectPackage.addEventListener('change', updateBookingCalculation);
  if (roomType) roomType.addEventListener('change', updateBookingCalculation);
  if (pilgrimCount) pilgrimCount.addEventListener('input', updateBookingCalculation);

  const orderForm = document.getElementById('order-form');
  if (orderForm) orderForm.addEventListener('submit', handleOrderSubmit);

  // Close Modals
  const closeBooking = document.getElementById('btn-close-booking');
  if (closeBooking) {
    closeBooking.addEventListener('click', () => {
      const modal = document.getElementById('booking-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  const closeVideo = document.getElementById('btn-close-video');
  if (closeVideo) {
    closeVideo.addEventListener('click', () => {
      const modal = document.getElementById('video-modal');
      const frame = document.getElementById('video-modal-frame');
      frame.src = '';
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.add('hidden'));
    });
  }
}
