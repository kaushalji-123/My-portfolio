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
    skills: ["javascript", "html", "Scss" , "Figma" ],
  },
  {
    name: "RockPaperScissor",
    shortDesc: "Game in JS",
    liveDemo: "https://rockpaperscissors-divyanshukaushal.netlify.app/",
    githubLink: "https://github.com/kaushalji-123/Stone_Paper_Scissor-master",
    moreInfo: "Simple Game made in vanilla javascript.",
    moreInfoPhoto: "./assets/RockPaperScissor.png",
    skills: ["javascript", "html", "css", "OOP ,"],
  },
  {
    name: "Concerte",
    shortDesc: "Team Project",
    liveDemo: "http://www.frontczewscy.jfdd13.is-academy.pl/",
    githubLink: "https://github.com/infoshareacademy/jfdd13-frontczewscy",
    moreInfo:
      "Team Project that was made on a bootcamp. Made with HTML, CSS and Javascript.",
    moreInfoPhoto: "/My-portfolio/assets/TicTacToe.png",
    skills: ["javascript", "html", "css"],
  },
  {
    name: "Concerte App",
    shortDesc: "Team Project",
    liveDemo: "http://app.frontczewscy.jfdd13.is-academy.pl/",
    githubLink: "https://github.com/infoshareacademy/jfdd13-frontczewscy-app",
    moreInfo:
      "Team Project that was made on a bootcamp. Made with ReactJS, firebase and more.",
    moreInfoPhoto: "/My-portfolio/assets/RockPaper.png",
    skills: ["react", "javascript", "css", "firebase"],
  },
  {
    name: "TicTacToe",
    shortDesc: "Simple Game in React",
    liveDemo: "https://mateuszrostkowski.github.io/TicTacToe/",
    githubLink: "https://github.com/MateuszRostkowski/TicTacToe",
    moreInfo: "Simple TicTacToe game made in React",
    moreInfoPhoto: "/My-portfolio/assets/TicTacToe.png",
    skills: ["react", "javascript", "react"],
  },
  {
    name: "JavascriptMasters",
    shortDesc: "Gatsby blog about Javascript",
    liveDemo: "http://javascriptmasters.netlify.com/",
    githubLink: "https://github.com/MateuszRostkowski/Gatsby_blog",
    moreInfo: "This blog was made using Gatsby",
    moreInfoPhoto: "/My-portfolio/assets/JavascriptMaster.png",
    skills: ["gatsby", "react", "javascript", "scss", "css"],
  },
  {
    name: "Weather app",
    shortDesc: "simple javascript app",
    liveDemo: "https://weather-location.netlify.com/",
    githubLink: "",
    moreInfo:
      "Weather app made with vanilla javascript. You need to allow use your location to fully use this site.",
    moreInfoPhoto: "/My-portfolio/assets/WeatherApp.png",
    skills: ["javascript", "html", "css",],
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
