// Data master paket umroh & haji, jadwal, testimoni, dan galeri

export const TRAVEL_PROFILE = {
  name: "Al-Barakah Travel Umroh & Haji",
  tagline: "Melayani Tamu Allah dengan Amanah, Khusyuk, dan Nyaman",
  license: "PPIU No. U.384 Tahun 2021 & PIHK No. 128 Tahun 2023",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "info@albarakah-travel.co.id",
  address: "Jl. Tebet Raya No. 45, Jakarta Selatan 12810",
  stats: [
    { label: "Jemaah Diberangkatkan", value: "12.500+" },
    { label: "Kepuasan Jemaah", value: "99.4%" },
    { label: "Tahun Pengalaman", value: "12 Tahun" },
    { label: "Hotel Bintang 5", value: "100% Guaranteed" }
  ]
};

export const PACKAGES = [
  {
    id: "umroh-reguler-9d",
    name: "Paket Umroh Reguler Bintang 5 (9 Hari)",
    category: "reguler",
    badge: "Paling Populer",
    duration: "9 Hari",
    priceQuad: 28500000,
    priceTriple: 30500000,
    priceDouble: 33000000,
    hotelMakkah: "Pullman Zamzam Makkah (Bintang 5, Pelataran Masjid)",
    hotelMadinah: "Rove Al Madinah (Bintang 5, 100m ke Nabawi)",
    airline: "Saudia Airlines (Direct CGK-JED)",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
    featured: true,
    facilities: [
      "Tiket Pesawat PP Direct Tanpa Transit",
      "Visa Umroh & Asuransi Perjalanan Lengkap",
      "Makan 3x Sehari Menu Indonesia (Fullboard)",
      "Handling Bandara & Fast-Track Imigrasi",
      "Muthawif & Tour Leader Berpengalaman",
      "Perlengkapan Umroh Premium (Koper, Kain Ihram, Mukena)",
      "Air Zamzam 5 Liter (Sesuai Regulasi Maskapai)"
    ]
  },
  {
    id: "umroh-plus-turki-12d",
    name: "Paket Umroh Plus Wisata Sejarah Turki (12 Hari)",
    category: "plus",
    badge: "Best Seller",
    duration: "12 Hari",
    priceQuad: 36900000,
    priceTriple: 39500000,
    priceDouble: 42500000,
    hotelMakkah: "Swissotel Makkah (Bintang 5 - Tower Clock)",
    hotelMadinah: "Dallah Taibah (Bintang 5)",
    airline: "Turkish Airlines",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80",
    featured: true,
    facilities: [
      "City Tour Istanbul (Hagia Sophia, Blue Mosque, Bosphorus Cruise)",
      "Hotel Bintang 5 di Istanbul & Tanah Suci",
      "Transportasi Bus Mewah Mercedes VIP",
      "Tiket Masuk Semua Objek Wisata Bersejarah",
      "Muthawif & Guide Lokal Berbahasa Indonesia",
      "Asuransi Perjalanan Internasional"
    ]
  },
  {
    id: "umroh-ramadhan-syawal",
    name: "Paket Umroh Spesial Ramadhan & Iktikaf (15 Hari)",
    category: "ramadhan",
    badge: "Edisi Khusus",
    duration: "15 Hari",
    priceQuad: 45000000,
    priceTriple: 49000000,
    priceDouble: 54000000,
    hotelMakkah: "Movenpick Hotel & Residence Hajar Tower",
    hotelMadinah: "Madinah Hilton",
    airline: "Garuda Indonesia (Direct Jakarta - Madinah)",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    featured: false,
    facilities: [
      "Pengalaman Sahur & Buka Puasa di Masjidil Haram",
      "Bimbingan Khusus Iktikaf 10 Hari Terakhir Ramadhan",
      "Tenda AC di Raudhah (Pendaftaran Tasreeh Resmi)",
      "Katering Menu Sahur & Iftar Khas Nusantara",
      "Doa Khatam Quran bersama Pembimbing Ibadah"
    ]
  },
  {
    id: "haji-furoda-langsung",
    name: "Haji Khusus Furoda / Mujamalah (Langsung Berangkat)",
    category: "haji",
    badge: "Tanpa Antri",
    duration: "25 - 28 Hari",
    priceQuad: 245000000,
    priceTriple: 265000000,
    priceDouble: 295000000,
    hotelMakkah: "Fairmont Makkah Clock Royal Tower (Bintang 5)",
    hotelMadinah: "The Oberoi Madinah (Bintang 5)",
    airline: "Saudia Airlines First / Business Class",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
    featured: true,
    facilities: [
      "Visa Haji Mujamalah / Furoda Resmi Kuota Kerajaan Saudi",
      "Maktab VIP 111 / 112 Mina & Arafah (Tenda Ber-AC Mewah)",
      "Kereta Cepat Haramain Train (Makkah - Madinah - Jeddah)",
      "Dokter & Tenaga Medis Standby 24 Jam",
      "Pendampingan Ibadah Sesuai Sunnah (Ustadz Nasional)"
    ]
  }
];

