import PTypography from "../../atoms/PTypography";
import { SkillProfileContainer } from "./style";

export const SkillProfile: React.FC = () => {
  return (
    <SkillProfileContainer>
      <PTypography className="skill-title">Skills</PTypography>
      <div className="domain-container">
        <div className="domain">
          
          <PTypography className="domain-title">Frontend</PTypography>
          <div className="skills">
            <PTypography className="skill">React</PTypography>
            <PTypography className="skill">TypeScript</PTypography>
            <PTypography className="skill">JavaScript</PTypography>
            <PTypography className="skill">HTML</PTypography>
            <PTypography className="skill">CSS</PTypography>
          </div>
        </div>
        <div className="domain">
          <PTypography className="domain-title">Backend</PTypography>
          <div className="skills">
            <PTypography className="skill">Node.js</PTypography>
            <PTypography className="skill">Express</PTypography>
            <PTypography className="skill">MongoDB</PTypography>
            <PTypography className="skill">PostgreSQL</PTypography>
            <PTypography className="skill">MySQL</PTypography>
            <PTypography className="skill">RESTful APIs</PTypography>
          </div>
        </div>
        <div className="domain">
          <PTypography className="domain-title">Blockchain</PTypography>
          <div className="skills">
            <PTypography className="skill">Solidity</PTypography>
          </div>
        </div>
        <div className="domain">
          <PTypography className="domain-title">Others</PTypography>
          <div className="skills">
            <PTypography className="skill">Git</PTypography>
          </div>
        </div>
        <div className="domain">
          <PTypography className="domain-title">
            Programming Languages
          </PTypography>
          <div className="skills">
            <PTypography className="skill">JavaScript</PTypography>
            <PTypography className="skill">TypeScript</PTypography>
            <PTypography className="skill">Python</PTypography>
            <PTypography className="skill">Solidity</PTypography>
            <PTypography className="skill">Java</PTypography>
            <PTypography className="skill">C++</PTypography>
            <PTypography className="skill">C</PTypography>
          </div>
        </div>
      </div>
    </SkillProfileContainer>
  );
};
