
function loadNavbar() {
  const navbarContainer = document.getElementById("nevbarss");

  navbarContainer.innerHTML = `
    <div class="navbar-nav">
      <a href="../menu/produk.html">Produk<span>Me</span></a>
      <a href="../menu/books.html">Books<span>Me</span></a>
      <a href="../menu/minigame.html">Mini<span>game</span></a>
      <a href="../menu/about.html">About<span>Me</span></a>
      <a href="../menu/contact.html">Contact</a>
    </div>
  `;

  const navbarNav = document.querySelector('.navbar-nav');
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const shoppingCart = document.querySelector('.shopping-cart');
  const shoppingCartButton = document.querySelector('#shopping-cart-button');

  // Toggle sidebar
  hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle('active');
  };

  // Toggle shopping cart
  shoppingCartButton.onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
  };

  // Klik di luar sidebar/cart
  document.addEventListener('click', function(e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
    if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove('active');
    }
  });

  // Feather icons
  if (typeof feather !== "undefined") {
    feather.replace();
  }
}

// Form validation
document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();

  const checkoutButton = document.querySelector('.checkout-button');
  checkoutButton.disabled = true;

  const form = document.querySelector('#checkoutForm');
  form.addEventListener('keyup', function() {
    for(let i = 0; i < form.elements.length; i++) {
      if (form.elements[i].value.length === 0) {
        return;
      }
    }
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
  });
});

