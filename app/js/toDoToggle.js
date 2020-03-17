const openProject = () => {
  const projectButtons = [...document.querySelectorAll(".c-icon")];
  projectButtons.forEach(projectButton => {
    projectButton.addEventListener("click", e => {
      const projectIconBody = document.querySelector(".c-project__body");
      projectTarget = e.target.getAttribute("data-id");
      iconBorders = [...document.querySelectorAll(".c-icon__border")];
      iconBorders.forEach(iconBorder => {
        if (projectTarget === iconBorder.getAttribute("data-id")) {
          iconBorder.classList.add("c-icon__border--active");
        }
      });
      renderToDoList(projectTarget);
      const projectToDo = document.querySelector(".c-project__list");
      projectIconBody.classList.add("c-project__body--left-justify");
      projectToDo.classList.add("c-project__list--active");
      e.target.classList.add("c-icon--active");
      closeProject();
    });
  });
};
openProject();

const closeProject = () => {
  const projectButtons = [...document.querySelectorAll(".c-icon")];
  projectButtons.forEach(projectButton => {
    projectButton.addEventListener("click", e => {
      const iconBorder = document.querySelector(".c-icon__border--active");
      if (iconBorder) {
        iconBorder.classList.remove("c-icon__border--active");
      }
      activeIcons = [...document.querySelectorAll(".c-icon--active")];
      activeIcons.forEach(activeIcon => {
        activeIcon.classList.remove("c-icon--active");
      });
      const justifiedBody = document.querySelector(
        ".c-project__body--left-justify"
      );
      if (justifiedBody) {
        justifiedBody.classList.remove("c-project__body--left-justify");
      }
      const activeList = document.querySelector(".c-project__list--active");
      if (activeList) {
        activeList.classList.remove("c-project__list--active");
      }
      openProject();
    });
  });
};

document
  .querySelector(".c-projects-to-do__close--cross")
  .addEventListener("click", () => {
    const activeBorder = document.querySelector(".c-icon__border--active");
    if (activeBorder) {
      activeBorder.classList.remove("c-icon__border--active");
    }
    activeIcons = [...document.querySelectorAll(".c-icon--active")];
    activeIcons.forEach(activeIcon => {
      activeIcon.classList.remove("c-icon--active");
    });
    const leftJustify = document.querySelector(
      ".c-project__body--left-justify"
    );
    if (leftJustify) {
      leftJustify.classList.remove("c-project__body--left-justify");
    }
    const activeList = document.querySelector(".c-project__list--active");
    if (activeList) {
      activeList.classList.remove("c-project__list--active");
    }
    openProject();
  });
