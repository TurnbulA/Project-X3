const statusValues = [
  {
    value: "waiting",
    label: "Waiting"
  },
  {
    value: "in-review",
    label: "In review"
  },
  {
    value: "in-progress",
    label: "In progress"
  },
  {
    value: "approved",
    label: "Approved"
  }
];

const changeStatusDropDown = () => {
  const taskStatuses = [
    ...document.querySelectorAll(".c-status-change__select")
  ];
  taskStatuses.forEach(taskStatus => {
    const thisValue = sessionStorage.getItem(
      taskStatus.getAttribute("status-id")
    );
    const statusDrop = statusValues
      .map(item => {
        return `<option class="c-status-change__select--item" value="${
          item.value
        }" ${thisValue === item.value ? "selected=true" : ""}>${
          item.label
        }</option>`;
      })
      .join();
    taskStatus.innerHTML = statusDrop;
  });
  replaceStatus();
  return;
};

let container = "";
const replaceStatus = function() {
  const selectedOptions = [
    ...document.querySelectorAll(".c-status-change__select")
  ];
  selectedOptions.forEach(selectedOption => {
    selectedOption.addEventListener("change", e => {
      container = e.target.parentElement;
      sessionStorage.setItem(
        e.target.getAttribute("status-id"),
        e.target.value
      );
      e.target.setAttribute("status-style", e.target.value);
      changeArray(e.target.value, container);
    });
  });
};

let selectStatus = "";
const changeArray = (newValue, container) => {
  const parentId = container.getAttribute("list-id");
  const selectStatus = newValue.replace(/-/g, " ");
  projects[projectTarget].toDoList.filter(item => {
    if (item.title === parentId) {
      item.statusId = newValue;
      item.status = selectStatus;
    }
  }).status;
};

window.addEventListener("load", () => {
  sessionStorage.clear();
});
