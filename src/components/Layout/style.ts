import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow-x: hidden;
  /* background-color: ${(props) => props.theme.palette.secondary.dark}; */
  background: transparent;
  .logo {
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
    font-size: 2rem;
  }
  .main-container {
    z-index: 2;
    top: 5rem;
    height: calc(100vh - 10rem);
    display: flex;
  }
  .left-pane,
  .right-pane,
  .main-pane {
    z-index: 2;
  }

  .left-pane,
  .right-pane {
    width: 150px;
    height: 100vh;
    position: fixed;
  }
  .main-pane {
    width: calc(100% - 300px);
    height: 100vh;
    margin-left: 150px;
  }
`;

export const NavbarContainer = styled.div`
  z-index: 5;
  position: fixed;
  width: calc(100% - 4rem);
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  /* background-color: ${(props) => props.theme.palette.secondary.dark}; */
  background: linear-gradient(135deg, #0f172a 0%, #1c1c3a 100%);
`;
