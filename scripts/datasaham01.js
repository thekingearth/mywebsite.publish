<script>
const stocks = [
  "ADRO","AMRT","ASGR","ASII","AUTO","BBCA","BBRI",
  "BRPT","CDIA","COIN","CTRA","EMTK","EXCL","ISAT",
  "PTRO","ITMG","TLKM","TPIA","UNTR","UNVR"
];

const grid = document.getElementById("stockGrid");

stocks.forEach(symbol => {

  // --- BUAT CARD ---
  const card = document.createElement("div");
  card.className = "card";

  // --- BUAT CONTAINER WIDGET ---
  const container = document.createElement("div");
  container.className = "tradingview-widget-container";

  // --- BUAT SCRIPT KONFIGURASI ---
  const script = document.createElement("script");
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
  script.async = true;

  // KONFIG widget (cfg harus berupa textContent)
  script.textContent = `
  {
    "symbol": "IDX:${symbol}",
    "width": "100%",
    "height": "100",
    "locale": "id",
    "colorTheme": "dark"
  }`;

  // MASUKKAN KE DOM
  container.appendChild(script);
  card.appendChild(container);
  grid.appendChild(card);

});
</script>
