const projectToDoHeader = document.querySelector(
  ".c-projects-to-do__header--text-content"
);
const projectToDoList = document.querySelector(".c-projects-to-do__list");

const renderToDoList = projectName => {
  projectToDoHeader.innerHTML = `<h1 class="c-projects-to-do__header--title">${projects[projectName].title}</h1>
  <p class="c-projects-to-do__header--description">${projects[projectName].description}</p>`;
  const projectToDos = projects[projectName].toDoList
    .map(item => {
      return `
      <li class="c-list-item" data-id="${projects[projectName].dataId}">
        <label class="c-list-item__input">
          <input type="checkbox"/>
          <span class="c-list-item__input--custom">
            <svg xmlns="http://www.w3.org/2000/svg" class="c-list-item__svg--tick" width="27.788" height="19.548" viewBox="0 0 27.788 19.548">
              <path class="c-svg__check" d="M27.445,43.179a1.175,1.175,0,0,0-1.652,0L9.262,59.6,1.994,52.435a1.175,1.175,0,0,0-1.652,0,1.149,1.149,0,0,0,0,1.636l8.1,7.982a1.187,1.187,0,0,0,1.653,0L27.445,44.815a1.147,1.147,0,0,0,0-1.636C26.989,42.727,27.9,43.631,27.445,43.179Z" transform="translate(0 -42.84)"/>
            </svg>
          </span>
          <div class="c-list-item__text">              
            <p class="c-list-item__text--title">${item.title}</p>
            <p class="c-list-item__text--status ${item.statusId}">${item.status}</p>
          </div>     
        </label>  
      </li>
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