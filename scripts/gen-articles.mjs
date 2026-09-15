/**
 * Dev tool: generate 30 placeholder artikel .md dari riset (Pilar-dan-Penunjang.md).
 * Jalankan: node scripts/gen-articles.mjs
 * Semua artikel default draft:true (tidak terindex) sampai konten diisi.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'content', 'articles');
mkdirSync(OUT, { recursive: true });

/** @type {{n:number, title:string, pillar:string, kw:string[], eeat:string}[]} */
const articles = [
  // PILAR 1 — kitchen-set
  { n: 1, pillar: 'kitchen-set', title: 'Aluminium ACP vs Multipleks HPL untuk Kabinet Bawah Sink di Batam: Uji Kebocoran Pipa dan Serangan Rayap Tanah',
    kw: ['Kitchen Set Aluminium Batam', 'Kitchen Set Batam'], eeat: 'Analisis teknis mengapa kayu olahan di bawah bak cuci piring sering hancur dalam 2 tahun di Batam, serta mengapa material Aluminium Composite Panel (ACP) rangka hollow 1.2mm menjadi standar baru.' },
  { n: 2, pillar: 'kitchen-set', title: 'Bedah Biaya Pembuatan Kitchen Set Aluminium Batam per Meter Lari: Spesifikasi Profil Rangka, Kaca Riben, dan Aksesoris',
    kw: ['Kitchen Set Aluminium Batam', 'Kitchen Set Minimalis Batam'], eeat: 'Transparansi RAB; membongkar selisih biaya material lokal Batam vs impor via FTZ, dan cara membedakan ketebalan profil aluminium murahan (0.8mm) dengan standar industri (1.2mm).' },
  { n: 3, pillar: 'kitchen-set', title: 'Pengalaman Lapangan Pasang Top Table Granit Nero Black vs Solid Surface di Batam Center: Uji Noda Minyak Masakan Melayu dan Asam Cuka',
    kw: ['Kitchen Set Batam', 'Kitchenset dan Interior Custom Batam'], eeat: 'Dokumentasi uji ketahanan noda bumbu pekat (kari, kunyit, sambal terasi) pada permukaan meja dapur, pori-pori batu alam, dan sambungan seamless solid surface.' },
  { n: 4, pillar: 'kitchen-set', title: 'Mengapa Engsel Soft-Close Murah Berkarat dalam 8 Bulan di Kawasan Pesisir Sekupang dan Nongsa: Wajib Standar Stainless Steel SUS 304',
    kw: ['Kitchen Set Aluminium Batam', 'Kitchen Set Batam'], eeat: 'Studi kasus pengaruh salinitas udara pesisir Batam terhadap fitting besi cor, kode uji magnetik untuk cek keaslian plat SUS 304 merek Hafele/Blum/Taco.' },
  { n: 5, pillar: 'kitchen-set', title: 'Konstruksi Dapur Semi-Terbuka Rumah Batam: Trik Mengakali Terpaan Angin Musim Utara, Debu Jalanan, dan Jalur Pembuangan Air Hujan',
    kw: ['Kitchen Set Minimalis Batam', 'Jasa Pembuatan Interior & Kitchen Set Batam'], eeat: 'Solusi desain arsitektural untuk dapur belakang yang tidak tertutup penuh agar asap masakan keluar bebas tanpa merusak lapisan HPL saat hujan lebat berangin.' },
  { n: 6, pillar: 'kitchen-set', title: 'Standar Keamanan Pemasangan Pipa Gas Tanam LPG dan Exhaust Hood di Perumahan Batam agar Sirkulasi Udara Tidak Membalik ke Ruang Tamu',
    kw: ['Jasa Pembuatan Interior & Kitchen Set Batam', 'Kitchen Set Batam'], eeat: 'Panduan instalasi teknis; kapasitas hisap cooker hood (CFM) yang cocok untuk luasan dapur sempit di Batam, tata letak tabung gas berventilasi, dan katup pengaman.' },

  // PILAR 2 — rumah-subsidi
  { n: 7, pillar: 'rumah-subsidi', title: 'Panduan Menutup Sisa Tanah Belakang Rumah Subsidi Tipe 28/36 di Batam: Pengecoran Meja Dapur, Peninggian Tembok, dan Talang Bebas Bocor ke Tetangga',
    kw: ['Renovasi Teras & Interior Rumah Batam', 'Desain Rumah & Interior di Batam'], eeat: 'Langkah teknis struktur bata merah/hebel di atas tanah sisa 2x6 atau 3x6 meter, kemiringan atap seng spandek peredam, serta konstruksi talang cor anti sengketa batas kavling.' },
  { n: 8, pillar: 'rumah-subsidi', title: 'Rincian Biaya Riil Rp15 Juta – Rp25 Juta: Paket Renovasi Dapur Belakang & Teras Rumah Subsidi di Kawasan Batu Aji Batam',
    kw: ['Renovasi Fasad & Interior Rumah Subsidi di Batam', 'Renovasi Teras & Interior Rumah Batam'], eeat: 'Transparansi RAB per item: ongkos tukang harian vs borongan di Batam, kebutuhan sak semen Padang/Holcim, besi cor 8mm/10mm, keramik 40x40/50x50, dan meja kompor beton.' },
  { n: 9, pillar: 'rumah-subsidi', title: 'Regulasi Renovasi Rumah Subsidi BP Batam & Bank Tabungan Negara: Batasan Merubah Fasad Depan, Garis Sempadan Bangunan (GSB), dan Struktur Induk',
    kw: ['Renovasi Fasad & Interior Rumah Subsidi di Batam', 'Jasa Desain & Renovasi Rumah Batam'], eeat: 'Aturan kepatuhan legal perbankan agar subsidi bunga/KPR FLPP tidak dicabut saat pemilik merenovasi teras atau menambah lantai mezanin.' },
  { n: 10, pillar: 'rumah-subsidi', title: 'Solusi Mengatasi Dinding Belakang Rumah Subsidi yang Rembes dan Retak Rambut Akibat Tembok Bersama (Shared Wall) Satu Bata Dua Pemilik',
    kw: ['Renovasi Teras & Interior Rumah Batam', 'Desain Rumah & Interior di Batam'], eeat: 'Kasus struktural khas perumahan subsidi Batam; pemakaian pelapis kedap air elastis (waterproofing bitumen/cementitious), pemutusan rambatan air tanah dengan trasram.' },
  { n: 11, pillar: 'rumah-subsidi', title: 'Desain Teras Rumah Subsidi Sekaligus Carport Mobil: Perbandingan Rangka Baja Ringan vs Besi Hollow Galvanis dan Atap Solarflat di Iklim Panas Batam',
    kw: ['Renovasi Teras & Interior Rumah Batam', 'Renovasi Fasad & Interior Rumah Subsidi di Batam'], eeat: 'Rekayasa kanopi penahan angin kencang di Batam; ketebalan hollow minimal 1.4mm, sistem las penuh anti korosi, dan peredaman panas terik matahari pesisir.' },
  { n: 12, pillar: 'rumah-subsidi', title: 'Trik Menata Interior Terbuka Rumah Subsidi Tipe 30/60 Batam: Pemanfaatan Partisi Kisi Roster dan Lemari Dua Muka Tanpa Bikin Ruang Sempit Pengap',
    kw: ['Desain Rumah & Interior di Batam', 'Renovasi dan Custom Interior Batam'], eeat: 'Desain layout interior hemat tempat; mengintegrasikan ruang keluarga, meja kerja lipat, dan ruang makan kecil dengan sirkulasi udara silang (cross-ventilation).' },

  // PILAR 3 — apartemen
  { n: 13, pillar: 'apartemen', title: 'Prosedur Izin Kerja Fitting Out di Apartemen Meisterstadt Pollux Habibie Batam: Dokumen Kerja, Biaya Deposit Pengelola, dan Jam Operasional Tukang',
    kw: ['Desain Interior Apartmen Batam', 'Executive Interior Batam'], eeat: 'Panduan birokrasi nyata di Batam; cara mengisi formulir BM, mitigasi pemotongan deposit fit-out, asuransi kerja, dan batas kebisingan kerja mekanikal.' },
  { n: 14, pillar: 'apartemen', title: 'Desain Interior Modular Unit Studio 24m² di CitraPlaza Nagoya Batam: Rekayasa Kasur Lipat Dinding (Murphy Bed) dan Meja Kerja Terintegrasi',
    kw: ['Desain Interior Apartmen Batam', 'Solusi Interior Modern di Batam'], eeat: 'Desain ergonomi mikro; pemilihan mekanisme engsel hidrolik tempat tidur lipat dengan beban tahan 250 kg, pemilihan busa matras yang tidak merosot saat terlipat vertikal.' },
  { n: 15, pillar: 'apartemen', title: 'Standar Modifikasi Plafon dan Sensor Kebakaran (Heat & Smoke Detector) di Formosa Residence Nagoya agar Tidak Gagal Inspeksi Engineering Gedung',
    kw: ['Desain Interior Apartmen Batam', 'Executive Interior Batam'], eeat: 'Aspek keselamatan MEP gedung; aturan jarak drop ceiling gypsum terhadap kepala sprinkler pemadam dan relokasi kabel instalasi gedung tanpa memutus loop proteksi kebakaran.' },
  { n: 16, pillar: 'apartemen', title: 'Estimasi Biaya Full Interior Unit 1BR/2BR Apartemen Batam untuk Disewakan ke Tenaga Ahli Kawasan Industri Mukakuning dan Kabil',
    kw: ['Solusi Interior Modern di Batam', 'Desain Interior Apartmen Batam'], eeat: 'Analisis ROI properti; paket furnitur yang disukai penyewa asing (Singapura/Malaysia/ekspatriat Eropa), pemilihan material tahan aus, dan kalkulasi balik modal sewa tahunan.' },
  { n: 17, pillar: 'apartemen', title: 'Mengakali Ukuran Lift Barang yang Terbatas di Apartemen Batam: Konstruksi Lemari Pakaian Knock-Down 3 Seksi Tanpa Celah Sambungan Terlihat',
    kw: ['Jasa Interior Custom Batam', 'Desain Interior Apartmen Batam'], eeat: 'Pertukangan workshop kayu tingkat lanjut; cara memotong modul lemari setinggi 2.4 meter menjadi partisi knock-down ber-baut minifix, perakitan presisi di dalam lorong unit apartemen yang sempit.' },
  { n: 18, pillar: 'apartemen', title: 'Daftar Material Furnitur yang Tahan Banting untuk Unit Apartemen Sewa Harian (AirBnB) di Batam: Anti Goresan Koper, Tahan Noda Rokok, dan Mudah Dibersihkan',
    kw: ['Executive Interior Batam', 'Solusi Interior Modern di Batam'], eeat: 'Pemilihan spesifikasi pelapis; HPL heavy-duty postforming, bantalan sofa berbahan water repellent fabric, dan penggunaan protektor sudut dinding (corner guard).' },

  // PILAR 4 — ruang-tamu
  { n: 19, pillar: 'ruang-tamu', title: 'Konstruksi Rangka Backdrop TV Gantung pada Dinding Bata Ringan Perumahan Batam: Menghitung Kekuatan Beban Panel dan TV Ukuran 65–75 Inch',
    kw: ['Backdrop TV & Interior Dapur Custom Batam', 'Desain Interior Ruang Tamu Batam'], eeat: 'Keteknikan sipil-interior; pemakaian fisher khusus bata hebel (fischer duopower), rangka dasar plywood 18mm bertulang kayu kamper/meranti untuk menahan momen lentur gantung.' },
  { n: 20, pillar: 'ruang-tamu', title: 'Trik Desain Ruang Tamu Rumah Tipe 36 Batam yang Memanjang: Menggabungkan Sofa Sudut L-Shape, Meja Konsol Ramping, dan Panel Dinding Kisi WPC',
    kw: ['Desain Interior Ruang Tamu Batam', 'Desain Interior Rumah Minimalis di Batam'], eeat: 'Ergonomi gerak tubuh; memetakan koridor sirkulasi minimal 80 cm, penempatan cermin bronze untuk memberi ilusi ruang lapang, dan pemilihan warna HPL ber-tone hangat.' },
  { n: 21, pillar: 'ruang-tamu', title: 'Instalasi Jalur Kabel Tersembunyi (Concealed Cable Trench) pada Backdrop TV Minimalis: Menata Rapi Kabel HDMI, Kabel Daya, Router WiFi, dan Stop Kontak Tanam',
    kw: ['Backdrop TV & Interior Dapur Custom Batam', 'Jasa Interior Custom Batam'], eeat: 'Detail instalasi elektrikal; penggunaan pipa conduit PVC 2 inch di balik partisi dinding gypsum/kayu agar penggantian kabel perangkat elektronik di masa depan tidak perlu membongkar furnitur.' },
  { n: 22, pillar: 'ruang-tamu', title: 'Desain Drop Ceiling Plafon Gypsum dengan Pencahayaan Indirect LED Strip Warm White: Cara Mencegah Trafo/Power Supply Terbakar Akibat Suhu Ruang Atap Seng Batam',
    kw: ['Desain Interior Rumah Minimalis di Batam', 'Desain Interior Ruang Tamu Batam'], eeat: 'Mitigasi bahaya kebakaran; meletakkan adaptor LED di titik yang berventilasi dan mudah diakses perawatannya, pemilihan profil aluminium housing LED sebagai pelepas panas (heat sink).' },
  { n: 23, pillar: 'ruang-tamu', title: 'Partisi Ruang Tamu dan Ruang Makan: Komparasi Kekuatan dan Estetika Kisi Kayu Solid vs Aluminium Powder Coating vs Rangka Multipleks Lapis HPL',
    kw: ['Desain Interior Ruang Tamu Batam', 'Desain Interior Rumah Minimalis di Batam'], eeat: 'Pertimbangan stabilitas material terhadap perubahan suhu ruangan ber-AC vs non-AC di Batam, risiko kayu melengkung (warping), dan kemudahan perawatan debu harian.' },
  { n: 24, pillar: 'ruang-tamu', title: 'Standar Inspeksi Tukang Saat Pemasangan Furnitur di Lapangan: Penggunaan Laser Leveling untuk Memastikan Lemari Presisi pada Lantai Rumah Batam yang Tidak Rata',
    kw: ['Jasa Interior Custom Batam', 'Backdrop TV & Interior Dapur Custom Batam'], eeat: 'Kualitas pengerjaan (craftsmanship); cara menyetel kaki lemari (adjuster leg), merapikan celah dinding miring dengan sambungan penutup (filler panel), dan kerapian silikon sealant warna senada.' },

  // PILAR 5 — komersial
  { n: 25, pillar: 'komersial', title: 'Panduan Renovasi Ruko 3 Lantai di Kawasan Bisnis Nagoya & Batam Center Menjadi Kantor Operasional: Alur Zonasi Resepsionis, Ruang Kerja Karyawan, dan Ruang Direktur',
    kw: ['Jasa Renovasi & Interior Batam', 'Solusi Interior Lengkap Batam'], eeat: 'Manajemen ruang komersial; tata letak kubikal partisi hemat biaya, akses pintu kaca otomatis (access control card/fingerprint), dan pemisahan tangga publik vs area operasional privat.' },
  { n: 26, pillar: 'komersial', title: 'Konstruksi Dinding Partisi Kedap Suara untuk Ruang Rapat Kantor Logistik di Batu Ampar Batam: Kombinasi Rangka Metal Stud, Rockwool 60 kg/m³, dan Double Gypsum Soundstop',
    kw: ['Renovasi dan Custom Interior Batam', 'Solusi Interior Lengkap Batam'], eeat: 'Rekayasa akustik ruangan; mencapai nilai Sound Transmission Class (STC) 45-50 dB agar pembicaraan negosiasi bisnis tidak bocor ke ruang tunggu luar, detail peredaman pada celah bawah pintu (drop seal).' },
  { n: 27, pillar: 'komersial', title: 'Renovasi Interior Coffee Shop & Kafe di Batam Center: Standar Layout Barista Station, Jalur Plumbing Pembuangan Limbah Lemak (Grease Trap), dan Daya Tahan Meja Bar',
    kw: ['Jasa Renovasi & Interior Batam', 'Renovasi dan Custom Interior Batam'], eeat: 'Efisiensi alur kerja F&B; penataan stop kontak mesin espresso, anti rembesan air pada meja stainless counter, dan pemilihan bahan lantai anti licin berstandar komersial.' },
  { n: 28, pillar: 'komersial', title: 'Kalkulasi Kebutuhan Beban Listrik (PLN Batam) dan Penempatan Titik AC Split Duct/Cassette untuk Ruang Kerja Ruko dengan 25+ Komputer Aktif',
    kw: ['Solusi Interior Lengkap Batam', 'Jasa Renovasi & Interior Batam'], eeat: 'Perhitungan utilitas MEP; menghitung beban pendinginan ruangan (BTU/hr) dengan memperhitungkan panas kaca ruko hadap barat, penyeimbangan beban fase panel listrik R-S-T.' },
  { n: 29, pillar: 'komersial', title: 'Prosedur Pengurusan Izin Renovasi Bangunan Ruko ke Pengelola Kawasan Usaha dan Dinas Tata Kota di Batam Sebelum Melakukan Pembongkaran Dinding Sekat',
    kw: ['Renovasi dan Custom Interior Batam', 'Jasa Renovasi & Interior Batam'], eeat: 'Prosedur izin resmi; dokumen gambar kerja as-built, pengecekan kolom struktur utama agar tidak dibobok sembarangan, serta penempatan kontainer pembuangan puing brangkal (debris waste management).' },
  { n: 30, pillar: 'komersial', title: 'Format Kontrak Kerja Kontraktor Interior Komersial di Batam: Klausul Penalti Keterlambatan Serah Terima Kunci (Liquidated Damages), Retensi 5%, dan Garansi Pemeliharaan 12 Bulan',
    kw: ['Solusi Interior Lengkap Batam', 'Jasa Renovasi & Interior Batam'], eeat: 'Aspek legalitas dan perlindungan pemilik usaha; perjanjian bertahap sesuai progres persentase fisik lapangan (termin payment), berita acara serah terima (BAST), dan jaminan perawatan pasca proyek.' },
];

