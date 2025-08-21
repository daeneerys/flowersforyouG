onload = () =>{
    document.body.classList.remove("container");
};

window.addEventListener("load", () => {
  const audio = document.getElementById("bg-music");
  const overlay = document.getElementById("click-overlay");
  const body = document.body;
  const night = document.querySelector(".night");
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");

  overlay.addEventListener("click", () => {
    // Start music
    audio.play();

      // Show envelope after overlay is gone
    envelope.style.display = "block";

    // Remove overlay
    overlay.remove();
  });

  // Open envelope → show letter
  envelope.addEventListener("click", () => {
    letter.classList.add("show");
    envelope.style.display = "none"; // hide envelope after opening
  });
});

const envelope = document.querySelector(".envelope");
const letter = document.getElementById("letter");
const closeBtn = document.getElementById("closeLetter");

// Open letter on envelope click
envelope.addEventListener("click", () => {
  letter.classList.add("show");
  envelope.style.display = "none";
});

// Close letter on × click
closeBtn.addEventListener("click", () => {
  letter.classList.remove("show");
  envelope.style.display = "block";
});