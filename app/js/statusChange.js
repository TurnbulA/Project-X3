const changeStatusDropDown = () => {
  const taskStatuses = [
    ...document.querySelectorAll(".c-status-change__select")
  ];
  taskStatuses.forEach(taskStatus => {
    taskStatus.innerHTML = `        

            <option class="c-status-change__select--item" value = "waiting">Waiting</option>
            <option class="c-status-change__select--item" value = "in-review">In Review</option>
            <option class="c-status-change__select--item" value = "in-progress">In Progress</option>
            <option class="c-status-change__select--item" value = "approved">Approved</option>`;
  });
  replaceStatus();
  return;
};

const replaceStatus = function() {
  const selectedOptions = [
    ...document.querySelectorAll(".c-status-change__select")
  ];
  selectedOptions.forEach(selectedOption => {
    selectedOption.addEventListener("change", e => {
      e.target.setAttribute("status-id", e.target.value);
      const container = e.target.parentElement;
      changeArray(e.target.value, container);
    });
  });
};

const changeArray = (newValue, container) => {
  const parentId = container.getAttribute("list-id");
  const selectStatus = newValue.replace(/-/g, " ");
  let projectStatus = projects[projectTarget].toDoList.filter(item => {
    console.log(item.statusId);
    if (item.title === parentId) {
      item.statusId = newValue;
      item.status = selectStatus;
    }
  }).status;
};
