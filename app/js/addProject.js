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
});

const removeActiveColour = () => {
  const activeColours = [...document.querySelectorAll(".isActive")];
  activeColours.forEach(activeColour => {
    activeColour.classList.remove("isActive");
  });
};

const projectValidation = () => {
  const titleInput = document.querySelector(".c-add-project__input--title");
  const projectColours = [
    ...document.querySelectorAll(".c-add-project__colors--button")
  ];
  const titleError = document.querySelector(".c-add-project__error--title");
  const colourError = document.querySelector(".c-add-project__error--colours");
  if (titleInput.value === "") {
    titleError.classList.add("error");
  }

  projectColours.forEach(projectColour => {
    if (projectColour.classList.contains("isActive")) {
      createObject();
    } else {
      colourError.classList.add("error");
      return true;
    }
  });
};

const resetForm = () => {
  document.querySelector(".c-add-project__form").reset();
  document
    .querySelector(".c-add-project__container")
    .classList.remove("c-add-project__container--active");
  const errorMessages = [...document.querySelectorAll(".error")];
  errorMessages.forEach(errorMessage => {
    console.log(errorMessage);
    errorMessage.classList.remove("error");
    console.log(errorMessage);
  });
  removeActiveColour();
};
