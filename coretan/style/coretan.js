document.addEventListener("DOMContentLoaded", function() {
  const folderPath = '../coretan/';
  const articles = [
    { file: '98-wanita-akan-berbohong-setelah-lebih-dari.html', title: '98% Wanita Akan Berbohong Setelah 10 Percakapan' },
    { file: 'adaptasi-ketenangan-pikiran-hidup-didunia-yang-kacau.html', title: 'Adaptasi Mencari Ketenangan Pikiran dari Dunia yang Kacau' },
    { file: 'bahagia-tidak-perlu-dicari-tetapi-diciptakan.html', title: 'Bahagia Tidak Perlu Dicari Tetapi Diciptakan' },
    { file: 'bahaya-rip-current-arus-laut.html', title: 'Bahaya Rip Current Arus Laut 2 Meter Perdetik' },
    { file: 'belajar-itu-mudah-menjadi-master-itu-tantangan-seumur-hidup.html', title: 'Belajar Itu Mudah Menjadi Master Itu Tantangan Seumur Hidup' },
    { file: 'benang-dan-jarum-menyatukan-antara-simpul-dan-robekan.html', title: 'Benang dan Jarum: Menyatukan Antara Simpul dan Robekan' },
    { file: 'cara-santai-bikin-tulisan-yang-asik-dibaca.html', title: 'Cara Santai Bikin Tulisan yang Asik Dibaca' },
    { file: 'dari-kata-jadi-karya-serunya-nulis.html', title: 'Dari Kata Jadi Karya, Serunya Nulis' },
    { file: 'diam-bukan-berarti-lemah-stop-oversharing.html', title: 'Diam Bukan Berarti Lemah, Stop Oversharing!' },
    { file: 'era-ai-dan-data-pribadi-siapa-yang-mengawasi-pengawas.html', title: 'Era AI dan Data Pribadi: Siapa yang Mengawasi Pengawas?' },
    { file: 'hidup-itu-singkat-maka-buatlah-lebih-berarti.html', title: 'Hidup Ini Terlalu Singkat, Buatlah Lebih Berarti' },
    { file: 'internet-itu-seorang-pelayan-atau-tuan.html', title: 'Internet Itu Tuan Atau Pelayan? Mari Tentukan' },
    { file: 'jaga-kesehatan-mental-dari-pengaruh-orang-toxic.html', title: 'Jaga Kesehatan Mental dari Pengaruh Orang-Orang Toxic' },
    { file: 'jejak-pena-mengapa-tidak-semua-hal-bisa-dihapus.html', title: 'Jejak Pena: Mengapa Tidak Semua Hal Bisa Dihapus?' },
    { file: 'kamu-harus-lebih-dihargai-daripada-kekayaan-materi.html', title: 'Kamu Lebih Berharga daripada Emas' },
    { file: 'kebaikan-berdua-aksi-sosial-teman-halal.html', title: 'Kebaikan Berdua: Aksi Sosial Teman Halal' },
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
    { file: 'teknik-mewing-bisa-memperbaiki-struktur-wajah-atau-hanya-gimik.html', title: 'Teknik Mewing Bisa Memperbaiki Struktur Wajah atau Hanya Gimik?' },
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


// Hero Section
    const section = document.createElement('section');
    section.className = 'hero-art';

    const main = document.createElement('main');
    main.className = 'content';

    main.appendChild(document.createElement('br'));

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Mimpi besar <span>dimulai</span> dari langkah kecil.';
    main.appendChild(h1);

    const p1 = document.createElement('p');
    p1.innerHTML = '&nbsp; &nbsp; &nbsp; &nbsp; Tantangan yang kamu hadapi dimasa sekarang akan <br> membentuk kekuatan, ketangguhan, dan keberanian yang <br> kamu butuhkan untuk masa nanti.';
    main.appendChild(p1);

    main.appendChild(document.createElement('br'));
    main.appendChild(document.createElement('p'));

    section.appendChild(main);

    document.getElementById('hero-art').appendChild(section);


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


// Sidebar Menu Label
function createMenuLinks() {
  const menuContainer = document.getElementById("labels");

  const links = [
    { href: "../../labels/bangkit-dan-bergerak.html", label: "Bangkit & Bergerak" },
    { href: "../../labels/pena-dan-kuas.html", label: "Pena & Kuas" },
    { href: "../../labels/perspektif.html", label: "Perspektif" },
    { href: "../../labels/wawasan-tekno.html", label: "Wawasan Tekno" },
    { href: "../../menu/sitemap.html", label: "Daftar Isi" },
  ];

  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;

    const span = document.createElement("span");
    span.className = "label-name";
    span.textContent = link.label;

    a.appendChild(span);
    menuContainer.appendChild(a);
  });
}

// Panggil saat DOM sudah dimuat
document.addEventListener("DOMContentLoaded", createMenuLinks);


// Lima Postingan Popular
const popularPost = document.createElement('div');
popularPost.className = 'popular-post';

// Data post bisa dimasukkan dalam array untuk efisiensi
const posts = [
  {
   title: 'Bahagia Tidak Perlu Dicari Tetapi Diciptakan',
   href: '../coretan/bahagia-tidak-perlu-dicari-tetapi-diciptakan.html',
   desc: 'Artikel ini menginspirasi untuk menciptakan kebahagiaan melalui cara pandang dan kebiasaan hidup yang sederhana namun lebih bermakna, membentuk ketenangan batin dan hubungan yang harmonis.'
  },
  {
   title: 'Konsistensi Lebih Penting dari pada Motivasi',
   href: '../coretan/konsistensi-lebih-penting-dari-motivasi.html',
   desc: 'Motivasi bersifat fluktuatif dan sering kali bergantung pada suasana hati atau situasi, sementara konsistensi membentuk kebiasaan yang berkelanjutan dan menghasilkan perubahan positif jangka panjang.'
  },
  {
   title: 'Jaga Kesehatan Mental dari Pengaruh Orang-Orang Toxic',
   href: '../coretan/jaga-kesehatan-mental-dari-pengaruh-orang-toxic.html',
   desc: 'Membahas pentingnya menjaga kesehatan mental pada pengaruh negatif dari orang-orang toxic, serta beberapa dampaknya terhadap kesejahteraan emosional dan kualitas hidup secara keseluruhan.'
  },
  {
   title: 'Mengapa Hal Kecil Sering Membekas di Pikiran?',
   href: '../coretan/negativity-bias-mengapa-hal-kecil-sering-membekas.html',
   desc: 'Mengulas alasan psikologis mendalam mengapa hal-hal kecil, seperti komentar sepele atau kejadian sederhana, bisa begitu membekas kuat di pikiran dan memengaruhi respons emosional seseorang.'
  },
  {
   title: 'Ketika Bertanya Lebih Bermakna daripada Menjawab',
   href: '../coretan/ketika-bertanya-lebih-bermakna-daripada-menjawab.html',
   desc: 'Dibandingkan sekadar memberikan jawaban, kemampuan bertanya menunjukkan rasa ingin tahu yang mendalam dan peran aktif dalam proses belajar serta komunikasi yang bermakna dan berkelanjutan.'
  },
];

// Tambahkan masing-masing post ke dalam container
posts.forEach(post => {
  const link = document.createElement('a');
  link.href = post.href;

  const title = document.createElement('h2');
  title.textContent = post.title;

  const para = document.createElement('p');
  para.textContent = post.desc;

  link.appendChild(title);
  popularPost.appendChild(link);
  popularPost.appendChild(para);
});

// Sisipkan ke dalam elemen tertentu di HTML, misalnya <div id="content">
document.getElementById('popular-content').appendChild(popularPost);



// Script untuk audio
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("current");
const durationTime = document.getElementById("duration");
const rewind = document.getElementById("rewind");
const forward = document.getElementById("forward");
const repeatBtn = document.getElementById("repeat");
const shuffleBtn = document.getElementById("shuffle");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const playlist = [
  "https://airinerra.github.io/helloword/playlist/baleylot.mp3",
  "https://airinerra.github.io/helloword/playlist/dolls.mp3",
  "https://airinerra.github.io/helloword/playlist/ambahky.mp3",
  "https://airinerra.github.io/helloword/playlist/entatani.mp3",
  "https://airinerra.github.io/helloword/playlist/goryachaya.mp3",
  "https://airinerra.github.io/helloword/playlist/hafdal.mp3",
  "https://airinerra.github.io/helloword/playlist/hellokitty.mp3",
  "https://airinerra.github.io/helloword/playlist/im.mp3",
  "https://airinerra.github.io/helloword/playlist/living.mp3",
  "https://airinerra.github.io/helloword/playlist/mahasiv.mp3",
  "https://airinerra.github.io/helloword/playlist/muhur.mp3",
  "https://airinerra.github.io/helloword/playlist/slishkim.mp3",
  "https://airinerra.github.io/helloword/playlist/nifsi.mp3",
  "https://airinerra.github.io/helloword/playlist/siahbo.mp3",
  "https://airinerra.github.io/helloword/playlist/touta.mp3",
  "https://airinerra.github.io/helloword/playlist/igrushka.mp3",
  "https://airinerra.github.io/helloword/playlist/sentyabra.mp3"
  ];

const titles = [
  "Bolelut",
  "Dolls",
  "Eam Behky Me Halle",
  "Enta Teni",
  "Goryacheya Gremucheya",
  "Hafdel",
  "Hello Kitti",
  "Jerusalem",
  "Living Hell",
  "Ma Ashiv Lecha",
  "Mehur",
  "My Sleshkim Raznyye",
  "Nefsi Aoulhalek",
  "Sheyohavu Ote Kecha",
  "Teuta",
  "Ya Ne Igreshka",
  "Ze Sentyebreya"
  ];

let index = 0;
let isShuffle = false;
let isRepeat = false;

audio.onloadedmetadata = () => {
  durationTime.textContent = formatTime(audio.duration);
  progress.max = audio.duration;
  };

audio.ontimeupdate = () => {
  progress.value = audio.currentTime;
  currentTime.textContent = formatTime(audio.currentTime);
  };

progress.oninput = () => {
  audio.currentTime = progress.value;
  };

playPauseBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i data-feather="pause"></i>';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i data-feather="play"></i>';
  }
  feather.replace();
};

