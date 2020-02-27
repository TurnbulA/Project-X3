const newProjectColours = [
  ...document.querySelectorAll(".c-add-project__colors--button")
];

newProjectColours.forEach(newProjectColour => {
  newProjectColour.addEventListener("click", () => {
    removeActiveColour();
    newProjectColour.classList.toggle("isActive");
    return newProjectColour;
  });
});
const formSubmitted = document.querySelector(".c-add-project__form");
formSubmitted.addEventListener("submit", e => {
  projectValidation();
  e.preventDefault();
  createObject();
});

const removeActiveColour = () => {
  const activeColours = [...document.querySelectorAll(".isActive")];
  activeColours.forEach(activeColour => {
    activeColour.classList.remove("isActive");
  });
};

const projectValidation = () => {
  const titleValue = document.querySelector(".c-add-project__input--title");
  const projectColours = [...document.querySelectorAll(".isActive")];

  projectColours.forEach(projectColour => {
    if (projectColour.classList.contains("isActive")) {
      return true;
    } else {
      alert("Select a colour");
      return false;
    }
  });
  if (titleValue.value === "") {
    alert("Fill out name");
    return false;
  }
};

const resetForm = () => {
  document.querySelector(".c-add-project__form").reset();
  document
    .querySelector(".c-add-project__container")
    .classList.remove("c-add-project__container--active");
  removeActiveColour();
};
