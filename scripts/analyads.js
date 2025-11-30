// -- For pages without bookitems.js

(function() {
  // Script Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  // Inisialisasi waktu
  gtag('js', new Date());

// ID Google Analytics
  gtag('config', 'G-L8FC659LV7');

  // Buat tag script untuk gtag.js
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-L8FC659LV7';
  script.async = true;
  document.head.appendChild(script);
})();

//Adsense
document.addEventListener("DOMContentLoaded", function() {
    let script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5259367956152112";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
});
