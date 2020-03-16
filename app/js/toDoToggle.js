const openProject = () => {
  const projectButtons = [...document.querySelectorAll(".c-projects--icon")];
  projectButtons.forEach(projectButton => {
    projectButton.addEventListener("click", e => {
      const projectIconBody = document.querySelector(
        ".c-container--project-body"
      );
      projectTarget = e.target.getAttribute("data-id");
      iconBorders = [...document.querySelectorAll(".c-projects--icon--border")];
      iconBorders.forEach(iconBorder => {
        if (projectTarget === iconBorder.getAttribute("data-id")) {
          iconBorder.classList.add("borderActive");
        }
      });
      renderToDoList(projectTarget);
      const projectToDo = document.querySelector(".c-container--project-list");
      projectIconBody.classList.add("activeProject");
      projectToDo.classList.add("activeList");
      e.target.classList.add("iconActive");
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
  document.querySelector(".borderActive").classList.remove("borderActive");
  activeProjects.forEach(activeProject => {
    activeProject.classList.remove("iconActive");
  });
  openProject();
};

document
  .querySelector(".c-projects-to-do__close--cross")
  .addEventListener("click", () => {
    closeProject();
  });

const isIconActive = () => {
  const activeProjects = [...document.querySelectorAll(".project-Icon")];
  activeProjects.forEach(activeProject => {
    activeProject.addEventListener("click", e => {
      if (activeProject.classList.contains("iconActive")) {
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
