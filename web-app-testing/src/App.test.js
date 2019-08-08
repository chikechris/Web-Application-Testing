import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { isTSAnyKeyword } from "@babel/types";

describe("App", () => {
  it("span mounts to dom", () => {
    const appDiv = rtl.render(<App />);
    const span = appDiv.queryByText(/Web App Testing Project/i);
    console.log(span);
  });
});
