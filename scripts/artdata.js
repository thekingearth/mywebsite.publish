
const artikelData = [
    {
      title: "Jejak Pena: Mengapa Tidak Semua Hal Bisa Dihapus",
      link: "../coretan/jejak-pena-mengapa-tidak-semua-hal-bisa-dihapus.html",
      img: "https://cdn.pixabay.com/photo/2017/12/27/18/07/book-3043273_1280.jpg",
      alt: "Coretan Kin Basari Jejak Pena: Mengapa Tidak Semua Hal Bisa Dihapus",
      description: "Dalam hidup, kita perlahan meninggalkan pensil yang bisa dihapus dan mulai menulis dengan pena alat yang meninggalkan jejak permanen. Kata-kata yang terucap, tindakan yang kita pilih, dan keputusan yang kita buat seringkali meninggalkan bekas, baik di hati sendiri maupun orang lain. Tidak semua bisa...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas"]
    },
    {
      title: "Kebaikan Berdua: Aksi Sosial Teman Halal",
      link: "../coretan/kebaikan-berdua-aksi-sosial-teman-halal.html",
      img: "https://cdn.pixabay.com/photo/2015/10/13/14/12/friend-986159_1280.jpg",
      alt: "Coretan Kin Basari Kebaikan Berdua: Aksi Sosial Teman Halal",
      description: "Apa yang pertama kali terlintas di imajenasimu ketika mendengar kata \“Teman Halal\”, Apakah partner hidup, biro jodoh, ta'aruf, kelas pranikah, atau bahkan pernikahan? Kalau iya, berarti kita satu server. Tapi dunggu dulu, jangan buru-buru mengira ini soal jodoh atau kisah dari teman...",
      labels: ["Bangkit dan Bergerak","Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Era AI dan Data Pribadi: Siapa yang Mengawasi Pengawas?",
      link: "../coretan/era-ai-dan-data-pribadi-siapa-yang-mengawasi-pengawas.html",
      img: "https://cdn.pixabay.com/photo/2021/03/21/10/02/selfie-6111716_1280.jpg",
      alt: "Coretan Kin Basari Era AI dan Data Pribadi: Siapa yang Mengawasi Pengawas?",
      description: "Di tengah pesatnya perkembangan kecerdasan buatan, data pribadi menjadi bahan bakar utama yang menggerakkan sistem-sistem pintar. Dari rekomendasi belanja hingga prediksi perilaku, AI menyaring dan mengolah jejak digital pengguna secara masif. Namun, siapa yang memastikan bahwa data...",
      labels: ["Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Teknik Mewing Bisa Memperbaiki Struktur Wajah atau Hanya Gimik?",
      link: "../coretan/teknik-mewing-bisa-memperbaiki-struktur-wajah-atau-hanya-gimik.html",
      img: "https://cdn.pixabay.com/photo/2022/07/11/18/01/woman-7315671_1280.jpg",
      alt: "Coretan Kin Basari Teknik Mewing Bisa Memperbaiki Struktur Wajah atau Hanya Gimik?",
      description: "Teknik mewing yang diklaim dapat memperbaiki struktur wajah dengan menempatkan lidah di langit-langit mulut secara konsisten. Praktik ini dipercaya bisa meningkatkan garis rahang dan postur wajah secara alami, terutama jika dilakukan...",
      labels: ["Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Ketika Bertanya Lebih Bermakna daripada Menjawab",
      link: "../coretan/ketika-bertanya-lebih-bermakna-daripada-menjawab.html",
      img: "https://cdn.pixabay.com/photo/2022/05/21/18/40/search-7212106_1280.jpg",
      alt: "Coretan Kin Basari Ketika Bertanya Lebih Bermakna daripada Menjawab",
      description: "Dalam kehidupan sehari-hari, kita sering terfokus untuk mencari jawaban secepat dan seakurat mungkin. Namun, ada kekuatan yang sering terlupakan dalam proses bertanya. Bertanya bukan hanya soal mencari informasi, melainkan membuka ruang untuk refleksi, dialog, dan pertumbuhan. Sebuah pertanyaan yang tepat dapat menantang asumsi, menggugah...",
      labels: ["Bangkit dan Bergerak", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Mengapa Uang Susah Didapatkan Tapi Mudah Untuk Dihabiskan?",
      link: "../coretan/mengapa-uang-susah-didapatkan-tapi-mudah-dihabiskan.html",
      img: "https://cdn.pixabay.com/photo/2016/07/11/20/34/the-last-shirt-1510597_1280.jpg",
      alt: "Coretan Kin Basari Mengapa Uang Susah Didapatkan Tapi Mudah Untuk Dihabiskan?",
      description: "Uang mudah dihabiskan karena dorongan emosional, gaya hidup konsumtif, dan godaan iklan yang terus-menerus. Banyak orang lebih terdorong untuk memenuhi keinginan sesaat dibanding kebutuhan jangka panjang, sehingga tanpa perencanaan keuangan yang baik, uang cepat lenyap tanpa terasa. Kurangnya literasi...",
      labels: ["Bangkit dan Bergerak", "Wawasan Tekno"]
    },
    {
      title: "Belajar Itu Mudah Namun Menjadi Master Itu Tantangan Seumur Hidup",
      link: "../coretan/belajar-itu-mudah-menjadi-master-itu-tantangan-seumur-hidup.html",
      img: "https://cdn.pixabay.com/photo/2021/11/29/01/48/distance-learning-6831600_1280.png",
      alt: "Coretan Kin Basari Belajar Itu Mudah Namun Menjadi Master Itu Tantangan Seumur Hidup",
      description: "Belajar itu mudah karena siapa pun bisa memulainya, tinggal buka buku, nonton video, atau ikut kelas. Tapi untuk menjadi master butuh lebih dari sekadar tahu, tapi dibutuhkan ketekunan, latihan tanpa henti, kegagalan yang terus dihadapi, dan komitmen jangka panjang. Menjadi ahli bukan soal cepat atau lambat, tapi soal seberapa...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Terpenjara Ekspektasi: Saat Hidup Dikuasai Pandangan Orang Lain",
      link: "../coretan/saat-hidup-dikuasai-pandangan-orang-lain.html",
      img: "https://cdn.pixabay.com/photo/2016/03/11/19/24/depression-1250897_1280.jpg",
      alt: "Coretan Kin Basari Terpenjara Ekspektasi: Saat Hidup Dikuasai Pandangan Orang Lain",
      description: "Sering kali tanpa sadar, kita menjalani hidup bukan atas dasar keinginan sendiri, tapi demi memenuhi harapan orang lain. Takut dinilai, takut gagal, hingga akhirnya kehilangan arah dan jati diri. Ekspektasi dari keluarga, teman, hingga media sosial bisa membentuk tekanan yang...",
      labels: ["Bangkit dan Bergerak", "Perspektif"]
    },
    {
      title: "Kesendirian yang Menguatkan: Merangkul Diri Sebelum Mencintai Orang Lain",
      link: "../coretan/kesendirian-yang-menguatkan-merangkul-diri-sebelum-mencintai-orang-lain.html",
      img: "https://cdn.pixabay.com/photo/2024/07/23/13/03/moon-8915307_1280.png",
      alt: "Coretan Kin Basari Kesendirian yang Menguatkan: Merangkul Diri Sebelum Mencintai Orang Lain",
      description: "Kadang, sendiri bukan berarti sepi, tapi ruang untuk tumbuh. Di momen sunyi itulah kita belajar mengenal diri sendiri, menyembuhkan luka, dan membangun kekuatan dari dalam. Sebelum mencintai orang lain, penting untuk merangkul diri sendiri dulu. Karena cinta yang paling tulus datang dari...",
      labels: ["Perspektif"]
    },
    {
      title: "Logika Formal dan Informal: Membentuk Cara Berpikir dan Bertindak",
      link: "../coretan/logika-formal-dan-informal-membentuk-cara-berpikir-dan-bertindak.html",
      img: "https://cdn.pixabay.com/photo/2025/05/27/17/21/brain-9625692_1280.png",
      alt: "Coretan Kin Basari Logika Formal dan Informal: Membentuk Cara Berpikir dan Bertindak",
      description: "Logika formal dan informal bukan cuma urusan akademik, keduanya membentuk cara kita berpikir dan bertindak setiap hari. Logika formal mengajarkan kita berpikir runtut dan konsisten, cocok untuk analisis sistematis dan debat yang terstruktur. Sementara logika informal membantu...",
      labels: ["Bangkit dan Bergerak", "Perspektif"]
    },
    {
      title: "Mengapa Canva Menjadi Alat Desain Favorit Belakangan Ini",
      link: "../coretan/mengapa-canva-menjadi-alat-desain-favorit-belakangan-ini.html",
      img: "https://cdn.pixabay.com/photo/2024/09/16/18/45/paint-9052226_1280.jpg",
      alt: "Coretan Kin Basari Mengapa Canva Menjadi Alat Desain Favorit Belakangan Ini",
      description: "Canva menawarkan kemudahan dan fleksibilitas dalam satu platform. Dengan antarmuka yang intuitif, ribuan template siap pakai, serta fitur drag-and-drop, siapa pun bisa membuat desain menarik tanpa perlu keahlian khusus. Selain itu, Canva juga mendukung...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Mengapa Brain Root Semakin Umum di Kalangan Anak Muda?",
      link: "../coretan/mengapa-brain-root-semakin-umum-dikalangan-anak-muda.html",
      img: "https://cdn.pixabay.com/photo/2023/05/07/06/56/ai-generated-7975784_1280.jpg",
      alt: "Coretan Kin Basari Mengapa Brain Root Semakin Umum di Kalangan Anak Muda?",
      description: "Sekarang ini, makin banyak anak muda yang ngerasa mentalnya drop. Bisa karena tugas numpuk, drama di media sosial, atau pola hidup yang nggak karuan. Tapi, jarang banget yang nyadar kalau ini semua bisa ada hubungannya sama kesehatan brain root...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Internet Itu Pelayan atau Tuan? Mari Tentukan",
      link: "../coretan/internet-itu-seorang-pelayan-atau-tuan.html",
      img: "https://cdn.pixabay.com/photo/2024/06/10/09/28/smartphone-8820274_1280.jpg",
      alt: "Coretan Kin Basari Internet Itu Seorang Pelayan atau Tuan? Mari Tentukan",
      description:"Internet hadir sebagai alat bantu yang luar biasa dalam kehidupan sehari-hari. Namun, di tengah kemudahan yang ditawarkan, muncul pertanyaan penting, apakah kita masih mengendalikan internet, atau justru dikendalikan olehnya? internet yang seharusnya sebagai pelayan setia...",
      labels: ["Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Kamu Harus Lebih Dihargai daripada Kekayaan Materi",
      link: "../coretan/kamu-harus-lebih-dihargai-daripada-kekayaan-materi.html",
      img: "https://cdn.pixabay.com/photo/2016/01/25/06/12/beijing-opera-1160109_1280.jpg",
      alt: "Coretan Kin Basari Kamu Harus Lebih Dihargai daripada Kekayaan Materi",
      description: "Nilai seseorang tidak ditentukan oleh apa yang dimiliki, tetapi oleh siapa dia sebenarnya. Dengan hati yang tulus, pikiran yang bijak, dan kebaikan yang telah diberikan kepada orang lain. Materi bisa hilang dan berubah, tapi kepribadian, integritas, dan cinta yang ditebarkan adalah hal yang tak ternilai dan abadi...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas"]
    },
    {
      title: "Manipulasi Emosional Ketika Kata-Kata Jadi Senjata",
      link: "../coretan/manipulasi-emosional-ketika-kata-kata-jadi-senjata.html",
      img: "https://cdn.pixabay.com/photo/2023/12/07/11/11/girl-8435340_1280.png",
      alt: "Coretan Kin Basari Manipulasi Emosional Ketika Kata-Kata Jadi Senjata",
      description: "Manipulasi emosional terjadi saat seseorang menggunakan kata-kata bukan untuk menyayangi seseorang, tetapi malah untuk mengontrolnya. Kata-kata yang seharusnya membuat seseorang menjadi nyaman malah di jadikan sebagai alat buat nyalahin, ngebingungin, dan membuat seseorang ragu sama diri sendiri. Ini merupakan...",
      labels: ["Pena dan Kuas", "Perspektif"]
    },
    {
      title: "Mengapa Hal Kecil Sering Membekas di Pikiran?",
      link: "../coretan/negativity-bias-mengapa-hal-kecil-sering-membekas.html",
      img: "https://cdn.pixabay.com/photo/2024/07/08/05/29/girl-8880133_1280.png",
      alt: "Coretan Kin Basari Mengapa Hal Kecil Sering Membekas di Pikiran?",
      description: "Negativity bias bisa jadi berbahaya karena bikin kita fokus terus ke hal-hal buruk, meskipun sekecil biji jeruk. Akibatnya, kita jadi gampang overthinking, stres, rendah diri, bahkan merasa hidup ini selalu salah. Kalau terus dibiarin, bisa memengaruhi kesehatan mental dan bikin kita susah lihat hal-hal positif yang sebenarnya...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas"]
    },
    {
      title: "Seni Rahasia Menghadapi Wanita Ngambek",
      link: "../coretan/seni-rahasia-menghadapi-wanita-ngambek.html",
      img: "https://cdn.pixabay.com/photo/2024/08/23/15/24/ai-generated-8992116_1280.jpg",
      alt: "Coretan Kin Basari Seni Rahasia Menghadapi Wanita Ngambek",
      description: "Perempuan suka ngambek bukan karena marah, tapi karena sinyal sayangnya lagi buffering. alasan utama suka ngambek karena ingin diperhatikan, merasa tidak dimengerti, atau sedang butuh kepastian dan pengakuan dari pasangannya. Ngambek sering jadi cara halus buat mengungkapkan perasaan tanpa melalui ucapan...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas"]
    },
    {
      title: "Bahagia Tidak Perlu Dicari Tetapi Diciptakan",
      link: "../coretan/bahagia-tidak-perlu-dicari-tetapi-diciptakan.html",
      img: "https://cdn.pixabay.com/photo/2021/05/06/16/13/children-6233868_1280.png",
      alt: "Coretan Kin Basari Bahagia Tidak Perlu Dicari Tetapi Diciptakan",
      description: "Mencari kebahagiaan memang penting tapi kalau cuma mencari, seseorang bisa terus menerus berharap sesuatu dari luar dirinya untuk membuat bahagia. Tapi kalau menciptakan kebahagiaan, orang bisa mengambil kendali atas perasaannya sendiri, lebih mudah menemukan makna dalam hal-hal kecil, dan...",
      labels: ["Pena dan Kuas", "Perspektif"]
    },
    
    {
      title: "Hidup Ini Memang Singkat Buatlah Lebih Berarti",
      link: "../coretan/hidup-itu-singkat-maka-buatlah-lebih-berarti.html",
      img: "https://cdn.pixabay.com/photo/2023/10/11/18/59/autumn-8309311_1280.jpg",
      alt: "Coretan Kin Basari Hidup Ini Memang Singkat Buatlah Lebih Berarti",
      description: "Meditasi, refleksi diri, dan menjaga hubungan yang sehat bisa menemukan ketenangan di tengah kekacauan. Fokus pada hal-hal yang bisa dikendalikan dan belajar melepaskan yang diluar kendali akan membantu seseorang dengan mudah menjalani hidup dengan lebih damai dan penuh makna...",
      labels: ["Pena dan Kuas", "Perspektif"]
    },
    {
      title: "Adaptasi Mencari Ketenangan Pikiran Hidup di Dunia yang Kacau",
      link: "../coretan/adaptasi-ketenangan-pikiran-hidup-didunia-yang-kacau.html",
      img: "https://cdn.pixabay.com/photo/2023/12/09/10/10/woman-8439003_1280.png",
      alt: "Coretan Kin Basari Adaptasi Mencari Ketenangan Pikiran Hidup di Dunia yang Kacau",
      description: "Di dunia yang penuh ketidakpastian dan hiruk-pikuk, mencari ketenangan pikiran menjadi tantangan tersendiri. Adaptasi adalah kunci untuk menjaga keseimbangan mental dan emosional. Dengan menerima perubahan, mengelola stres, serta membangun kebiasaan positif seperti...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas", "Wawasan Tekno"]
    },
    {
      title: "Belajar Aktif vs Belajar Pasif, Rahasia Cepat Paham Saat Belajar",
      link: "../coretan/rahasia-cepat-paham-saat-belajar.html",
      img: "https://cdn.pixabay.com/photo/2021/10/08/13/02/woman-6691311_1280.jpg",
      alt: "Coretan Kin Basari Belajar Aktif vs Belajar Pasif, Rahasia Cepat Paham Saat Belajar",
      description: "Belajar aktif dan belajar pasif memiliki perbedaan besar dalam efektivitas memahami materi. Belajar pasif terjadi ketika seseorang hanya menerima informasi tanpa banyak interaksi, seperti membaca atau mendengarkan ceramah. Sebaliknya, belajar aktif melibatkan partisipasi...",
      labels: ["Bangkit dan Bergerak", "Wawasan Tekno"]
    },
    {
      title: "Stop Comparing Yourself, Fokus pada Pertumbuhan Bukan Perbandingan",
      link: "../coretan/stop-comparing-yourself-fokus-pada-pertumbuhan.html",
      img: "https://cdn.pixabay.com/photo/2022/07/07/10/46/woman-7306978_1280.jpg",
      alt: "Coretan Kin Basari Stop Comparing Yourself, Fokus pada Pertumbuhan Bukan Perbandingan",
      description: "Di era media sosial, mudah sekali terjebak dalam kebiasaan membandingkan diri dengan orang lain. Melihat pencapaian, gaya hidup, atau kebahagiaan orang lain bisa membuat kita merasa kurang berharga. Padahal, setiap individu memiliki perjalanan hidupnya sendiri. Alih-alih sibuk...",
      labels: ["Bangkit dan Bergerak", "Perspektif"]
    },
    {
      title: "Diam Bukan Berarti Lemah, Stop Oversharing",
      link: "../coretan/diam-bukan-berarti-lemah-stop-oversharing.html",
      img: "https://cdn.pixabay.com/photo/2022/04/02/00/30/laughing-7105960_1280.png",
      alt: "Coretan Kin Basari Diam Bukan Berarti Lemah, Stop Oversharing",
      description: "Membagikan segala aspek kehidupan di media sosial memang perlu, tapi terlalu banyak berbagi (over sharing) bisa berisiko bagi privasi maupun mental. Tidak semua orang perlu tahu rencana, masalah, atau kebahagiaan kita. Terkadang, diam memberi ruang untuk berpikir, menghindari...",
      labels: ["Perspektif", "Wawasan Tekno"]
    },

    {
      title: "Sibuk Seharian Tapi Hasil Nol? Saatnya Beralih ke Produktif",
      link: "../coretan/sibuk-seharian-tapi-hasil-nol-beralih-produktif.html",
      img: "https://cdn.pixabay.com/photo/2023/11/03/20/27/ai-generated-8363801_1280.png",
      alt: "Coretan Kin Basari Sibuk Seharian Tapi Hasil Nol? Saatnya Beralih ke Produktif",
      description: "Sering merasa sibuk sepanjang hari, tetapi ketika malam tiba, tidak ada hasil yang benar-benar signifikan? Ini tanda bahwa perlu beralih dari sekadar sibuk ke benar-benar produktif bukan soal seberapa banyak tugas yang dikerjakan, melainkan seberapa efektif...",
      labels: ["Bangkit dan Bergerak", "Wawasan Tekno"]
    },
    {
      title: "Jaga Kesehatan Mental dari Pengaruh Orang-Orang Toxic",
      link: "../coretan/jaga-kesehatan-mental-dari-pengaruh-orang-toxic.html",
      img: "https://cdn.pixabay.com/photo/2023/06/18/10/10/ai-generated-8071738_1280.png",
      alt: "Coretan Kin Basari Jaga Kesehatan Mental dari Pengaruh Orang-Orang Toxic",
      description: "Menjauh dari lingkungan toxic itu wajib banget, soalnya kalau kelamaan di situ, energi bakal kesedot habis. Orang toxic tuh hobi ngejatuhin, bikin drama, dan nyebarin vibes negatif. Lama-lama bisa ikutan stres, overthinking, atau bahkan...",
      labels: ["Pena dan Kuas", "Perspektif"]
    },
    {
      title: "Konsistensi Lebih Penting dari pada Motivasi",
      link: "../coretan/konsistensi-lebih-penting-dari-motivasi.html",
      img: "https://cdn.pixabay.com/photo/2023/01/21/09/05/man-7733364_1280.jpg",
      alt: "Coretan Kin Basari Konsistensi Lebih Penting dari pada Motivasi",
      description: "Kebiasaan untuk terus bergerak maju itu kunci buat terus jalan meski semangat lagi nggak on fire. Bahkan ketika motivasi sedang rendah di sinilah konsistensi yang memiliki peran sangat penting. Dengan konsistensi...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas", "Perspektif"]
    },
    {
      title: "Upgrade diri, Perjalanan Menuju Kedewasaan",
      link: "../coretan/upgrade-diri-perjalanan-menuju-kedewasaan.html",
      img: "https://cdn.pixabay.com/photo/2016/09/15/18/32/update-1672367_1280.jpg",
      alt: "Coretan Kin Basari Upgrade diri, Perjalanan Menuju Kedewasaan",
      description: "Ngerasa emosi meledak-ledak entah itu karena masalah sepele atau hal besar yang beneran bikin kesel. Cobalah belajar buat nggak terlalu baperan. Kadang emosi bikin nggak bisa mikir jernih. Duduk dulu tarik napas...",
      labels: ["Bangkit dan Bergerak", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Seni Mengendalikan Diri: Stoikisme dan Rahasia Kebahagiaan Sejati",
      link: "../coretan/seni-mengendalikan-diri-stoikisme-rahasia-kebahagiaan.html",
      img: "https://cdn.pixabay.com/photo/2013/05/04/05/12/traffic-sign-108779_1280.jpg",
      alt: "Coretan Kin Basari Seni Mengendalikan Diri: Stoikisme dan Rahasia Kebahagiaan Sejati",
      description: "Salah satu filsafat yang sangat terkenal berasal dari Yunani Kuno, yang mengajarkan bahwa dunia ini berjalan sesuai dengan hukum alam, dimana segala sesuatu yang terjadi di luar kendali dan dianggap netral, bukan baik atau buruk secara intrinsik dan bahwa kebahagiaan sejati dapat dicapai dengan mengendalikan persepsi serta reaksi kita terhadap peristiwa eksternal...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas"]
    },

    {
      title: "Self-Discovery: Perjalanan Menemukan Makna dan Tujuan Hidup",
      link: "../coretan/self-discovery-perjalanan-menemukan-makna-hidup.html",
      img: "https://cdn.pixabay.com/photo/2020/04/02/09/21/self-quarantine-4994279_1280.jpg",
      alt: "Coretan Kin Basari Self-Discovery: Perjalanan Menemukan Makna dan Tujuan Hidup",
      description: "Suatu perjalanan kehidupan yang berlangsung seumur hidup, bukan sesuatu yang selesai dalam satu waktu. Mengenali diri sendiri adalah proses yang terus berlangsung seiring waktu. Setiap pengalaman, tantangan, dan refleksi membantu kita memahami siapa kita sebenarnya, apa yang kita inginkan, dan bagaimana kita bisa hidup dengan lebih otentik...",
      labels: ["Bangkit dan Bergerak", "Perspektif"]
    },
    {
      title: "Bahaya Rip Current Arus Laut 2 Meter Perdetik",
      link: "../coretan/bahaya-rip-current-arus-laut.html",
      img: "https://cdn.pixabay.com/photo/2022/04/02/14/22/the-great-wave-off-kanagawa-7107112_1280.png",
      alt: "Coretan Kin Basari Bahaya Rip Current Arus Laut 2 Meter Perdetik",
      description: "Rip current sangat berbahaya karena arusnya yang kuat dapat menyeret perenang ke laut lepas dengan cepat, membuat mereka kelelahan saat mencoba melawan arus. Banyak orang panik dan berusaha berenang melawan arus, yang justru meningkatkan risiko tenggelam...",
      labels: ["Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Orang Indonesia Kerja di Luar Negeri, Kenapa Sih?",
      link: "../coretan/kenapa-kerja-di-luar-negeri.html",
      img: "https://cdn.pixabay.com/photo/2020/05/19/13/53/cartoon-5190955_1280.jpg",
      alt: "Coretan Kin Basari Orang Indonesia Kerja di Luar Negeri, Kenapa Sih?",
      description: "Banyak orang Indonesia memilih bekerja di luar negeri karena beberapa alasan utama. Tapi bekerja di luar negeri juga memiliki tantangan seperti perbedaan budaya, bahasa, serta risiko eksploitasi tenaga kerja...",
      labels: ["Bangkit dan Bergerak", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Sangat Rugi Nonton Video Alur Film!",
      link: "../coretan/sangat-rugi-nonton-video-alur-film.html",
      img: "https://cdn.pixabay.com/photo/2022/01/21/00/38/youtube-icon-6953528_1280.jpg",
      alt: "Coretan Kin Basari Sangat Rugi Nonton Video Alur Film!",
      description: "Alur film biasanya cuma rangkuman cerita, jadi banyak detail kecil yang dilewatin, seperti dialog penting, simbolisme, atau adegan yang membangun karakter. Padahal, detail-detail ini bisa bikin film lebih bermakna dan keren...",
      labels: ["Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Khodam Warisan Leluhur dan Bisa Diturunin",
      link: "../coretan/khodam-warisan-leluhur-dan-bisa-diturunin.html",
      img: "https://cdn.pixabay.com/photo/2025/02/13/21/14/ai-generated-9405120_1280.png",
      alt: "Coretan Kin Basari Khodam Warisan Leluhur dan Bisa Diturunin",
      description: "Beberapa pandangan menyebutkan bahwa khodam bisa diwariskan dari leluhur ke keturunan, terutama jika diperoleh melalui amalan tertentu atau benda pusaka. Namun, ada juga yang berpendapat bahwa khodam hanya mengikuti individu yang...",
      labels: ["Pena dan Kuas", "Perspektif"]
    },
    {
      title: "Menulis Itu Healing! Tumpahin Pikiran, Legain Hati",
      link: "../coretan/menulis-itu-healing-tumpahin-pikiran-legain-hati.html",
      img: "../img/thumb/thumb02.jpg",
      alt: "Coretan Kin Basari Menulis Itu Healing! Tumpahin Pikiran, Legain Hati",
      description: "Kadang ada hal-hal yang susah diungkapin lewat omongan, tapi kalau ditulis, semuanya mengalir gitu aja. Lagi galau? Lagi seneng banget? Lagi sedih? Lagi kangen seseorang? Tumpahin aja dalam kata-kata! Menulis itu ibarat nyawa kedua...",
      labels: ["Pena dan Kuas", "Wawasan Tekno"]
    },
    {
      title: "Cara Santai Bikin Tulisan yang Asik Dibaca",
      link: "../coretan/cara-santai-bikin-tulisan-yang-asik-dibaca.html",
      img: "../img/thumb/thumb01.jpg",
      alt: "Coretan Kin Basari Cara Santai Bikin Tulisan yang Asik Dibaca",
      description: "Pengen nulis tapi bingung mulai dari mana? Takut tulisanmu jelek dan nggak bagus? Atau tulisanmu kerasa kaku dan ngebosenin? Tenang aja bro! Nulis itu sebenernya gampang kok dan seru asal kamu tau triknya...",
      labels: ["Pena dan Kuas", "Wawasan Tekno"]
    },
    {
      title: "Dari Kata Jadi Karya, Serunya Nulis",
      link: "../coretan/dari-kata-jadi-karya-serunya-nulis.html",
      img: "https://cdn.pixabay.com/photo/2023/06/08/10/03/to-write-8049224_1280.png",
      alt: "Coretan Kin Basari Dari Kata Jadi Karya, Serunya Nulis",
      description: "Begitu asyiknya nuangin ide jadi tulisan. Dari mikirin konsep, nyusun kata-kata, sampai akhirnya punya karya sendiri, semua itu seru banget! Selain bikin makin kreatif, nulis juga jadi cara buat curhat, berbagi cerita, atau bahkan ngasih inspirasi ke orang lain...",
      labels: ["Pena dan Kuas", "Wawasan Tekno"]
    },
    {
      title: "Ketahui Bakat Terpendammu",
      link: "../coretan/ketahui-bakat-terpendammu.html",
      img: "https://cdn.pixabay.com/photo/2022/01/18/09/40/music-6946688_1280.jpg",
      alt: "Coretan Kin Basari Ketahui Bakat Terpendammu",
      description: "Setiap individu memiliki bakat unik yang mungkin belum disadari sepenuhnya. Menemukan bakat terpendam bisa menjadi langkah awal untuk pengembangan diri dan pencapaian tujuan hidup, dan dapat mengidentifikasi potensi yang tersembunyi...",
      labels: ["Pena dan Kuas", "Perspektif"]
    },
    {
      title: "Kisah Inspiratif Untuk Semangat Hidup",
      link: "../coretan/kisah-inspiratif-untuk-semangat.hidup.html",
      img: "https://cdn.pixabay.com/photo/2025/05/31/11/25/just-do-it-9633189_1280.jpg",
      alt: "Coretan Kin Basari Kisah Inspiratif Untuk Semangat Hidup",
      description: "Hidup ini bukan tentang seberapa sering kamu mengeluh, tapi seberapa kuat kamu bangkit. Setiap masalah adalah ujian, setiap keluhan hanya menghabiskan energi. Ganti keluhan dengan tindakan, ubah rintangan jadi tantangan. Semangat! Hidupmu terlalu berharga untuk dihabiskan dengan mengeluh...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas", "Wawasan Tekno"]
    },
    {
      title: "98% Wanita Akan Berbohong Setelah Lebih dari 10 Percakapan",
      link: "../coretan/98-wanita-akan-berbohong-setelah-lebih-dari.html",
      img: "https://cdn.pixabay.com/photo/2022/07/11/18/01/woman-7315671_1280.jpg",
      alt: "Coretan Kin Basari 98% Wanita Akan Berbohong Setelah Lebih dari 10 Percakapan",
      description: "Membahas hasil penelitian atau survei yang menunjukkan bahwa sebagian besar wanita cenderung berbohong setelah berbicara dengan seseorang, entah karena alasan tertentu atau alasan psikologis di balik kebohongan tersebut...",
      labels: ["Bangkit dan Bergerak", "Pena dan Kuas", "Perspektif", "Wawasan Tekno"]
    },
    {
      title: "Stop Minder! Langkah simpel buat Upgrade Diri",
      link: "../coretan/stop-minder-langkah-simpel-buat-up.html",
      img: "https://cdn.pixabay.com/photo/2017/01/31/13/46/girl-2024190_1280.png",
      alt: "Coretan Kin Basari Stop Minder! Langkah simpel buat Upgrade Diri",
      description: "Sudah saatnya nggak perlu minder dengan fisik atau kondisi tertentu. setiap orang punya kelebihan, hidup bukan kompetisi, dan kepercayaan diri itu penting. Sekarap stop minder karena dengan berhenti minder bisa lebih menghargai diri sendiri dan mengambil kesempatan yang ada...",
      labels: ["Pena dan Kuas", "Perspektif", "Wawasan Tekno"]
    }
  ];


export default artikelData;


