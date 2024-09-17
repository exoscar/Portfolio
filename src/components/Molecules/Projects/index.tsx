import PTypography from "../../atoms/PTypography";
import { ProjectWrapepr, ProjectCard } from "./style";
import pharmaImage from "../../assets/pharma.png";
import AlumniImage from "../../assets/alumni.png";
import crowdfundingImage from "../../assets/crowd.png";
import ProjectImg from "../../assets/image.png";

const Project: React.FC<{
  projectTitle: string;
  description: string;
  image?: any;
  skills?: string[];
  time?: string;
  navigateTo?: string;
}> = ({ projectTitle, description, image, skills, time, navigateTo }) => {
  return (
    <ProjectCard onClick={() => window.open(navigateTo)}>
      <div className="header">
        <PTypography className="project-title">{projectTitle}</PTypography>
        <PTypography className="time">{time}</PTypography>
      </div>

      <div className="desc">
        <img src={image} alt="project" />
        <PTypography className="description">{description}</PTypography>
      </div>
      <div className="skills">
        {skills?.map((skill) => (
          <div className="indi-skill">
            <PTypography className="skill-text">{skill}</PTypography>
          </div>
        ))}
      </div>
    </ProjectCard>
  );
};

export const ProjectProfile = () => {
  const projects = [
    {
      projectTitle: "PharmaTraceX",
      description:
        "Developed a pharmaceutical supply chain management system using Blockchain for medicine authenticity and transparency, and IoT for real-time monitoring of temperature and humidity with integrated alert triggers.",
      image: pharmaImage,
      skills: ["ReactJs", "NodeJS", "Solidity", "Blockchain", "MongoDB"],
      time: "Nov 2023",
      navigateTo: "https://github.com/exoscar/Enhanced_PharmaTraceX",
    },

    {
      projectTitle: "CrowdFunding",
      description:
        "Developed a crowdfunding application using Blockchain and Web3, enabling users to create campaigns and donate cryptocurrencies via MetaMask wallets, with smart contracts ensuring transparent and secure transactions.",
      image: crowdfundingImage,
      skills: ["ReactJs", "NodeJS", "Solidity"],
      time: "Jun 2023",
      navigateTo: "https://github.com/exoscar/CrowdFunding",
    },
    {
      projectTitle: "Alumni Portal",
      description:
        "Created a dynamic web platform connecting students with alumni for mentorship, scholarships, events, and career development, while enabling alumni to engage in fundraising, event management, and job opportunity sharing to foster a strong community.",
      image: AlumniImage,
      skills: ["HTML", "CSS", "PHP, MySQL", "Javascript"],
      time: "Apr 2023",
      navigateTo: "https://github.com/exoscar/alumiportal",
    },
    // {
    //   projectTitle: "URL Shortner",
    //   description: "A URL shortening service to shorten long URLs.",
    //   skills: ["ReactJs", "NodeJS", "MongoDB", "TypeScript"],
    //   time: "Sep 2024",
    //   navigateTo: "https://github.com/exoscar/URL_shortener_BE",
    // },
    {
      projectTitle: "Portfolio ",
      description:
        "Developed a personal portfolio website to showcase projects and skills, utilizing modern web development technologies. Designed an intuitive user interface to highlight experience in full-stack development, blockchain, and IoT, with responsive design for seamless access across devices.",
      skills: ["ReactJs", "NodeJS", "TypeScript"],
      time: "Sep 2024",
      image: ProjectImg,
      navigateTo: "https://github.com/exoscar/Portfolio",
    },
  ];
  return (
    <ProjectWrapepr>
      <PTypography className="title">Projects</PTypography>
      <div className="projects-list">
        {projects.map((project) => (
          <Project
            projectTitle={project.projectTitle}
            description={project.description}
            image={project.image}
            skills={project.skills}
            time={project.time}
            navigateTo={project.navigateTo}
          />
        ))}
      </div>
    </ProjectWrapepr>
  );
};
