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
};

const replaceStatus = () => {
  console.log(projects[projectTarget]);
};
