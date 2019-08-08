export const trackHit = () => {};

export const trackStrike = (strike, callBackStrike, callBackBall) => {
  if (strike === 3) {
    callBackStrike(0);
    callBackBall(0);
    return [callBackStrike(0), callBackBall(0)];
  }
  strike += 1;
  return callBackStrike(strike);
};

export const trackBall = (ball, callBackBall, callBackStrike) => {
  if (ball === 4) {
    callBackStrike(0);
    callBackBall(0);
    return [callBackBall(0), callBackStrike(0)];
  }
  const newBall = ball + 1;
  return callBackBall(newBall);
};

export const trackFoul = () => {};
