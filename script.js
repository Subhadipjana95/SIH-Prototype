function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

loco();

function initializeSearch() {
  const searchButton = document.getElementById("search-button");
  const searchBar = document.getElementById("search-bar");
  const searchInput = document.getElementById("search-input");

  searchButton.addEventListener("click", () => {
    searchBar.classList.toggle("expanded");
    if (searchBar.classList.contains("expanded")) {
      searchInput.focus();
      searchButton.classList.add("modified");
    }
  });

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  // Hide search bar when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !searchBar.contains(event.target) &&
      !searchButton.contains(event.target)
    ) {
      searchBar.classList.remove("expanded");
      searchButton.classList.remove("modified");
    }
  });
}
// Call the initialization function
initializeSearch();

function search() {
  document
    .getElementById("search-button")
    .addEventListener("click", performSearch);
  document
    .getElementById("search-input")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        performSearch();
      }
    });
}
search();
function performSearch() {
  const query = document.getElementById("search-input").value;
  const resultsContainer = document.getElementById("search-results");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Simulated search results (replace with actual search logic)
  const results = [
    "Taj Mahal - Iconic marble mausoleum in Agra",
    "Yoga - Ancient Indian practice for physical and mental well-being",
    "Diwali - Festival of lights celebrated across India",
    "Bharatanatyam - Classical dance form from Tamil Nadu",
  ];

  // Display results
  results.forEach((result) => {
    const resultElement = document.createElement("a");
    resultElement.textContent = result;
    resultElement.href = "#"; // Add appropriate link
    resultsContainer.appendChild(resultElement);
  });

  // Show results container
  resultsContainer.classList.add("active");
}

// Hide results when clicking outside
function hideResults() {
  document.addEventListener("click", function (event) {
    const searchBar = document.getElementById("search-bar");

    const resultsContainer = document.getElementById("search-results");
    if (
      !searchBar.contains(event.target) &&
      !resultsContainer.contains(event.target)
    ) {
      resultsContainer.classList.remove("active");
    }
  });
}
hideResults();

function swip() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 35,
    freeMode: true,
    grabCursor: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
swip();

gsap.to(".nav1>h1", {
  scrollTrigger: {
    trigger: `.nav1>h1`,
    scroller: `#main`,
    start: `top -8%`,
    end: `bottom -14%`,
    scrub: 0.2,
    // markers: true
  },
  opacity: 0,
  zIndex: 0,
});

gsap.from(".img-span", {
  y: 100,
  duration: 1.5,
  delay: 0.2,
});

gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    scroller: `#main`,
    start: `top 80%`,
    end: `bottom 90%`,
    scrub: 0.2,
    // pin: true,
    // markers: true
  },
  scale: 0.95,
});
gsap.to("#page4", {
  scrollTrigger: {
    trigger: `#page4`,
    scroller: `#main`,
    start: `top 80%`,
    end: `bottom 90%`,
    scrub: 0.2,
    // pin: true,
    // markers: true
  },
  scale: 0.95,
});
gsap.to("#page5", {
  scrollTrigger: {
    trigger: `#page5`,
    scroller: `#main`,
    start: `top 80%`,
    end: `bottom 90%`,
    scrub: 0.2,
    // pin: true,
    // markers: true
  },
  scale: 0.95,
});

// gsap.to("#horizontal-scroller", {
//   transform: "translateX(-67.8%)",
//   scrollTrigger: {
//     trigger: "#horizontal-scroller",
//     scroller: "#main",
//     start: "top -0%",
//     end: "top -100%",
//     scrub: 2,
//     pin: true,
//     // markers: true
//   },
// });
