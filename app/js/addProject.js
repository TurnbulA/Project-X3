const newProjectColours = [...document.querySelectorAll(".c-colours__button")];

const errorCheck = () => {
  const activeError = document.querySelector(".c-add-project__error--colours");
  if (activeError.classList.contains("error")) {
    removeError();
  }
};

newProjectColours.forEach(newProjectColour => {
  newProjectColour.addEventListener("click", e => {
    removeActiveColour();
    e.target.classList.toggle("isActive");
    errorCheck();
  });
});

document.querySelector(".c-add-project__form").addEventListener("submit", e => {
  e.preventDefault();
  colourValidation();
  errorCheck();
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
  const errorMessage = document.querySelector(".c-add-project__error--colours");
  selectedColours.forEach(selectedColour => {
    if (selectedColour.classList.contains("isActive")) {
      createObject();
      return true;
    } else {
      errorMessage.classList.add("error");
    }
  });
};

const resetForm = () => {
  document.querySelector(".c-add-project__form").reset();
  document
    .querySelector(".c-add-project__container")
    .classList.remove("c-add-project__container--active");
  removeActiveColour();
  errorCheck();
};
