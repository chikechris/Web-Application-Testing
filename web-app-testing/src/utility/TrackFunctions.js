export const trackHit = (callBackStrike, callBackBall) => {
  if (hit === 1) {
    callBackStrike(0);
    callBackBall(0);
    return [callBackStrike(0), callBackBall(0)];
  }
};

export const trackStrike = (strike, callBackStrike, callBackBall) => {
  if (strike === 3) {
    //resets to
    callBackStrike(0);
    callBackBall(0);
    return [callBackStrike(0), callBackBall(0)];
  }
  strike += 1;
  return callBackStrike(strike);
};

export const trackBall = (ball, callBackBall, callBackStrike) => {
  if (ball === 4) {
    //resets to
    callBackStrike(0);
    callBackBall(0);
    return [callBackBall(0), callBackStrike(0)];
  }
  const newBall = ball + 1;
  return callBackBall(newBall);
};

export const trackFoul = () => {};
