document
  .querySelector(".c-projects-to-do__list-item__svg")
  .addEventListener("click", () => {
    document
      .querySelector(".c-projects__add-list-item")
      .classList.toggle("addItemActive");
  });
document
  .querySelector(".c-projects__add-list-item--header__svg")
  .addEventListener("click", () => {
    closeAddListItem();
  });

const closeAddListItem = () => {
  document.querySelector(".addItemActive").classList.remove("addItemActive");
};
