document.addEventListener("DOMContentLoaded", function() {
  const folderPath = '../coretan/';
  const articles = [
    { file: '98-wanita-akan-berbohong-setelah-lebih-dari.html', title: '98% Wanita Akan Berbohong Setelah 10 Percakapan' },
    { file: 'adaptasi-ketenangan-pikiran-hidup-didunia-yang-kacau.html', title: 'Adaptasi Mencari Ketenangan Pikiran dari Dunia yang Kacau' },
    { file: 'bahagia-tidak-perlu-dicari-tetapi-diciptakan.html', title: 'Bahagia Tidak Perlu Dicari Tetapi Diciptakan' },
    { file: 'bahaya-rip-current-arus-laut.html', title: 'Bahaya Rip Current Arus Laut 2 Meter Perdetik' },
    { file: 'cara-santai-bikin-tulisan-yang-asik-dibaca.html', title: 'Cara Santai Bikin Tulisan yang Asik Dibaca' },
    { file: 'dari-kata-jadi-karya-serunya-nulis.html', title: 'Dari Kata Jadi Karya, Serunya Nulis' },
    { file: 'diam-bukan-berarti-lemah-stop-oversharing.html', title: 'Diam Bukan Berarti Lemah, Stop Oversharing!' },
    { file: 'hidup-itu-singkat-maka-buatlah-lebih-berarti.html', title: 'Hidup Ini Terlalu Singkat, Buatlah Lebih Berarti' },
    { file: 'jaga-kesehatan-mental-dari-pengaruh-orang-toxic.html', title: 'Jaga Kesehatan Mental dari Pengaruh Orang-Orang Toxic' },
    { file: 'kenapa-kerja-di-luar-negeri.html', title: 'Orang Indonesia Kerja di Luar Negeri, Kenapa Sih?' },
    { file: 'ketahui-bakat-terpendammu.html', title: 'Ketahui Bakat Terpendammu' },
    { file: 'khodam-warisan-leluhur-dan-bisa-diturunin.html', title: 'Khodam Warisan Leluhur dan Bisa Diturunin' },
    { file: 'konsistensi-lebih-penting-dari-motivasi.html', title: 'Konsistensi Lebih Penting dari pada Motivasi' },
    { file: 'kisah-inspiratif-untuk-semangat.hidup.html', title: 'Kisah Inspiratif yang Bikin Hidup Lebih Bersemangat' },
    { file: 'manipulasi-emosional-ketika-kata-kata-jadi-senjata.html', title: 'Ketika Kata-Kata Jadi Senjata Orang Manipulatif' },
    { file: 'menulis-itu-healing-tumpahin-pikiran-legain-hati.html', title: 'Menulis Itu Healing! Tumpahin Pikiran, Legain Hati' },
    { file: 'negativity-bias-mengapa-hal-kecil-sering-membekas.html', title: 'Mengapa Sekecil Apapun Hal Buruk Selalu Membekas di Pikiran?' },
    { file: 'rahasia-cepat-paham-saat-belajar.html', title: 'Rahasia Cepat Paham Saat Belajar' },
    { file: 'sangat-rugi-nonton-video-alur-film.html', title: 'Sangat Rugi Nonton Video Alur Film' },
    { file: 'self-discovery-perjalanan-menemukan-makna-hidup.html', title: 'Self Discovery Perjalanan Menemukan Tujuan Hidup' },
    { file: 'seni-mengendalikan-diri-stoikisme-rahasia-kebahagiaan.html', title: 'Seni Mengendalikan Diri Stoikisme Rahasia Kebahagiaan' },
    { file: 'seni-rahasia-menghadapi-wanita-ngambek.html', title: 'Rahasia Menghadapi Wanita Suka Ngambek' },
    { file: 'sibuk-seharian-tapi-hasil-nol-beralih-produktif.html', title: 'Sibuk Seharian Tapi Hasil Nol? Saatnya Beralih ke Produktif' },
    { file: 'stop-comparing-yourself-fokus-pada-pertumbuhan.html', title: 'Stop Comparing Yourself, Berhenti Membandingkan Diri' },
    { file: 'stop-minder-langkah-simpel-buat-up.html', title: 'Stop Minder! Langkah simpel buat Upgrade Diri' },
    { file: 'upgrade-diri-perjalanan-menuju-kedewasaan.html', title: 'Upgrade diri, Perjalanan Menuju Kedewasaan' }
    ];

  const listContainer = document.getElementById("related-artikel");
  // Acak array artikel dengan metode sort dan Math.random
  const shuffled = articles.sort(() => 0.5 - Math.random());
  
  // Ambil 5 artikel dari hasil pengacakan
  const selectedArticles = shuffled.slice(0, 5);

  // Render artikel terpilih ke dalam list
  selectedArticles.forEach(article => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = folderPath + article.file;
    link.textContent = article.title;
    listItem.appendChild(link);
    listContainer.appendChild(listItem);
   });
  });
