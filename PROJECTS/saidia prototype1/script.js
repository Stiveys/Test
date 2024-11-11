// Menu toggle functionality
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close navigation on clicking any link
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Fetching machinery data (API)
const machineryList = document.getElementById("machinery-list");
const priceEl = document.getElementById("select-price");
const priceRange = document.getElementById("price-range");

const API_URL = 'http://localhost:3000/machinery'; // For json-server

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    displayMachinery(data);
    filterMachinery(data); // Initial setup
  })
  .catch(error => console.error("Error fetching data:", error));

// Display machinery in the swiper
function displayMachinery(data) {
  data.forEach(item => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperSlide.innerHTML = `<p>${item.name}<br>Price: $${item.price}</p>`;
    machineryList.appendChild(swiperSlide);
  });
}

// Update price based on slider and filter machinery
priceRange.addEventListener('input', (e) => {
  const selectedPrice = e.target.value;
  priceEl.innerText = selectedPrice;

  // Fetch data and filter based on price
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => item.price <= selectedPrice);
      updateMachineryList(filteredData);
    });
});

// Function to filter machinery by price and display
function updateMachineryList(filteredData) {
  machineryList.innerHTML = ''; // Clear list
  filteredData.forEach(item => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperSlide.innerHTML = `<p>${item.name}<br>Price: $${item.price}</p>`;
    machineryList.appendChild(swiperSlide);
  });
}

// Example of additional array iteration method
function filterMachinery(data) {
  const expensiveItems = data.filter(item => item.price > 500);
  console.log('Expensive machinery:', expensiveItems);
}

// ScrollReveal Animations (for fun)
ScrollReveal().reveal('.swiper-slide', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  interval: 500,
});
