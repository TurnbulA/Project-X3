document
  .querySelector(".c-add-project__button")
  .addEventListener("click", () => {
    document
      .querySelector(".c-add-project__wrapper")
      .classList.toggle("c-add-project--active");
  });

document
  .querySelector(".c-add-project__header--svg")
  .addEventListener("click", () => {
    document
      .querySelector(".c-add-project__wrapper")
      .classList.toggle("c-add-project--active");
    resetForm();
  });