const pub = new Date('2024-09-11').toISOString().slice(0, 10);

for (const a of articles) {
  const slug = `artikel-${String(a.n).padStart(2, '0')}`;
  const md = `---
title: "${a.title.replace(/"/g, '\\"')}"
description: "${a.title.replace(/"/g, '\\"')} — studi kasus & panduan praktis dari pengalaman lapangan tim interior Batam."
keywords:
${a.kw.map((k) => `  - ${k}`).join('\n')}
heroImage: /images/placeholder/article-${String(a.n).padStart(2, '0')}.svg
pillar: ${a.pillar}
author: Tim Interior Batam
pubDate: ${pub}
updatedDate: ${pub}
draft: true
---

> **Artikel Pilar ${a.pillar} (E-E-A-T).** Status: *draft* (belum terindex).
> Fokus E-E-A-T sesuai riset: ${a.eeat}
>
> **Internal linking (silo):**
> - Tautkan ke halaman pilar induk: \`/layanan/${a.pillar === 'rumah-subsidi' ? 'renovasi-rumah-subsidi-batam' : a.pillar === 'ruang-tamu' ? 'custom-furniture-ruang-tamu-batam' : a.pillar === 'komersial' ? 'renovasi-interior-komersial-batam' : a.pillar + '-batam'}/\`
> - (Lateral) boleh menautkan ke artikel se-pilar lainnya.
> - Sematkan video TikTok/Shorts 30 detik terkait untuk memperkuat Experience.

## ${a.title}

<!-- Tulis isi artikel di sini. Target 1200–2000 kata, gaya E-E-A-T non-komoditas. -->
`;
  writeFileSync(join(OUT, `${slug}.md`), md, 'utf8');
}

console.log(`Generated ${articles.length} article placeholders in ${OUT}`);
