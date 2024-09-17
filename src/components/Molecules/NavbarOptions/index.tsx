import { useState, useEffect, useRef } from "react";
import { PButton } from "../../atoms/PButton";
import PTypography from "../../atoms/PTypography";
import { NavbarOptionsContainer } from "./style";

export const NavbarOptions = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#skills", label: "Education" },
    { href: "#projects", label: "Projects" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleSection = "";
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection) {
          setActiveSection(`#${mostVisibleSection}`);
        }
      },
      { threshold: [0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => {
      const element = document.querySelector(section.href);
      if (element) {
        sectionRefs.current[section.href] = element;
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = sectionRefs.current[section.href];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    event.preventDefault();
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
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
          <PTypography
            fontSize={16}
            style={{
              color: activeSection === section.href ? "#51C6B7" : "#fff",
            }}
          >
            {section.label}
          </PTypography>
        </a>
      ))}
      <PButton variant="contained">
        <PTypography>Resume</PTypography>
      </PButton>
    </NavbarOptionsContainer>
  );
};
