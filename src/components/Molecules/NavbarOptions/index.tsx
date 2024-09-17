import { useState, useEffect, useRef } from "react";
import { PButton } from "../../atoms/PButton";
import PTypography from "../../atoms/PTypography";
import { NavbarOptionsContainer } from "./style";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import { Close } from "@mui/icons-material";

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
        // @ts-ignore
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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    event.preventDefault();
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: !isMobile ? "center" : "start",
      });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavbarOptionsContainer>
      {!isMobile ? (
        <>
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
          <PButton
            variant="contained"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1ctnQl5stb_h8BEYbKKl4CufGPmnnQ5jj/view?usp=sharing",
                "_blank"
              )
            }
          >
            <PTypography>Resume</PTypography>
          </PButton>
        </>
      ) : (
        <>
          <PButton
            variant="contained"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1ctnQl5stb_h8BEYbKKl4CufGPmnnQ5jj/view?usp=sharing",
                "_blank"
              )
            }
          >
            <PTypography
              sx={{
                padding: "0rem",
                lineHeight: "1",
              }}
            >
              Resume
            </PTypography>
          </PButton>
          <MenuIcon
            sx={{
              color: "#fff",
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <div className="menu-listt">
              <Close
                sx={{
                  color: "#fff",
                  position: "absolute",
                  top: 30,
                  right: 30,
                  cursor: "pointer",
                }}
                onClick={() => setIsMenuOpen(false)}
              />
              {sections.map((section) => (
                <>
                  <a
                    key={section.href}
                    href={section.href}
                    onClick={(event) => {
                      handleScroll(event, section.href);
                      setIsMenuOpen(false);
                    }}
                  >
                    <PTypography
                      fontSize={16}
                      style={{
                        color:
                          activeSection === section.href ? "#51C6B7" : "#fff",
                      }}
                    >
                      {section.label}
                    </PTypography>
                  </a>
                  <div className="divi"></div>
                </>
              ))}
            </div>
          )}
        </>
      )}
    </NavbarOptionsContainer>
  );
};
