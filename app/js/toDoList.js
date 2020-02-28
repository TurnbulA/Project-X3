const projectToDoHeader = document.querySelector(".c-projects-to-do__header");
const projectToDoList = document.querySelector(".c-projects-to-do__list");

const renderToDoList = projectName => {
  projectToDoHeader.innerHTML = `<h1 class="c-projects-to-do__header--title">${projects[projectName].title}</h1>
  <p class="c-projects-to-do__header--description">${projects[projectName].description}</p>`;
  const projectToDos = projects[projectName].toDoList
    .map(item => {
      return `
      <li>${item.title} ${item.status}</li>
     
            `;
    })
    .join("");
  projectToDoList.innerHTML = projectToDos;
  return projectToDos;
};

const createList = () => {
  const projectIcons = [...document.querySelectorAll(".c-projects--icon")];
  projectIcons.forEach(projectIcon => {
    projectIcon.addEventListener("click", e => {
      const projectTarget = e.target.getAttribute("data-id");
      renderToDoList(projectTarget);
    });
  });
};

createList();
