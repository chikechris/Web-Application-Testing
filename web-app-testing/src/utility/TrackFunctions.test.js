import React, { useState } from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import { trackBall, trackHit, trackStrike, trackFoul } from "./TrackFunctions";

describe("Testing utilities functions for cthe track handlers", () => {
  describe("Testing handleBall function", () => {
    it("Will increment react useState hook by one", () => {
      expect(trackBall(0, value => value, value => value)).toBe(1);
    });
  });

  describe("Testing the trackStrike function", () => {
    it("Will increment react useState hook by one", () => {
      expect(trackStrike(0, value => value)).toBe(1);
    });
    it("Will reset handleBall and handleStrike hooks if maximum is reached", () => {
      const ball = 3;
      const strike = 3;
      expect();
    });
  });
});
