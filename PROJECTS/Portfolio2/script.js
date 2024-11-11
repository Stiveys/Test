// Function to toggle the navigation menu on mobile devices
function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Function to close the navigation when a link is clicked (for mobile)
function closeNav() {
    const nav = document.querySelector('nav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
}

// Event listener for the logo to toggle the navigation
document.querySelector('.logo').addEventListener('click', toggleNav);

// Event listener for nav links to close the nav on click
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
});

// Typing effect for the dynamic text
const words = ['Web Developer', 'Developer', 'Web Designer'];
let i = 0;
setInterval(() => {
    document.querySelector('.typing-text span').textContent = words[i];
    i = (i + 1) % words.length;
}, 2000);
