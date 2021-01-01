import { render } from "@testing-library/react";
import React from "react";
import { Dashboard } from "../components/Dashboard";

it("renders the component", () => {
  expect(() => {
    render(<Dashboard />);
  }).not.toThrow();
});
