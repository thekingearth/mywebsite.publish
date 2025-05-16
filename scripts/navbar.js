feather.replace();
fetch('../menu/navbar.html')
.then(res => res.text())
.then(html => {
  const navbarNav = document.querySelector('.navbar-nav');
      const shoppingCart = document.querySelector('.shopping-cart');
      const hm = document.querySelector('#hamburger-menu');
      const sc = document.querySelector('#shopping-cart-button');

      hm.onclick = () => {
        navbarNav.classList.toggle('active');
      };

      sc.onclick = (e) => {
        shoppingCart.classList.toggle('active');
        e.preventDefault();
      };

      document.addEventListener('click', function(e) {
        if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
          navbarNav.classList.remove('active');
        }

        if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
          shoppingCart.classList.remove('active');
        }
      });
});
