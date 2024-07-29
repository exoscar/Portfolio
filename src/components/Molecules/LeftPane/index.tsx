import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LeftPaneContainer } from "./style";
export const LeftPane: React.FC<{}> = ({}) => {
  return (
    <LeftPaneContainer>
      <div style={{ height: "10px" }}></div>
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
        <div className="vertical-line"></div>
      </div>
    </LeftPaneContainer>
  );
};
