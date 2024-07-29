import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;

  background-color: ${(props) => props.theme.palette.secondary.dark};
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

  .gradient {
    z-index: 1;
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(
      600px at 50% 50%,
      #111f43,
      ${(props) => props.theme.palette.secondary.dark} 50%
    );
    pointer-events: none; /* Ensure the gradient doesn't interfere with cursor events */
    transform: translate(-50%, -50%); /* Center the gradient on the cursor */
  }
`;

export const NavbarContainer = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;
