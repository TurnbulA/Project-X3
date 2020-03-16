const openProject = () => {
  const projectButtons = [...document.querySelectorAll(".c-projects__icon")];
  projectButtons.forEach(projectButton => {
    projectButton.addEventListener("click", e => {
      const projectIconBody = document.querySelector(
        ".c-container__project-body"
      );
      projectTarget = e.target.getAttribute("data-id");
      iconBorders = [...document.querySelectorAll(".c-projects__icon--border")];
      iconBorders.forEach(iconBorder => {
        if (projectTarget === iconBorder.getAttribute("data-id")) {
          iconBorder.classList.add("c-projects__icon--border--active");
        }
      });
      renderToDoList(projectTarget);
      const projectToDo = document.querySelector(".c-container__project-list");
      projectIconBody.classList.add("c-container__project-body--left-justify");
      projectToDo.classList.add("c-container__project-list--active");
      e.target.classList.add("c-projects__icon--active");
      closeProject();
    });
  });
};
openProject();

const closeProject = () => {
  const projectButtons = [...document.querySelectorAll(".c-projects__icon")];
  projectButtons.forEach(projectButton => {
    projectButton.addEventListener("click", e => {
      if (document.querySelector(".c-projects__icon--border--active")) {
        document
          .querySelector(".c-projects__icon--border--active")
          .classList.remove("c-projects__icon--border--active");
      }
      activeIcons = [...document.querySelectorAll(".c-projects__icon--active")];
      activeIcons.forEach(activeIcon => {
        activeIcon.classList.remove("c-projects__icon--active");
      });
      if (document.querySelector(".c-container__project-body--left-justify")) {
        document
          .querySelector(".c-container__project-body--left-justify")
          .classList.remove("c-container__project-body--left-justify");
      }
      if (document.querySelector(".c-container__project-list--active")) {
        document
          .querySelector(".c-container__project-list--active")
          .classList.remove("c-container__project-list--active");
      }
      openProject();
    });
  });
};

document
  .querySelector(".c-projects-to-do__close--cross")
  .addEventListener("click", () => {
    if (document.querySelector(".c-projects__icon--border--active")) {
      document
        .querySelector(".c-projects__icon--border--active")
        .classList.remove("c-projects__icon--border--active");
    }
    activeIcons = [...document.querySelectorAll(".c-projects__icon--active")];
    activeIcons.forEach(activeIcon => {
      activeIcon.classList.remove("c-projects__icon--active");
    });
    if (document.querySelector(".c-container__project-body--left-justify")) {
      document
        .querySelector(".c-container__project-body--left-justify")
        .classList.remove("c-container__project-body--left-justify");
    }
    if (document.querySelector(".c-container__project-list--active")) {
      document
        .querySelector(".c-container__project-list--active")
        .classList.remove("c-container__project-list--active");
    }
    openProject();
  });
