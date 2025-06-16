
// Import Tiny Slider
import { tns } from 'tiny-slider/src/tiny-slider.js';
import 'tiny-slider/dist/tiny-slider.css';

// Import our custom CSS
import '../scss/styles.scss';
// Import specific Bootstrap plugins
import { Dropdown, Collapse } from 'bootstrap';

// Import AOS (Animate On Scroll) library for animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Basic Lightbox for image lightbox functionality
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

document.addEventListener('DOMContentLoaded', function () {

  // Initialize Tiny Slider
  tns({
    container: '.testimonials-slider',
    items: 1,
    autoplay: false,
    navPosition: "bottom",
    controlsPosition: "bottom",
    controlsText: ['<svg xmlns="http://www.w3.org/2000/svg" width="70.711" height="70.711" viewBox="0 0 70.711 70.711"><path d="M0,49V1A1,1,0,0,1,1,0H49a1,1,0,1,1,0,2H2V49a1,1,0,1,1-2,0Z" transform="translate(0 35.356) rotate(-45)" fill="#d4b254"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="70.711" height="70.711" viewBox="0 0 70.711 70.711"><path d="M0,49V1A1,1,0,0,0-1,0H-49a1,1,0,0,0-1,1,1,1,0,0,0,1,1H-2V49a1,1,0,0,0,1,1A1,1,0,0,0,0,49Z" transform="translate(70.711 35.356) rotate(45)" fill="#d4b254"/></svg>']
  });

  // Add/remove background to navbar
  const primaryMenu = document.getElementById('primaryMenu')
  const customNavbar = document.querySelector('.custom-navbar');

  primaryMenu.addEventListener('show.bs.collapse', function () {
    customNavbar.classList.add('custom-navbar_bg');
  })
  primaryMenu.addEventListener('hidden.bs.collapse', function () {
    customNavbar.classList.remove('custom-navbar_bg');
  })

  // Initialize AOS
  AOS.init({ once: true });

  document.querySelectorAll('button[data-basiclightbox="gallery"]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault() // Prevent default button behavior

      const imgSrc = button.getAttribute('data-src')
      const caption = button.getAttribute('data-caption')

      // Build the lightbox content
      let content = `
        <figure class="lightbox">
          <img src="${imgSrc}" class="lightbox__image" alt="${caption}">
          <figcaption class="lightbox__caption">${caption}</figcaption>
        </figure>
      `;

      // Show the lightbox
      basicLightbox.create(content).show();
    })
  })
});
