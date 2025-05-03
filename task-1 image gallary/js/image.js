const pages = [
  "historical.html",
  "nature.html",
  "festivals.html",
  "wildlife.html",
];


const currentPage = window.location.pathname.split("/").pop();
const currentIndex = pages.indexOf(currentPage);



document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < pages.length-1) {
    window.location.href = pages[currentIndex + 1];
  }
});

document.getElementById("backBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    window.location.href = pages[currentIndex - 1];
  }
});