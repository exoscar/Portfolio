import PTypography from "../../atoms/PTypography";
import { RightPaneContainer } from "./style";

export const RightPane: React.FC<{}> = ({}) => {
  return (
    <RightPaneContainer>
      <div className="email">
        <PTypography className="email-text" fontSize={14}>
          imcharan1012@gmail.com
        </PTypography>
        <div className="vertical-line"></div>
      </div>
    </RightPaneContainer>
  );
};
