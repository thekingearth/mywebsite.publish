
let scrollSpeed = 1;
  let interval = null;
  let isScrolling = false;

  function toggleScroll() {
    if (isScrolling) {
      stopScroll();
    } else {
      startScroll();
    }
  }

  function startScroll() {
    interval = setInterval(() => {
      window.scrollBy(0, scrollSpeed);
    }, 50);
    isScrolling = true;
    document.getElementById("scrollBtnText").textContent = '<i data-feather="pause"></i>';
  }

  function stopScroll() {
    clearInterval(interval);
    isScrolling = false;
    document.getElementById("scrollBtnText").textContent = '<i data-feather="play"></i>';
  }
function increaseSpeed() {
    if (scrollSpeed < 20) scrollSpeed += 1;
    updateSpeedDisplay();
  }

  function decreaseSpeed() {
    if (scrollSpeed > 1) scrollSpeed -= 1;
    updateSpeedDisplay();
  }

  function updateSpeedDisplay() {
    document.getElementById("speedDisplay").textContent = "" + scrollSpeed;
  }

feather.replace();
