import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Info } from "./components/Info";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Scroll } from "./components/Scroll";
import { Reveal } from "./components/Reveal";
function App() {
  const logo = {
    name: "AMgrowth",
    imageWhite: "./src/assets/img/Logo_White.png",
    imageBlack: "./src/assets/img/Logo_Black.png",
  };
  const navList = ["Home", "Project", "My Info", "Services", "Contact Me"];
  const imageHome = {
    imageWhite: "./src/assets/img/Photo.png",
    imageBlack: "./src/assets/img/PhotoB.png",
  };
  const imageInfo = {
    imageWhite: "./src/assets/img/Photo2.png",
    imageBlack: "./src/assets/img/Photo2B.png",
  };
  const footerCopy = "© All rights reserved by Ade Maulana";
  const biodata = {
    firstName: "Ade",
    lastName: "Maulana",
    profession: "Front-End Developer",
    description:
      "I am a Front-End Web Developer skilled in designing and building responsive, interactive web interfaces using HTML, CSS, and JavaScript. With experience in React.js, I focus on creating visually appealing and functional websites that enhance user experience across devices. I stay updated with the latest technologies to deliver creative and efficient solutions.",
    cv: "./src/assets/pdf/CV Ade Maulana.pdf",
  };
  const projects = [
    {
      id: 1,
      title: "To-Do List Website",
      description:
        "This To-Do List web application features a simple interface and dynamic functionality to help users manage their daily tasks with ease.",
      image: "./src/assets/img/to-do-list-web.png",
    },
    {
      id: 2,
      title: "Cafe Website",
      description:
        "This Cafe website provides an interactive platform for users to explore the menu, place orders, and learn more about the cafe’s offerings and services.",
      image: "./src/assets/img/cafe web.jpg",
    },
    {
      id: 3,
      title: "Movie Website",
      description:
        "This Movie website allows users to browse and discover a variety of movies, view details, and explore ratings and reviews.",
      image: "./src/assets/img/movies web.png",
    },
    {
      id: 4,
      title: "Blog Website",
      description:
        "This Blog website offers a platform for users to read, share, and comment on various articles, fostering a community of discussion and knowledge sharing.",
      image: "./src/assets/img/blog web.jpg",
    },
    {
      id: 5,
      title: "Fitness Website",
      description:
        "This Fitness website provides users with workout plans, nutrition tips, and progress tracking to help them achieve their fitness goals.",
      image: "./src/assets/img/fittnes web.avif",
    },
  ];
  const experience = [
    {
      id: 1,
      company: "PT. Victory Chingluh Indonesia",
      profession: "Shipping Officer",
      date: "12/2018 - 07/2024",
      description:
        "Experienced in managing delivery orders with high accuracy using Excel, monitoring stock through SAP, and improving operational efficiency and delivery coordination, with skills in logistics management, inventory, and effective communication.",
    },
    {
      id: 2,
      company: "PT Midi Utama Indonesia, Tbk",
      profession: "Sales Assistant",
      date: "06/2018 - 12/2018",
      description:
        "Experienced in delivering excellent customer service, providing clear product information, and staying updated on new products and promotions to boost customer satisfaction and engagement. Skilled in promoting products and exceeding sales targets through proactive interactions and recommendations, with a focus on teamwork and adaptability.",
    },
    {
      id: 3,
      company: "CV Radjawali",
      profession: "Printing Operator",
      date: "07/2017 - 05/2018",
      description:
        "Experienced in accurately preparing print files, ensuring consistent print quality, and reducing the need for reprints. Skilled in maintaining printing machines to enhance operational efficiency, minimize downtime, and boost productivity.",
    },
  ];
  const skills = [
    {
      id: 1,
      skill: "HTML",
      image: "./src/assets/img/html.svg",
    },
    {
      id: 2,
      skill: "CSS",
      image: "./src/assets/img/css.svg",
    },
    {
      id: 3,
      skill: "JavaScript",
      image: "./src/assets/img/javascript.svg",
    },
    {
      id: 4,
      skill: "React",
      image: "./src/assets/img/react.svg",
    },
    {
      id: 5,
      skill: "Git",
      image: "./src/assets/img/git.svg",
    },
    {
      id: 6,
      skill: "GitHub",
      image: "./src/assets/img/github.svg",
    },
    {
      id: 7,
      skill: "Tailwind",
      image: "./src/assets/img/tailwind.png",
    },
    {
      id: 8,
      skill: "Bootstrap",
      image: "./src/assets/img/bootstrap.png",
    },
    {
      id: 9,
      skill: "Figma",
      image: "./src/assets/img/figma.svg",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: "ri-code-s-slash-line",
      description:
        "Building functional, secure, and user-friendly websites with features tailored to user needs.",
    },
    {
      id: 2,
      title: "Web Design",
      icon: "ri-pencil-ruler-2-line",
      description:
        "Designing visually appealing and professional website layouts that reflect the brand identity and provide an engaging visual experience.",
    },
    {
      id: 3,
      title: "Responsive Web Design",
      icon: "ri-layout-2-line",
      description:
        "Creating responsive websites compatible across various devices, ensuring an optimal user experience on desktops, tablets, and smartphones.",
    },
  ];
  const socialMedia = [
    {
      id: 1,
      name: "github",
      icon: "ri-github-line",
      link: "https://github.com/Ademaulana100499",
    },
    {
      id: 2,
      name: "linkedin",
      icon: "ri-linkedin-box-line",
      link: "https://www.linkedin.com/in/ademaulana-/",
    },
    {
      id: 3,
      name: "instagram",
      icon: "ri-instagram-line",
      link: "https://www.instagram.com/ade_maulana._/",
    },
  ];

  return (
    <div>
      <Header logo={logo} navList={navList} />
      <Home imageHome={imageHome} biodata={biodata} />
      <Projects projects={projects} />
      <Info
        imageInfo={imageInfo}
        biodata={biodata}
        experience={experience}
        skills={skills}
      />
      <Services services={services} />
      <Contact socialMedia={socialMedia} />
      <Footer navList={navList} footerCopy={footerCopy} />
      <Scroll />
      <Reveal />
    </div>
  );
}

export default App;
