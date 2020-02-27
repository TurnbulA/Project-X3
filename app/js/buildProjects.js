let projects = [
  {
    dataId: "GreenHouse",
    title: "Green House",
    colour: "pink",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque, ratione quidem tenetur nesciunt perspiciatis deserunt iusto obcaecati fugit soluta quisquam aperiam rem! Tempore, ut veniam vel temporibus maiores voluptas?",
    toDoList: [
      {
        title: "item 1",
        completed: false,
        status: "waiting"
      },
      {
        title: "item 2",
        completed: false,
        status: "waiting"
      }
    ]
  },
  {
    dataId: "CyberPunk",
    title: "Cyber Punk",
    colour: "green",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque, ratione quidem tenetur nesciunt perspiciatis deserunt iusto obcaecati fugit soluta quisquam aperiam rem! Tempore, ut veniam vel temporibus maiores voluptas?",
    toDoList: [
      {
        title: "item 1",
        completed: false,
        status: "waiting"
      },
      {
        title: "item 2",
        completed: false,
        status: "waiting"
      }
    ]
  }
];

const getTitleInitials = title => {
  const projectInitials = title.split(" ");
  const words = projectInitials
    .map(text => {
      const wordInitials = text.slice(0, 1);
      return wordInitials;
    })
    .join("");

  return words;
};

const projectIconList = document.querySelector(".c-projects__list");
const renderIcon = () => {
  const projectIcons = Object.values(projects)
    .map((item, index) => {
      const words = getTitleInitials(item.title);
      return `<li class="c-projects__list--item" data-id=${item.dataId}>
            <div class="c-projects--icon u-gradient-bg--${item.colour}">
              <h1 class="c-projects--initals">${words}</h1>
            </div>
            <h2>${item.title}</h2>
        </li>`;
    })
    .join("");
  projectIconList.innerHTML = projectIcons;
  return projectIcons;
};
renderIcon();

const createObject = () => {
  const projectName = document.querySelector(".c-add-project__input--title")
    .value;
  const projectColour = document
    .querySelector(".isActive")
    .getAttribute("data-colour");
  const projectDescription = document.querySelector(
    ".c-add-project__input--description"
  ).value;
  const projectID = projectName.replace(/\s+/g, "");
  const pushProject = {
    dataId: projectID,
    title: projectName,
    colour: projectColour,
    description: projectDescription,
    toDoList: []
  };
  projects.push(pushProject);
  renderIcon();
  resetForm();
};