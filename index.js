let points = 0;
let pointsPerClick = 1;

function keyPressHandler(event) {
  if (event.code === "Space") {
    increasePoints();
  }
}

function increasePoints() {
  //points = points + pointsPerClick;
  points += pointsPerClick;

  // let element = document.getElementById("points");
  // element.innerText = points;
  document.getElementById("points").innerText = points;
}

document.addEventListener("keypress", keyPressHandler);
setInterval(increasePoints, 1000);
