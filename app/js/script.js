// Handles Burger menu open/close
document.querySelector(".c-burger-menu").addEventListener("click", () => {
  const navInner = document.querySelector(".c-burger-menu__inner");
  navInner.classList.toggle("c-burger-menu__inner--active");
});

// Handles project selection, produces project popup and shifts main body
const icons = [...document.querySelectorAll(".c-icon-container")];
icons.forEach(icon => {
  icon.addEventListener("click", () => {
    const projectInfo = document.querySelector(".c-project-info");
    const bodyContainer = document.querySelector(".c-main ");
    projectInfo.classList.toggle("c-project-info--active");
    bodyContainer.classList.toggle("c-main--shift-left");
  });
});

//Handles opening of add project popup
document
  .querySelector(".c-body__add-project--icon")
  .addEventListener("click", () => {
    const addProject = document.querySelector(".c-add-project__popup");
    addProject.classList.toggle("c-add-project__popup--active");
  });

//Handles closing of add project popup
document
  .querySelector(".c-add-project__close--cross")
  .addEventListener("click", () => {
    const closeAddProject = document.querySelector(".c-add-project__popup");
    closeAddProject.classList.toggle("c-add-project__popup--active");
    removeActivecolor();
  });

//Creates an array of project colors
const newProjectcolors = [
  ...document.querySelectorAll(".c-add-project__color--item")
];

//Checks if there is an active color and removes that class
const removeActivecolor = () => {
  const activecolors = [...document.querySelectorAll(".isActive")];
  activecolors.forEach(activecolor => {
    activecolor.classList.remove("isActive");
  });
};

//Adds active color to 1 item
newProjectcolors.forEach(newProjectcolor => {
  newProjectcolor.addEventListener("click", () => {
    removeActivecolor();
    newProjectcolor.classList.add("isActive");
    return newProjectcolor;
  });
});

//Creates New project Item

const projectForm = document.querySelector("form");
const projectUl = document.querySelector(".c-project-container");
const submitButton = document.querySelector(".c-add-project--submit");
const projectName = document.querySelector(".c-add-project__input");
const projectcolors = [
  ...document.querySelectorAll(".c-add-project__color--item")
];
let color = "";

projectcolors.forEach(projectcolor => {
  projectcolor.addEventListener("click", e => {
    color = e.target.getAttribute("data-color");
  });
});

const createLi = () => {
  const li = document.createElement("li");
  li.setAttribute("class", "c-icon-container");
  const button = document.createElement("button");
  button.setAttribute("class", "c-project--icon");
  button.classList.add(color);
  console.log(button.classList);
  const p = document.createElement("p");
  p.innerHTML = projectName.value;
  projectName.value = "";
  p.setAttribute("class", "c-project-name");
  li.appendChild(button);
  li.appendChild(p);
  projectUl.appendChild(li);
};

submitButton.addEventListener("click", e => {
  e.preventDefault();
  const closeAddProject = document.querySelector(".c-add-project__popup");
  closeAddProject.classList.toggle("c-add-project__popup--active");
  removeActivecolor();
  createLi();
});
