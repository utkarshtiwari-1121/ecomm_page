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
  cssMode: false,

  navigation: {
    nextEl: "#next_button",
    prevEl: "#previous_button",
  },

  mousewheel: true,
  keyboard: true,

  breakpoints: {

    // Mobile
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    // Large Mobile
    420: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    520: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    // Tablet
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },

    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    // Small Laptop
    1124: {
      slidesPerView: 6,
      spaceBetween: 20,
    },

    // Desktop
    1280: {
      slidesPerView: 6,
      spaceBetween: 20,
    },

    // Large Desktop
    1440: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },
});




function toggle_menu() {
  const menu = document.querySelector(".hamburger_menu");

  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
}

function closeMenu() {
  const menu = document.querySelector(".hamburger_menu");
  menu.classList.remove("active");
}

function filters() {
  const filters = document.querySelector(".filters_sidebar");

  if (filters.classList.contains("active")) {
    filters.classList.remove("active");
  } else {
    filters.classList.add("active");
  }
}

// function closeFilters() {
//   const filters = document.querySelector(".filters_sidebar");
//   filters.classList.remove("active");
// }