export interface ServiceCategory {
  id: string; // key pillar artikel
  name: string; // nama kategori / short title layanan
  serviceSlug: string; // slug layanan
  serviceHref: string; // URL penawaran layanan induk
  description: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'kitchen-set',
    name: 'Kitchen Set',
    serviceSlug: 'kitchen-set-batam',
    serviceHref: '/layanan/kitchen-set-batam/',
    description: 'Custom kitchen set anti-lembap, anti-rayap, dan tahan udara pesisir Batam.',
  },
  {
    id: 'rumah-subsidi',
    name: 'Renovasi Rumah Subsidi',
    serviceSlug: 'renovasi-rumah-subsidi-batam',
    serviceHref: '/layanan/renovasi-rumah-subsidi-batam/',
    description: 'Spesialis dapur belakang, talang cor anti-bocor, carport, dan kanopi rapi.',
  },
  {
    id: 'apartemen',
    name: 'Interior Apartemen',
    serviceSlug: 'interior-apartemen-batam',
    serviceHref: '/layanan/interior-apartemen-batam/',
    description: 'Paket turnkey full furnish siap huni, sistem knock-down, dan perizinan BM.',
  },
  {
    id: 'ruang-tamu',
    name: 'Interior Ruang Tamu',
    serviceSlug: 'custom-furniture-ruang-tamu-batam',
    serviceHref: '/layanan/custom-furniture-ruang-tamu-batam/',
    description: 'Backdrop TV gantung kabel tanam, partisi kisi WPC estetik, dan kabinet pajangan.',
  },
  {
    id: 'interior-kantor',
    name: 'Interior Kantor',
    serviceSlug: 'renovasi-interior-komersial-batam',
    serviceHref: '/layanan/renovasi-interior-komersial-batam/',
    description: 'Renovasi kantor ruko, ruang rapat kedap suara, plafon akustik, dan workstation.',
  },
  {
    id: 'kamar-tidur',
    name: 'Interior Kamar Tidur',
    serviceSlug: 'interior-kamar-tidur-wardrobe-batam',
    serviceHref: '/layanan/interior-kamar-tidur-wardrobe-batam/',
    description: 'Dipan storage hidrolik, lemari built-in full plafon, dan meja rias melayang.',
  },
];

// Helper untuk mencari kategori berdasarkan id/pillar (termasuk alias)
export function getCategoryByPillar(pillar: string): ServiceCategory {
  // Alias komersial -> interior-kantor
  const normalizedId = pillar === 'komersial' ? 'interior-kantor' : pillar;
  const found = SERVICE_CATEGORIES.find((c) => c.id === normalizedId);
  if (found) return found;

  // Fallback default
  return SERVICE_CATEGORIES[0];
}
