document.addEventListener("DOMContentLoaded", function() {
  const folderPath = '../coretan/';
  const articles = [
    { file: '98-wanita-akan-berbohong-setelah-lebih-dari.html', title: '98% Wanita Akan Berbohong Setelah 10 Percakapan' },
    { file: 'adaptasi-ketenangan-pikiran-hidup-didunia-yang-kacau.html', title: 'Adaptasi Mencari Ketenangan Pikiran dari Dunia yang Kacau' },
    { file: 'bahagia-tidak-perlu-dicari-tetapi-diciptakan.html', title: 'Bahagia Tidak Perlu Dicari Tetapi Diciptakan' },
    { file: 'bahaya-rip-current-arus-laut.html', title: 'Bahaya Rip Current Arus Laut 2 Meter Perdetik' },
    { file: 'belajar-itu-mudah-menjadi-master-itu-tantangan-seumur-hidup.html', title: 'Belajar Itu Mudah Menjadi Master Itu Tantangan Seumur Hidup' },
    { file: 'cara-santai-bikin-tulisan-yang-asik-dibaca.html', title: 'Cara Santai Bikin Tulisan yang Asik Dibaca' },
    { file: 'dari-kata-jadi-karya-serunya-nulis.html', title: 'Dari Kata Jadi Karya, Serunya Nulis' },
    { file: 'diam-bukan-berarti-lemah-stop-oversharing.html', title: 'Diam Bukan Berarti Lemah, Stop Oversharing!' },
    { file: 'hidup-itu-singkat-maka-buatlah-lebih-berarti.html', title: 'Hidup Ini Terlalu Singkat, Buatlah Lebih Berarti' },
    { file: 'internet-itu-seorang-pelayan-atau-tuan.html', title: 'Internet Itu Tuan Atau Pelayan? Mari Tentukan' },
    { file: 'jaga-kesehatan-mental-dari-pengaruh-orang-toxic.html', title: 'Jaga Kesehatan Mental dari Pengaruh Orang-Orang Toxic' },
    { file: 'kamu-harus-lebih-dihargai-daripada-kekayaan-materi.html', title: 'Kamu Lebih Berharga daripada Emas' },
    { file: 'kenapa-kerja-di-luar-negeri.html', title: 'Orang Indonesia Kerja di Luar Negeri, Kenapa Sih?' },
    { file: 'kesendirian-yang-menguatkan-merangkul-diri-sebelum-mencintai-orang-lain.html', title: 'Cara Merangkul Diri Sebelum Mencintai Orang Lain' },
    { file: 'ketahui-bakat-terpendammu.html', title: 'Ketahui Bakat Terpendammu' },
    { file: 'ketika-bertanya-lebih-bermakna-daripada-menjawab.html', title: 'Ketika Bertanya Lebih Bermakna daripada Menjawab' },
    { file: 'khodam-warisan-leluhur-dan-bisa-diturunin.html', title: 'Khodam Warisan Leluhur dan Bisa Diturunin' },
    { file: 'konsistensi-lebih-penting-dari-motivasi.html', title: 'Konsistensi Lebih Penting dari pada Motivasi' },
    { file: 'kisah-inspiratif-untuk-semangat.hidup.html', title: 'Kisah Inspiratif yang Bikin Hidup Lebih Bersemangat' },
    { file: 'logika-formal-dan-informal-membentuk-cara-berpikir-dan-bertindak.html', title: 'Logika Formal dan Informal: Membentuk Cara Berpikir dan Bertindak' },
    { file: 'manipulasi-emosional-ketika-kata-kata-jadi-senjata.html', title: 'Ketika Kata-Kata Jadi Senjata Orang Manipulatif' },
    { file: 'mengapa-brain-root-semakin-umum-dikalangan-anak-muda.html', title: 'Mengapa Kemerosotan Mental Sering Terjadi Pada Remaja?' },
    { file: 'mengapa-canva-menjadi-alat-desain-favorit-belakangan-ini.html', title: 'Mengapa Canva Menjadi Alat Desain Favorit Belakangan Ini' },
    { file: 'mengapa-uang-susah-didapatkan-tapi-mudah-dihabiskan.html', title: 'Mengapa Uang Susah Didapatkan Tapi Mudah Dihabiskan?' },
    { file: 'menulis-itu-healing-tumpahin-pikiran-legain-hati.html', title: 'Menulis Itu Healing! Tumpahin Pikiran, Legain Hati' },
    { file: 'negativity-bias-mengapa-hal-kecil-sering-membekas.html', title: 'Mengapa Sekecil Apapun Hal Buruk Selalu Membekas di Pikiran?' },
    { file: 'rahasia-cepat-paham-saat-belajar.html', title: 'Rahasia Cepat Paham Saat Belajar' },
    { file: 'saat-hidup-dikuasai-pandangan-orang-lain.html', title: 'Saat Hidup Dikuasai Pandangan Orang Lain' },
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



// Widget Jam Digital
function updateClock() {
  const now = new Date();

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[now.getDay()];
  
  document.getElementById('day-name').innerText = dayName;

  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourDeg = (hour % 12) * 30 + (minute / 2);
  const minuteDeg = minute * 6;
  const secondDeg = second * 6;

  document.getElementById('hour').style.transform = `translateX(-50%) translateY(0) rotate(${hourDeg}deg)`;
  document.getElementById('minute').style.transform = `translateX(-50%) translateY(0) rotate(${minuteDeg}deg)`;
  document.getElementById('second').style.transform = `translateX(-50%) translateY(0) rotate(${secondDeg}deg)`;
  }

  setInterval(updateClock, 1000);
  updateClock();



// Widget Quotes Text
const quotes = [
    '"Hidup itu 10% apa yang terjadi padamu dan 90% bagaimana kamu menyikapinya."',
    '"Jangan biarkan kegagalan menghalangi langkahmu, itu adalah pelajaran berharga."',
    '"Kebahagiaan bukan sesuatu yang siap pakai. Itu datang dari tindakan kita sendiri."',
    '"Keberanian bukan berarti tidak merasa takut, tetapi tetap maju meskipun merasa takut."',
    '"Kesuksesan bukanlah kunci kebahagiaan. Kebahagiaan adalah kunci kesuksesan."',
    '"Jangan menunggu momen sempurna, ambil setiap momen dan jadikan itu sempurna."'
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.getElementById('new-quote').addEventListener('click', function() {
    const quoteText = document.getElementById('quote-text');
    quoteText.textContent = getRandomQuote();
});

// Display an initial random quote
document.getElementById('quote-text').textContent = getRandomQuote();
