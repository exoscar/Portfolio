import { PButton } from "../../atoms/PButton";
import PTypography from "../../atoms/PTypography";
import { NavbarOptionsContainer } from "./style";

export const NavbarOptions: React.FC<{}> = () => {
  const sections = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <NavbarOptionsContainer>
      {sections.map((section) => (
        <a
          key={section.href}
          href={section.href}
          onClick={(event) => handleScroll(event, section.href)}
        >
          <PTypography>{section.label}</PTypography>
        </a>
      ))}
      <PButton variant="contained">
        <PTypography>Resume</PTypography>
      </PButton>
    </NavbarOptionsContainer>
  );
};
