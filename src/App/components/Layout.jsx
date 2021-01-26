import React from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import "../styles/Layout.scss";
import { Nav } from "react-bootstrap";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Navigation />
      <div className="main-content">{children}</div>
      <Navigation />
    </div>
  );
};
