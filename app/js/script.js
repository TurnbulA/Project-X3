document.querySelector(".c-burger-menu").addEventListener("click", () => {
  const navInner = document.querySelector(".c-burger-menu__inner");
  navInner.classList.toggle("c-burger-menu__inner--active");
});

const icons = [...document.querySelectorAll(".c-icon-container")];
icons.forEach(icon => {
  icon.addEventListener("click", () => {
    const projectInfo = document.querySelector(".c-project--info");
    const bodyContainer = document.querySelector(".container");
    projectInfo.classList.toggle("c-project--info--active");
    bodyContainer.classList.toggle("container--shift-left");
  });
});
