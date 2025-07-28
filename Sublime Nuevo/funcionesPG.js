// Mantener el header fijo 
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.style.position = "fixed";
  header.style.top = "0";
  header.style.left = "0";
  header.style.right = "0";
  header.style.zIndex = "1000";
});

// movimiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    const header = document.querySelector("header");
    
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});

// Búsqueda en toda la página
function filterProducts() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();

  const listItems = document.querySelectorAll("#menu li, #servicios li, #acerca li, #redesociales li");

  listItems.forEach(item => {
    const title = item.querySelector("h3")?.textContent.toLowerCase() || "";
    const description = item.querySelector("p")?.textContent.toLowerCase() || "";

    if (title.includes(filter) || description.includes(filter) || filter === "") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Hacer accesible la función desde el botón en HTML
window.filterProducts = filterProducts;
