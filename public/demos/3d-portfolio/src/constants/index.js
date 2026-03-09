import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Laravell",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mern Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2024 - November 2024",
    points: [
      "I have expertise in React.js and have completed three projects using this technology.",
      "Developed dynamic and responsive web applications that are user-friendly and efficient.",
      "Implemented React components, state management, and routing in these projects.",
      "Gained proficiency in using React ecosystem tools like Redux and React Router.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - Dec 2024",
    points: [
      "I’ve built responsive, user-friendly front-end projects with HTML and CSS.",
      "For the back-end, I have developed dynamic applications using ZAMP, managing databases and server-side logic efficiently",
      "I have developed dynamic React applications using components, state management, and hooks to create smooth, interactive user interfaces.",
      "I have also integrated MongoDB as a database solution to efficiently store and retrieve data.",
    ],
  },
  {
    title: "Laravell",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "I’ve developed dynamic and secure web applications with Laravel, focusing on clean, maintainable code.",
      "I’ve implemented user authentication, role-based access, and secure data handling in Laravel.",
      "I’ve integrated databases using Laravel’s Eloquent ORM to manage data and queries.",
      "I’ve utilized Laravel’s tools like routing, middleware, and blade templates for scalable web applications.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E_Commerce Project",
    description:
      "A MERN stack platform for browsing products, adding to the cart, and completing secure transactions with real-time updates and efficient management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://cdn.pixabay.com/photo/2017/05/02/15/30/streets-2278471_640.jpg",
    source_code_link: "https://github.com/",
  },
  {
    name: "YouTube Clone",
    description:
      "A MERN stack web app that replicates YouTube, allowing users to watch, search, and upload videos. It uses MongoDB, Express, React, and Node for full-stack development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_640.jpg",
    source_code_link: "https://github.com/",
  },
  {
    name: "Library Website",
    description:
      "A user-friendly library website built with HTML, CSS, and JavaScript, allowing visitors to search for books, view details, and borrow them online with ease.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: "https://cdn.pixabay.com/photo/2016/08/16/17/12/skyscrapers-1598418_640.jpg",
    source_code_link: "video3.mp4",
  },
];

export { services, technologies, experiences, testimonials, projects };
