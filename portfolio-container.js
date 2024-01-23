"use strict";

const jsContainer = document.querySelector("#jsContainer");

const data = [
  {
    name: "Online_JobPortal-React",
    shortDesc: "App",
    liveDemo: "https://joboardportal.netlify.app/",
    githubLink: "https://github.com/kaushalji-123/Job-Portal---React",
    moreInfo: "Hello there! As a passionate Front-End Developer, I've created an impressive Job Portal application utilizing ReactJS, Tailwind CSS for styling, and Firebase for efficient data management and authentication. As a continuous learner, I'm exploring possibilities to further enhance this application. In the future, I plan to introduce a feature allowing job postings directly within the platform, eliminating the need for manual updates via Firebase.",
    moreInfoPhoto: "./assets/Jobportal.png",
    skills: ["react", "html", "css", "tailwind"],
  },
  {
    name: "Sumry.AI  ",
    shortDesc: "OpenAI Article Summarizer",
    liveDemo: "https://summarize-ai-three.vercel.app/",
    githubLink: "https://github.com/kaushalji-123/SummarizeAI",
    moreInfo:
      "SummarizeAI a React Project using Open Ai API which helps you to understand long articles and webpages without reading all the words. You just need to give it a `https://` link, and it magically creates short summaries using Open Ai API. It's like having a quick cheat sheet for any article, making it easier to get the understand & saves your time.",
    moreInfoPhoto: "./assets/SumryAi.png",
    skills: [ "html", "tailwind" , "redux" , 'react',"rapid Api" ],
  },
  {
    name: "ATM Bank Mangement System",
    shortDesc: "Developed in Java Swing ",
    githubLink: "https://github.com/kaushalji-123/Bank-Management-System",
    moreInfo:
      "This is ATM Bank Management System developed in Java OOps Concepts, Interface Designed with Java's Swing framework, Utilizes MySQL Database for ensuring reliable data retrieval and secure data storage.",
    moreInfoPhoto: "./assets/MainScreen.png",
    skills: ["java", "MYSQL","OOP" ],
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
    skills: ["javascript", "html", "scss"],
  },
  {
    name: "Quiz App",
    shortDesc: "Quiz App with ",
    liveDemo: "https://quizmeappdivyanshukaushal.netlify.app/",
    githubLink: "https://github.com/kaushalji-123/QuizMe-REACT",
    moreInfo: "Simple Quiz App Create in React",
    moreInfoPhoto: "/My-portfolio/assets/Quizme.png",
    skills: ["react", "javascript", "scss"],
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
    moreInfoPhoto: "/My-portfolio/assets/WeatherApp.png",
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
