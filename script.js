var swiper = new Swiper(".heroSwiper", {
  pagination: {
    el: ".hero_banner",
    clickable: true,
  },
});

var swiper = new Swiper(".shop_by_category_swiper", {
  slidesPerView: 8,
  loop: true,
  spaceBetween: 20, 
  // cssMode: true,
  cssMode: false, 
  navigation: {
    nextEl: "#next_button",
    prevEl: "#previous_button",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  mousewheel: true,
  keyboard: true,
});
