  const textInput = document.getElementById("textInput");

  textInput.addEventListener("input", () => {
    const text = textInput.value;
    const words = text
    .toLowerCase()
    .replace(/[.,!?;:()'"“”‘’]/g, '') // hapus tanda baca
    .trim()
    .split(/\s+/)
    .filter(Boolean);

    const characters = text.length;
    const charactersNoSpace = text.replace(/\s/g, "").length;
    const paragraphs = text.split(/\n+/).filter(p => p.trim()).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;

    const uniqueWords = [...new Set(words.map(w => w.toLowerCase()))];
    
    // Count keyword frequency
    const freq = {};
    words.forEach(word => {
      const w = word.toLowerCase();
      freq[w] = (freq[w] || 0) + 1;
    });

    const sorted = Object.entries(freq).sort((a, b) => a[1] - b[1]);
    // Estimate reading and speaking time (200wpm & 130wpm)
    const readTime = Math.ceil(words.length / 200);
    const speakTime = Math.ceil(words.length / 130);

    // Update DOM
    document.getElementById("wordCount").textContent = words.length;
    document.getElementById("charCount").textContent = characters;
    document.getElementById("charNoSpace").textContent = charactersNoSpace;
    document.getElementById("paraCount").textContent = paragraphs;
    document.getElementById("sentCount").textContent = sentences;
     document.getElementById("uniqueCount").textContent = uniqueWords.length;
    document.getElementById("readTime").textContent = readTime + " Menit";
    document.getElementById("speakTime").textContent = speakTime + " Menit";

    const keywordDisplay = sorted.map(([word, count]) => {
    const percent = Math.round((count / words.length) * 100);
    return `<div class="keyword-item">${word}<br>${count}x<br>${percent}%</div>`;
    }).join("");

    document.getElementById("keywords").innerHTML = keywordDisplay;
    });
