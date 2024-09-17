import styled from "@emotion/styled";

export const ProjectWrapepr = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 10rem);
  gap: 1rem;
  .title {
    font-size: 2rem;
    color: ${(props) => props.theme.palette.myCustomColor.text.secondary};
    font-weight: 600;
    font-family: "Inter", sans-serif;
  }
  .projects-list {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const ProjectCard = styled.div`
  backdrop-filter: blur(100);
  background-color: rgba(15, 23, 42, 0.5);
  width: 30%;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .time {
      color: ${(props) => props.theme.palette.myCustomColor.greys.light};
      font-size: 0.875rem;
    }
  }
  .project-title {
    font-size: 1.5rem;
    color: ${(props) => props.theme.palette.myCustomColor.text.main};
  }

  .desc {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .description {
    color: ${(props) => props.theme.palette.myCustomColor.greys.lighther};
    font-size: 0.875rem;
  }
  img {
    width: 100%;
    border-radius: 10px;
  }
  .skills {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .indi-skill {
    width: fit-content;
    padding: 0.25rem 0.25rem;

    color: ${(props) => props.theme.palette.myCustomColor.text.main};
    background-color: #1f4c83;

    border-radius: 5px;
    box-shadow: 0 0px 10px rgb(31, 76, 131, 0.8);
  }
  .skill-text {
    font-size: 0.75rem;
    font-weight: 600;
  }
  :hover {
    background-color: ${(props) => props.theme.palette.secondary.dark};
    box-shadow: 0 0 10px rgba(0, 137, 123, 0.3);
    img {
      transform: scale(1.05);
    }
  }
`;
