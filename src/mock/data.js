import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio | Craig Harshaw', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: ' ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Craig Harshaw',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
// I am a fan of Javascript and enjoy using React and Node to tinker and build applications
// and I'm a highly motivated self-starter seeking to launch a professional development career and use my full-stack development skills to build great applications.
// , and I've always loved building things.  As a kid, I could typically be found working on K'nex models for hours on end, only taking breaks to eat and design rides in Roller Coaster Tycoon.
export const aboutData = {
  img: 'profile.jpg', //profile.jpg
  paragraphOne: `My name is Craig and I'm a web developer based out of Philadelphia.`,
  paragraphTwo: `I got my first taste of web design from a college HTML class, and a few years ago, rediscovered the craft.  I've been learning, tinkering, and building since.`,
  paragraphThree: ` `,
  paragraphFour: ` `,
  paragraphFive: `I also have a background in data & analytics, working within the mortgage industry, and can pivot or vlookup just about anything.`,
  paragraphSix: `In my free time, I love to play rec league soccer, basketball, and flag football.  I am an adventurous eater as well, with Indian food, sushi, and BBQ among my faves.`,
  resume: 'https://drive.google.com/file/d/1jYDoJRFJuUuQ0hDBjfyj9D4xYIesPEeK/view?usp=sharing', // if no resume, the button will not show up https://www.resumemaker.online/es.php
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'RestEasy.png',
    title: 'RestEasy.app',
    info: `RestEasy is a full-stack web application that aims to be Yelp for public restrooms.  It uses the Foursquare API to present establishments on a Google Map, and authenticated users can submit reviews of restroom(s) based on cleanliness, style, etc.  Photo uploads are optional as part of the review; photo management is handled with Cloudinary's API.  Reviews are aggregated and summarized on place cards.`,
    info2: '',
    tech: ["* React", "* Redux", "* Firebase", "* Google Maps API", "* FourSquare API", "* Cloudinary"],
    url: 'https://www.resteasy.app',
    repo: 'https://github.com/cpharshaw/resteasy-redux', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ps5.png',
    title: 'Playstation 5 Stock Checker',
    info: `Node.js app that pools and scrapes BestBuy.com to look for inventory of the Playstation 5 video game console.  It runs on an interval and emails me if it finds the console to be available.`,
    info2: '',
    tech: ["* Node.js", "* Express", "* Axios", "* Heroku"],
    url: 'https://bestbuyps5checker.herokuapp.com/ps5/bestbuy',
    repo: 'https://github.com/cpharshaw/bestbuy-ps5-stock-checker/', // if no repo, the button will not show up
  },  
  {
    id: nanoid(),
    img: 'MarvelMemory.png',
    title: 'MARVEL Memory Game',
    info: 'React-based memory game.  User will click on a tile of a Marvel hero/villain, and the game will respond by reshuffling tiles.  The user must not click on the same tile twice and will win when all tiles have been clicked.',
    info2: '',
    tech: ["* React"],
    url: 'https://cpharshaw.github.io/clickyGame/',
    repo: 'https://github.com/cpharshaw/clickyGame', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Simon.png',
    title: 'Simon Game',
    info: 'Classic game of Simon coded using jQuery, HTML, and CSS.  Player repeats pattern presented by CPU.',
    info2: '',
    tech: ["* jQuery", "* HTML", "* CSS"],
    url: 'https://cpharshaw.github.io/simon/',
    repo: 'https://github.com/cpharshaw/simon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'NameGuess2.png',
    title: 'Office Space Name Guess',
    info: 'Classic game of Hangman with an Office Space theme.  Player will be guessing the character names from the movie Office Space. (This app only functions on desktops and devices with physical keyboards.)',
    info2: '',
    tech: ["* jQuery", "* HTML", "* CSS"],
    url: 'https://cpharshaw.github.io/word-guess-game/',
    repo: 'https://github.com/cpharshaw/word-guess-game/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'giftastic.png',
    title: 'Gif Tastic',
    info: 'Users can search for animated GIFs (using Giphy API) and display top results, each of which can be clicked on to begin animation.',
    info2: '',
    tech: ["* jQuery", "* HTML", "* CSS", "* Giphy.com API"],
    url: 'https://cpharshaw.github.io/gifTastic/',
    repo: 'https://github.com/cpharshaw/gifTastic', // if no repo, the button will not show up
  }  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'craig@craigharshaw.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/cpharshaw',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/craigharshaw/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cpharshaw',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
