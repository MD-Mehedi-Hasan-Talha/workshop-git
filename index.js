document.addEventListener("DOMContentLoaded", () => {
  let productsData = [];

  // Fetch products once and store them in a variable
  fetch("data/products.json")
    .then((response) => response.json())
    .then((data) => {
      productsData = data.products;
      displayProducts(productsData);
    })
    .catch((error) => console.error("Error fetching products:", error));

  // Listen for search input changes
  document.getElementById("search").addEventListener("input", (event) => {
    const searchQuery = event.target.value.toLowerCase();
    displayProducts(productsData, searchQuery);
  });

  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById("darkModeToggle");
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (
    localStorage.getItem("darkMode") === "enabled" ||
    (!localStorage.getItem("darkMode") && prefersDarkScheme)
  ) {
    document.body.classList.add("dark-mode");
  }

  darkModeToggle.addEventListener("click", toggleDarkMode);
});

// Function to display products
function displayProducts(products, search = "") {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = "";

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
  );

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
                  <img src="${product.image}" alt="${product.name}" class="product-image">
                  <h2 class="product-title">${product.name}</h2>
                  <p class="product-category">${product.category}</p>
                  <p class="product-price">$${product.price}</p>
                  <p class="product-description">${product.description}</p>
              `;
    productGrid.appendChild(productCard);
  });
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}
