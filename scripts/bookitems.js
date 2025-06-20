document.addEventListener("alpine:init", () => {
  // Data Buku
  Alpine.data("books", () => ({
    items: [
      { id: 1, name: "Mahir Python", img: "imgpython.png", discoun: "37%", coret: 460000, price: 299000 },
      { id: 2, name: "Mahir Ruby", img: "imgruby.png", discoun: "35%", coret: 370000, price: 240500 },
      { id: 3, name: "Mahir PHP", img: "imgphp.png", discoun: "45%", coret: 400000, price: 260000 },
      { id: 4, name: "Mahir C#", img: "imgcfance.png", discoun: "15%", coret: 365000, price: 237250 },
      { id: 5, name: "Mahir C++", img: "imgcplus.png", discoun: "35%", coret: 320000, price: 208000 },
      { id: 6, name: "Mahir Js", img: "imgjavascript.png", discoun: "35%", coret: 240000, price: 156000 },
    ],
  }));

  // Store Keranjang Belanja
  Alpine.store("cart", {
    items: JSON.parse(localStorage.getItem("cart")) || [],

    // Hitung total jumlah item di keranjang
    get quantity() {
      return this.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    // Hitung total harga semua item
    get total() {
      return this.items.reduce((sum, item) => sum + item.total, 0);
    },

    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
      } else {
        cartItem.quantity++;
        cartItem.total = cartItem.price * cartItem.quantity;
      }

      this.saveCart();
    },

    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
          cartItem.total = cartItem.price * cartItem.quantity;
        } else {
          this.items = this.items.filter((item) => item.id !== id);
        }
      }

      this.saveCart();
    },

    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
  });
});

// Konversi angka ke format Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};



(function() {
  // Script Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  // Inisialisasi waktu
  gtag('js', new Date());

// ID Google Analytics
  gtag('config', 'G-L8FC659LV7');

  // Buat tag script untuk gtag.js
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-L8FC659LV7';
  script.async = true;
  document.head.appendChild(script);
})();

//Adsense
document.addEventListener("DOMContentLoaded", function() {
    let script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5259367956152112";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
});


