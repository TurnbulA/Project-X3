const openProject = () => {
  const projectButtons = [...document.querySelectorAll(".c-projects--icon")];
  projectButtons.forEach(projectButton => {
    projectButton.addEventListener("click", e => {
      const projectIconBody = document.querySelector(
        ".c-container--project-body"
      );
      projectTarget = e.target.getAttribute("data-id");
      renderToDoList(projectTarget);
      const projectToDo = document.querySelector(".c-container--project-list");
      projectIconBody.classList.add("activeProject");
      projectToDo.classList.add("activeList");
      e.target.classList.add("iconActive");
      buttonClick = e.target;
      addBorder(e.target);
      isIconActive();
    });
  });
};
openProject();
const closeProject = () => {
  const projectIconBody = document.querySelector(".c-container--project-body");
  const projectToDo = document.querySelector(".c-container--project-list");
  const activeProjects = [...document.querySelectorAll(".iconActive")];
  projectIconBody.classList.remove("activeProject");
  projectToDo.classList.remove("activeList");
  activeProjects.forEach(activeProject => {
    activeProject.classList.remove("iconActive");
  });
  openProject();
};

document
  .querySelector(".c-projects-to-do__close--cross")
  .addEventListener("click", () => {
    closeProject();
    removeBorder();
  });

const isIconActive = () => {
  const activeProjects = [...document.querySelectorAll(".project-Icon")];
  activeProjects.forEach(activeProject => {
    activeProject.addEventListener("click", e => {
      if (activeProject.classList.contains("iconActive")) {
        removeBorder(e.target);
        closeProject();
        const activeAddListItem = document.querySelector(
          ".c-projects__add-list-item"
        );
        if (activeAddListItem.classList.contains("addItemActive")) {
          closeAddListItem();
        }
      }
    });
  });
};

const addBorder = buttonClick => {
  const currentBorders = [...document.querySelectorAll(".c-projects--border")];
  currentBorders.forEach(currentBorder => {
    if (
      buttonClick.getAttribute("data-id") ===
      currentBorder.getAttribute("data-id")
    ) {
      currentBorder.classList.add("border-active");
    }
  });
};

const removeBorder = () => {
  const currentBorders = [...document.querySelectorAll(".c-projects--border")];
  currentBorders.forEach(currentBorder => {
    if (currentBorder.classList.contains("border-active")) {
      currentBorder.classList.remove("border-active");
    }
  });
};
