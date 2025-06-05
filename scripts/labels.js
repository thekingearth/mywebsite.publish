script>
  
  const artikelData = [
    {
      title: "Teknik Mewing Bisa Memperbaiki Struktur Wajah atau Hanya Gimik?",
      link: "../coretan/teknik-mewing-bisa-memperbaiki-struktur-wajah-atau-hanya-gimik.html",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFU70-vZFC7jWxdQGEBvx7C9CTbGCF6trSbzO-fjDgjrKtKgU7e5eS_zZ&s=10",
      alt: "Coretan Kin Basari Teknik Mewing Bisa Memperbaiki Struktur Wajah atau Hanya Gimik?",
      description: "Teknik mewing yang diklaim dapat memperbaiki struktur wajah dengan menempatkan lidah di langit-langit mulut secara konsisten. Praktik ini dipercaya bisa meningkatkan garis rahang dan postur wajah secara alami, terutama jika dilakukan...",
      labels: ["Wawasan Tekno", "Perspektif"]
    },
    {
      title: "Ketika Bertanya Lebih Bermakna daripada Menjawab",
      link: "../coretan/ketika-bertanya-lebih-bermakna-daripada-menjawab.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Ketika Bertanya Lebih Bermakna daripada Menjawab",
      description: "Dalam kehidupan sehari-hari, kita sering terfokus untuk mencari jawaban secepat dan seakurat mungkin. Namun, ada kekuatan yang sering terlupakan dalam proses bertanya. Bertanya bukan hanya soal mencari informasi, melainkan membuka ruang untuk refleksi, dialog, dan pertumbuhan. Sebuah pertanyaan yang tepat dapat menantang asumsi, menggugah...",
      labels: ["Bangkit dan Bergerak", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Mengapa Uang Susah Didapatkan Tapi Mudah Untuk Dihabiskan?",
      link: "../coretan/mengapa-uang-susah-didapatkan-tapi-mudah-dihabiskan.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Mengapa Uang Susah Didapatkan Tapi Mudah Untuk Dihabiskan?",
      description: "Uang mudah dihabiskan karena dorongan emosional, gaya hidup konsumtif, dan godaan iklan yang terus-menerus. Banyak orang lebih terdorong untuk memenuhi keinginan sesaat dibanding kebutuhan jangka panjang, sehingga tanpa perencanaan keuangan yang baik, uang cepat lenyap tanpa terasa. Kurangnya literasi...",
      labels: ["Bangkit dan Bergerak", "Wawasan Tekno"]
    },
    {
      title: "Belajar Itu Mudah Namun Menjadi Master Itu Tantangan Seumur Hidup",
      link: "../coretan/belajar-itu-mudah-menjadi-master-itu-tantangan-seumur-hidup.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Belajar Itu Mudah Namun Menjadi Master Itu Tantangan Seumur Hidup",
      description: "Belajar itu mudah karena siapa pun bisa memulainya, tinggal buka buku, nonton video, atau ikut kelas. Tapi untuk menjadi master butuh lebih dari sekadar tahu, tapi dibutuhkan ketekunan, latihan tanpa henti, kegagalan yang terus dihadapi, dan komitmen jangka panjang. Menjadi ahli bukan soal cepat atau lambat, tapi soal seberapa...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Terpenjara Ekspektasi: Saat Hidup Dikuasai Pandangan Orang Lain",
      link: "../coretan/saat-hidup-dikuasai-pandangan-orang-lain.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Terpenjara Ekspektasi: Saat Hidup Dikuasai Pandangan Orang Lain",
      description: "Sering kali tanpa sadar, kita menjalani hidup bukan atas dasar keinginan sendiri, tapi demi memenuhi harapan orang lain. Takut dinilai, takut gagal, hingga akhirnya kehilangan arah dan jati diri. Ekspektasi dari keluarga, teman, hingga media sosial bisa membentuk tekanan yang...",
      labels: ["Bangkit dan Bergerak", "Perspektif"]
    },
    {
      title: "Kesendirian yang Menguatkan: Merangkul Diri Sebelum Mencintai Orang Lain",
      link: "../coretan/kesendirian-yang-menguatkan-merangkul-diri-sebelum-mencintai-orang-lain.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Kesendirian yang Menguatkan: Merangkul Diri Sebelum Mencintai Orang Lain",
      description: "Kadang, sendiri bukan berarti sepi, tapi ruang untuk tumbuh. Di momen sunyi itulah kita belajar mengenal diri sendiri, menyembuhkan luka, dan membangun kekuatan dari dalam. Sebelum mencintai orang lain, penting untuk merangkul diri sendiri dulu. Karena cinta yang paling tulus datang dari...",
      labels: ["Perspektif"]
    },
    {
      title: "Logika Formal dan Informal: Membentuk Cara Berpikir dan Bertindak",
      link: "../coretan/logika-formal-dan-informal-membentuk-cara-berpikir-dan-bertindak.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Logika Formal dan Informal: Membentuk Cara Berpikir dan Bertindak",
      description: "Logika formal dan informal bukan cuma urusan akademik, keduanya membentuk cara kita berpikir dan bertindak setiap hari. Logika formal mengajarkan kita berpikir runtut dan konsisten, cocok untuk analisis sistematis dan debat yang terstruktur. Sementara logika informal membantu...",
      labels: ["Bangkit dan Bergerak", "Perspektif"]
    },
    {
      title: "Mengapa Canva Menjadi Alat Desain Favorit Belakangan Ini",
      link: "../coretan/mengapa-canva-menjadi-alat-desain-favorit-belakangan-ini.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Mengapa Canva Menjadi Alat Desain Favorit Belakangan Ini",
      description: "Canva menawarkan kemudahan dan fleksibilitas dalam satu platform. Dengan antarmuka yang intuitif, ribuan template siap pakai, serta fitur drag-and-drop, siapa pun bisa membuat desain menarik tanpa perlu keahlian khusus. Selain itu, Canva juga mendukung...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Mengapa Brain Root Semakin Umum di Kalangan Anak Muda?",
      link: "../coretan/mengapa-brain-root-semakin-umum-dikalangan-anak-muda.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Mengapa Brain Root Semakin Umum di Kalangan Anak Muda?",
      description: "Sekarang ini, makin banyak anak muda yang ngerasa mentalnya drop. Bisa karena tugas numpuk, drama di media sosial, atau pola hidup yang nggak karuan. Tapi, jarang banget yang nyadar kalau ini semua bisa ada hubungannya sama kesehatan brain root...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Internet Itu Pelayan atau Tuan? Mari Tentukan",
      link: "../coretan/internet-itu-seorang-pelayan-atau-tuan.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Internet Itu Seorang Pelayan atau Tuan? Mari Tentukan",
      description:"Internet hadir sebagai alat bantu yang luar biasa dalam kehidupan sehari-hari. Namun, di tengah kemudahan yang ditawarkan, muncul pertanyaan penting, apakah kita masih mengendalikan internet, atau justru dikendalikan olehnya? internet yang seharusnya sebagai pelayan setia...",
      labels: ["Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Kamu Harus Lebih Dihargai daripada Kekayaan Materi",
      link: "../coretan/kamu-harus-lebih-dihargai-daripada-kekayaan-materi.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Kamu Harus Lebih Dihargai daripada Kekayaan Materi",
      description: "Nilai seseorang tidak ditentukan oleh apa yang dimiliki, tetapi oleh siapa dia sebenarnya. Dengan hati yang tulus, pikiran yang bijak, dan kebaikan yang telah diberikan kepada orang lain. Materi bisa hilang dan berubah, tapi kepribadian, integritas, dan cinta yang ditebarkan adalah hal yang tak ternilai dan abadi...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas"]
    },
    {
      title: "Manipulasi Emosional Ketika Kata-Kata Jadi Senjata",
      link: "../coretan/manipulasi-emosional-ketika-kata-kata-jadi-senjata.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Manipulasi Emosional Ketika Kata-Kata Jadi Senjata",
      description: "Manipulasi emosional terjadi saat seseorang menggunakan kata-kata bukan untuk menyayangi seseorang, tetapi malah untuk mengontrolnya. Kata-kata yang seharusnya membuat seseorang menjadi nyaman malah di jadikan sebagai alat buat nyalahin, ngebingungin, dan membuat seseorang ragu sama diri sendiri. Ini merupakan...",
      labels: ["Pena dan Kuas", "Perspektif"]
    },
    {
      title: "Mengapa Hal Kecil Sering Membekas di Pikiran?",
      link: "../coretan/negativity-bias-mengapa-hal-kecil-sering-membekas.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Mengapa Hal Kecil Sering Membekas di Pikiran?",
      description: "Negativity bias bisa jadi berbahaya karena bikin kita fokus terus ke hal-hal buruk, meskipun sekecil biji jeruk. Akibatnya, kita jadi gampang overthinking, stres, rendah diri, bahkan merasa hidup ini selalu salah. Kalau terus dibiarin, bisa memengaruhi kesehatan mental dan bikin kita susah lihat hal-hal positif yang sebenarnya...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas"]
    },
    {
      title: "Seni Rahasia Menghadapi Wanita Ngambek",
      link: "../coretan/seni-rahasia-menghadapi-wanita-ngambek.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Seni Rahasia Menghadapi Wanita Ngambek",
      description: "Perempuan suka ngambek bukan karena marah, tapi karena sinyal sayangnya lagi buffering. alasan utama suka ngambek karena ingin diperhatikan, merasa tidak dimengerti, atau sedang butuh kepastian dan pengakuan dari pasangannya. Ngambek sering jadi cara halus buat mengungkapkan perasaan tanpa melalui ucapan...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas"]
    },
    {
      title: "Bahagia Tidak Perlu Dicari Tetapi Diciptakan",
      link: "../coretan/bahagia-tidak-perlu-dicari-tetapi-diciptakan.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Bahagia Tidak Perlu Dicari Tetapi Diciptakan",
      description: "Mencari kebahagiaan memang penting tapi kalau cuma mencari, seseorang bisa terus menerus berharap sesuatu dari luar dirinya untuk membuat bahagia. Tapi kalau menciptakan kebahagiaan, orang bisa mengambil kendali atas perasaannya sendiri, lebih mudah menemukan makna dalam hal-hal kecil, dan...",
      labels: ["Pena dan Kuas", "Perspektif"]
    },
    
    {
      title: "Hidup Ini Memang Singkat Buatlah Lebih Berarti",
      link: "../coretan/hidup-itu-singkat-maka-buatlah-lebih-berarti.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Hidup Ini Memang Singkat Buatlah Lebih Berarti",
      description: "Meditasi, refleksi diri, dan menjaga hubungan yang sehat bisa menemukan ketenangan di tengah kekacauan. Fokus pada hal-hal yang bisa dikendalikan dan belajar melepaskan yang diluar kendali akan membantu seseorang dengan mudah menjalani hidup dengan lebih damai dan penuh makna...",
      labels: ["Pena dan Kuas", "Perspektif"]
    },
    {
      title: "Adaptasi Mencari Ketenangan Pikiran Hidup di Dunia yang Kacau",
      link: "../coretan/adaptasi-ketenangan-pikiran-hidup-didunia-yang-kacau.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Adaptasi Mencari Ketenangan Pikiran Hidup di Dunia yang Kacau",
      description: "Di dunia yang penuh ketidakpastian dan hiruk-pikuk, mencari ketenangan pikiran menjadi tantangan tersendiri. Adaptasi adalah kunci untuk menjaga keseimbangan mental dan emosional. Dengan menerima perubahan, mengelola stres, serta membangun kebiasaan positif seperti...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas", "Wawasan Tekno"]
    },
    {
      title: "Belajar Aktif vs Belajar Pasif, Rahasia Cepat Paham Saat Belajar",
      link: "../coretan/rahasia-cepat-paham-saat-belajar.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Belajar Aktif vs Belajar Pasif, Rahasia Cepat Paham Saat Belajar",
      description: "Belajar aktif dan belajar pasif memiliki perbedaan besar dalam efektivitas memahami materi. Belajar pasif terjadi ketika seseorang hanya menerima informasi tanpa banyak interaksi, seperti membaca atau mendengarkan ceramah. Sebaliknya, belajar aktif melibatkan partisipasi...",
      labels: ["Bangkit dan Bergerak", "Wawasan Tekno"]
    },
    {
      title: "Stop Comparing Yourself, Fokus pada Pertumbuhan Bukan Perbandingan",
      link: "../coretan/stop-comparing-yourself-fokus-pada-pertumbuhan.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Stop Comparing Yourself, Fokus pada Pertumbuhan Bukan Perbandingan",
      description: "Di era media sosial, mudah sekali terjebak dalam kebiasaan membandingkan diri dengan orang lain. Melihat pencapaian, gaya hidup, atau kebahagiaan orang lain bisa membuat kita merasa kurang berharga. Padahal, setiap individu memiliki perjalanan hidupnya sendiri. Alih-alih sibuk...",
      labels: ["Bangkit dan Bergerak", "Perspektif"]
    },
    {
      title: "Diam Bukan Berarti Lemah, Stop Oversharing",
      link: "../coretan/diam-bukan-berarti-lemah-stop-oversharing.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Diam Bukan Berarti Lemah, Stop Oversharing",
      description: "Membagikan segala aspek kehidupan di media sosial memang perlu, tapi terlalu banyak berbagi (over sharing) bisa berisiko bagi privasi maupun mental. Tidak semua orang perlu tahu rencana, masalah, atau kebahagiaan kita. Terkadang, diam memberi ruang untuk berpikir, menghindari...",
      labels: ["Perspektif", "Wawasan Tekno"]
    },

    {
      title: "Sibuk Seharian Tapi Hasil Nol? Saatnya Beralih ke Produktif",
      link: "../coretan/sibuk-seharian-tapi-hasil-nol-beralih-produktif.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Sibuk Seharian Tapi Hasil Nol? Saatnya Beralih ke Produktif",
      description: "Sering merasa sibuk sepanjang hari, tetapi ketika malam tiba, tidak ada hasil yang benar-benar signifikan? Ini tanda bahwa perlu beralih dari sekadar sibuk ke benar-benar produktif bukan soal seberapa banyak tugas yang dikerjakan, melainkan seberapa efektif...",
      labels: ["Bangkit dan Bergerak", "Wawasan Tekno"]
    },
    {
      title: "Jaga Kesehatan Mental dari Pengaruh Orang-Orang Toxic",
      link: "../coretan/jaga-kesehatan-mental-dari-pengaruh-orang-toxic.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Jaga Kesehatan Mental dari Pengaruh Orang-Orang Toxic",
      description: "Menjauh dari lingkungan toxic itu wajib banget, soalnya kalau kelamaan di situ, energi bakal kesedot habis. Orang toxic tuh hobi ngejatuhin, bikin drama, dan nyebarin vibes negatif. Lama-lama bisa ikutan stres, overthinking, atau bahkan...",
      labels: ["Pena dan Kuas", "Perspektif"]
    },
    {
      title: "Konsistensi Lebih Penting dari pada Motivasi",
      link: "../coretan/konsistensi-lebih-penting-dari-motivasi.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Konsistensi Lebih Penting dari pada Motivasi",
      description: "Kebiasaan untuk terus bergerak maju itu kunci buat terus jalan meski semangat lagi nggak on fire. Bahkan ketika motivasi sedang rendah di sinilah konsistensi yang memiliki peran sangat penting. Dengan konsistensi...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas", "Perspektif"]
    },
    {
      title: "Upgrade diri, Perjalanan Menuju Kedewasaan",
      link: "../coretan/upgrade-diri-perjalanan-menuju-kedewasaan.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Upgrade diri, Perjalanan Menuju Kedewasaan",
      description: "Ngerasa emosi meledak-ledak entah itu karena masalah sepele atau hal besar yang beneran bikin kesel. Cobalah belajar buat nggak terlalu baperan. Kadang emosi bikin nggak bisa mikir jernih. Duduk dulu tarik napas...",
      labels: ["Bangkit dan Bergerak", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Seni Mengendalikan Diri: Stoikisme dan Rahasia Kebahagiaan Sejati",
      link: "../coretan/seni-mengendalikan-diri-stoikisme-rahasia-kebahagiaan.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Seni Mengendalikan Diri: Stoikisme dan Rahasia Kebahagiaan Sejati",
      description: "Salah satu filsafat yang sangat terkenal berasal dari Yunani Kuno, yang mengajarkan bahwa dunia ini berjalan sesuai dengan hukum alam, dimana segala sesuatu yang terjadi di luar kendali dan dianggap netral, bukan baik atau buruk secara intrinsik dan bahwa kebahagiaan sejati dapat dicapai dengan mengendalikan persepsi serta reaksi kita terhadap peristiwa eksternal...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas"]
    },

    {
      title: "Self-Discovery: Perjalanan Menemukan Makna dan Tujuan Hidup",
      link: "../coretan/self-discovery-perjalanan-menemukan-makna-hidup.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Self-Discovery: Perjalanan Menemukan Makna dan Tujuan Hidup",
      description: "Suatu perjalanan kehidupan yang berlangsung seumur hidup, bukan sesuatu yang selesai dalam satu waktu. Mengenali diri sendiri adalah proses yang terus berlangsung seiring waktu. Setiap pengalaman, tantangan, dan refleksi membantu kita memahami siapa kita sebenarnya, apa yang kita inginkan, dan bagaimana kita bisa hidup dengan lebih otentik...",
      labels: ["Bangkit dan Bergerak", "Perspektif"]
    },
    {
      title: "Bahaya Rip Current Arus Laut 2 Meter Perdetik",
      link: "../coretan/bahaya-rip-current-arus-laut.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Bahaya Rip Current Arus Laut 2 Meter Perdetik",
      description: "Rip current sangat berbahaya karena arusnya yang kuat dapat menyeret perenang ke laut lepas dengan cepat, membuat mereka kelelahan saat mencoba melawan arus. Banyak orang panik dan berusaha berenang melawan arus, yang justru meningkatkan risiko tenggelam...",
      labels: ["Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Orang Indonesia Kerja di Luar Negeri, Kenapa Sih?",
      link: "../coretan/kenapa-kerja-di-luar-negeri.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Orang Indonesia Kerja di Luar Negeri, Kenapa Sih?",
      description: "Banyak orang Indonesia memilih bekerja di luar negeri karena beberapa alasan utama. Tapi bekerja di luar negeri juga memiliki tantangan seperti perbedaan budaya, bahasa, serta risiko eksploitasi tenaga kerja...",
      labels: ["Bangkit dan Bergerak", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Sangat Rugi Nonton Video Alur Film!",
      link: "../coretan/sangat-rugi-nonton-video-alur-film.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Sangat Rugi Nonton Video Alur Film!",
      description: "Alur film biasanya cuma rangkuman cerita, jadi banyak detail kecil yang dilewatin, seperti dialog penting, simbolisme, atau adegan yang membangun karakter. Padahal, detail-detail ini bisa bikin film lebih bermakna dan keren...",
      labels: ["Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Khodam Warisan Leluhur dan Bisa Diturunin",
      link: "../coretan/khodam-warisan-leluhur-dan-bisa-diturunin.html",
      img: "../img/thumb/thumb08.jpg",
      alt: "Coretan Kin Basari Khodam Warisan Leluhur dan Bisa Diturunin",
      description: "Beberapa pandangan menyebutkan bahwa khodam bisa diwariskan dari leluhur ke keturunan, terutama jika diperoleh melalui amalan tertentu atau benda pusaka. Namun, ada juga yang berpendapat bahwa khodam hanya mengikuti individu yang...",
      labels: ["Pena dan Kuas", "Perspektif"]
    }




  ];

  // Fungsi createArtikel seperti yang kamu berikan
  function createArtikel({ title, link, img, alt, description }) {
    const artikel = document.createElement('div');
    artikel.className = 'grupartikel';

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

  const container = document.querySelector('#artikelsgrub');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const label = window.targetLabel;

  document.getElementById('labelTitle').textContent = targetLabel;

  // Filter artikel berdasarkan label
  const filteredArtikel = artikelData.filter(artikel => artikel.labels.includes(targetLabel));

  let indexNextGroup = 0;

  // Render grup artikel (grup 8 artikel, dalam 4 div artikels (2 artikel per div))
  function renderArtikels() {
  // Cek sisa artikel
  if (indexNextGroup >= filteredArtikel.length) {
    loadMoreBtn.style.display = 'none';
    return;
  }

  const sliceArtikel = filteredArtikel.slice(indexNextGroup, indexNextGroup + 8);

  // Tambahkan pemisah jika bukan grup pertama
  if (indexNextGroup > 0) {
    const separator = document.createElement('br');
    separator.className = 'artikel-separator';
    container.appendChild(separator);
  }

  const artikelsHidd = document.createElement('div');
  artikelsHidd.className = 'artikels-hidden';

  const group = document.createElement('div');
  group.className = 'hiddens group';

  for (let k = 0; k < 4; k++) {
    const artikels = document.createElement('div');
    artikels.className = 'artikels';

    for (let j = 0; j < 2; j++) {
      const currentIndex = k * 2 + j;
      if (currentIndex < sliceArtikel.length) {
        const artikelEl = createArtikel(sliceArtikel[currentIndex]);
        artikels.appendChild(artikelEl);
      }
    }

    group.appendChild(artikels);
  }

  artikelsHidd.appendChild(group);
  container.appendChild(artikelsHidd);

  indexNextGroup += 8;

  if (indexNextGroup >= filteredArtikel.length) {
    
  }
}


  // Tampilkan 3 artikel pertama saja (buat khusus supaya sesuai permintaan)
  function renderInitial3() {
  const first3 = filteredArtikel.slice(0, 3);

  // Artikel pertama tampil penuh
  const artikelPertama = createArtikel(first3[0]);
  container.appendChild(artikelPertama);

  // Dua artikel berjajar di bawahnya
  const row = document.createElement('div');
  row.className = 'artikel-row';

  for (let i = 1; i <= 2; i++) {
    const artikelEl = createArtikel(first3[i]);
    row.appendChild(artikelEl);
  }

  container.appendChild(row);

  indexNextGroup = 3;
}


  // Inisialisasi awal
  renderInitial3();

  let allVisible = false; // status apakah semua artikel sudah tampil

loadMoreBtn.addEventListener('click', () => {
  if (!allVisible) {
    renderArtikels();

    // Tambahkan penundaan pengecekan supaya DOM sudah update
    setTimeout(() => {
      if (indexNextGroup >= filteredArtikel.length) {
        allVisible = true;
        loadMoreBtn.textContent = 'Tampilkan Lebih Sedikit';
      }
    }, 50); // waktu cukup singkat agar update selesai
  } else {
    const allHiddenGroups = document.querySelectorAll('.artikels-hidden, .artikel-separator');
    allHiddenGroups.forEach(el => el.remove());

    indexNextGroup = 3;
    allVisible = false;
    loadMoreBtn.textContent = 'Tampilkan Lebih Banyak';
  }
});



  // Jika artikel kurang dari 4, sembunyikan tombol load more
  if (filteredArtikel.length <= 3) {
    loadMoreBtn.style.display = 'none';
  }
</script>
