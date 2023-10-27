export const updateDisplayedTimeLeft = (timLeftInMs: number) => {
  const timerAmount = document.getElementById("timer-amount");
  timerAmount!.innerText = Math.floor(timLeftInMs / 1000).toString();
};

export const updateDisplayedScore = (newScore: number) => {
  const scoreAmount = document.getElementById("score-amount");
  scoreAmount!.innerText = newScore.toString();
};

export const toggleScoreTime = (areShown: boolean) => {
  const score = document.querySelector(".score")!;
  const timer = document.querySelector(".timer")!;
  if (areShown) {
    score.classList.remove("hidden");
    timer.classList.remove("hidden");
  } else {
    score.classList.add("hidden");
    timer.classList.add("hidden");
  }
};
