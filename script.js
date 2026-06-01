var swiper_1 = new Swiper(".heroSwiper", {
  pagination: {
    el: ".hero_banner",
    clickable: true,
  },
});

var swiper = new Swiper(".shop_by_category_swiper", {
  slidesPerView: 8,
  loop: true,
  spaceBetween: 30,
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
    354: {
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

var shopCardSwiper = new Swiper(".shop_card_swiper", {
  // observer: true,
  // observeParents: true,
  breakpoints: {
    // Mobile
    340: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // Large Mobile
    419: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // Tablet
    470: {
      slidesPerView: 1.1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 20,
    },
    // Desktop (up to 1295px where it turns off)
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 25,
    },
    1115: {
      slidesPerView: 1.9,
      spaceBetween: 25,
    },
    1165: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
  },
});

const minPrice = document.getElementById("minPrice");
const range = document.getElementById("minPriceInput");
const maxPrice = document.getElementById("maxPrice");
const rangeMax = document.getElementById("maxPriceInput");

range.addEventListener("input", () => {
  minPrice.textContent = range.value;
  filterByPrice();
});

rangeMax.addEventListener("input", () => {
  maxPrice.textContent = rangeMax.value;
  filterByPrice();
});

function filterByPrice() {
  const minPrice = Number(range.value);
  const maxPrice = Number(rangeMax.value);

  productCards.forEach((card) => {
    const cardPrice = Number(card.dataset.price);

    if (cardPrice >= minPrice && cardPrice <= maxPrice) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

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

const filterBtns = document.querySelectorAll(".category_item");
const productCards = document.querySelectorAll(".popular_products_cards");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");

    const activeFilters = [...filterBtns]
      .filter((b) => b.classList.contains("active"))
      .map((b) => b.dataset.filter);

    productCards.forEach((card) => {
      const cardTags = card.dataset.tags.split(",");

      if (activeFilters.length === 0) {
        card.style.display = "block";
        return;
      }

      // const hasMatch = activeFilters.every((filter) =>
      //   cardTags.includes(filter)
      // );
      const hasMatch = activeFilters.some((filter) =>
        cardTags.includes(filter),
      );

      card.style.display = hasMatch ? "block" : "none";
    });
  });
});
