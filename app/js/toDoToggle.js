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
      closeProject();
    });
  });
};
openProject();

const closeProject = () => {
  const projectButtons = [...document.querySelectorAll(".c-projects--icon")];
  projectButtons.forEach(projectButton => {
    projectButton.addEventListener("click", e => {
      if (document.querySelector(".borderActive")) {
        document
          .querySelector(".borderActive")
          .classList.remove("borderActive");
      }
      activeIcons = [...document.querySelectorAll(".iconActive")];
      activeIcons.forEach(activeIcon => {
        activeIcon.classList.remove("iconActive");
      });
      if (document.querySelector(".activeProject")) {
        document
          .querySelector(".activeProject")
          .classList.remove("activeProject");
      }
      if (document.querySelector(".activeList")) {
        document.querySelector(".activeList").classList.remove("activeList");
      }

      openProject();
    });
  });
};

document
  .querySelector(".c-projects-to-do__close--cross")
  .addEventListener("click", () => {
    closeProject();
  });
