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
});
