(function () {
  let nav = document.querySelector(".nav");
  function update() {
    if (nav.getBoundingClientRect().top > 1) {
      nav.classList.add("noshadow");
    } else {
      nav.classList.remove("noshadow");
    }
  }
  update();
  window.addEventListener("scroll", update);
})();
