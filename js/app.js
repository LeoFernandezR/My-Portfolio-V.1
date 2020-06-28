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
    // video android
    document.querySelector("#video").play();
    // mobile responsive projects
    if (window.matchMedia("(min-width: 768px)")) {
      const project = Array.from(document.getElementsByClassName("project"));
      function projectLinks(e) {
        var projectLink = e.target.parentElement.childNodes[3];
        projectLink.classList.add("display-flex");
        setTimeout(() => {
          projectLink.classList.remove("display-flex");
        }, 5000);
      }

      project.map(function (pro) {
        pro.addEventListener("click", projectLinks);
      });

      // project.addEventListener("click", projectLinks);
    }
  });
})();
