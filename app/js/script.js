document.querySelector(".c-burger-menu").addEventListener("click", () => {
  const navInner = document.querySelector(".c-burger-menu__inner");
  navInner.classList.toggle("c-burger-menu__inner--active");
});

const icons = [...document.querySelectorAll(".c-icon-container")];
icons.forEach(icon => {
  icon.addEventListener("click", () => {
    const projectInfo = document.querySelector(".c-project-info");
    const bodyContainer = document.querySelector(".c-main ");
    projectInfo.classList.toggle("c-project-info--active");
    bodyContainer.classList.toggle("c-main--shift-left");
  });
});

document
  .querySelector(".c-body__add-project--icon")
  .addEventListener("click", () => {
    const addProject = document.querySelector(".c-add-project__popup");
    addProject.classList.toggle("c-add-project__popup--active");
  });

document
  .querySelector(".c-add-project__close--cross")
  .addEventListener("click", () => {
    const closeAddProject = document.querySelector(".c-add-project__popup");
    closeAddProject.classList.toggle("c-add-project__popup--active");
    removeActiveColour();
  });

const newProjectColours = [
  ...document.querySelectorAll(".c-add-project__colour--item")
];
const removeActiveColour = () => {
  const activeColours = [...document.querySelectorAll(".isActive")];
  activeColours.forEach(activeColour => {
    activeColour.classList.remove("isActive");
  });
};

newProjectColours.forEach(newProjectColour => {
  newProjectColour.addEventListener("click", () => {
    removeActiveColour();
    newProjectColour.classList.toggle("isActive");
    return newProjectColour;
  });
});
