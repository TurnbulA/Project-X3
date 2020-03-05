let appendTarget = "";

const locateProject = projectName => {
  appendTarget = projectName;
  submitItem();
};

const appendItem = () => {
  const inputValue = document.querySelector(".c-projects__add-list-item--input")
    .value;
  const selectValue = document.querySelector(
    ".c-projects__add-list-item--options"
  ).value;
  const selectStatus = selectValue.replace(/-/g, " ");
  projects[appendTarget].toDoList.push({
    title: inputValue,
    completed: false,
    status: selectStatus,
    statusId: selectValue
  });
  renderToDoList(appendTarget);
  closeAddListItem();
};

const submitItem = () => {
  const addProjectForm = document.querySelector(
    ".c-projects__add-list-item--form"
  );
  addProjectForm.addEventListener("submit", e => {
    e.preventDefault();
    appendItem();
    addProjectForm.reset();
  });
};
