import React from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import "../styles/Layout.scss";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {/*Side navigation goes here*/}
      <div className="main-content">{children}</div>
      <Navigation />
    </div>
  );
};
