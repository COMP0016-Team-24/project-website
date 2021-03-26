(function () {
  for (let video of document.querySelectorAll(".video-aspect-fit")) {
    function update() {
      let width = parseInt(window.getComputedStyle(video).width);
      let height = width / 16 * 9;
      video.style.height = height + "px";
    }
    update();
    window.addEventListener("resize", update);
  }
})();
