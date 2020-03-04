const openProject = () => {
  const projectButtons = [...document.querySelectorAll(".c-projects--icon")];
  projectButtons.forEach(projectButton => {
    projectButton.addEventListener("click", e => {
      const projectIconBody = document.querySelector(
        ".c-container--project-body"
      );
      const projectToDo = document.querySelector(".c-container--project-list");
      projectIconBody.classList.add("activeProject");
      projectToDo.classList.add("activeList");
      e.target.classList.add("iconActive");
      isIconActive();
    });
  });
};

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
openProject();

document
  .querySelector(".c-projects-to-do__close--cross")
  .addEventListener("click", () => {
    closeProject();
  });

const isIconActive = () => {
  const activeProjects = [...document.querySelectorAll(".project-Icon")];
  activeProjects.forEach(activeProject => {
    activeProject.addEventListener("click", () => {
      if (activeProject.classList.contains("iconActive")) {
        closeProject();
      }
    });
  });
};
