
  var isMoving = true;
  function setBackgroundMoving() {
    if(isMoving == true) {
    setTimeout(function() {
      
      // bg berjalan
      var bg = document.getElementById('board');
      bg.style.backgroundPosition = (parseInt(bg.style.backgroundPosition.replace('px', '')) -1) + 'px';
      
      // skore
      document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) +1;
      
      // looping function
      setBackgroundMoving();
    },5);
  }
  }
  
  // inisialisasi bg bergerak
  setBackgroundMoving();
  
  function setRockMoving() {
    var rock = document.getElementById('rock'),
        hero = document.getElementById('hero');
        
    setTimeout(function() {
      rock.style.marginLeft = (parseInt(rock.style.marginLeft.replace('px','')) - 1) + 'px';
      
      if(parseInt(rock.style.marginLeft.replace('px','')) < -100) {
        rock.style.marginLeft = "600px";
      }
      
      if(hero.offsetTop + 50 >= rock.offsetTop &&
          hero.offsetLeft + 50 >= rock.offsetLeft &&
          hero.offsetTop + 50 <= rock.offsetTop + 50 &&
          hero.offsetLeft <= rock.offsetLeft + 50) {
            showGameOverPopup();
            hero.setAttribute('class','jumps');
            isMoving = false;
            
          } else {
      // looping function
    setRockMoving();
          }
            
    },5);
  }
  
  // inisialisasi bg bergerak
  setRockMoving();
  
  
  
  // tombol button lompat
  document.getElementById('herojump').addEventListener('click', function() {
    // seting lompatan hero
    document.getElementById('hero').style.marginTop = "200px";
    document.getElementById('hero').setAttribute('class','jumps');
    
    // hero kembali ke posisi semula
    setTimeout(function() {
      document.getElementById('hero').style.marginTop = "390px";
    document.getElementById('hero').setAttribute('class','');
    }, 1000);
  });


// Pop up game over
function showGameOverPopup() {
    var popup = document.getElementById('gameOverPopup');
    var score = document.getElementById('score').innerHTML;

    // Menampilkan skor di popup
    document.getElementById('finalScore').innerHTML = score;

    // Menampilkan popup
    popup.style.display = "block";
  }
