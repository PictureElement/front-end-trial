document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  var slider = tns({
    container: '.testimonials-slider',
    items: 1,
    autoplay: false,
    navPosition: "bottom",
    controlsPosition: "bottom",
    controlsText: ['<svg xmlns="http://www.w3.org/2000/svg" width="70.711" height="70.711" viewBox="0 0 70.711 70.711"><path d="M0,49V1A1,1,0,0,1,1,0H49a1,1,0,1,1,0,2H2V49a1,1,0,1,1-2,0Z" transform="translate(0 35.356) rotate(-45)" fill="#d4b254"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="70.711" height="70.711" viewBox="0 0 70.711 70.711"><path d="M0,49V1A1,1,0,0,0-1,0H-49a1,1,0,0,0-1,1,1,1,0,0,0,1,1H-2V49a1,1,0,0,0,1,1A1,1,0,0,0,0,49Z" transform="translate(70.711 35.356) rotate(45)" fill="#d4b254"/></svg>']
  });
});
