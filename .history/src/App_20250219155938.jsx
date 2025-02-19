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
    imageWhite: "/assets/img/Logo_White.png",
    imageBlack: "/assets/img/Logo_Black.png",
  };
  const navList = ["Home", "Projects", "My Info", "Services", "Contact Me"];
  const imageHome = "/assets/img/Photo.png";
  const imageInfo = "/assets/img/Photo2.png";
  const footerCopy = "© All rights reserved by Ade Maulana";
  const biodata = {
    firstName: "Ade",
    lastName: "Maulana",
    profession: "Front-End Developer",
    description:
      "With a strong passion for web development and a background in Informatics Engineering, I am transitioning into a career as a Front-End Web Developer. Skilled in HTML, CSS, JavaScript, TypeScript, React.js, and Next.js, I specialize in building responsive, high-performance, and user-friendly web applications. Experienced in UI/UX principles, state management, API integration, and website optimization, I am committed to continuous learning and delivering modern, efficient web solutions",
    cv: "/assets/pdf/CV Ade Maulana.pdf",
  };
  const projects = [
    {
      id: 1,
      title: "TandingLapang",
      description:
        "Tanding Lapang is a platform designed to simplify the search for sparring partners and the organization of sparring events across various sports. This project aims to connect athletes and sports enthusiasts with sparring partners based on location and sport type, while also providing organizers with an efficient way to create and manage sparring events.",
      image: "/assets/img/tandinglapang.jpg",
    },
    {
      id: 2,
      title: "Foodies",
      description:
        "This Cafe website provides an interactive platform for users to explore the menu, place orders, and learn more about the cafe’s offerings and services.",
      image: "/assets/img/foodies.jpg",
    },
    {
      id: 3,
      title: "PeopleList",
      description:
        "This Movie website allows users to browse and discover a variety of movies, view details, and explore ratings and reviews.",
      image: "/assets/img/peoplelist.jpg",
    },
    {
      id: 4,
      title: "Aroma Hati",
      description:
        "This Blog website offers a platform for users to read, share, and comment on various articles, fostering a community of discussion and knowledge sharing.",
      image: "/assets/img/aromahati.jpg",
    },
    {
      id: 5,
      title: "Fitness Website",
      description:
        "This Fitness website provides users with workout plans, nutrition tips, and progress tracking to help them achieve their fitness goals.",
      image: "/assets/img/fittnes web.avif",
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
  const education = [
    {
      id: 1,
      university: "Dibimbing.id Bootcamp",
      major: "Front-End Web Development",
      date: "09/2024 - 02/2025",
      description:
        "Learning HTML, CSS, JavaScript, and TypeScript, and utilizing React.js and Next.js to build responsive and high-performance user interfaces. Experienced in UI/UX design slicing, website optimization, and problem-solving algorithms. Skilled in team collaboration using Git/GitHub and committed to continuous learning and staying updated with the latest web technologies.",
    },
    {
      id: 2,
      university: "Institut Teknologi dan Bisnis Bina Sarana Global",
      major: "Informatics Engineering",
      date: "09/2020 - 11/2024",
      description:
        "Studied Informatics Engineering, covering software development, algorithms, data structures, databases, system design, cybersecurity, and AI. Gained expertise in computing principles, system analysis, and application optimization. Experienced in Agile and Scrum methodologies, web development frameworks, UI/UX design, data processing, and problem-solving using algorithms and programming logic.",
    },
  ];
  const skills = [
    {
      id: 1,
      skill: "HTML",
      image: "/assets/img/html.svg",
    },
    {
      id: 2,
      skill: "CSS",
      image: "/assets/img/css.svg",
    },
    {
      id: 3,
      skill: "JavaScript",
      image: "/assets/img/javascript.svg",
    },
    {
      id: 4,
      skill: "React",
      image: "/assets/img/react.svg",
    },
    {
      id: 5,
      skill: "Next.js",
      image: "/assets/img/nextjs.svg",
    },
    {
      id: 6,
      skill: "Git",
      image: "/assets/img/git.svg",
    },
    {
      id: 7,
      skill: "GitHub",
      image: "/assets/img/github.svg",
    },
    {
      id: 8,
      skill: "Tailwind",
      image: "/assets/img/tailwind.png",
    },
    {
      id: 9,
      skill: "Bootstrap",
      image: "/assets/img/bootstrap.png",
    },
    {
      id: 10,
      skill: "Figma",
      image: "/assets/img/figma.svg",
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
      <main>
        <Home imageHome={imageHome} biodata={biodata} />
        <Projects projects={projects} />
        <Info
          imageInfo={imageInfo}
          biodata={biodata}
          experience={experience}
          skills={skills}
          education={education}
        />
        <Services services={services} />
        <Contact socialMedia={socialMedia} />
        <Footer navList={navList} footerCopy={footerCopy} />
      </main>
      <Scroll />
      <Reveal />
    </div>
  );
}

export default App;
