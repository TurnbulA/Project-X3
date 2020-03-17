const openProject = () => {
  const projectButtons = [...document.querySelectorAll(".c-projects-icon")];
  projectButtons.forEach(projectButton => {
    projectButton.addEventListener("click", e => {
      const projectIconBody = document.querySelector(".c-project__body");
      projectTarget = e.target.getAttribute("data-id");
      iconBorders = [...document.querySelectorAll(".c-projects-icon__border")];
      iconBorders.forEach(iconBorder => {
        if (projectTarget === iconBorder.getAttribute("data-id")) {
          iconBorder.classList.add("c-projects-icon__border--active");
        }
      });
      renderToDoList(projectTarget);
      const projectToDo = document.querySelector(".c-project__list");
      projectIconBody.classList.add("c-project__body--left-justify");
      projectToDo.classList.add("c-project__list--active");
      e.target.classList.add("c-projects-icon__active");
      closeProject();
    });
  });
};
openProject();

const closeProject = () => {
  const projectButtons = [...document.querySelectorAll(".c-projects-icon")];
  projectButtons.forEach(projectButton => {
    projectButton.addEventListener("click", e => {
      if (document.querySelector(".c-projects-icon__border--active")) {
        document
          .querySelector(".c-projects-icon__border--active")
          .classList.remove("c-projects-icon__border--active");
      }
      activeIcons = [...document.querySelectorAll(".c-projects-icon__active")];
      activeIcons.forEach(activeIcon => {
        activeIcon.classList.remove("c-projects-icon__active");
      });
      if (document.querySelector(".c-project__body--left-justify")) {
        document
          .querySelector(".c-project__body--left-justify")
          .classList.remove("c-project__body--left-justify");
      }
      if (document.querySelector(".c-project__list--active")) {
        document
          .querySelector(".c-project__list--active")
          .classList.remove("c-project__list--active");
      }
      openProject();
    });
  });
};

document
  .querySelector(".c-projects-to-do__close--cross")
  .addEventListener("click", () => {
    if (document.querySelector(".c-projects-icon__border--active")) {
      document
        .querySelector(".c-projects-icon__border--active")
        .classList.remove("c-projects-icon__border--active");
    }
    activeIcons = [...document.querySelectorAll(".c-projects-icon__active")];
    activeIcons.forEach(activeIcon => {
      activeIcon.classList.remove("c-projects-icon__active");
    });
    if (document.querySelector(".c-project__body--left-justify")) {
      document
        .querySelector(".c-project__body--left-justify")
        .classList.remove("c-project__body--left-justify");
    }
    if (document.querySelector(".c-project__list--active")) {
      document
        .querySelector(".c-project__list--active")
        .classList.remove("c-project__list--active");
    }
    openProject();
  });
