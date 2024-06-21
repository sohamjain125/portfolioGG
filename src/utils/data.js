import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export const PROFILE_DATA = {
  profilePicture: "https://via.placeholder.com/150",
  name: "Soham Jain",
  tagline: `Passionate React JS developer  dedicated to crafting immersive web experiences and solving complex challenges.`,
  jobTitle: "Full Stack Developer",
  location: "India",
  yearsOfExperience: 1,
  skills: [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Redux",
    "Node.js",
    "RESTful APIs",
  ],
  email: "sohamjain125@gmail.com",
  phone: "9022070326",
  // website: "https://timetoprogram.com",
};

export const SKILLS = [
  {
    id: "01",
    icon: IoLogoJavascript,
    title: "JavaScript",
    comment: `JavaScript is my bread and butter. I've been working with it for over 4 years and have built numerous applications, ranging from simple scripts to complex web applications.`,
  },
  {
    id: "02",
    icon: IoLogoHtml5,
    title: "HTML",
    comment: `HTML is the foundation of every web project I work on. I have a deep understanding of its structure and semantics, ensuring my web applications are well-structured and accessible.`,
  },
  {
    id: "03",
    icon: IoLogoReact,
    title: "React JS",
    comment: `I'm deeply passionate about React.js and have been using it extensively for over 3 years. I've built numerous projects, including e-commerce websites, dashboards, and interactive web applications.`,
  },
  {
    id: "04",
    icon: IoLogoNodejs,
    title: "Node JS",
    comment: `Node.js is my go-to choice for building scalable and efficient server-side applications. With its event-driven architecture and extensive ecosystem, I've built RESTful APIs, real-time chat applications, and more.`,
  },
  {
    id: "05",
    icon: SiMongodb,
    title: "MongoDB",
    comment: `MongoDB's flexible document-based structure and scalability make it an ideal choice for storing and managing data in modern web applications. I've used MongoDB extensively in projects, ranging from small-scale applications to large-scale platforms.`,
  },
  {
    id: "06",
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    comment: `Tailwind CSS has revolutionized the way I approach front-end styling. Its utility-first approach allows me to rapidly build responsive and beautifully designed interfaces without writing custom CSS.`,
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "Tata Consultancy Services",
    position: "Project Intern",
    duration: "June 2024 - Present",
    description:
      "Currently working on a project with a team to build a web application using React JS. This involves leveraging the MERN stack for full-stack development. Through this project, I am honing my skills in MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    id: "02",
    company: "NinePointer",
    position: "Marketing",
    duration: "May 2021 - June 2021",
    description:
      "Worked as a campus ambassador for Ninpointer, promoting their brand and initiatives on campus. Coordinated and organized events to increase awareness and engagement. Developed marketing skills and strengthened my ability to communicate effectively with peers.",
  },
];

export const ABOUT_ME_DATA = {
  introduction:
    "Hi, I'm Soham Jain, an experienced React JS developer passionate about building engaging web applications and solving complex problems with code.",
  background:
    "Currently pursuing Bachelor's degree in Computer Science from the Medi-Caps University. Curently in 4th year of Computer Science, I've gained valuable experience in Full Stack Web development, working on projects ranging from e-commerce websites to interactive dashboards.",
  skills:
    "I'm proficient in a variety of technologies including React.js, JavaScript, HTML, CSS, and Node.js. I'm also experienced in working with RESTful APIs.",
  projects:
    "Some of my notable projects include an e-commerce website built with React.js and Node.js, a Chat Application using Node.js and MongoDB, and a personal portfolio website deployed on Github.",
  interests:
    "Outside of coding, I enjoy traveling to new places, capturing moments through photography, and playing chess.",
  careerGoals:
    "In the future, I aim to continue honing my skills as a developer, exploring new technologies, and contributing to meaningful projects that make a positive impact on people's lives.",

  stats: {
    yearsOfExperience: "1+",
    numberOfProjects: 5,
    certificationsEarned: 5,
  },
};
