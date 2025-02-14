
    // Inisialisasi scene, kamera, dan renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 200);
    
    // Mengambil canvas berdasarkan ID 'myCanvas'
    const canvas = document.getElementById('myCanvas');
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Membuat bentuk segi lima menggunakan THREE.Shape
    const shape = new THREE.Shape();
    const radius = 50;
    for (let i = 0; i < 5; i++) {
      const theta = (i / 5) * Math.PI * 2;
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);
      if (i === 0) {
        shape.moveTo(x, y);
      } else {
        shape.lineTo(x, y);
      }
    }
    shape.closePath();
    
    // Atur ekstrusi untuk membuat bangun ruang (prism segi lima)
    const extrudeSettings = {
      depth: 20,         // Ketebalan bangun ruang
      bevelEnabled: false
    };
    
    // Buat geometry dengan ekstrusi dan mesh-nya
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshNormalMaterial({ flatShading: true });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Menambahkan cahaya agar tampilan lebih menarik
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);
    
    // Fungsi animasi: objek berputar dan bergerak secara osilasi
    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
    
      // Rotasi bangun ruang
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    
      // Pergerakan osilasi pada sumbu x
      mesh.position.x = Math.sin(elapsed) * 50;
    
      renderer.render(scene, camera);
    }
    animate();
    
    // Menyesuaikan ukuran renderer jika jendela diubah ukurannya
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
