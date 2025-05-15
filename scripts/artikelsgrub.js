
function renderArtikels() {
  const artikelData = [
    {
      title: "Kamu Harus Lebih Dihargai daripada Kekayaan Materi",
      link: "../coretan/kamu-harus-lebih-dihargai-daripada-kekayaan-materi.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Kamu Harus Lebih Dihargai daripada Kekayaan Materi",
      description: "Nilai seseorang tidak ditentukan oleh apa yang dimiliki, tetapi oleh siapa dia sebenarnya. Dengan hati yang tulus, pikiran yang bijak, dan kebaikan yang telah diberikan kepada orang lain. Materi bisa hilang dan berubah, tapi kepribadian, integritas, dan cinta yang ditebarkan adalah hal yang tak ternilai dan abadi..."
    },
    {
      title: "Manipulasi Emosional Ketika Kata-Kata Jadi Senjata",
      link: "../coretan/manipulasi-emosional-ketika-kata-kata-jadi-senjata.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Manipulasi Emosional Ketika Kata-Kata Jadi Senjata",
      description: "Manipulasi emosional terjadi saat seseorang menggunakan kata-kata bukan untuk menyayangi seseorang, tetapi malah untuk mengontrolnya. Kata-kata yang seharusnya membuat seseorang menjadi nyaman malah di jadikan sebagai alat buat nyalahin, ngebingungin, dan membuat seseorang ragu sama diri sendiri. Ini merupakan..."
    },
    {
      title: "Mengapa Hal Kecil Sering Membekas di Pikiran?",
      link: "../coretan/negativity-bias-mengapa-hal-kecil-sering-membekas.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Mengapa Hal Kecil Sering Membekas di Pikiran?",
      description: "Negativity bias bisa jadi berbahaya karena bikin kita fokus terus ke hal-hal buruk, meskipun sekecil biji jeruk. Akibatnya, kita jadi gampang overthinking, stres, rendah diri, bahkan merasa hidup ini selalu salah. Kalau terus dibiarin, bisa memengaruhi kesehatan mental dan bikin kita susah lihat hal-hal positif yang sebenarnya..."
    },
    {
      title: "Seni Rahasia Menghadapi Wanita Ngambek",
      link: "../coretan/seni-rahasia-menghadapi-wanita-ngambek.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Seni Rahasia Menghadapi Wanita Ngambek",
      description: "Perempuan suka ngambek bukan karena marah, tapi karena sinyal sayangnya lagi buffering. alasan utama suka ngambek karena ingin diperhatikan, merasa tidak dimengerti, atau sedang butuh kepastian dan pengakuan dari pasangannya. Ngambek sering jadi cara halus buat mengungkapkan perasaan tanpa melalui ucapan..."
    },
    {
      title: "Bahagia Tidak Perlu Dicari Tetapi Diciptakan",
      link: "../coretan/bahagia-tidak-perlu-dicari-tetapi-diciptakan.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Bahagia Tidak Perlu Dicari Tetapi Diciptakan",
      description: "Mencari kebahagiaan memang penting tapi kalau cuma mencari, seseorang bisa terus menerus berharap sesuatu dari luar dirinya untuk membuat bahagia. Tapi kalau menciptakan kebahagiaan, orang bisa mengambil kendali atas perasaannya sendiri, lebih mudah menemukan makna dalam hal-hal kecil, dan..."
    },
    
    {
      title: "Hidup Ini Memang Singkat Buatlah Lebih Berarti",
      link: "../coretan/hidup-itu-singkat-maka-buatlah-lebih-berarti.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Hidup Ini Memang Singkat Buatlah Lebih Berarti",
      description: "Meditasi, refleksi diri, dan menjaga hubungan yang sehat bisa menemukan ketenangan di tengah kekacauan. Fokus pada hal-hal yang bisa dikendalikan dan belajar melepaskan yang diluar kendali akan membantu seseorang dengan mudah menjalani hidup dengan lebih damai dan penuh makna..."
    },
    {
      title: "Adaptasi Mencari Ketenangan Pikiran Hidup di Dunia yang Kacau",
      link: "../coretan/adaptasi-ketenangan-pikiran-hidup-didunia-yang-kacau.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Adaptasi Mencari Ketenangan Pikiran Hidup di Dunia yang Kacau",
      description: "Di dunia yang penuh ketidakpastian dan hiruk-pikuk, mencari ketenangan pikiran menjadi tantangan tersendiri. Adaptasi adalah kunci untuk menjaga keseimbangan mental dan emosional. Dengan menerima perubahan, mengelola stres, serta membangun kebiasaan positif seperti..."
    },
    {
      title: "Belajar Aktif vs Belajar Pasif, Rahasia Cepat Paham Saat Belajar",
      link: "../coretan/rahasia-cepat-paham-saat-belajar.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Belajar Aktif vs Belajar Pasif, Rahasia Cepat Paham Saat Belajar",
      description: "Belajar aktif dan belajar pasif memiliki perbedaan besar dalam efektivitas memahami materi. Belajar pasif terjadi ketika seseorang hanya menerima informasi tanpa banyak interaksi, seperti membaca atau mendengarkan ceramah. Sebaliknya, belajar aktif melibatkan partisipasi..."
    },
    {
      title: "Stop Comparing Yourself, Fokus pada Pertumbuhan Bukan Perbandingan",
      link: "../coretan/stop-comparing-yourself-fokus-pada-pertumbuhan.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Stop Comparing Yourself, Fokus pada Pertumbuhan Bukan Perbandingan",
      description: "Di era media sosial, mudah sekali terjebak dalam kebiasaan membandingkan diri dengan orang lain. Melihat pencapaian, gaya hidup, atau kebahagiaan orang lain bisa membuat kita merasa kurang berharga. Padahal, setiap individu memiliki perjalanan hidupnya sendiri. Alih-alih sibuk..."
    },
    {
      title: "Diam Bukan Berarti Lemah, Stop Oversharing",
      link: "../coretan/diam-bukan-berarti-lemah-stop-oversharing.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Diam Bukan Berarti Lemah, Stop Oversharing",
      description: "Membagikan segala aspek kehidupan di media sosial memang perlu, tapi terlalu banyak berbagi (over sharing) bisa berisiko bagi privasi maupun mental. Tidak semua orang perlu tahu rencana, masalah, atau kebahagiaan kita. Terkadang, diam memberi ruang untuk berpikir, menghindari..."
    },

    {
      title: "Sibuk Seharian Tapi Hasil Nol? Saatnya Beralih ke Produktif",
      link: "../coretan/sibuk-seharian-tapi-hasil-nol-beralih-produktif.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Sibuk Seharian Tapi Hasil Nol? Saatnya Beralih ke Produktif",
      description: "Sering merasa sibuk sepanjang hari, tetapi ketika malam tiba, tidak ada hasil yang benar-benar signifikan? Ini tanda bahwa perlu beralih dari sekadar sibuk ke benar-benar produktif bukan soal seberapa banyak tugas yang dikerjakan, melainkan seberapa efektif..."
    },
    {
      title: "Jaga Kesehatan Mental dari Pengaruh Orang-Orang Toxic",
      link: "../coretan/jaga-kesehatan-mental-dari-pengaruh-orang-toxic.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Jaga Kesehatan Mental dari Pengaruh Orang-Orang Toxic",
      description: "Menjauh dari lingkungan toxic itu wajib banget, soalnya kalau kelamaan di situ, energi bakal kesedot habis. Orang toxic tuh hobi ngejatuhin, bikin drama, dan nyebarin vibes negatif. Lama-lama bisa ikutan stres, overthinking, atau bahkan..."
    },
    {
      title: "Konsistensi Lebih Penting dari pada Motivasi",
      link: "../coretan/konsistensi-lebih-penting-dari-motivasi.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Konsistensi Lebih Penting dari pada Motivasi",
      description: "Kebiasaan untuk terus bergerak maju itu kunci buat terus jalan meski semangat lagi nggak on fire. Bahkan ketika motivasi sedang rendah di sinilah konsistensi yang memiliki peran sangat penting. Dengan konsistensi..."
    },
    {
      title: "Upgrade diri, Perjalanan Menuju Kedewasaan",
      link: "../coretan/upgrade-diri-perjalanan-menuju-kedewasaan.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Upgrade diri, Perjalanan Menuju Kedewasaan",
      description: "Ngerasa emosi meledak-ledak entah itu karena masalah sepele atau hal besar yang beneran bikin kesel. Cobalah belajar buat nggak terlalu baperan. Kadang emosi bikin nggak bisa mikir jernih. Duduk dulu tarik napas... "
    },
    {
      title: "Seni Mengendalikan Diri: Stoikisme dan Rahasia Kebahagiaan Sejati",
      link: "../coretan/seni-mengendalikan-diri-stoikisme-rahasia-kebahagiaan.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Seni Mengendalikan Diri: Stoikisme dan Rahasia Kebahagiaan Sejati",
      description: "Salah satu filsafat yang sangat terkenal berasal dari Yunani Kuno, yang mengajarkan bahwa dunia ini berjalan sesuai dengan hukum alam, dimana segala sesuatu yang terjadi di luar kendali dan dianggap netral, bukan baik atau buruk secara intrinsik dan bahwa kebahagiaan sejati dapat dicapai dengan mengendalikan persepsi serta reaksi kita terhadap peristiwa eksternal..."
    },

    {
      title: "Self-Discovery: Perjalanan Menemukan Makna dan Tujuan Hidup",
      link: "../coretan/self-discovery-perjalanan-menemukan-makna-hidup.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Self-Discovery: Perjalanan Menemukan Makna dan Tujuan Hidup",
      description: "Suatu perjalanan kehidupan yang berlangsung seumur hidup, bukan sesuatu yang selesai dalam satu waktu. Mengenali diri sendiri adalah proses yang terus berlangsung seiring waktu. Setiap pengalaman, tantangan, dan refleksi membantu kita memahami siapa kita sebenarnya, apa yang kita inginkan, dan bagaimana kita bisa hidup dengan lebih otentik..."
    },
    {
      title: "Bahaya Rip Current Arus Laut 2 Meter Perdetik",
      link: "../coretan/bahaya-rip-current-arus-laut.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Bahaya Rip Current Arus Laut 2 Meter Perdetik",
      description: "Rip current sangat berbahaya karena arusnya yang kuat dapat menyeret perenang ke laut lepas dengan cepat, membuat mereka kelelahan saat mencoba melawan arus. Banyak orang panik dan berusaha berenang melawan arus, yang justru meningkatkan risiko tenggelam..."
    },
    {
      title: "Orang Indonesia Kerja di Luar Negeri, Kenapa Sih?",
      link: "../coretan/kenapa-kerja-di-luar-negeri.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Orang Indonesia Kerja di Luar Negeri, Kenapa Sih?",
      description: "Banyak orang Indonesia memilih bekerja di luar negeri karena beberapa alasan utama. Tapi bekerja di luar negeri juga memiliki tantangan seperti perbedaan budaya, bahasa, serta risiko eksploitasi tenaga kerja..."
    },
  /*  {
      title: "Sangat Rugi Nonton Video Alur Film!",
      link: "../coretan/sangat-rugi-nonton-video-alur-film.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Sangat Rugi Nonton Video Alur Film!",
      description: "Alur film biasanya cuma rangkuman cerita, jadi banyak detail kecil yang dilewatin, seperti dialog penting, simbolisme, atau adegan yang membangun karakter. Padahal, detail-detail ini bisa bikin film lebih bermakna dan keren..."
    }, */
    {
      title: "Khodam Warisan Leluhur dan Bisa Diturunin",
      link: "../coretan/khodam-warisan-leluhur-dan-bisa-diturunin.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Khodam Warisan Leluhur dan Bisa Diturunin",
      description: "Beberapa pandangan menyebutkan bahwa khodam bisa diwariskan dari leluhur ke keturunan, terutama jika diperoleh melalui amalan tertentu atau benda pusaka. Namun, ada juga yang berpendapat bahwa khodam hanya mengikuti individu yang..."
    }
  ];

  function createArtikel({ title, link, img, alt, description }) {
    const artikel = document.createElement('div');
    artikel.className = 'artikel';

    const h2 = document.createElement('h2');
    const a = document.createElement('a');
    a.href = link;
    a.textContent = title;
    h2.appendChild(a);

    const thumb = document.createElement('div');
    thumb.className = 'thumbnail';
    const aThumb = document.createElement('a');
    aThumb.href = link;
    const image = document.createElement('img');
    image.src = img;
    image.alt = alt;
    aThumb.appendChild(image);
    thumb.appendChild(aThumb);

    const p = document.createElement('p');
    p.textContent = description + ' ';
    const readMore = document.createElement('a');
    readMore.href = link;
    readMore.textContent = 'Read more';
    p.appendChild(readMore);

    artikel.appendChild(h2);
    artikel.appendChild(thumb);
    artikel.appendChild(p);

    return artikel;
  }

  const container = document.querySelector('#artikelsgrub'); // Ganti sesuai lokasi kamu mau masukkan

  for (let i = 0; i < artikelData.length; i += 2) {
    const artikelsHidd = document.createElement('div');
    artikelsHidd.className = 'artikels-hidd';

    const group = document.createElement('div');
    group.className = 'hidden group';

    const artikels = document.createElement('div');
    artikels.className = 'artikels';

    for (let j = i; j < i + 2 && j < artikelData.length; j++) {
      const artikel = createArtikel(artikelData[j]);
      artikels.appendChild(artikel);
    }

    group.appendChild(artikels);
    artikelsHidd.appendChild(group);
    container.appendChild(artikelsHidd);
  }
}

renderArtikels();
