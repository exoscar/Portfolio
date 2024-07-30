import PTypography from "../../atoms/PTypography";
import { MainPaneContainer } from "./style";
import { WorkProfile } from "../WorkProfile";
import { EduProfile } from "../EduProfile";
import { SkillProfile } from "../SkillProfile";

interface MainPaneProps {
  ref?: React.RefObject<HTMLDivElement>;
}

export const MainPane: React.FC<MainPaneProps> = ({ ref }) => {
  return (
    <MainPaneContainer>
      <div id="about" className="intro" ref={ref ?? undefined}>
        <PTypography className="greet">Hi, my name is</PTypography>
        <PTypography className="name">Sai Charan Latchireddi </PTypography>
        <PTypography className="slogan">
          My Superpower Is Creating Interactive Websites
        </PTypography>
        <PTypography className="description">
          a dedicated software engineer specializing in creating high-quality
          web applications and innovative digital experiences. With extensive
          experience in <span className="highlight">React</span>,{" "}
          <span className="highlight">Node.js</span>, and{" "}
          <span className="highlight">blockchain</span> technologies, I excel at
          developing user-centric and efficient solutions. Currently, I'm
          committed to building accessible and impactful products that enhance
          user engagement and satisfaction.
        </PTypography>
      </div>
      <div id="experience" className="work-profile">
        <WorkProfile />
      </div>
      <div id="education" className="edu-profile">
        <EduProfile />
      </div>
      <div id="skills" className="skill-profile">
        <SkillProfile />
      </div>
    </MainPaneContainer>
  );
};
