function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section, i) => {
    setTimeout(() => {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }, i * 300);
  });
});
