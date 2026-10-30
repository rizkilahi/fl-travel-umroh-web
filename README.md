# Website Travel Umroh & Haji Khusus

Aplikasi website profesional, modern, dan responsif untuk biro perjalanan travel Umroh dan Haji Khusus. Dibuat sesuai dengan spesifikasi proyek di **Projects.co.id** (*Pembuatan Website Travel Umroh Haji* oleh owner `senorita`).

## Fitur Utama
1. **Homepage & Profil Travel (Company Profile):**
   - Header legalitas PPIU & PIHK resmi Kementerian Agama RI.
   - Komitmen Gerakan 5 Pasti Umroh Kemenag.
   - Highlight statistik pengalaman dan ribuan jemaah terlayani.
2. **Katalog & Pemilihan Paket:**
   - Filter kategori: Umroh Reguler, Umroh Plus Wisata (Turki/Dubai), Spesial Ramadhan, dan Haji Khusus Furoda (tanpa antri).
   - Detail fasilitas include, hotel Makkah & Madinah bintang 5 di pelataran masjid, serta maskapai penerbangan.
3. **Jadwal Keberangkatan Real-Time:**
   - Status ketersediaan kuota (Tersedia, Terbatas, Hampir Penuh, Selektif).
   - Detail tanggal berangkat-pulang dan maskapai direct.
4. **Formulir Order & Kalkulator Booking WhatsApp:**
   - Pemilihan varian kamar (Quad, Triple, Double) dengan kalkulasi otomatis sesuai jumlah jemaah.
   - Integrasi tombol booking direct WhatsApp dengan format pesan otomatis dan rapi.
5. **Halaman Testimoni Jemaah:**
   - Rating bintang, ulasan mendalam, asal kota, dan foto profil jemaah.
6. **Galeri & Video Cinematic:**
   - Pemutar modal video cinematic suasana thawaf, sa'i, ziarah Madinah, dan testimoni video.
   - Galeri foto dokumentasi dengan filter kategori (Makkah, Madinah, Turki).

## Cara Menjalankan Lokal
Tidak memerlukan instalasi runtime khusus (zero-build architecture):
```bash
cd ~/work/freelance/travel-umroh-web
python3 -m http.server 8080
```
Buka browser di `http://localhost:8080`.

## Struktur Folder
```
travel-umroh-web/
├── index.html        # Halaman utama responsif
├── css/
│   └── style.css     # Styling kustom (nuansa Islami, emerald-gold, animasi)
├── js/
│   ├── data.js       # Data master (profil travel, paket, jadwal, video, foto)
│   └── app.js        # Controller logika interaktif, filter, modal & kalkulator
├── docs/
│   ├── PROPOSAL_BID.md # Teks proposal bidding siap kirim ke Projects.co.id
│   └── STATUS.md     # Tracking status dev & milestone
└── README.md
```

## Opsi Deployment Statis
- **Vercel / Netlify / Cloudflare Pages:** Cukup deploy root folder ini langsung (gratis, SSL otomatis, CDN global tercepat).
- **GitHub Pages:** Dapat diaktifkan via repo `rizkilahi/fl-travel-umroh`.
