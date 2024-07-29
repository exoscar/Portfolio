import PTypography from "../../atoms/PTypography";
import { MainPaneContainer } from "./style";

export const MainPane = () => {
  return (
    <MainPaneContainer>
      <div className="intro">
        <PTypography className="greet">Hi, my name is</PTypography>
        <PTypography className="name">Latchireddi Sai Charan</PTypography>
        <PTypography className="slogan">
          Transforming ideas into dynamic web experiences.
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
    </MainPaneContainer>
  );
};
