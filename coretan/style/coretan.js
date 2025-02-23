document.addEventListener("DOMContentLoaded", function() {
  const folderPath = '../coretan/'; // Ganti dengan path folder artikel
  const articles = [
    { file: '98-wanita-akan-berbohong-setelah-lebih-dari.html', tittle: '98% Wanita Akan Berbohong Setelah 10 Percakapan' },
    { file: 'cara-santai-bikin-tulisan-yang-asik-dibaca.html', title: 'Cara Santai Bikin Tulisan yang Asik Dibaca' },
    { file: 'dari-kata-jadi-karya-serunya-nulis.html', title: 'Dari Kata Jadi Karya, Serunya Nulis' },
    { file: 'kenapa-kerja-di-luar-negeri.html', tittle: 'Orang Indonesia Kerja di Luar Negeri, Kenapa Sih?' },
    { file: 'ketahui-bakat-terpendammu.html', title: 'Ketahui Bakat Terpendammu' },
    { file: 'khodam-warisan-leluhur-dan-bisa-diturunin.html', tittle: 'Khodam Warisan Leluhur dan Bisa Diturunin' },
    { file: 'kisah-inspiratif-untuk-semangat.hidup.html', title: 'Kisah Inspiratif yang Bikin Hidup Lebih Bersemangat' },
    { file: 'menulis-itu-healing-tumpahin-pikiran-legain-hati.html', title: 'Menulis Itu Healing! Tumpahin Pikiran, Legain Hati' },
    { file: 'sangat-rugi-nonton-video-alur-film.html', tittle: 'Sangat Rugi Nonton Video Alur Film' },
    { file: 'stop-minder-langkah-simpel-buat-up.html', title: 'Stop Minder! Langkah simpel buat Upgrade Diri' }
    ];

  const listContainer = document.getElementById("related-artikel");
  // Acak array artikel dengan metode sort dan Math.random
  const shuffled = articles.sort(() => 0.5 - Math.random());
  
  // Ambil 5 artikel dari hasil pengacakan
  const selectedArticles = shuffled.slice(0, 5);

  // Render artikel terpilih ke dalam list
  selectedArticles.forEach(article => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = folderPath + article.file;
    link.textContent = article.title;
    listItem.appendChild(link);
    listContainer.appendChild(listItem);
   });
  });
