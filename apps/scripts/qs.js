
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
    document.getElementById("scrollBtnText").innerHTML = '<i data-feather="pause"></i>';
    feather.replace();
  }

  function stopScroll() {
    clearInterval(interval);
    isScrolling = false;
    document.getElementById("scrollBtnText").innerHTML = '<i data-feather="play"></i>';
   feather.replace(); 
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

