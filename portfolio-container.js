"use strict";

const jsContainer = document.querySelector("#jsContainer");

const data = [
  {
    name: "React-Live-Chat",
    shortDesc: "App",
    liveDemo: "https://react-chit-chat-ojvkuflge-kaushalji-123s-projects.vercel.app/?vercelToolbarCode=EMRTwtPoML2BMvV",
    githubLink: "https://github.com/kaushalji-123/React-Chit-Chat",
    moreInfo: "hereis the chat by dk",
    moreInfoPhoto: "./assets/Messenger.png",
    skills: ["javascript", "html", "css", "OOP"],
  },
  {
    name: "k-jwel",
    shortDesc: "Personal JewelleryShop",
    liveDemo: "https://kaushalji-123.github.io/JewelleryShop/jwellery-store/index.html?email=",
    githubLink: "https://github.com/kaushalji-123/JewelleryShop",
    moreInfo:
      "This is an Beautifull online jewelry shop designed using Figma, HTML, SCSS, and JavaScript. Created a stunning Asthetic Looking website to display different jewelry collections. Make sure the site looks great and works well on phones, tablets, and computers.",
    moreInfoPhoto: "./assets/jwellery.png",
    skills: ["javascript", "html", "scss" , "Figma" ],
  },
  {
    name: "RockPaperScissor",
    shortDesc: "Game in JS",
    liveDemo: "https://rockpaperscissors-divyanshukaushal.netlify.app/",
    githubLink: "https://github.com/kaushalji-123/Stone_Paper_Scissor-master",
    moreInfo: "Simple Game made in vanilla javascript.",
    moreInfoPhoto: "./assets/RockPaperScissor.png",
    skills: ["javascript", "html", "scss", "OOP ,"],
  },
  {
    name: "TicTacToe",
    shortDesc: "Simple Game in React",
    liveDemo: "",
    githubLink: "",
    moreInfo: "Simple TicTacToe game made in React",
    moreInfoPhoto: "/My-portfolio/assets/TicTacToe.png",
    skills: ["react", "javascript", "react"],
  },
  {
    name: "Mine Calculatorr",
    shortDesc: " simple Javascript project",
    liveDemo: "https://kaushalji-123.github.io/MineCalculator/",
    githubLink: "https://github.com/kaushalji-123/MineCalculator",
    moreInfo: "This blog was made using Gatsby",
    moreInfoPhoto: "/My-portfolio/assets/calculator.png",
    skills: [ "javascript", "html", "css"],
  },
  {
    name: "Weather app",
    shortDesc: "simple javascript app",
    liveDemo: "https://kaushalji-123.github.io/Weather-App/",
    githubLink: "https://github.com/kaushalji-123/Weather-App",
    moreInfo:
      "Weather app made with vanilla javascript. in this project i used open weather API for showing the current weather Data in to the webPage i used here `units=metric` Parameters to make an Api call to shows accurate weather info. The app displaying current weather like temperature, humidity, and wind speed. It's a showcase of my coding skills and how I design things for users. Even though it seems simple, it's doing complex stuff behind the scenes with API calls and making the code work smoothly and making it easy for anyone to check the weather Info.",
    moreInfoPhoto: "/My-portfolio/assets/weatherApp.png",
    skills: ["javascript", "html", "scss"],
  },
  {
    name: "Blog",
    shortDesc: "Event Deligation in JS",
    liveDemo: "https://medium.com/@divyanshu838283fb/what-is-an-event-delegation-in-js-aaa808f4c51b",
    moreInfoPhoto: "/My-portfolio/assets/blogs/event-delegation-2.png",
    skills: ["blogs"],
  },
  {
    name: "Blog",
    shortDesc: " Let vs Const vs var ",
    liveDemo: "https://medium.com/@divyanshu838283fb/lets-understand-the-difference-between-let-const-and-var-in-javascript-in-depth-9a31c0c8c92d",
    moreInfoPhoto: "/My-portfolio/assets/blogs/Let-CONST-AND-VAR.png",
    skills: ["blogs"],
  },
];

// rendering containers on site

function renderData(items) {
  jsContainer.innerHTML = "";

  items.forEach((element, index) => {
    const {
      name,
      shortDesc,
      liveDemo,
      githubLink,
      moreInfo,
      moreInfoPhoto,
    } = element;
    jsContainer.innerHTML += `
      <div class="container__item" >
      <div class="more-info-photo-background more-info-trigger" ></div>
        <img 
          class="more-info-photo " 
          src=${moreInfoPhoto} 
          data-aos="fade-in"
        />
        <div class="more-info-photo-title">${name}</div>
        <div class="more-info-photo-title2">${shortDesc}</div>
        
        <div class="more-info more-info--hidden">
          <div class="more-info__close">X</div>
          <h1 class="more-info__header">${name}</h1>
          
          <p class="more-info__text">${moreInfo}</p>
          <a class="more-info__demo" href="${liveDemo}" target="_blank" >
            <span class="more-info-title">Live Demo</span>
          </a>
          <a class="more-info-github" target="_blank" href="${githubLink}">
            <i class="fa fa-github"></i>
          </a>
          <img class="more-info-photo-desc" src=${moreInfoPhoto} />
        </div>
      </div>
      
    `;
  });
}

renderData(data);

function portfolioItem() {
  // selecting items from site
  const moreInfoTrigger = document.querySelectorAll(".more-info-trigger");
  const moreInfoElements = document.querySelectorAll(".more-info");
  const closeButtons = document.querySelectorAll(".more-info__close");

  // close more info about portfolio item
  function closeInfo() {
    moreInfoElements.forEach((element) => {
      element.classList.add("more-info--hidden");
    });
  }

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeInfo);
  });

  // open more ino about portfolio item
  moreInfoTrigger.forEach((icon) => {
    icon.addEventListener("click", () => {
      const moreInfo = icon.parentElement.querySelector(".more-info");
      closeInfo();
      moreInfo.classList.remove("more-info--hidden");
    });
  });
}

portfolioItem();

// finding skills from data

function findSkills(list) {
  return list.reduce((result, element) => {
    result.push(...element.skills);
    return result.filter((a, b) => result.indexOf(a) === b);
  }, []);
}

// finding data item using skill

function findDataWithSkill(data, skill) {
  return data.filter((item) => item.skills.includes(skill));
}

// render skillsButtons

const skillsContainer = document.getElementById("skills");
const skills = findSkills(data);

skills.forEach((skill) => {
  skillsContainer.innerHTML += `
    <button data-skill=${skill} class='skill__button' >${skill.toUpperCase()}</button>
  `;
});

const skillButtons = document.querySelectorAll(".skill__button");

// remove activeClass from button

function removeActive() {
  skillButtons.forEach((button) => {
    button.classList.remove("skill__button--active");
  });
}

// listener for skillButtons

skillButtons.forEach((button) => {
  button.addEventListener("click", () => {
    removeActive();
    const newData = findDataWithSkill(data, button.dataset.skill);
    button.classList.add("skill__button--active");
    renderData(newData);
    portfolioItem();
  });
});
