document
  .querySelector(".c-add-project__button")
  .addEventListener("click", () => {
    document
      .querySelector(".c-add-project__container")
      .classList.toggle("c-add-project__container--active");
    resetForm();
  });

document
  .querySelector(".c-add-project__header--svg")
  .addEventListener("click", () => {
    resetForm();
  });
