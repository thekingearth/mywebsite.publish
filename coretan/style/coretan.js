
  import artikelData from '../../scripts/artdata.js'; // path data artikel

  document.addEventListener("DOMContentLoaded", function () {
    const folderPath = '../coretan/';
    const listContainer = document.getElementById("related-artikel");

    // Acak array artikel
    const shuffled = artikelData.sort(() => 0.5 - Math.random());
    const selectedArticles = shuffled.slice(0, 5);

    // Render
    selectedArticles.forEach(article => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = article.link;
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
const jamdigital = document.createElement("div");
jamdigital.className = "jamdigital";

const clockwidget = document.createElement("div");
clockwidget.className = "clockwidget";

const clock = document.createElement("div");
clock.className = "clock";

const day = document.createElement("div");
day.className = "day";
day.id = "day-name";

const hour = document.createElement("div");
hour.className = "hour";
hour.id = "hour";

const minute = document.createElement("div");
minute.className = "minute";
minute.id = "minute";

const second = document.createElement("div");
second.className = "second";
second.id = "second";

const center = document.createElement("div");
center.className = "center";

// Susun struktur elemen
clock.appendChild(day);
clock.appendChild(hour);
clock.appendChild(minute);
clock.appendChild(second);
clock.appendChild(center);

clockwidget.appendChild(clock);
jamdigital.appendChild(clockwidget);

document.body.appendChild(jamdigital);
document.querySelector("#clocksdb").appendChild(jamdigital);


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
const songTitle = document.getElementById("songTitle");
const artistSong = document.getElementById("artist-song");

let playlist = [];
let titles = [];
let index = 0;
let isShuffle = false;
let isRepeat = false;
let isPlaying = false;
let currentPlaylistNumber = 1;

// Fungsi waktu
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update durasi dan progress
audio.onloadedmetadata = () => {
  durationTime.textContent = formatTime(audio.duration);
  progress.max = audio.duration;
};

audio.ontimeupdate = () => {
  progress.value = audio.currentTime;
  currentTime.textContent = formatTime(audio.currentTime);
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.setProperty('--progress', percent + '%');
};

// Geser progress bar
progress.oninput = () => {
  audio.currentTime = progress.value;
};

// Play/Pause
playPauseBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<i data-feather="pause"></i>';
  } else {
    audio.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<i data-feather="play"></i>';
  }
  feather.replace();
};

// Rewind dan Forward
rewind.onclick = () => {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
};
forward.onclick = () => {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
};

// Repeat dan Shuffle
repeatBtn.onclick = () => {
  isRepeat = !isRepeat;
  repeatBtn.style.color = isRepeat ? "#080" : "#d12";
};
shuffleBtn.onclick = () => {
  isShuffle = !isShuffle;
  shuffleBtn.style.color = isShuffle ? "#080" : "#d12";
};

// Prev dan Next
prevBtn.onclick = () => {
  index = (index - 1 + playlist.length) % playlist.length;
  loadSong();
};
nextBtn.onclick = () => {
  index = isShuffle
    ? Math.floor(Math.random() * playlist.length)
    : (index + 1) % playlist.length;
  loadSong();
};

// Saat lagu selesai
audio.onended = () => {
  if (isRepeat) {
    audio.currentTime = 0;
    audio.play();
  } else {
    nextBtn.click();
  }
};

// Script untuk loading lagu
function loadSong() {
  audio.src = playlist[index];
  songTitle.textContent = titles[index];
  if (isPlaying) {
    audio.play();
    playPauseBtn.innerHTML = '<i data-feather="pause"></i>';
  } else {
    playPauseBtn.innerHTML = '<i data-feather="play"></i>';
  }
  feather.replace();
}

// Script untuk ganti playlist
async function loadPlaylist(number) {
  try {
    const module = await import(`../../songs/playlist${number}.js`);
    playlist = module.playlist;
    titles = module.titles;
    index = 0;
    currentPlaylistNumber = number;
    loadSong();
    
    const formattedNumber = number.toString().padStart(2, '0');
    artistSong.innerHTML = `Playlist | ${formattedNumber} <br> <button class="nextplay">Next Playlist</button>`;
  } catch (err) {
    console.error("Gagal memuat playlist", err);
  }
}


// Tombol untuk ganti playlist
artistSong.onclick = () => {
  const nextNumber = currentPlaylistNumber === 7 ? 1 : currentPlaylistNumber + 1;
  loadPlaylist(nextNumber);
};

loadPlaylist(1);


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



