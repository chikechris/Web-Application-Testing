import React, { useState } from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import { trackBall, trackHit, trackStrike, trackFoul } from "./TrackFunctions";

describe("Testing utilities functions for the track handlers", () => {
  describe("Testing trackBall function", () => {
    it("Will increment react useState hook by one", () => {
      expect(handleBall(0, value => value + 1)).toBe(1);
    });
  });
});
