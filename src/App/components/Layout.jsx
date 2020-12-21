import React from "react";
import { Header } from "./Header";
import "../styles/Layout.scss";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {/*Side navigation goes here*/}
      <div className="main-content">{children}</div>
      {/*Footer goes here */}
    </div>
  );
};
