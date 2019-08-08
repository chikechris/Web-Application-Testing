import React from "react";

import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";
import { render } from "@testing-library/react";

import "@testing-library/react/cleanup-after-each";

describe("<Display/>", () => {
  it("renders default state values", () => {
    let ball = 0;
    let strike = 0;
    const display = render(<Display balls={ball} strikes={strike} />);
    display.getByTestId("ballDisplay");
    display.getByTestId("strikeDisplay");
  });
});
