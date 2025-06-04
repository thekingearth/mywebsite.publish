document.addEventListener('DOMContentLoaded', function () {
  const navbarNav = document.querySelector('.navbar-nav');
  const hamburgerMenu = document.querySelector('#hamburger-menu');
  const shoppingCart = document.querySelector('.shopping-cart');
  const shoppingCartButton = document.querySelector('#shopping-cart-button');

  // Toggle class active hamburger menu
  hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle('active');
  };

  // Toggle class active shopping cart
  shoppingCartButton.onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
  };

  // Klik luar untuk sembunyikan nav atau cart
  document.addEventListener('click', function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }

    if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove('active');
    }
  });
});
