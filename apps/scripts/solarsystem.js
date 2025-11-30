    document.addEventListener("DOMContentLoaded", function(){
      /* --- Pembuatan Bintang --- */
      const starsContainer = document.querySelector('.stars');
      const starCount = 100; // jumlah total bintang
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        // Tentukan ukuran bintang secara acak (1px - 3px)
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        // Tentukan posisi bintang secara acak (dalam persentase)
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Secara acak tentukan bintang yang berkedip atau bergerak
        if (Math.random() < 0.5) {
          star.classList.add('blink');
          const duration = Math.random() * 3 + 2; // 2 - 5 detik
          star.style.animation = `blink ${duration}s infinite`;
        } else {
          star.classList.add('move');
          const duration = Math.random() * 10 + 10; // 10 - 20 detik
          star.style.animation = `moveStar ${duration}s linear infinite`;
        }
        starsContainer.appendChild(star);
      }
      
      /* --- Animasi Sistem Tata Surya --- */
      const system = document.querySelector('.system');
      const centerX = system.offsetWidth / 2;
      const centerY = system.offsetHeight / 2;
      
      // Faktor kecepatan (misal: 5 kali lebih cepat)
      const speedFactor = 5;
      
      const planets = [
        { name: "mer", element: document.querySelector('.mer'), radius: 60,  speed: 0.3 * speedFactor, angle: 0 },
        { name: "ven", element: document.querySelector('.ven'), radius: 90,  speed: 0.25 * speedFactor, angle: 1 },
        { name: "ear", element: document.querySelector('.ear'), radius: 120, speed: 0.3 * speedFactor, angle: 2 },
        { name: "mar", element: document.querySelector('.mar'), radius: 150, speed: 0.21 * speedFactor, angle: 3 },
        { name: "jup", element: document.querySelector('.jup'), radius: 200, speed: 0.18 * speedFactor, angle: 4 },
        { name: "sat", element: document.querySelector('.sat'), radius: 250, speed: 0.16 * speedFactor, angle: 5 },
        { name: "ura", element: document.querySelector('.ura'), radius: 300, speed: 0.12 * speedFactor, angle: 6 },
        { name: "nep", element: document.querySelector('.nep'), radius: 350, speed: 0.08 * speedFactor, angle: 7 },
        { name: "plu", element: document.querySelector('.plu'), radius: 400, speed: 0.081 * speedFactor, angle: 8 }
      ];
      
      const moons = [
        { name: "lune", element: document.querySelector('.lune'), parent: document.querySelector('.ear'), radius: 12, speed: 0.5 * speedFactor, angle: 0 },
        { name: "pho", element: document.querySelector('.pho'), parent: document.querySelector('.mar'), radius: 12, speed: 0.7 * speedFactor, angle: 0 },
        { name: "dem", element: document.querySelector('.dem'), parent: document.querySelector('.mar'), radius: 15, speed: 0.6 * speedFactor, angle: Math.PI },
        { name: "io",  element: document.querySelector('.jove.io'),  parent: document.querySelector('.jup'), radius: 15, speed: 0.4 * speedFactor, angle: 0 },
        { name: "eur", element: document.querySelector('.jove.eur'), parent: document.querySelector('.jup'), radius: 17, speed: 0.2 * speedFactor,  angle: 1 },
        { name: "gan", element: document.querySelector('.jove.gan'), parent: document.querySelector('.jup'), radius: 18, speed: 0.18 * speedFactor, angle: 2 },
        { name: "cal", element: document.querySelector('.jove.cal'), parent: document.querySelector('.jup'), radius: 20, speed: 0.1 * speedFactor, angle: 3 }
      ];
      
      let lastTime = performance.now();
      function animate(currentTime) {
        const dt = (currentTime - lastTime) / 1000;
        lastTime = currentTime;
        
        // Update posisi planet berdasarkan orbit (menggunakan trigonometri)
        planets.forEach(planet => {
          planet.angle += planet.speed * dt;
          const x = centerX + planet.radius * Math.cos(planet.angle);
          const y = centerY + planet.radius * Math.sin(planet.angle);
          planet.element.style.left = x + "px";
          planet.element.style.top  = y + "px";
          planet.element.style.transform = "translate(-50%, -50%)";
        });
        
        // Update posisi bulan relatif terhadap planet induknya
        moons.forEach(moon => {
          moon.angle -= moon.speed * dt;
          const parentCenterX = moon.parent.offsetWidth / 2;
          const parentCenterY = moon.parent.offsetHeight / 2;
          const mx = parentCenterX + moon.radius * Math.cos(moon.angle);
          const my = parentCenterY + moon.radius * Math.sin(moon.angle);
          moon.element.style.left = mx + "px";
          moon.element.style.top  = my + "px";
          moon.element.style.transform = "translate(-50%, -50%)";
        });
        
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    });
  
