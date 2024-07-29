import styled from "@emotion/styled";

export const MainPaneContainer = styled.div`
  width: 100%;
  z-index: 2;
  .intro {
    padding-top: 5rem;
    padding-left: 5rem;
    display: flex;
    justify-content: center;

    flex-direction: column;
    .greet {
      color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
      font-family: "Inter", sans-serif;
      font-size: 1rem;
    }
    .name {
      color: ${(props) => props.theme.palette.myCustomColor.text.main};
      font-family: "Inter", sans-serif;
      font-size: 4rem;
      font-weight: 700;
    }
    .slogan {
      color: ${(props) => props.theme.palette.myCustomColor.text.dark};
      font-family: "Inter", sans-serif;
      font-size: 2.75rem;
    }
    .description {
      color: ${(props) => props.theme.palette.myCustomColor.text.dark};
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      padding-top: 1rem;
      width: 50%;
      .highlight {
        color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
        font-weight: 700;
      }
    }
  }
`;
