export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Program Bantuan Sapi Potong untuk Peternak Jayawijaya',
    excerpt: 'Dinas Peternakan Jayawijaya menyalurkan 50 ekor sapi potong kepada kelompok peternak di berbagai distrik sebagai upaya meningkatkan produktivitas peternakan lokal.',
    content: `<p>Dinas Peternakan Kabupaten Jayawijaya telah resmi menyalurkan bantuan 50 ekor sapi potong kepada kelompok peternak di berbagai distrik. Program ini merupakan bagian dari upaya pemerintah daerah dalam meningkatkan kesejahteraan peternak dan produktivitas peternakan di Papua Pegunungan.</p>

<p>Kepala Dinas Peternakan Jayawijaya menyampaikan bahwa program bantuan ternak ini diharapkan dapat meningkatkan populasi ternak sapi di wilayah Jayawijaya dan memberikan dampak ekonomi yang positif bagi masyarakat peternak.</p>

<p>"Kami berkomitmen untuk terus mendukung peternak lokal melalui berbagai program pemberdayaan. Bantuan sapi potong ini hanya salah satu dari sekian banyak program yang akan kami laksanakan," ujar Kepala Dinas.</p>

<p>Para peternak yang menerima bantuan juga akan mendapatkan pelatihan teknis tentang cara pemeliharaan ternak yang baik, manajemen pakan, dan penanganan kesehatan ternak. Pelatihan ini bertujuan untuk memastikan bahwa ternak yang diberikan dapat tumbuh dengan optimal.</p>`,
    image: '/src/assets/news-cattle.jpg',
    category: 'Sapi',
    date: '15 Oktober 2025',
    author: 'Admin Disnak'
  },
  {
    id: '2',
    title: 'Pelatihan Modern Farming untuk Peternak Unggas',
    excerpt: 'Dinas mengadakan pelatihan teknis budidaya ayam kampung dengan metode modern untuk meningkatkan produksi telur dan daging unggas di wilayah pegunungan.',
    content: `<p>Sebanyak 75 peternak unggas dari berbagai distrik di Kabupaten Jayawijaya mengikuti pelatihan budidaya ayam kampung dengan metode modern yang diselenggarakan oleh Dinas Peternakan.</p>

<p>Pelatihan ini mencakup berbagai materi penting seperti pemilihan bibit unggul, manajemen kandang, pemberian pakan berkualitas, pengendalian penyakit, dan strategi pemasaran hasil ternak.</p>

<p>"Metode modern tidak berarti harus mahal. Kami mengajarkan teknik-teknik yang efisien namun tetap terjangkau untuk kondisi peternak di pegunungan Papua," jelas narasumber pelatihan.</p>

<p>Para peserta juga diberikan starter kit berupa bibit ayam kampung unggul dan panduan teknis tertulis yang dapat dipraktikkan langsung di peternakan masing-masing.</p>`,
    image: '/src/assets/news-poultry.jpg',
    category: 'Unggas',
    date: '12 Oktober 2025',
    author: 'Tim Penyuluhan'
  },
  {
    id: '3',
    title: 'Sukses Ternak Kambing di Dataran Tinggi Papua',
    excerpt: 'Kelompok peternak kambing di Distrik Wamena berhasil meningkatkan populasi ternak hingga 200% dalam setahun dengan menerapkan metode breeding yang tepat.',
    content: `<p>Sebuah kelompok peternak kambing di Distrik Wamena mencatatkan prestasi membanggakan dengan berhasil meningkatkan populasi ternak kambing mereka hingga 200% dalam kurun waktu satu tahun.</p>

<p>Keberhasilan ini diraih melalui penerapan metode breeding yang tepat, manajemen pakan yang baik, dan perawatan kesehatan ternak yang konsisten dengan pendampingan dari petugas penyuluh Dinas Peternakan.</p>

<p>Ketua kelompok peternak menyampaikan bahwa kunci kesuksesan mereka adalah konsistensi dalam menerapkan ilmu yang diberikan saat pelatihan dan rajin berkonsultasi dengan petugas penyuluh.</p>

<p>"Kami juga saling berbagi pengalaman antar anggota kelompok. Kalau ada masalah, kami diskusikan bersama dan cari solusinya," ujar ketua kelompok.</p>

<p>Dinas Peternakan berencana menjadikan kelompok ini sebagai percontohan bagi peternak kambing lainnya di wilayah Jayawijaya.</p>`,
    image: '/src/assets/news-goats.jpg',
    category: 'Kambing & Domba',
    date: '10 Oktober 2025',
    author: 'Reporter Lapangan'
  }
];
