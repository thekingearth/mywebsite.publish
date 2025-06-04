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

  // Opsional: Tambahkan event listener jika ingin fungsi pada hamburger menu
  const hamburgerMenu = document.getElementById("hamburger-menu");
  hamburgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".navbar-nav").classList.toggle("active");
  });

  // Render ulang feather icons (jika pakai feather icons)
  if (typeof feather !== "undefined") {
    feather.replace();
  }
}
