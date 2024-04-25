//========== Projects Items ==========

import projImage1 from "../assets/img/Projects-img/project-portfolio-img.webp";
import projImage2 from "../assets/img/Projects-img/project-IdeaVenture-img.webp";
import projImage3 from "../assets/img/Projects-img/project-eStore-img.webp";

const projectsItems = [
  {
    id: 1,
    title: "React Portfolio",
    img: projImage1,
    desc: "My personal portfolio showcases my journey as a developer. It's a collection of my work, skills, and projects, reflecting my personal brand and professional accomplishments, built with React for a dynamic and responsive user experience.",
    url: "https://github.com/MoSalem149/my-portfolio.git",
    comingSoon: false
  },
  {
    id: 2,
    title: "IdeaVentures Platform",
    img: projImage2,
    desc: "IdeaVentures is an innovative platform that connects entrepreneurs with investors. This React-based application serves as a marketplace for groundbreaking ideas, providing resources for investment and collaboration to bring visions to life.",
    url: "https://github.com/MoSalem149/ideaventure.git",
    comingSoon: true
  },
  {
    id: 3,
    title: "React eStore",
    img: projImage3,
    desc: "A sleek e-commerce platform offering a wide range of clothing and accessories. With a focus on user experience, our React eStore facilitates an effortless browsing and purchasing process, featuring the latest trends in fashion.",
    url: "https://github.com/MoSalem149/ITI-ST-Final-Project-eStore.git",
    comingSoon: false
  },
];

export default projectsItems;
