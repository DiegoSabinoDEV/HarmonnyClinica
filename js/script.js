window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const servicosElement = document.querySelector(".servicos");
  const servicosPosition =
    servicosElement.getBoundingClientRect().top + scrollPosition;
  const servicosOffset = Math.max(0, window.innerHeight - servicosPosition);

  document.querySelectorAll(".servicos .serv").forEach((element, index) => {
    const speed = (index + 1) * 0.05;
    element.style.transform = `translateY(${servicosOffset * speed}px)`;
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Autoplay
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },

  // If you need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Remova navigation e scrollbar se não estiverem no seu HTML
});
