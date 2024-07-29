import { LayoutContainer, NavbarContainer } from "./style";
import { NavbarOptions } from "../Molecules/NavbarOptions";
import { LeftPane } from "../Molecules/LeftPane";
import { RightPane } from "../Molecules/RightPane";
import { MainPane } from "../Molecules/MainPane";
import { useEffect, useRef } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (gradientRef.current) {
        const gradientSize = 600; // Size of the gradient div
        const halfSize = gradientSize / 2;
        const x = Math.max(
          halfSize,
          Math.min(event.clientX, window.innerWidth - halfSize)
        );
        const y = Math.max(
          halfSize,
          Math.min(event.clientY, window.innerHeight - halfSize)
        );

        gradientRef.current.style.left = `${x}px`;
        gradientRef.current.style.top = `${y}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <LayoutContainer>
      <div ref={gradientRef} className="gradient"></div>
      <NavbarContainer>
        <div className="logo">LSC</div>
        <div>
          <NavbarOptions />
        </div>
      </NavbarContainer>
      <div className="main-container">
        <LeftPane />
        <MainPane />
        <RightPane />
      </div>
    </LayoutContainer>
  );
};
