import React from "react";

import "@testing-library/jest-dom/extend-expect";
import DashBoard from "./DashBoard";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("DashBoard", () => {
  it("renders without crashing", () => {
    render(<DashBoard />);
  });
});
