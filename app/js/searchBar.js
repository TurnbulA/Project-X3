const foundResults = () => {
  const searchInput = document.querySelector(".c-search-bar__input");
  const searchButton = document.querySelector(".c-search-bar__button");
  const searchTextContainer = document.querySelector(
    ".c-search-bar__container"
  );
  searchInput.addEventListener("keydown", e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      searchTextContainer.classList.add("show-container");
      searchInputReset();
      searchFunction();
    }
  });
  searchButton.addEventListener("click", e => {
    e.preventDefault();
    searchTextContainer.classList.add("show-container");
    searchInputReset();
    searchFunction();
  });
};

const searchInputReset = () => {
  const projectListItems = [
    ...document.querySelectorAll(".c-projects__list--item")
  ];
  projectListItems.forEach(projectListItem => {
    if (projectListItem.classList.contains("not-searched")) {
      projectListItem.classList.remove("not-searched");
    } else if (projectListItem.classList.contains("searched-for")) {
      projectListItem.classList.remove("searched-for");
    }
  });
};

const searchFunction = () => {
  const searchText = document.querySelector(".c-search-bar__container__text");
  const input = document.querySelector(".c-search-bar__input");
  const filter = input.value.toUpperCase();
  const ul = document.querySelector(".c-projects__list");
  const li = [...ul.getElementsByTagName("li")];
  let foundResult = false;
  li.forEach(item => {
    const a = item.getElementsByTagName("h2")[0];
    const textValue = a.textContent;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      item.classList.add("searched-for");
      foundResult = true;
    } else {
      item.classList.add("not-searched");
    }
  });
  if (foundResult) {
    searchText.textContent = input.value;
  } else {
    searchText.innerHTML = `No results for search term "${input.value}". Please try another search term.`;
  }
  document.querySelector(".c-search-bar").reset();
};

const resetSearch = () => {
  const resetButton = document.querySelector(
    ".c-search-bar__container__reset-button"
  );
  resetButton.addEventListener("click", () => {
    searchInputReset();
    const searchTextContainer = document.querySelector(
      ".c-search-bar__container"
    );
    searchTextContainer.classList.remove("show-container");
  });
};
foundResults();
resetSearch();
