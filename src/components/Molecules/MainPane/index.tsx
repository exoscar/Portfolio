import PTypography from "../../atoms/PTypography";
import { MainPaneContainer } from "./style";
import { WorkProfile } from "../WorkProfile";
import { useEffect } from "react";
import { Fade } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { AcademicQualification2 } from "../EduProfile2";
import { SkillsPro } from "../SkillsProfile2";
import { ProjectProfile } from "../Projects";

interface MainPaneProps {
  ref?: React.RefObject<HTMLDivElement>;
}

export const MainPane: React.FC<MainPaneProps> = ({ ref }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval: any = null;

  const scrambleText = (element: any, finalText: string) => {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      element.innerText = finalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return finalText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= finalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const element = document.querySelector(".name");
    const finalText = "Sai Charan Latchireddi";
    scrambleText(element, finalText);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <MainPaneContainer>
      <Fade in={true} timeout={3000}>
        <div id="about" className="intro" ref={ref ?? undefined}>
          <PTypography className="greet">Hi, my name is</PTypography>
          <PTypography className="name">Sai Charan Latchireddi </PTypography>
          <PTypography className="slogan">
            My Superpower Is Creating Interactive Websites
          </PTypography>
          <PTypography className="description">
            Dedicated software engineer specializing in web applications and
            digital experiences, with expertise in{" "}
            <span className="highlight">MERN Stack</span>. Focused on building
            accessible, user-centric solutions that drive engagement.
          </PTypography>

          <div className="icons">
            <a
              href="https://github.com/exoscar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-charan-latchireddi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:imcharan1012@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon />
            </a>
            <div className="vertical-line"></div>
          </div>
        </div>
      </Fade>
      <div id="experience" className="work-profile animate-on-scroll">
        <WorkProfile />
      </div>
      <div className="edu-skills animate-on-scroll">
        <div id="education" className="edu-profile ">
          {/* <EduProfile /> */}
          <AcademicQualification2 />
        </div>
        <div id="skills" className="skill-profile">
          <SkillsPro />
        </div>
      </div>

      <div id="projects" className="project-profile animate-on-scroll">
        <ProjectProfile />
      </div>
    </MainPaneContainer>
  );
};
