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
      if (e.target.classList.contains("waiting")) {
        e.target.classList.remove("waiting");
        e.target.classList.add(e.target.value);
      } else if (e.target.classList.contains("in-review")) {
        e.target.classList.remove("in-review");
        e.target.classList.add(e.target.value);
      } else if (e.target.classList.contains("in-progress")) {
        e.target.classList.remove("in-progress");
        e.target.classList.add(e.target.value);
      } else if (e.target.classList.contains("approved")) {
        e.target.classList.remove("approved");
        e.target.classList.add(e.target.value);
      }
    });
  });
};
