import styled from "@emotion/styled";
import { TimelineContent } from "@mui/lab";

export const EduProfileWrapper = styled.div`
  .title {
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
    font-size: 2rem;
    font-weight: 600;
  }
  .year {
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
    font-size: 1.25rem;
    font-weight: 500;
    /* text-shadow: 2px 2px 3px
      ${(props) => props.theme.palette.myCustomColor.text.secondary};  */
  }
  .lefty {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
  }
  .timeline-container {
    padding-top: 2rem;
    transform: translateX(-10rem);
  }
`;

export const TimeLineItemContentContainer = styled.div`
  height: fit-content;
  padding: 1rem;
  width: max-content;
  background-color: ${(props) => props.theme.palette.myCustomColor.greys.dark};
  color: ${(props) => props.theme.palette.myCustomColor.text.main};

  .edu-title {
    font-size: 1rem;
    font-weight: 600;
  }
  .institute-title {
    font-size: 0.875rem;
    font-weight: 500;
  }
  .Score {
    font-size: 0.75rem;
    font-weight: 500;
  }

  :hover {
    box-shadow: 3px 3px 5px
      ${(props) => props.theme.palette.myCustomColor.text.secondary};
  }
`;
