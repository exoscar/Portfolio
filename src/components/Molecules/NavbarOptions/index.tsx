import theme from "../../../Constants/theme";
import { PButton } from "../../atoms/PButton";
import PTypography from "../../atoms/PTypography";
import { NavbarOptionsContainer } from "./style";
import { Theme } from "@mui/material";

export const NavbarOptions: React.FC<{}> = () => {
  const sections = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <NavbarOptionsContainer>
      {sections.map((section, index) => (
        <a key={section.href} href={section.href}>
          <PTypography>{section.label}</PTypography>
        </a>
      ))}
      <PButton variant="contained">
        <PTypography>Resume</PTypography>
      </PButton>
    </NavbarOptionsContainer>
  );
};
