$('.carusel').slick({ 
  prevArrow: '<img src="img/Arrow_left.svg">',
  nextArrow: '<img src="img/Arrow_right.svg">',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

function toggleNav() {
    var navElement = document.getElementById('navElement');
    navElement.classList.toggle('show');
}