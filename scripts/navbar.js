feather.replace();
fetch('../menu/navbar.html')
.then(res => res.text())
.then(html => {
  document.getElementById('navbar-container').innerHTML = html;
  feather.replace();
  const script = document.createElement('script');
  script.src = 'myscript.js';
  document.body.appendChild(script);
});
