document.querySelector(".c-burger-menu").addEventListener("click", () => {
  const navInner = document.querySelector(".c-burger-menu__inner");
  navInner.classList.toggle("c-burger-menu__inner--active");
});