rewind.onclick = () => {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
  };

forward.onclick = () => {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
  };

repeatBtn.onclick = () => {
  isRepeat = !isRepeat;
  repeatBtn.style.color = isRepeat ? "#080" :"#d12";
  };

shuffleBtn.onclick = () => {
  isShuffle = !isShuffle;
  shuffleBtn.style.color = isShuffle ? "#080" : "#d12";
  };

prevBtn.onclick = () => {
  index = (index - 1 + playlist.length) % playlist.length;
  loadSong();
  };

nextBtn.onclick = () => {
  index = isShuffle ? Math.floor(Math.random() * playlist.length) : (index + 1) % playlist.length;
  loadSong();
  };

audio.onended = () => {
  if (isRepeat) {
    audio.currentTime = 0;
    audio.play();
    } else {
      nextBtn.click();
      }
  };

function loadSong() {
  audio.src = playlist[index];
  document.getElementById("songTitle").textContent = titles[index];
  audio.play();
  playPauseBtn.innerHTML = '<i data-feather="pause"></i>';
  feather.replace();
}


function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
progress.addEventListener('input', () => {
  const percent = (progress.value / progress.max) * 100;
  progress.style.setProperty('--progress', percent + '%');
});
audio.ontimeupdate = () => {
  progress.value = audio.currentTime;
  currentTime.textContent = formatTime(audio.currentTime);
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.setProperty('--progress', percent + '%');
};

// Elemen Artist 
const artist = document.createElement("p");
artist.textContent = "Playlist | 10";
document.getElementById("artist-song").appendChild(artist);

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



