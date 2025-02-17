// -------------------- CUSTOM CURSOR ---------------------------

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {

  const posX = e.clientX;
  const posY = e.clientY;

  // Update cursorDot instantly
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Animate cursorOutline smoothly
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { 
    duration: 500, 
    fill: "forwards",
    easing: "ease-out"
  });
});
// ------------------------------ SCROLL UP ANIMATION -------------------------------

