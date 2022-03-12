const swiper = new Swiper(".swiper", {
  speed: 300,
  spaceBetween: 100,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "cube",
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
  },
  preloadImages: true,
});

//navigation physics
const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector(".brand");
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start((e) => {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200,
    // mass: 1,
    // damping: 10
  }).start(ballXY);
});
