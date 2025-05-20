const klikElements = document.querySelectorAll('.klik');

klikElements.forEach((klik) => {
  klik.addEventListener('click', () => {
    const nextText = klik.nextElementSibling;
    nextText.classList.toggle('hidden-toggle');
    });
  });
