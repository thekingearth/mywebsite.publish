// Toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// Saat hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};


// Toggle class active shopping cart
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};


// klik luar sidbar hilang nav

const hm = document.querySelector('#hamburger-menu');
const sc = document.querySelector('#shopping-cart-button')

document.addEventListener('click', function(e) {
  if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  
  
  if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Form validation
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');

form.addEventListener('keyup', function() {
  for(let i = 0; i < form.elements.length; i++) {
    if(form.elements[i].value.length !== 0) {
      checkoutButton.classList.remove('disabled');
      checkoutButton.classList.add('disabled');
    } else {
      return false;
    }
  }
  checkoutButton.disabled = false;
  checkoutButton.classList.remove('disabled');
});


  
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
    image.src = "books/mybooks.png"; // Pastikan path benar
    image.alt = "books 1";

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

// Pastikan elemen #trigger ada sebelum menambahkan event listener
document.addEventListener("DOMContentLoaded", function () {
    let trigger = document.getElementById("trigger");
    if (trigger) {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();
            showPopup();
        });
    }
});
