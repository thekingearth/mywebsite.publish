const klikElements = document.querySelectorAll('.klik');

klikElements.forEach((klik, index) => {
  klik.addEventListener('click', () => {
    const nextText = klik.nextElementSibling;
    nextText.classList.toggle('hidden');
    });
  });
