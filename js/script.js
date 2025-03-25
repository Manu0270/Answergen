// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
}

// Dropdown toggle on click
// Dropdown toggle on click
const dropdownToggle = document.querySelectorAll('.dropdown-toggle');
const dropdownMenu = document.querySelectorAll('.dropdown-menu');
const chevron = document.querySelectorAll('.chevron');

if (dropdownToggle.length > 0 && dropdownMenu.length > 0 && chevron.length > 0) {
    dropdownToggle.forEach((toggle, index) => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const menu = dropdownMenu[index];
            const chev = chevron[index];
            menu.classList.toggle('active');
            chev.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!toggle.contains(event.target) && !dropdownMenu[index].contains(event.target)) {
                dropdownMenu[index].classList.remove('active');
                chevron[index].classList.remove('active');
            }
        });
    });
}

// [Rest of the script.js content remains the same]



// Add scroll behavior to header and logo
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logoImg = document.querySelector('.logo img');
    const heroHeight = document.querySelector('.hero').offsetHeight;
    const navLinks = document.querySelectorAll('nav ul li a');
    const halfHeroHeight = heroHeight / 2;
    if (window.innerWidth > 768) {
        if (window.scrollY > halfHeroHeight) {
            header.style.background = '#fff';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            navLinks.forEach(link => link.style.color = '#000');
            logoImg.classList.add('logo-scrolled');
        } else {
            header.style.background = 'transparent';
            header.style.boxShadow = 'none';
            navLinks.forEach(link => link.style.color = '#fff');
            logoImg.classList.remove('logo-scrolled');
        }
    }
});

window.addEventListener('resize', function() {
    const header = document.querySelector('header');
    const logoImg = document.querySelector('.logo img');
    const navLinks = document.querySelectorAll('nav ul li a');
    if (window.innerWidth <= 768) {
        header.style.background = '#fff';
        header.style.boxShadow = 'none';
        navLinks.forEach(link => link.style.color = '#fff');
        logoImg.classList.remove('logo-scrolled');
    } else {
        const heroHeight = document.querySelector('.hero').offsetHeight;
        const halfHeroHeight = heroHeight / 2;
        if (window.scrollY > halfHeroHeight) {
            header.style.background = '#fff';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            navLinks.forEach(link => link.style.color = '#000');
            logoImg.classList.add('logo-scrolled');
        } else {
            header.style.background = 'transparent';
            header.style.boxShadow = 'none';
            navLinks.forEach(link => link.style.color = '#fff');
            logoImg.classList.remove('logo-scrolled');
        }
    }
});


// Scroll Up Button and Anchor Link Functionality
document.addEventListener('DOMContentLoaded', function () {
    const scrollUpButton = document.getElementById('scrollUp');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight; // Get the height of the fixed header

    // Show/hide the scroll-up button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            scrollUpButton.classList.add('visible');
        } else {
            scrollUpButton.classList.remove('visible');
        }
    });

    // Smooth scroll to top when the button is clicked
    scrollUpButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    });

    // Adjust scroll position for anchor links to account for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target ID (e.g., "contact-us")
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // Smooth scrolling
                });
            }
        });
    });
});