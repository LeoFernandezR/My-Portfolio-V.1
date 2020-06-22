(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    // Fixed Nav
    const nav = document.querySelector(".navigation-box"),
      topOfNav = nav.offsetTop;

    function fixedNav() {
      if (window.scrollY >= topOfNav) {
        document.body.style.marginTop = nav.offsetHeight + "px";
        document.body.classList.add("fixed");
      } else {
        document.body.style.marginTop = 0 + "px";
        document.body.classList.remove("fixed");
      }
    }

    window.addEventListener("scroll", fixedNav);
    // Smooth Scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1500,
    });
  });
})();
