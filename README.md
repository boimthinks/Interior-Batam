# 🏠 Interior Batam

> Jasa Desain & Kontraktor Interior Profesional di Batam — custom furniture, kitchen set, interior apartemen, rumah tapak, hingga ruko kantor. Pengerjaan rapi, bergaransi, material tahan iklim pesisir.

Website resmi: [interiorbatam.web.id](https://interiorbatam.web.id)

---

## 📖 Tentang Project

**Interior Batam** adalah website statis berbasis **Astro** yang dirancang khusus untuk *local SEO* (Search Engine Optimization) di wilayah Batam, Kepulauan Riau. Website ini dibangun dengan arsitektur **silo vertikal** — halaman layanan pilar dihubungkan dengan artikel-artikel penunjang (E-E-A-T) untuk mendominasi pencarian seperti *"jasa interior Batam"*, *"kitchen set Batam"*, dan *"desain interior apartemen Batam"*.

Struktur konten dibagi menjadi dua koleksi utama:
- **Services** (6 Halaman Pilar / Landing Page Layanan)
- **Articles** (Artikel Penunjang bergaya E-E-A-T)

---

## ✨ Fitur Utama

- ⚡ **Astro 7** — framework web modern berbasis *islands architecture* untuk performa ekstra cepat.
- 🔍 **SEO Lokal Terintegrasi** — komponen `SEO.astro` + `Schema.astro` (JSON-LD: `LocalBusiness`, `Article`, `BreadcrumbList`) untuk rich result Google.
- 🗺️ **Google Source Preferences** — petunjuk eksplisit untuk mesin pencari via `GoogleSourcePreferences.astro`.
- 📇 **Data NAP Konsisten** — seluruh nama, alamat, dan nomor telepon (NAP) diambil dari satu sumber `src/config/site.ts`.
- 🔗 **Auto-links Antar Artikel** — plugin `remark-autolinks.mjs` otomatis menghubungkan kata kunci ke halaman layanan terkait.
- 📰 **Sitemap Otomatis** — integrasi `@astrojs/sitemap` dengan filter halaman draft.
- 🌐 **View Transitions** — transisi halaman halus bawaan Astro (`ClientRouter`).
- 🔄 **Prefetch** — mempercepat navigasi dengan strategi *hover*.
- 📱 **Responsif & Mobile-First** — tampilan optimal di semua perangkat.

---

## 🧱 6 Pilar Layanan

| Kategori | Layanan | URL |
| --- | --- | --- |
| `kitchen-set` | Kitchen Set | `/layanan/kitchen-set-batam/` |
| `rumah-subsidi` | Renovasi Rumah Subsidi | `/layanan/renovasi-rumah-subsidi-batam/` |
| `apartemen` | Interior Apartemen | `/layanan/interior-apartemen-batam/` |
| `ruang-tamu` | Interior Ruang Tamu | `/layanan/custom-furniture-ruang-tamu-batam/` |
| `interior-kantor` | Interior Kantor | `/layanan/renovasi-interior-komersial-batam/` |
| `kamar-tidur` | Interior Kamar Tidur | `/layanan/interior-kamar-tidur-wardrobe-batam/` |

Setiap artikel blog **wajib** terikat pada salah satu pilar di atas (field `pillar`) agar tidak keluar dari 6 lini layanan bisnis.

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
| --- | --- |
| Framework | [Astro](https://astro.build) `^7.3.2` |
| Markdown | `@astrojs/markdown-remark` `^7.3.1` |
| SEO | `@astrojs/sitemap` `^3.7.4` |
| Bahasa | TypeScript / JavaScript (ESM) |
| Styling | CSS Global + Scoped Styles (`scopedStyleStrategy: 'class'`) |
| Build Output | Format *directory* (kompatibel *htdocs* shared hosting) |

---

## 📂 Struktur Project

```text
interior-batam/
├── src/
│   ├── components/        # Header, Footer, SEO, Schema, ServiceCard, ArticleCard, dll.
│   ├── config/            # site.ts (NAP/SEO), categories.ts (pilar), autolinks.ts
│   ├── content/
│   │   ├── services/      # 6 halaman pilar layanan (.md)
│   │   └── articles/      # artikel penunjang E-E-A-T (.md)
│   ├── layouts/           # BaseLayout, ServiceLayout, ArticleLayout
│   ├── pages/             # index, layanan, blog, portofolio, tentang-kami, kontak, 404
│   │   ├── layanan/       # [slug].astro, index.astro
│   │   └── blog/          # [slug].astro, index.astro
│   ├── plugins/           # remark-autolinks.mjs
│   └── styles/            # global.css
├── public/                # aset statis (logo, favicon, gambar)
├── astro.config.mjs       # konfigurasi Astro + sitemap + i18n
├── content.config.ts      # schema koleksi services & articles (Zod)
├── package.json
└── tsconfig.json
```

---

## 🚀 Cara Menjalankan

### Prasyarat
- **Node.js** (versi LTS terbaru)
- **npm** (atau package manager lainnya)

### Instalasi & Development

```bash
# 1. Clone repository
git clone https://github.com/boimthinks/Interior-Batam.git
cd Interior-Batam

# 2. Install dependencies
npm install

# 3. Jalankan development server (hot reload)
npm run dev
# Buka http://localhost:4321
```

### Build & Preview Production

```bash
# Build untuk production
npm run build

# Preview hasil build secara lokal
npm run preview
```

Output build berada di folder `dist/`, siap di-upload ke *shared hosting* (cPanel/htdocs) karena menggunakan format *directory*.

---

## ✍️ Menambah Konten

### Menambah Artikel Blog

Buat file baru di `src/content/articles/` dengan frontmatter berikut:

```markdown
---
title: "Judul Artikel + Batam"
description: "Deskripsi singkat artikel untuk meta description"
keywords: ["interior Batam", "desain interior Batam"]
heroImage: /images/placeholder/article-01.svg
pillar: kitchen-set   # wajib: kitchen-set | rumah-subsidi | apartemen | ruang-tamu | interior-kantor | kamar-tidur
author: Muhammad Zazuli
pubDate: 2026-01-15
draft: true            # set false saat konten siap terbit
---

Isi artikel di sini...
```

### Menambah Halaman Layanan

Buat file baru di `src/content/services/` dengan frontmatter sesuai schema di `src/content.config.ts` (field: `title`, `description`, `intro`, `sections`, `faq`, `sortOrder`, dll).

> 📌 Semua data bisnis, kontak, dan aturan penulisan mengacu pada **`SUMBER-PENGETAHUAN.md`** (sumber kebenaran tunggal).

---

## ⚙️ Konfigurasi Penting

| File | Fungsi |
| --- | --- |
| `src/config/site.ts` | NAP (Name-Address-Phone), WhatsApp, jam operasional, area layanan, social media, koordinat geo. **Ubah di sini sebelum go-live.** |
| `src/config/categories.ts` | Definisi 6 pilar layanan & mapping ke slug layanan. |
| `astro.config.mjs` | `site` URL, `trailingSlash`, format build, integrasi sitemap, i18n (`id`). |
| `content.config.ts` | Validasi schema konten (Zod) untuk services & articles. |

---

## 📞 Kontak Bisnis

- **WhatsApp:** [+62 813-7370-3639](https://wa.me/6281373703639)
- **Kantor:** Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blk B2 No.7, Baloi Permai, Batam
- **Workshop:** Komplek Ruko Valley Park Blk. A No.01, Belian, Batam Center
- **Author / Lead Specialist:** Muhammad Zazuli

---

## 📄 Lisensi

Project ini bersifat **private / proprietary** milik Interior Batam. Tidak diperkenankan untuk digunakan ulang tanpa izin tertulis.

---

<p align="center">Dibuat dengan ❤️ menggunakan <a href="https://astro.build">Astro</a> — untuk warga Batam, Kepulauan Riau.</p>
