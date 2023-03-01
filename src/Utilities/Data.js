import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";

export const Skills = [
  {
    id: 0,
    tech: "React JS",
    icon: <FaReact />,
  },
  {
    id: 1,
    tech: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    tech: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    tech: "Javascript",
    icon: <SiJavascript />,
  },
];

export const projectDetails = [
  {
    id: 0,
    project_name: "Restaurant App",
    project_desc:
      "It typically includes features such as a menu with prices, the ability to place an order, and the option to pay for the order directly through the app. Some restaurant applications also allow customers tomake reservations, view the restaurant's location and hours, and access special deals or promotions.",
    tech_stack: ["React JS", "Tailwind", "Firebase"],
    project_img: Project1,
    project_url: "https://github.com/Samiha-Hossain19/React-Authentication",
    reverse: false,
  },
  {
    id: 1,
    project_name: "English Dictionary",
    project_desc:
      "It typically includes features such as a menu with prices, the ability to place an order, and the option to pay for the order directly through the app. Some restaurant applications also allow customers tomake reservations, view the restaurant's location and hours, and access special deals or promotions.",
    tech_stack: ["React JS", "Tailwind", "Firebase"],
    project_img: Project2,
    project_url: "https://github.com/Samiha-Hossain19/English-Dictionary",
    reverse: false,
  },
];
