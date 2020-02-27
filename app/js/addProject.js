const newProjectColours = [...document.querySelectorAll(".c-colours__button")];

newProjectColours.forEach(newProjectColour => {
  newProjectColour.addEventListener("click", e => {
    removeActiveColour();
    e.target.classList.toggle("isActive");
    removeError();
  });
});

document.querySelector(".c-add-project__form").addEventListener("submit", e => {
  e.preventDefault();
  colourValidation();
});
const removeError = () => {
  console.log("hi");
  const activeErrorMessage = document.querySelector(".error");
  console.log(activeErrorMessage);
  activeErrorMessage.classList.remove("error");
  console.log(activeErrorMessage);
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
    console.log(selectedColour);
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
};
