import styled from "@emotion/styled";

export const MainPaneContainer = styled.div`
  width: 100%;
  z-index: 2;
  /* background-color: ${(props) => props.theme.palette.secondary.dark}; */
  background: transparent;
  background-image: url("../assets/portfolio.jpg");
  background-size: cover;

  @keyframes slideInFromBottom {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .slide-in {
    animation: slideInFromBottom 0.5s ease-out forwards;
  }

  .intro {
    height: 100vh;
    padding-left: 5rem;
    display: flex;
    justify-content: center;
    /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1023%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1024%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1440 0L758.55 0L1440 260.14z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M758.55 0L1440 260.14L1440 314.09L680.55 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M680.55 0L1440 314.09L1440 409.57L276.55999999999995 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M276.55999999999995 0L1440 409.57L1440 440.38L232.25999999999993 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L328.02 560L0 341.71000000000004z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 341.71000000000004L328.02 560L884.01 560L0 281.99z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 281.99L884.01 560L926.8199999999999 560L0 200.2z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 200.2L926.8199999999999 560L988.3 560L0 98.24z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1023'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1024'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
    background-size: cover; */

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
      line-height: 1;
      font-weight: 700;
    }
    .slogan {
      color: ${(props) => props.theme.palette.myCustomColor.text.main};
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

    a {
      text-decoration: none;
      color: ${(props) => props.theme.palette.myCustomColor.text.main};
    }
    a:hover {
      color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
    }
    .icons {
      padding-top: 2rem;
      display: flex;
      align-items: center;

      gap: 1rem;
    }
  }

  .work-profile {
    padding: 5rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .edu-skills {
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    width: 100%;
    padding: 5rem;
    flex-wrap: wrap;
    box-sizing: border-box;
  }

  .edu-profile {
    width: calc(50% - 7.5rem);
    padding: 2.5rem 2.5rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    backdrop-filter: blur(100);
    background-color: rgba(15, 23, 42, 0.5);
    border-radius: 10px;
  }
  .skill-profile {
    width: calc(50% - 7.5rem);
    padding: 2.5rem 2.5rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    backdrop-filter: blur(100);
    background-color: rgba(15, 23, 42, 0.5);
    border-radius: 10px;
  }

  .project-profile {
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    width: 100%;
    padding: 5rem;
    flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    .intro {
      height: 50vh;
      .name {
        font-size: 4rem;
      }
      .slogan {
        font-size: 2.5rem;
      }
      .description {
        width: 80%;
      }
    }
    .edu-skills {
      flex-direction: column;
    }
    .edu-profile {
      width: calc(100% - 5rem);
    }
    .skill-profile {
      width: calc(100% - 5rem);
    }
  }

  @media (max-width: 768px) {
    .intro {
      height: 50vh;
      gap: 0.5rem;
      .name {
        font-size: 3rem;
      }
      .slogan {
        font-size: 1.75rem;
      }
      .description {
        width: 80%;
      }
    }
    .edu-profile,
    .skill-profile {
      width: calc(100% - 5rem);
    }

    .project-profile {
      padding: 1rem;
    }
  }

  @media (max-width: 450px) {
    .intro {
      height: 100vh;
      gap: 0.5rem;
      padding-left: 2.5rem;
      .name {
        font-size: 2.5rem;
      }
      .slogan {
        font-size: 1.5rem;
      }
      .description {
        width: 80%;
      }
    }

    .work-profile {
      padding: 1rem;
    }

    .edu-skills {
      padding: 1rem;
    }
    .edu-profile,
    .skill-profile {
      width: calc(100%-2rem);
    }
  }
`;
