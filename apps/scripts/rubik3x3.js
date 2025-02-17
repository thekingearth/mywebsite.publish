
    // Struktur Rubik: 6 sisi (U, D, L, R, F, B)
    let rubik = {
      U: Array(9).fill('white'),
      D: Array(9).fill('yellow'),
      L: Array(9).fill('orange'),
      R: Array(9).fill('red'),
      F: Array(9).fill('green'),
      B: Array(9).fill('blue'),
    };

    const rubikContainer = document.getElementById('rubik-container');
    const winSound = document.getElementById('win-sound');


    // Render Rubik ke layar
    function renderRubik() {
      rubikContainer.innerHTML = '';
      Object.keys(rubik).forEach(face => {
        const faceDiv = document.createElement('div');
        faceDiv.className = 'rubik-face';
        rubik[face].forEach(color => {
          const cell = document.createElement('div');
          cell.className = `rubik-cell ${color}`;
          faceDiv.appendChild(cell);
        });
        rubikContainer.appendChild(faceDiv);
      });
    }

    // Rotasi array sisi Rubik (90 derajat searah jarum jam)
    function rotateArray(faceArray) {
      return [
        faceArray[6], faceArray[3], faceArray[0],
        faceArray[7], faceArray[4], faceArray[1],
        faceArray[8], faceArray[5], faceArray[2],
      ];
    }
    
    
    // Fungsi untuk memutar sisi Rubik
    function rotateFace(face) {
      rubik[face] = rotateArray(rubik[face]);
      renderRubik();
      checkSolved();
    }

    // Fungsi untuk mengacak Rubik
    function shuffleRubik() {
      const moves = ['U', 'D', 'L', 'R', 'F', 'B'];
      for (let i = 0; i < 20; i++) {
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        rotateFace(randomMove);
      }
    }
    
    // Fungsi untuk memeriksa apakah Rubik sudah terselesaikan
    function checkSolved() {
      const isSolved = Object.keys(rubik).every(face => 
        rubik[face].every(color => color === rubik[face][0])
      );
      if (isSolved) {
        winSound.play(); // Putar musik
        alert('Selamat! Anda berhasil menyelesaikan Rubik!');
      }
    }

    // Inisialisasi Rubik
    renderRubik();
    
    

    // Fungsi untuk memutar sisi Rubik
    function rotateFace(face) {
      // Rotasi sisi yang dipilih
      rubik[face] = rotateArray(rubik[face]);

      // Rotasi sisi yang berhubungan
      if (face === 'U') {
        const temp = rubik.F.slice(0, 3);
        rubik.F.splice(0, 3, ...rubik.R.slice(0, 3));
        rubik.R.splice(0, 3, ...rubik.B.slice(0, 3));
        rubik.B.splice(0, 3, ...rubik.L.slice(0, 3));
        rubik.L.splice(0, 3, ...temp);
      } else if (face === 'D') {
        const temp = rubik.F.slice(6, 9);
        rubik.F.splice(6, 9, ...rubik.L.slice(6, 9));
        rubik.L.splice(6, 9, ...rubik.B.slice(6, 9));
        rubik.B.splice(6, 9, ...rubik.R.slice(6, 9));
        rubik.R.splice(6, 9, ...temp);
      } else if (face === 'L') {
        const temp = [rubik.U[0], rubik.U[3], rubik.U[6]];
        [rubik.U[0], rubik.U[3], rubik.U[6]] = [rubik.F[0], rubik.F[3], rubik.F[6]];
        [rubik.F[0], rubik.F[3], rubik.F[6]] = [rubik.D[0], rubik.D[3], rubik.D[6]];
        [rubik.D[0], rubik.D[3], rubik.D[6]] = [rubik.B[8], rubik.B[5], rubik.B[2]];
        [rubik.B[8], rubik.B[5], rubik.B[2]] = temp;
      } else if (face === 'R') {
        const temp = [rubik.U[2], rubik.U[5], rubik.U[8]];
        [rubik.U[2], rubik.U[5], rubik.U[8]] = [rubik.B[6], rubik.B[3], rubik.B[0]];
        [rubik.B[6], rubik.B[3], rubik.B[0]] = [rubik.D[2], rubik.D[5], rubik.D[8]];
        [rubik.D[2], rubik.D[5], rubik.D[8]] = [rubik.F[2], rubik.F[5], rubik.F[8]];
        [rubik.F[2], rubik.F[5], rubik.F[8]] = temp;
      } else if (face === 'F') {
        const temp = [rubik.U[6], rubik.U[7], rubik.U[8]];
        [rubik.U[6], rubik.U[7], rubik.U[8]] = [rubik.L[8], rubik.L[5], rubik.L[2]];
        [rubik.L[8], rubik.L[5], rubik.L[2]] = [rubik.D[2], rubik.D[1], rubik.D[0]];
        [rubik.D[2], rubik.D[1], rubik.D[0]] = [rubik.R[6], rubik.R[3], rubik.R[0]];
        [rubik.R[6], rubik.R[3], rubik.R[0]] = temp;
      } else if (face === 'B') {
        const temp = [rubik.U[0], rubik.U[1], rubik.U[2]];
        [rubik.U[0], rubik.U[1], rubik.U[2]] = [rubik.R[2], rubik.R[5], rubik.R[8]];
        [rubik.R[2], rubik.R[5], rubik.R[8]] = [rubik.D[8], rubik.D[7], rubik.D[6]];
        [rubik.D[8], rubik.D[7], rubik.D[6]] = [rubik.L[0], rubik.L[3], rubik.L[6]];
        [rubik.L[0], rubik.L[3], rubik.L[6]] = temp;
      }

      renderRubik();
    }

    // Inisialisasi Rubik
    renderRubik();
    
// Tambahkan audio untuk tombol
// Ambil elemen audio berdasarkan ID
const buttonSound = document.getElementById('buttonSound');

// Fungsi untuk memutar suara tombol
function playButtonSound() {
  buttonSound.currentTime = 0; // Reset audio ke awal
  buttonSound.play();
}

// Tambahkan event listener ke semua tombol dengan kelas 'play-sound'
const buttons = document.querySelectorAll('.play-pressbtn');
buttons.forEach(button => {
  button.addEventListener('click', playButtonSound);
});
