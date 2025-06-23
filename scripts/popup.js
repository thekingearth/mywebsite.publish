// Membuat elemen popup secara dinamis
function createPopup() {
    let popupOverlay = document.createElement("div");
    popupOverlay.classList.add("popup-overlay");
    popupOverlay.id = "popup";
    popupOverlay.style.display = "none";

    let popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");

    let closeButton = document.createElement("button");
    closeButton.classList.add("close-popup");
    closeButton.textContent = "Tutup";
    closeButton.onclick = closePopup;

    let heading = document.createElement("h2");
    heading.textContent = "Terima Kasih";

    let paragraph1 = document.createElement("p");
    paragraph1.textContent = "Informasi mengenai stok buku";

    let image = document.createElement("img");
    image.src = "../books/mybooks.png"; // Pastikan path benar
    image.alt = "informasi detail buku";

    let horizontalRule = document.createElement("hr");

    let paragraph2 = document.createElement("p");
    paragraph2.classList.add("popup-paragraph");
    paragraph2.textContent =
        "Mohon maaf atas ketidaknyamanannya, stok produk buku kami saat ini sedang dalam proses penertiban. Mohon kesabarannya selama proses ini berlangsung. Terima kasih atas pengertiannya.";

    popupContent.appendChild(closeButton);
    popupContent.appendChild(heading);
    popupContent.appendChild(paragraph1);
    popupContent.appendChild(image);
    popupContent.appendChild(horizontalRule);
    popupContent.appendChild(paragraph2);

    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);
}

// Fungsi untuk menampilkan popup
function showPopup() {
    let popup = document.getElementById("popup");
    if (!popup) {
        createPopup();
        popup = document.getElementById("popup");
    }
    popup.style.display = "block";
}

// Fungsi untuk menutup popup
function closePopup() {
    let popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    }
}

// Pastikan elemen dengan class "trigger" ada sebelum menambahkan event listener
document.addEventListener("DOMContentLoaded", function () {
    let triggers = document.querySelectorAll(".trigger"); // Menggunakan class "trigger"
    triggers.forEach(trigger => {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();
            showPopup();
        });
    });
});

function loadFooter() {
    document.write(`
        <footer>
            <div class="links">
                <a href="https://www.tintapenaku.com">Home</a> - 
                <a href="../menu/about.html">About</a> - 
                <a href="../menu/disclaim.html">Disclaimer</a> - 
                <a href="../menu/contact.html">Contact</a>
            </div>
            <div class="credit">
                <p>Copyright <a href="https://www.tintapenaku.com">Coretan Penaku &trade;</a>  | &copy; 2025.</p>
            </div>
        </footer>
    `);
}



// Pop up Game
function showIntruksi() {
  document.getElementById('popup-game').style.display = 'block';
  }
function closeIntruksi() {
  document.getElementById('popup-game').style.display = 'none';
  }
  
  
  function showIntruksi() {
  document.getElementById('popup-game').style.display = 'block';
  }
function closeIntruksi() {
  document.getElementById('popup-game').style.display = 'none';
  }
