import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  /* background-color: ${(props) => props.theme.palette.secondary.dark}; */
  /* background: transparent; */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1023%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1024%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1440 0L758.55 0L1440 260.14z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M758.55 0L1440 260.14L1440 314.09L680.55 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M680.55 0L1440 314.09L1440 409.57L276.55999999999995 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M276.55999999999995 0L1440 409.57L1440 440.38L232.25999999999993 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L328.02 560L0 341.71000000000004z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 341.71000000000004L328.02 560L884.01 560L0 281.99z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 281.99L884.01 560L926.8199999999999 560L0 200.2z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 200.2L926.8199999999999 560L988.3 560L0 98.24z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1023'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1024'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  .logo {
    img {
      top: 1rem;
      left: 2rem;
      position: absolute;
      width: 50px;
      height: 50px;
    }
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
    /* width: calc(100% - 300px); */
    height: 100vh;
    /* margin-left: 150px; */
    width: 100%;
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
  padding: 1rem 2rem;

  background-color: ${(props) => props.theme.palette.secondary.dark};
  /* background-color: ${(props) => props.theme.palette.secondary.dark}; */
  /* background: linear-gradient(135deg, #0f172a 0%, #1c1c3a 100%); */
`;
