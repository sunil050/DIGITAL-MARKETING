
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
      type       : 'carousel',
      perPage    : 6,
      perMove    : 10,
      pagination : true,
      gap        : '18rem',
      breakpoints: {
        600: {
          perPage: 2,
        },
        768: {
          perPage: 3,
        },
        992: {
          perPage: 4,
        },
        1200: {
          perPage: 6,
        },
      },
      autoplay: true,
      interval: 1000, // Adjust autoplay interval in milliseconds
      pauseOnHover: false, // Set to true if you want to pause on hover
    }).mount();
  });