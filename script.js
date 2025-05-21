document.addEventListener('DOMContentLoaded', function () {
    // Typing Animation
    const typed = new Typed('.multiple-text', {
        strings: ['Software Developer', 'Web Developer', 'Java Developer'],
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1500,
        loop: true,
        smartBackspace: true
    });

    // Sticky Header with Shadow Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
        header.style.boxShadow = window.scrollY > 10 ? '0 0.5rem 1rem rgba(0, 0, 0, 0.1)' : 'none';
    });

    // Mobile Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
        document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
        menuIcon.setAttribute('aria-expanded', navbar.classList.contains('active'));
    });

    // Close Menu on Outside Click
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && e.target !== menuIcon) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            document.body.style.overflow = '';
            menuIcon.setAttribute('aria-expanded', 'false');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Copyright Year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Scroll Reveal
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200,
        reset: false,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        viewFactor: 0.1
    });

    sr.reveal('.home-content, .heading', { origin: 'left', distance: '60px' });
    sr.reveal('.home-img', { origin: 'right', delay: 400 });
    sr.reveal('.services-container, .testimonial-item', { interval: 200 });
    sr.reveal('.about-img', { origin: 'left' });
    sr.reveal('.about-content', { origin: 'right' });
    sr.reveal('.contact form', { origin: 'bottom' });

    // Active Section Highlighting with Debounce
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 300) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }, 100);
    });

    // Close menu on nav link click
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            document.body.style.overflow = '';
            menuIcon.setAttribute('aria-expanded', 'false');
        });
    });

    // About Section: Read More Toggle
    const aboutReadMoreBtn = document.getElementById('read-more-btn');
    if (aboutReadMoreBtn) {
        aboutReadMoreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const moreText = document.querySelector('.about .more-text');
            moreText.classList.toggle('show');
            this.textContent = moreText.classList.contains('show') ? 'Read less' : 'Read more';
        });
    }

    // Services Section: Read More Toggle
    const serviceReadMoreBtns = document.querySelectorAll('.services .read-more-btn');
    serviceReadMoreBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const moreText = this.previousElementSibling;
            moreText.classList.toggle('show');
            this.textContent = moreText.classList.contains('show') ? 'Read less' : 'Read more';
        });
    });
emailjs.init("kvXSUNdTcCcnHKGlN");

const form = document.getElementById('contact-form');
const formMessage = document.createElement('div');
formMessage.style.color = 'green';
formMessage.style.marginTop = '10px';
form.appendChild(formMessage);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = ''; // Clear previous message

    emailjs.sendForm('service_j0rft9q', 'template_z0kvjrb', this)
        .then(() => {
            formMessage.textContent = 'Your data has been submitted successfully!';

            return emailjs.sendForm('service_j0rft9q', 'template_a8o01gt', this);
        })
        .then(() => {
            console.log('Admin notified.');
            form.reset();

            setTimeout(() => {
                window.location.href = '#home'; // Apne home page ka URL yahan do
            }, 3000);
        })
        .catch((error) => {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Failed to submit your message. Please try again.';
            console.error(error);
        });
    });
});
