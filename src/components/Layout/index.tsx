import { LayoutContainer, NavbarContainer } from "./style";
import { NavbarOptions } from "../Molecules/NavbarOptions";
import { LeftPane } from "../Molecules/LeftPane";
import { RightPane } from "../Molecules/RightPane";
import { MainPane } from "../Molecules/MainPane";
import { useEffect, useRef, useState } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <NavbarContainer>
        <div className="logo">LSC</div>
        <div>
          <NavbarOptions />
        </div>
      </NavbarContainer>
      <div className="main-container">
        <div className="left-pane">
          <LeftPane />
        </div>
        <div className="main-pane">
          <MainPane />
        </div>
        <div className="rightpane">
          <RightPane />
        </div>
      </div>
    </LayoutContainer>
  );
};
