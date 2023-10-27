export const updateDisplayedTimeLeft = (timLeftInMs: number) => {
  const timerAmount = document.getElementById("timer-amount");
  timerAmount!.innerText = Math.floor(timLeftInMs / 1000).toString();
};

export const updateDisplayedScore = (newScore: number) => {
  const scoreAmount = document.getElementById("score-amount");
  scoreAmount!.innerText = newScore.toString();
};
