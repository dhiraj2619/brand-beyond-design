window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY >= 350) {
        navbar.classList.add('sticky-navbar');
        navbar.classList.add('animate__bounceInDown');
    } else {
        navbar.classList.remove('sticky-navbar');
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const qualityCardsSection = document.getElementById('qualitycards');
//     const cards = qualityCardsSection.querySelectorAll('.qualitycard');

//     function checkInView() {
//         const windowHeight = window.innerHeight;
//         const windowTop = window.scrollY;
//         const windowBottom = windowTop + windowHeight;
//         const threshold = 10; // Change this value to adjust when the color should change

//         const sectionTop = qualityCardsSection.getBoundingClientRect().top + window.scrollY;
//         const sectionBottom = sectionTop + qualityCardsSection.offsetHeight;

//         cards.forEach(card => {
//             const cardTop = card.getBoundingClientRect().top + window.scrollY;
//             const cardBottom = cardTop + card.offsetHeight;

//             if (cardBottom >= windowTop + threshold && cardTop <= windowBottom - threshold) {
//                 card.classList.add('in-view');
//             } else {
//                 card.classList.remove('in-view');
//             }
//         });
//     }

//     // Check on scroll and resize
//     window.addEventListener('scroll', checkInView);
//     window.addEventListener('resize', checkInView);

//     // Initial check
//     checkInView();
// });