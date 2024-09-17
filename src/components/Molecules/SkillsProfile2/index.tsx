import { useState } from "react";
import { SkillsProfile2Wrapper, SkillIconWrapper } from "./style";
import PTypography from "../../atoms/PTypography";

const SkillIcon: React.FC<{
  icon?: string;
  skillName: string;
}> = ({ icon, skillName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <SkillIconWrapper
      className="skill-icon"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && (
        <i className={`${icon} ${isHovered ? "colored" : "colored"}`}></i>
      )}
      <PTypography className="skill-name">{skillName}</PTypography>
    </SkillIconWrapper>
  );
};

export const SkillsPro = () => {
  return (
    <SkillsProfile2Wrapper>
      <PTypography className="title">Skills</PTypography>
      <div className="grp">
        <div className="sub-grp">
          <PTypography className="sub-title">Development</PTypography>
          <div className="skill-list">
            <SkillIcon icon="devicon-react-original " skillName="React" />
            <SkillIcon
              icon="devicon-javascript-plain "
              skillName="JavaScript"
            />
            <SkillIcon
              icon="devicon-typescript-plain "
              skillName="TypeScript"
            />
            <SkillIcon icon="devicon-html5-plain " skillName="HTML" />
            <SkillIcon icon="devicon-css3-plain " skillName="CSS" />
            <SkillIcon
              icon="devicon-nodejs-plain-wordmark "
              skillName="Node.js"
            />
            <SkillIcon icon="devicon-express-original " skillName="Express" />
          </div>
        </div>

        <div className="sub-grp">
          <PTypography className="sub-title">Database</PTypography>
          <div className="skill-list">
            <SkillIcon
              icon="devicon-postgresql-plain "
              skillName="PostgreSQL"
            />
            <SkillIcon icon="devicon-mysql-plain " skillName="MySQL" />
            <SkillIcon icon="devicon-mongodb-plain " skillName="MongoDB" />
          </div>
        </div>

        <div className="sub-grp">
          <PTypography className="sub-title">Programming</PTypography>
          <div className="skill-list">
            <SkillIcon icon="devicon-python-plain " skillName="Python" />
            <SkillIcon icon="devicon-java-plain " skillName="Java" />
            <SkillIcon icon="devicon-cplusplus-plain " skillName="C++" />
            <SkillIcon icon="devicon-c-plain " skillName="C" />
          </div>
        </div>
      </div>
    </SkillsProfile2Wrapper>
  );
};
