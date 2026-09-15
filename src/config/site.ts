/**
 * Konfigurasi Situs & NAP (Name-Address-Phone) untuk Local SEO.
 * Semua schema JSON-LD, Footer, dan kontak mengambil dari sini agar KONSISTEN.
 * Ganti nilai placeholder dengan data riil bisnis Anda sebelum go-live.
 */

export const SITE = {
  name: 'Interior Batam',
  legalName: 'PT Interior Batam (placeholder)',
  domain: 'https://interiorbatam.web.id',
  // Keyword utama homepage
  primaryKeyword: 'Interior Batam',
  tagline: 'Jasa Desain & Kontraktor Interior Profesional di Batam',
  description:
    'Jasa desain & kontraktor interior Batam: custom furniture, kitchen set, interior apartemen, rumah tapak, dan ruko kantor. Pengerjaan rapi, bergaransi, material tahan iklim pesisir.',
  author: {
    name: 'Muhammad Zazuli',
    url: 'https://www.facebook.com/joel.avellokids',
  },
  // WhatsApp format internasional tanpa '+', contoh: 62812xxxxxxx
  whatsapp: '6281373703639',
  phone: '+62 813-7370-3639',
  email: 'halo@interiorbatam.web.id',
  priceRange: '$$',
  // Alamat fisik kantor
  officeAddress: {
    streetAddress: 'Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7',
    addressLocality: 'Baloi Permai, Batam',
    addressRegion: 'Kepulauan Riau',
    postalCode: '29431',
    addressCountry: 'ID',
  },
  // Alamat fisik workshop (untuk produksi furniture custom)
  workshopAddress: {
    streetAddress: 'Komplek Ruko Valley Park, Blk. A No.01',
    addressLocality: 'Belian, Batam Center, Kota Batam',
    addressRegion: 'Kepulauan Riau',
    postalCode: '29464',
    addressCountry: 'ID',
  },
  // Fallback alamat utama untuk LocalBusiness schema
  address: {
    streetAddress: 'Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7, Baloi Permai',
    addressLocality: 'Batam',
    addressRegion: 'Kepulauan Riau',
    postalCode: '29431',
    addressCountry: 'ID',
  },
  geo: {
    latitude: 1.1186,
    longitude: 104.0532,
  },
  // Jam operasional (sesuai schema openingHoursSpecification)
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    { days: ['Saturday'], opens: '09:00', closes: '15:00' },
  ],
  // Area layanan (9 kecamatan) - Local SEO signal
  serviceAreas: [
    'Batam Center',
    'Baloi Permai',
    'Nagoya',
    'Lubuk Baja',
    'Sekupang',
    'Tiban',
    'Bengkong',
    'Batu Aji',
    'Nongsa',
    'Batu Ampar',
  ],
  // Profil sosial media (sameAs pada Organization schema)
  socials: {
    instagram: 'https://instagram.com/interiorbatam',
    tiktok: 'https://tiktok.com/@interiorbatam',
    facebook: 'https://facebook.com/interiorbatam',
    youtube: 'https://youtube.com/@interiorbatam',
  },
  // Google Maps embed (arah ke Ruko Valley Park / Batam Center)
  mapsEmbed:
    'https://www.google.com/maps?q=Komplek+Ruko+Valley+Park+Batam+Center&output=embed',
  // Entitas utama (dari riset ENTITY.md)
  entityType: 'HomeAndConstructionBusiness',
} as const;

/** Helper: WhatsApp link dengan prefilled text */
export function waLink(message = 'Halo, saya ingin konsultasi gratis mengenai interior di Batam.') {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
