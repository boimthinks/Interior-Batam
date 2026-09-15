export interface AutolinkRule {
  phrase: string;
  url: string;
}

export const AUTOLINK_RULES: AutolinkRule[] = [
  // 1. Homepage Interior Batam (Seluruh variasi kata kunci menuju Homepage)
  { phrase: 'jasa desain & kontraktor interior Batam', url: '/' },
  { phrase: 'jasa desain dan kontraktor interior Batam', url: '/' },
  { phrase: 'kontraktor interior di Batam', url: '/' },
  { phrase: 'kontraktor interior Batam', url: '/' },
  { phrase: 'jasa desain interior di Batam', url: '/' },
  { phrase: 'jasa desain interior Batam', url: '/' },
  { phrase: 'jasa interior di Batam', url: '/' },
  { phrase: 'jasa interior Batam', url: '/' },
  { phrase: 'desain interior di Batam', url: '/' },
  { phrase: 'desain interior Batam', url: '/' },
  { phrase: 'workshop interior Batam', url: '/' },
  { phrase: 'bengkel interior Batam', url: '/' },
  { phrase: 'tim interior Batam', url: '/' },
  { phrase: 'interior di Batam', url: '/' },
  { phrase: 'interior Batam', url: '/' },

  // 2. Layanan Kitchen Set
  { phrase: 'jasa pembuatan kitchen set Batam', url: '/layanan/kitchen-set-batam/' },
  { phrase: 'jasa kitchen set Batam', url: '/layanan/kitchen-set-batam/' },
  { phrase: 'kitchen set aluminium Batam', url: '/layanan/kitchen-set-batam/' },
  { phrase: 'kitchen set minimalis Batam', url: '/layanan/kitchen-set-batam/' },
  { phrase: 'kitchen set Batam', url: '/layanan/kitchen-set-batam/' },
  { phrase: 'kitchen set aluminium', url: '/layanan/kitchen-set-batam/' },
  { phrase: 'kitchen set minimalis', url: '/layanan/kitchen-set-batam/' },
  { phrase: 'kitchen set custom', url: '/layanan/kitchen-set-batam/' },
  { phrase: 'kitchen set', url: '/layanan/kitchen-set-batam/' },

  // 3. Layanan Renovasi Rumah Subsidi
  { phrase: 'jasa renovasi rumah subsidi Batam', url: '/layanan/renovasi-rumah-subsidi-batam/' },
  { phrase: 'renovasi rumah subsidi Batam', url: '/layanan/renovasi-rumah-subsidi-batam/' },
  { phrase: 'dapur belakang rumah subsidi', url: '/layanan/renovasi-rumah-subsidi-batam/' },
  { phrase: 'dapur rumah subsidi Batam', url: '/layanan/renovasi-rumah-subsidi-batam/' },
  { phrase: 'renovasi rumah subsidi', url: '/layanan/renovasi-rumah-subsidi-batam/' },
  { phrase: 'rumah subsidi Batam', url: '/layanan/renovasi-rumah-subsidi-batam/' },
  { phrase: 'dapur rumah subsidi', url: '/layanan/renovasi-rumah-subsidi-batam/' },

  // 4. Layanan Interior Apartemen
  { phrase: 'jasa desain interior apartemen Batam', url: '/layanan/interior-apartemen-batam/' },
  { phrase: 'jasa interior apartemen Batam', url: '/layanan/interior-apartemen-batam/' },
  { phrase: 'interior apartemen Batam', url: '/layanan/interior-apartemen-batam/' },
  { phrase: 'paket interior apartemen Batam', url: '/layanan/interior-apartemen-batam/' },
  { phrase: 'fit out apartemen Batam', url: '/layanan/interior-apartemen-batam/' },
  { phrase: 'interior studio Batam', url: '/layanan/interior-apartemen-batam/' },
  { phrase: 'interior apartemen', url: '/layanan/interior-apartemen-batam/' },

  // 5. Layanan Interior Ruang Tamu & Custom Furniture
  { phrase: 'jasa custom furniture ruang tamu Batam', url: '/layanan/custom-furniture-ruang-tamu-batam/' },
  { phrase: 'custom furniture ruang tamu Batam', url: '/layanan/custom-furniture-ruang-tamu-batam/' },
  { phrase: 'interior ruang tamu Batam', url: '/layanan/custom-furniture-ruang-tamu-batam/' },
  { phrase: 'backdrop TV gantung Batam', url: '/layanan/custom-furniture-ruang-tamu-batam/' },
  { phrase: 'backdrop TV Batam', url: '/layanan/custom-furniture-ruang-tamu-batam/' },
  { phrase: 'partisi ruangan Batam', url: '/layanan/custom-furniture-ruang-tamu-batam/' },
  { phrase: 'partisi kisi WPC', url: '/layanan/custom-furniture-ruang-tamu-batam/' },
  { phrase: 'custom furniture ruang tamu', url: '/layanan/custom-furniture-ruang-tamu-batam/' },
  { phrase: 'interior ruang tamu', url: '/layanan/custom-furniture-ruang-tamu-batam/' },
  { phrase: 'backdrop TV gantung', url: '/layanan/custom-furniture-ruang-tamu-batam/' },
  { phrase: 'backdrop TV', url: '/layanan/custom-furniture-ruang-tamu-batam/' },

  // 6. Layanan Interior Kantor
  { phrase: 'jasa renovasi interior kantor Batam', url: '/layanan/renovasi-interior-komersial-batam/' },
  { phrase: 'jasa interior kantor Batam', url: '/layanan/renovasi-interior-komersial-batam/' },
  { phrase: 'renovasi interior ruko kantor Batam', url: '/layanan/renovasi-interior-komersial-batam/' },
  { phrase: 'renovasi ruko kantor Batam', url: '/layanan/renovasi-interior-komersial-batam/' },
  { phrase: 'interior kantor Batam', url: '/layanan/renovasi-interior-komersial-batam/' },
  { phrase: 'partisi kedap suara kantor', url: '/layanan/renovasi-interior-komersial-batam/' },
  { phrase: 'ruang rapat kedap suara', url: '/layanan/renovasi-interior-komersial-batam/' },
  { phrase: 'desain interior kantor', url: '/layanan/renovasi-interior-komersial-batam/' },
  { phrase: 'interior kantor', url: '/layanan/renovasi-interior-komersial-batam/' },
  { phrase: 'renovasi kantor', url: '/layanan/renovasi-interior-komersial-batam/' },

  // 7. Layanan Interior Kamar Tidur
  { phrase: 'jasa desain interior kamar tidur Batam', url: '/layanan/interior-kamar-tidur-wardrobe-batam/' },
  { phrase: 'jasa interior kamar tidur Batam', url: '/layanan/interior-kamar-tidur-wardrobe-batam/' },
  { phrase: 'interior kamar tidur Batam', url: '/layanan/interior-kamar-tidur-wardrobe-batam/' },
  { phrase: 'lemari wardrobe custom Batam', url: '/layanan/interior-kamar-tidur-wardrobe-batam/' },
  { phrase: 'dipan storage hidrolik Batam', url: '/layanan/interior-kamar-tidur-wardrobe-batam/' },
  { phrase: 'dipan storage Batam', url: '/layanan/interior-kamar-tidur-wardrobe-batam/' },
  { phrase: 'interior kamar tidur', url: '/layanan/interior-kamar-tidur-wardrobe-batam/' },
  { phrase: 'wardrobe custom Batam', url: '/layanan/interior-kamar-tidur-wardrobe-batam/' },
  { phrase: 'dipan storage hidrolik', url: '/layanan/interior-kamar-tidur-wardrobe-batam/' },
  { phrase: 'dipan storage', url: '/layanan/interior-kamar-tidur-wardrobe-batam/' },
  { phrase: 'wardrobe custom', url: '/layanan/interior-kamar-tidur-wardrobe-batam/' },
];

// Pastikan keyword terpanjang selalu dicocokkan terlebih dahulu
export const SORTED_AUTOLINK_RULES = [...AUTOLINK_RULES].sort(
  (a, b) => b.phrase.length - a.phrase.length
);
