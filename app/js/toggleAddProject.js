document
  .querySelector(".c-add-project__button")
  .addEventListener("click", () => {
    document
      .querySelector(".c-add-project__container")
      .classList.toggle("c-add-project__container--active");
  });

document
  .querySelector(".c-add-project__header--svg")
  .addEventListener("click", () => {
    if (
      document
        .querySelector(".c-add-project__error--colours")
        .classList.contains("error")
    ) {
      removeError();
    }

    resetForm();
  });
