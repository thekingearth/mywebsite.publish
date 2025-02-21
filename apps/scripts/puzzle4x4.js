
    let level = 1;
    const maxLevel = 5;
    const puzzleContainer = document.getElementById("puzzle");
    const levelDisplay = document.getElementById("level");
    const moveSound = document.getElementById("moveSound");

    function generatePuzzle(level) {
      const size = 5; // Puzzle 4x4
      const tiles = Array.from({ length: size * size }, (_, i) => i + 1);
      tiles[size * size - 1] = ""; // Empty tile

      // Shuffle tiles
      for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
      }

      // Render tiles
      puzzleContainer.innerHTML = "";
      tiles.forEach((tile, index) => {
        const tileElement = document.createElement("div");
        tileElement.className = "tile";
        if (tile === "") {
          tileElement.classList.add("empty");
        }
        tileElement.textContent = tile;
        tileElement.dataset.index = index;
        puzzleContainer.appendChild(tileElement);
      });
    }

    function isSolved() {
      const tiles = Array.from(puzzleContainer.children);
      const currentOrder = tiles.map((tile) => tile.textContent);
      const correctOrder = [...Array(16).keys()].map((n) => (n + 1).toString());
      correctOrder[15] = ""; // Empty tile
      return JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
    }

    function moveTile(index) {
      const tiles = Array.from(puzzleContainer.children);
      const emptyTileIndex = tiles.findIndex((tile) => tile.classList.contains("empty"));

      const size = 5; // Puzzle 4x4
      const validMoves = [
        emptyTileIndex - size,
        emptyTileIndex + size,
        emptyTileIndex - 1,
        emptyTileIndex + 1,
      ];

      // Prevent invalid moves (left/right edge wrapping)
      if (emptyTileIndex % size === 0) validMoves.splice(validMoves.indexOf(emptyTileIndex - 1), 1);
      if ((emptyTileIndex + 1) % size === 0) validMoves.splice(validMoves.indexOf(emptyTileIndex + 1), 1);

      if (validMoves.includes(index)) {
        // Mainkan efek suara
        moveSound.currentTime = 0; // Reset suara ke awal
        moveSound.play();

        [tiles[emptyTileIndex].textContent, tiles[index].textContent] = [
          tiles[index].textContent,
          tiles[emptyTileIndex].textContent,
        ];
        tiles[emptyTileIndex].classList.toggle("empty");
        tiles[index].classList.toggle("empty");

if (isSolved()) {
          setTimeout(() => {
            // Mainkan efek suara level selesai
            levelCompleteSound.currentTime = 0; // Reset suara ke awal
            levelCompleteSound.play();

            if (level < maxLevel) {
              level++;
              levelDisplay.textContent = level;
              generatePuzzle(level);
            } else {
              alert("Selamat! Anda menyelesaikan semua level!");
            }
          }, 300);
        }
      }
    }

    puzzleContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("tile") && !e.target.classList.contains("empty")) {
        const index = parseInt(e.target.dataset.index, 10);
        moveTile(index);
      }
    });

    generatePuzzle(level);