export const SCHEDULES = [
  {
    id: "sch-01",
    packageId: "umroh-reguler-9d",
    packageName: "Umroh Reguler Bintang 5",
    departureDate: "15 November 2026",
    returnDate: "23 November 2026",
    airline: "Saudia Airlines",
    totalSeats: 45,
    remainingSeats: 6,
    status: "Terbatas",
    priceStart: "Rp 28.500.000"
  },
  {
    id: "sch-02",
    packageId: "umroh-reguler-9d",
    packageName: "Umroh Reguler Bintang 5",
    departureDate: "05 Desember 2026",
    returnDate: "13 Desember 2026",
    airline: "Garuda Indonesia",
    totalSeats: 45,
    remainingSeats: 18,
    status: "Tersedia",
    priceStart: "Rp 29.500.000"
  },
  {
    id: "sch-03",
    packageId: "umroh-plus-turki-12d",
    packageName: "Umroh Plus Turki Musim Dingin",
    departureDate: "18 Desember 2026",
    returnDate: "29 Desember 2026",
    airline: "Turkish Airlines",
    totalSeats: 35,
    remainingSeats: 4,
    status: "Hampir Penuh",
    priceStart: "Rp 36.900.000"
  },
  {
    id: "sch-04",
    packageId: "umroh-reguler-9d",
    packageName: "Umroh Awal Tahun 2027",
    departureDate: "10 Januari 2027",
    returnDate: "18 Januari 2027",
    airline: "Saudia Airlines",
    totalSeats: 45,
    remainingSeats: 29,
    status: "Tersedia",
    priceStart: "Rp 28.500.000"
  },
  {
    id: "sch-05",
    packageId: "umroh-ramadhan-syawal",
    packageName: "Umroh Ramadhan & Lailatul Qadar",
    departureDate: "20 Maret 2027",
    returnDate: "03 April 2027",
    airline: "Garuda Indonesia",
    totalSeats: 40,
    remainingSeats: 12,
    status: "Tersedia",
    priceStart: "Rp 45.000.000"
  },
  {
    id: "sch-06",
    packageId: "haji-furoda-langsung",
    packageName: "Haji Khusus Furoda 1448 H",
    departureDate: "25 Dzulqa'dah 1448 H",
    returnDate: "20 Dzulhijjah 1448 H",
    airline: "Saudia Airlines VIP",
    totalSeats: 25,
    remainingSeats: 5,
    status: "Selektif",
    priceStart: "Rp 245.000.000"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "H. Bambang Sudirman & Keluarga",
    city: "Surabaya",
    package: "Umroh Reguler Bintang 5",
    rating: 5,
    text: "Alhamdulillah pelayanan Al-Barakah luar biasa amanah. Hotel Pullman benar-benar di depan pelataran Ka'bah, memudahkan orang tua saya untuk shalat 5 waktu di Masjidil Haram tanpa lelah. Muthawif sangat menguasai sirah dan sabar membimbing.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Hj. Siti Rahmawati",
    city: "Bandung",
    package: "Umroh Plus Turki 12 Hari",
    rating: 5,
    text: "Perjalanan impian! Dari salju di Istanbul hingga beribadah khusyuk di Madinah dan Makkah. Jadwal sangat teratur, makanan katering enak cocok lidah Indonesia, dan koper diurus tim handling dari bandara sampai kamar hotel.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "dr. Ahmad Farhan, Sp.PD",
    city: "Jakarta",
    package: "Haji Khusus Furoda",
    rating: 5,
    text: "Mendaftar tanpa rasa cemas karena legalitas izin resmi Kemenag jelas. Fasilitas Maktab VIP saat wukuf di Arafah dan mabit di Mina sangat berkelas dan dingin. Terima kasih tim Al-Barakah atas dedikasi dan profesionalitasnya.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const CINEMATIC_VIDEOS = [
  {
    id: "vid-1",
    title: "Cinematic Journey: Jejak Air Mata Jemaah di Pelataran Ka'bah 1447 H",
    duration: "04:12",
    thumbnail: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
    category: "Makkah",
    description: "Dokumentasi syahdu suasana thawaf dan sa'i jemaah Al-Barakah Travel dengan bimbingan ustadz pembimbing.",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "vid-2",
    title: "Ziarah Madinah Al-Munawwarah: Shalat di Raudhah & Salam ke Baginda Rasul",
    duration: "03:45",
    thumbnail: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    category: "Madinah",
    description: "Momen haru saat jemaah mendapatkan izin Tasreeh resmi masuk ke taman surga Raudhah asy-Syarifah.",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "vid-3",
    title: "Testimoni Spontan Jemaah Kloter 24 Pasca Tahallul & Tawaf Wada",
    duration: "05:20",
    thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    category: "Testimoni",
    description: "Cerita jujur para jemaah lansia dan keluarga tentang kemudahan hotel pelataran dan bimbingan ibadah.",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
  }
];

export const GALLERY_PHOTOS = [
  {
    id: 1,
    title: "Tawaf Mengitari Ka'bah di Waktu Subuh",
    category: "makkah",
    url: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Payung Raksasa Masjid Nabawi Madinah",
    category: "madinah",
    url: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Foto Bersama Jemaah di Jabal Uhud",
    category: "ziarah",
    url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Pesona Hagia Sophia dalam Program Plus Turki",
    category: "turki",
    url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Manasik Umroh Intensif Sebelum Keberangkatan",
    category: "manasik",
    url: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Suasana Sahur di Depan Masjidil Haram",
    category: "makkah",
    url: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80"
  }
];
