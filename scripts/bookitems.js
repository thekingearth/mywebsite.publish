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
    
    // Hitung total jumlah item
    get quantity() {
      return this.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    // Hitung total harga
    get total() {
      return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1 });
      } else {
        cartItem.quantity++;
      }

      this.saveCart();
    },

    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
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

// Konversi angka ke format rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
