document.addEventListener('alpine:init', () => {
  Alpine.data('books', () => ({
    items: [
      {id: 1, name: 'Mahir Python', img: 'imgpython.png', discoun: '37%', coret: 460000, price: 299000 },
      {id: 2, name: 'Mahir Ruby', img: 'imgruby.png', discoun: '35%', coret: 370000, price: 240500 },
      {id: 3, name: 'Mahir PHP', img: 'imgphp.png', discoun: '45%', coret: 400000, price: 260000 },
      {id: 4, name: 'Mahir C#', img: 'imgcfance.png', discoun: '15%', coret: 365000, price: 237250 },
      {id: 5, name: 'Mahir C++', img: 'imgcplus.png', discoun: '35%', coret: 320000, price: 208000 },
      {id: 6, name: 'Mahir Js', img: 'imgjavascript.png', discoun: '35%', coret: 240000, price: 156000 },
      ],
  }));
  
  Alpine.store('cart', {
    items: [],
    tottal: 0,
    quantity: 0,
    add(newItem) {
      // apakah ada barang yang sama d cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      // Jija belum ada / kosong
      if(!cartItem) {
      this.items.push({...newItem, quantity: 1, tottal: newItem.price  });
      this.quantity++;
      this.tottal += newItem.price;
      } else {
        // jika barang ada cek Apakah barang Ada atau sama di cart
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if(item.id !== newItem.id) {
            return item;
          } else {
            // Jika barang sudah ada, tambah jumlah dan tottal
            item.quantity++;
            item.tottal = item.price * item.quantity;
            this.quantity++;
            this.tottal += item.price;
            return item;
          }
        });
      }
      
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      // jika item lebih dari satu
      if(cartItem.quantity > 1) {
        // Telusuri 1 1
        this.items = this.items.map((item) => {
          // Jika bukan barang yang diklik
          if(item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.tottal = item.price * item.quantity;
            this.quantity--;
            this.tottal -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // Jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.tottal -= cartItem.price;
      }
    },
  });
});





// Konversi rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
};


// Modal

