var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: 2600
});

var elem2 = document.querySelector('.main-carousel2');
var flkty2 = new Flickity( elem2, {
  // options
  contain: true,
  pageDots: false,
  wrapAround: true,
  freeScroll: true,
  autoPlay: 1600,
  prevNextButtons: false,
  pageDots: false
});


var elem3 = document.querySelector('.main-carousel3');
var flkty3 = new Flickity( elem3, {
  fade: true,
  autoPlay: 3600,
  prevNextButtons: false
});




function pageScroll(){
  var ele = document.querySelector('.services');
  ele.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}


document.querySelector('#scrollb').addEventListener('click', () => pageScroll());
