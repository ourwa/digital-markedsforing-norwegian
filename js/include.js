document.addEventListener("DOMContentLoaded", () => {
  loadFragment("header.html", "#site-header");
  loadFragment("footer.html", "#site-footer");
});

function loadFragment(file, selector) {
  const target = document.querySelector(selector);
  if (!target) return;

  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Failed to load " + file);
      return response.text();
    })
    .then(html => {
      target.innerHTML = html;
    })
    .catch(err => {
      console.error(err);
    });
}