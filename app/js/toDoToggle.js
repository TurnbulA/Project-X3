const projectToggle = () => {
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
      projectOff();
    });
  });
};

const projectOff = () => {
  const projectButtons = [...document.querySelectorAll(".c-projects--icon")];
  projectButtons.forEach(projectButton => {
    const projectIconBody = document.querySelector(
      ".c-container--project-body"
    );
    const projectToDo = document.querySelector(".c-container--project-list");
    const activeProject = document.querySelector(".iconActive");
    projectButton.addEventListener("click", e => {
      if (e.target.classList.contains("iconActive")) {
        e.target.classList.remove("iconActive");
        activeProject.classList.remove("iconActive");
        projectIconBody.classList.remove("activeProject");
        projectToDo.classList.remove("activeList");
      } else {
        e.target.classList.add("iconActive");
        projectIconBody.classList.add("activeProject");
        projectToDo.classList.add("activeList");
      }
      projectToggle();
    });
  });
};
projectToggle();
