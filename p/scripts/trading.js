
  let widget;
  let headerVisible = true;

  function loadChart() {
    const symbol = document.getElementById("symbolInput").value.trim().toUpperCase();
    if (!symbol) return;

    if (widget) widget.remove();

    widget = new TradingView.widget({
      autosize: true,
      symbol: "IDX:" + symbol,
      interval: "5",
      timezone: "Asia/Jakarta",
      theme: "dark",
      style: "1",
      locale: "id",
      container_id: "chart",

      // ❌ Hilangkan kamera, indikator, tombol +
      disabled_features: [
        "header_screenshot",
        "header_indicators",
        "study_templates",
        "header_compare"
      ],

      // ✅ Drawing aktif
      drawings_access: {
        type: "all",
        tools: [
          { name: "Trend Line" },
          { name: "Horizontal Line" },
          { name: "Ray" },
          { name: "Fibonacci Retracement" },
          { name: "Rectangle" }
        ]
      },

      hide_side_toolbar: false,
      hide_top_toolbar: false,
      enable_publishing: false,
      save_image: false
    });
  }

  function toggleHeader() {
    const header = document.getElementById("topHeader");
    const chart = document.getElementById("chart");

    headerVisible = !headerVisible;
    header.classList.toggle("hidden");
    chart.classList.toggle("full");
  }



  // default load
  window.onload = () => {
    loadChart();
  };
