document
  .querySelector(".c-add-project__button")
  .addEventListener("click", () => {
    document
      .querySelector(".c-add-project__container")
      .classList.toggle("c-add-project--active");
  });

document
  .querySelector(".c-add-project__header--svg")
  .addEventListener("click", () => {
    resetForm();
  });
