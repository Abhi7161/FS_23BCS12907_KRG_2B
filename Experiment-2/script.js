// Product dataset
const products = [
  { id: 1, name: "Red Shirt", category: "Clothing" },
  { id: 2, name: "Blue Jeans", category: "Clothing" },
  { id: 3, name: "Coffee Mug", category: "Accessories" },
  { id: 4, name: "Sneakers", category: "Footwear" },
  { id: 5, name: "Baseball Cap", category: "Accessories" }
];

const categoryFilter = document.getElementById('category-filter');
const productList = document.getElementById('product-list');
const feedback = document.getElementById('feedback');

// Function to render products into the DOM
function renderProducts(items) {
  productList.innerHTML = ''; // Clear previous items
  if (items.length === 0) {
    productList.textContent = 'No products found.';
  } else {
    items.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product-item';
      div.textContent = product.name + ' (' + product.category + ')';
      productList.appendChild(div);
    });
  }
  // Show feedback about the number of filtered results
  feedback.textContent = `Showing ${items.length} product(s)`;
}

// Filter logic based on dropdown selection
function filterProducts() {
  const selectedCategory = categoryFilter.value;
  let filtered;

  if (selectedCategory === 'All') {
    filtered = products;
  } else {
    filtered = products.filter(product => product.category === selectedCategory);
  }
  renderProducts(filtered);
}

// Event listener for dropdown change
categoryFilter.addEventListener('change', filterProducts);

// Initial render of all products on page load
renderProducts(products);
