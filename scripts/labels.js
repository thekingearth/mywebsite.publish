
import artikelData from '../artdata.js';

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
