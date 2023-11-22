let isRunning = true;

while (isRunning) {
  let rand = Math.floor(Math.random() * 10 + 1);
  if (rand == 9) {
    console.log("Winner Winner Chicken Dinne....");
    isRunning = false;
  } else {
    console.log("You Got" + rand);
  }
}
