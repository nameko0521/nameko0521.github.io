"use strict";

window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
  console.log('beforeunload');
});

window.addEventListener("scroll", function(event) {
  let page_Title = document.getElementById("projects-title");
  let product_Guitar = document.getElementById("anime-guitar");
  let image_Guitar = document.getElementById("image-original-guitar");

  let scrollY = window.scrollY / 10;
  let opacity_ScrollY = window.scrollY / 5;


  page_Title.style.opacity = 100 - opacity_ScrollY + '%';

  product_Guitar.style.marginLeft = 'auto';

  image_Guitar.style.width = 100 - scrollY + '%';
  image_Guitar.style.marginLeft = 'auto'
  // product_Guitar.style.overflow = 'contain';
  // image_Guitar.style.objectFit = 'contain';
});