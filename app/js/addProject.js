const newProjectColours = [...document.querySelectorAll(".c-colours__button")];

newProjectColours.forEach(newProjectColour => {
  newProjectColour.addEventListener("click", e => {
    removeActiveColour();
    e.target.classList.toggle("isActive");
  });
});

document.querySelector(".c-add-project__form").addEventListener("submit", e => {
  e.preventDefault();
  colourValidation();
});

const removeError = () => {
  const activeErrorMessage = document.querySelector(".error");
  activeErrorMessage.classList.remove("error");
};

const removeActiveColour = () => {
  const activeColours = [...document.querySelectorAll(".isActive")];
  activeColours.forEach(activeColour => {
    activeColour.classList.remove("isActive");
  });
};

const colourValidation = () => {
  const selectedColours = [...document.querySelectorAll(".c-colours__button")];
  selectedColours.forEach(selectedColour => {
    if (selectedColour.classList.contains("isActive")) {
      createObject();
      return true;
    }
  });
};

const resetForm = () => {
  document.querySelector(".c-add-project__form").reset();
  document
    .querySelector(".c-add-project__container")
    .classList.remove("c-add-project--active");
  removeActiveColour();
};
