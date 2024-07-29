import styled from "@emotion/styled";

export const LeftPaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  height: 100%;
  z-index: 2;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.palette.myCustomColor.text.main};
  }
  a:hover {
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
  }
  .icons {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 150px;
    gap: 1rem;

    .vertical-line {
      height: 6rem;
      width: 0.1rem;
      background-color: ${(props) =>
        props.theme.palette.myCustomColor.text.main};
    }
  }
`;
