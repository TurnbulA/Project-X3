const openProject = () => {
  const projectButtons = [...document.querySelectorAll(".c-icon")];
  projectButtons.forEach(projectButton => {
    projectButton.addEventListener("click", e => {
      const projectIconBody = document.querySelector(".c-project__container");
      const projectIconList = document.querySelector(
        ".c-project__container--list"
      );
      projectTarget = e.target.getAttribute("data-id");
      iconBorders = [...document.querySelectorAll(".c-icon__border")];
      iconBorders.forEach(iconBorder => {
        if (projectTarget === iconBorder.getAttribute("data-id")) {
          iconBorder.classList.add("c-icon__border--active");
        }
      });
      renderToDoList(projectTarget);
      projectIconBody.classList.add("left-justify");
      projectIconList.classList.add("left-justify");
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
        ".c-project__container--body"
      );
      const leftJustifiedItems = [
        ...document.querySelectorAll(".left-justify")
      ];
      leftJustifiedItems.forEach(leftJustifiedItem => {
        if (leftJustifiedItem) {
          leftJustifiedItem.classList.remove("left-justify");
        }
      });
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
    const leftJustifiedItems = [...document.querySelectorAll(".left-justify")];
    leftJustifiedItems.forEach(leftJustifiedItem => {
      console.log("hi");
      if (leftJustifiedItem) {
        leftJustifiedItem.classList.remove("left-justify");
      }
    });

    openProject();
  });
