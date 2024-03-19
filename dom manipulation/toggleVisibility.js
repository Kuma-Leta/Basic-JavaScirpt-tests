const toggleButton = document.getElementById("toggleButton");
const content = document.getElementById("content");

toggleButton.addEventListener("click", () => {
  content.style.display = content.style.display === "none" ? "block" : "none";
});
