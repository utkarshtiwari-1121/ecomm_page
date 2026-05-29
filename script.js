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
    374: {
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

const minPrice = document.getElementById("minPrice");
const range = document.getElementById("minPriceInput");
const maxPrice = document.getElementById("maxPrice");
const rangeMax = document.getElementById("maxPriceInput");

range.addEventListener("input", () => {
  minPrice.textContent = range.value;
});

rangeMax.addEventListener("input", () => {
  maxPrice.textContent = rangeMax.value;
});

var swiper = new Swiper(".shop_card_swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function updateBodyScroll() {
  const menuActive = document
    .querySelector(".hamburger_menu_container")
    ?.classList.contains("active");
  const filtersActive = document
    .querySelector(".filter_sidebar_container")
    ?.classList.contains("active");
  if (menuActive || filtersActive) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}

function toggle_menu() {
  const menu = document.querySelector(".hamburger_menu");
  const overlay = document.querySelector(".hamburger_menu_container");

  if (
    menu.classList.contains("active") ||
    overlay.classList.contains("active")
  ) {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  } else {
    menu.classList.add("active");
    overlay.classList.add("active");
  }
  updateBodyScroll();
}

function closeMenu() {
  const menu = document.querySelector(".hamburger_menu");
  const overlay = document.querySelector(".hamburger_menu_container");

  menu.classList.remove("active");
  overlay.classList.remove("active");
  updateBodyScroll();
}

function filters() {
  const filters = document.querySelector(".filters_sidebar");
  const overlay = document.querySelector(".filter_sidebar_container");

  if (
    filters.classList.contains("active") ||
    overlay.classList.contains("active")
  ) {
    filters.classList.remove("active");
    overlay.classList.remove("active");
  } else {
    filters.classList.add("active");
    overlay.classList.add("active");
  }
  updateBodyScroll();
}

// function closeFilters() {
//   const filters = document.querySelector(".filters_sidebar");
//   filters.classList.remove("active");
// }
