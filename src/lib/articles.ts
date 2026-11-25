/**
 * Penyaring status artikel.
 *
 * Semua halaman yang menampilkan artikel WAJIB memakai helper ini, supaya
 * artikel berstatus draft tidak ikut dibangun dan tidak ikut terdeploy.
 *
 * Aturannya sederhana:
 *   - draft: true  -> tidak dibangun sama sekali (404 di hosting, tidak masuk sitemap)
 *   - draft: false -> dibangun, apa pun tanggal pubDate-nya
 *
 * Tanggal TIDAK dipakai untuk menyaring. Tanggal hanya label yang tampil di
 * halaman. Kapan sebuah artikel benar-benar tayang sepenuhnya ditentukan oleh
 * kapan Anda mengubah draft menjadi false lalu menjalankan deploy.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;

/** Ambil artikel yang layak tayang (bukan draft). */
export async function getPublishedArticles(): Promise<Article[]> {
  const all = await getCollection('articles');
  return all.filter((a) => !a.data.draft);
}

/** Urutkan artikel dari tanggal terbaru ke terlama. */
export function sortByDateDesc(items: Article[]): Article[] {
  return [...items].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Ambil artikel terkait dari pilar yang sama, untuk blok "artikel lain". */
export function getRelated(
  items: Article[],
  current: Article,
  limit = 4
): Article[] {
  return sortByDateDesc(
    items.filter(
      (a) =>
        a.id !== current.id &&
        (a.data.pillar === current.data.pillar ||
          (current.data.pillar === 'komersial' && a.data.pillar === 'interior-kantor') ||
          (current.data.pillar === 'interior-kantor' && a.data.pillar === 'komersial'))
    )
  ).slice(0, limit);
}
