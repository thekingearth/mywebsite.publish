// Daftar pertanyaan, jawaban, dan gambar opsional
const questions = [
  { question: "5 + 3 =", answer: 8, image: '../img/question/question000.png' },
  { question: "13 - 6 =", answer: 7, image: '../img/question/question000.png' },
  { question: "15 × 3 =", answer: 45, image: '../img/question/question000.png' },
  { question: "50 ÷ 5 =", answer: 10, image: '../img/question/question000.png' },
  { question: "6 + 5 x 5 =", answer: 31, image: '../img/question/question000.png' },
  { question: "40 - 20 ÷ 5 =", answer: 36, image: '../img/question/question000.png' },
  { question: "4² + 8² =", answer: 80, image: '../img/question/question000.png' },
  { question: "8² × 5² =", answer: 1600, image: '../img/question/question000.png' },
  { question: "7⁵ - 5² × 2⁶ =", answer: 15207, image: '../img/question/question000.png' },
  { question: "648 ÷ 3³ + 5² × 2³ - 12² =", answer: 80, image: '../img/question/question000.png' },
  { question: "(6⁵ ÷ 3⁴ - 95)⁴⁷¹ =", answer: 1, image: '../img/question/question000.png' },
  { question: "Berapakah nilai X ?", answer: 163, image: '../img/question/question012.png' },
  { question: "Berapakah nilai X ?", answer: 60, image: '../img/question/question013.png' },
  { question: "Berapakah nilai X ?", answer: 122, image: '../img/question/question014.png' },
  { question: "Berapakah nilai X ?", answer: 61, image: '../img/question/question015.png' },
  { question: "Berapakah nilai X ?", answer: 185, image: '../img/question/question016.png' },
  { question: "Berapakah nilai Y ?", answer: 3136, image: '../img/question/question017.png' },
  { question: "Silviana = ...", answer: 8, image: '../img/question/question018.png' },
  { question: "Herawati = ...", answer: 8, image: '../img/question/question019.png' },
  { question: "Ratna Sari = ...", answer: 102, image: '../img/question/question020.png' },
  { question: "Shiendhora = ...", answer: 101, image: '../img/question/question021.png' },
  { question: "Cube B = ...", answer: 14, image: '../img/question/question022.png' },
  { question: "Berapakah nilai F ?", answer: 36, image: '../img/question/question023.png' },
  { question: "Berapakah nilai A ?", answer: 104, image: '../img/question/question024.png' },
  { question: "Berapakah nilai F ?", answer: 112, image: '../img/question/question025.png' },
  { question: "Berapakah nilai F ?", answer: 46, image: '../img/question/question026.png' },
  { question: "Berapakah nilai T ?", answer: 38, image: '../img/question/question027.png' },
  { question: "Berapakah nilai Y ?", answer: 72, image: '../img/question/question028.png' },
  // Tambahkan lebih banyak pertanyaan
  ];
// Pertanyaan untuk mengisi total level
for (let i = questions.length + 1; i <= 60; i++) {
  questions.push({ question: `Server Eror #404 ${i}`, answer: i });
  }

  const container = document.getElementById('quiz-container');
  const correctSound = document.getElementById('correct-sound');
  const wrongSound = document.getElementById('wrong-sound');

// Tambahkan audio untuk tombol
const buttonSound = new Audio('../sound/press.mp3'); // Ganti dengan path file suara tombol

// Fungsi untuk memutar suara tombol
function playButtonSound() {
  buttonSound.currentTime = 0; // Reset audio ke awal
  buttonSound.play();
}


  questions.forEach((q, index) => {
    const level = document.createElement('div');
    level.id = `level${index + 1}`;
    level.style.display = index === 0 ? 'block' : 'none';
    
    let imageHTML = q.image ? `<img src="${q.image}" alt="Pertanyaan Gambar" style="max-width: 100%; height: auto;">` : '';
    
    level.innerHTML = `
    <h2>Level ${index + 1}</h2> <br>
    ${imageHTML}
    <p></p><br>
    <p>${q.question}</p><p></p><br>
    <input type="text" id="answer${index + 1}" placeholder="Masukkan jawabanmu..." readonly>
    <p></p><br>
    <p id="feedback${index + 1}" style="color: red;"></p>
  
    <div class="number-buttons">
    ${Array.from({ length: 10 }, (_, i) => `<button onclick="addToInput(${index + 1}, ${i}); playButtonSound();">${i}</button>`).join('')}
    </div>
    <div class="extra-buttons">
    <button class="clear-button" onclick="clearInput(${index + 1}); playButtonSound();">Delete</button>
    <button onclick="checkAnswer(${index + 1}, ${q.answer})">OK </button>
    </div>
    `;
    
    container.appendChild(level);
    });

// Fungsi menambahkan angka ke kolom input
function addToInput(level, number) {
  const input = document.getElementById(`answer${level}`);
  input.value += number;
  }

// Fungsi menghapus isi kolom input
function clearInput(level) {
  const input = document.getElementById(`answer${level}`);
  input.value = '';
  }

//Pop up hasil Jawaban
let results = []; // Array untuk menyimpan hasil jawaban

// Tambahkan data hasil ke array setelah menjawab
function checkAnswer(level, correctAnswer) {
  const input = document.getElementById(`answer${level}`);
  const feedback = document.getElementById(`feedback${level}`);

  if (parseInt(input.value) === correctAnswer) {
    feedback.textContent = '';
    correctSound.play();

    // Tambahkan hasil ke array jika jawaban benar
    results.push({ 
      level: level, 
      question: questions[level - 1].question, 
      answer: correctAnswer, 
      status: 'Benar' 
    });

    // Lanjut ke level berikutnya
    document.getElementById(`level${level}`).style.display = 'none';
    if (level < 60) {
      document.getElementById(`level${level + 1}`).style.display = 'block';
    } else {
      showCompletion();
    }
  } else {
    feedback.textContent = 'Jawabanmu salah, ayo coba lagi.';
    wrongSound.play();

    // Tidak menyimpan ke `results` jika salah
  }
}



// Mengaktifkan audio setelah semua pertanyaan selesai
function showCompletion() {
  document.getElementById('completion').style.display = 'block';
  const audio = document.getElementById('completion-audio');
  audio.muted = false;
  audio.play();
  }





// Fungsi untuk menampilkan pop-up hasil jawaban
function showResultsPopup() {
  const resultsPopup = document.getElementById('results-popup');
  const resultsContent = document.getElementById('results-content');
  resultsContent.innerHTML = results.map(result => `
    <p><strong>${result.level}.</strong> ${result.question} ${result.answer} <br><i> Jawabanmu ${result.status}.</i></p>
  `).join('');
  resultsPopup.style.display = 'block';
}

// Fungsi untuk menutup pop-up hasil
function closeResultsPopup() {
  const resultsPopup = document.getElementById('results-popup');
  resultsPopup.style.display = 'none';
}
