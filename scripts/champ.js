document.addEventListener("DOMContentLoaded", async function () {
    // Load Feather Icons
    const featherScript = document.createElement("script");
    featherScript.src = "https://unpkg.com/feather-icons";
    featherScript.onload = () => {
        if (window.feather) {
            feather.replace();
        }
    };
    document.head.appendChild(featherScript);

    // Load Alpine.js
    const alpineScript = document.createElement("script");
    alpineScript.src = "https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js";
    alpineScript.defer = true;
    document.head.appendChild(alpineScript);
});
