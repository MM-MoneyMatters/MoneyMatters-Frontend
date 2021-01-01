import { render } from "@testing-library/react";
import React from "react";
import { Navigation } from "../components/Navigation";

it("renders the component", () => {
    expect(() => {
        render(<Navigation />);
    }).not.toThrow();
});