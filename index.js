onload = () => {
  document.body.classList.remove("container");
};

window.addEventListener("load", () => {
  const audio = document.getElementById("bg-music");
  const overlay = document.getElementById("click-overlay");
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");
  const closeBtn = document.getElementById("closeLetter");

  // For typing effect
  const letterContent = document.getElementById("letterContent").innerHTML;
  const typedText = document.getElementById("typedText");
  let typingTimeout;

  function typeWriter(text, i = 0) {
    if (i < text.length) {
      typedText.innerHTML = text.substring(0, i + 1);
      typingTimeout = setTimeout(() => typeWriter(text, i + 1), 30); // typing speed
    }
  }

  // Overlay click → start music, show envelope
  overlay.addEventListener("click", () => {
    audio.play();
    envelope.style.display = "block";
    overlay.remove();
  });

  // Envelope click → open letter & start typing
  envelope.addEventListener("click", () => {
    letter.classList.add("show");
    envelope.style.display = "none";
    typedText.innerHTML = ""; // reset before typing again
    clearTimeout(typingTimeout);
    typeWriter(letterContent, 0);
  });

  // Close letter
  closeBtn.addEventListener("click", () => {
    letter.classList.remove("show");
    envelope.style.display = "block";
    clearTimeout(typingTimeout);
  });

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Random horizontal position (0 to 100vw)
    snowflake.style.left = Math.random() * 100 + "vw";

    // Random animation duration (between 2s and 5s)
    const duration = Math.random() * 3 + 2;
    snowflake.style.animationDuration = duration + "s";

    // Random opacity (between 0.4 and 1)
    snowflake.style.opacity = Math.random() * 0.6 + 0.4;

    // Random size (between 3px and 8px)
    const size = Math.random() * 5 + 3;
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";

    document.body.appendChild(snowflake);

    // Remove the snowflake after it finishes falling to prevent memory leaks
    setTimeout(() => {
      snowflake.remove();
    }, duration * 1000);
  }

  // Start the snow
  setInterval(createSnowflake, 50);
});
