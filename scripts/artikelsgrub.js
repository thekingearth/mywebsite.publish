
import artikelData from './artdata.js';

function renderArtikels() {

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

  for (let i = 0; i < artikelData.length; i += 8) {
  const artikelsHidd = document.createElement('div');
  artikelsHidd.className = 'artikels-hidd';

  const group = document.createElement('div');
  group.className = 'hidden group';

  // 4x loop karena kita ingin 4 artikels per group
  for (let k = 0; k < 4; k++) {
    const artikels = document.createElement('div');
    artikels.className = 'artikels';

    // 2 artikel per artikels
    for (let j = 0; j < 2; j++) {
      const index = i + (k * 2) + j;
      if (index < artikelData.length) {
        const artikel = createArtikel(artikelData[index]);
        artikels.appendChild(artikel);
      }
    }

    group.appendChild(artikels);
  }

  artikelsHidd.appendChild(group);
  container.appendChild(artikelsHidd);
}
}

renderArtikels();
