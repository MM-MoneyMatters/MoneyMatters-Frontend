import { render } from "@testing-library/react";
import React from "react";
import { Header } from "../components/Header";

it("renders the component", () => {
  expect(() => {
    render(<Header />);
  }).not.toThrow();
});
