const klikElements = document.querySelectorAll('.klik');

klikElements.forEach((klik) => {
  klik.addEventListener('click', () => {
    const nextText = klik.nextElementSibling;
    nextText.classList.toggle('hidden-toggle');
    });
  });

// Script Audio
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
  "https://airinerra.github.io/bayyati/qs/71nuh/00intro.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh01.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh02.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh03.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh04.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh05.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh06.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh07.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh08.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh09.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh10.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh11.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh12.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh13.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh14.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh15.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh16.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh17.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh18.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh19.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh20.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh21.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh22.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh23.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh24.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh25.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh26.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh27.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/nuh28.mp3",
  "https://airinerra.github.io/bayyati/qs/71nuh/11end.mp3"
  ];

const titles = [
  "71. Nuh",
  "Nuh 01",
  "Nuh 02",
  "Nuh 03",
  "Nuh 04",
  "Nuh 05",
  "Nuh 06",
  "Nuh 07",
  "Nuh 08",
  "Nuh 09",
  "Nuh 10",
  "Nuh 11",
  "Nuh 12",
  "Nuh 13",
  "Nuh 14",
  "Nuh 15",
  "Nuh 16",
  "Nuh 17",
  "Nuh 18",
  "Nuh 19",
  "Nuh 20",
  "Nuh 21",
  "Nuh 22",
  "Nuh 23",
  "Nuh 24",
  "Nuh 25",
  "Nuh 26",
  "Nuh 27",
  "Nuh 28",
  "71. Nuh"
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
  repeatBtn.style.color = isRepeat ? "#d574de" :"#fd0";
  };

shuffleBtn.onclick = () => {
  isShuffle = !isShuffle;
  shuffleBtn.style.color = isShuffle ? "#d574de" : "#fd0";
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

// choose one Master feather replace
feather.replace();
