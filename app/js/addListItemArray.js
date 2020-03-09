const projectItem = () => {
  const inputValue = document.querySelector(".c-projects__add-list-item--input")
    .value;
  const selectValue = document.querySelector(
    ".c-projects__add-list-item--options"
  ).value;
  const selectStatus = selectValue.replace(/-/g, " ");
  projects[projectTarget].toDoList.push({
    title: inputValue,
    completed: false,
    status: selectStatus,
    statusId: selectValue
  });
};

const submitItem = () => {
  const addProjectForm = document.querySelector(
    ".c-projects__add-list-item--form"
  );
  addProjectForm.addEventListener("submit", e => {
    e.preventDefault();
    if (
      document
        .querySelector(".c-projects__add-list-item")
        .classList.contains("addItemActive")
    ) {
      closeAddListItem();
      projectItem();
      renderToDoList(projectTarget);
    }
    addProjectForm.reset();
  });
};
