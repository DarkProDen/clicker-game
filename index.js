let points = 0;
let pointsPerTick = 1;
let upgradePrice = 50;
let upgradeBtn = document.getElementById("upgrade-ppt-btn");
let timeInterval = 1000;

function keyPressHandler(event) {
  if (event.code === "Space") {
    increasePoints();
  }
}

function increasePoints() {
  points += pointsPerTick;
  document.getElementById("points").innerText = points;
}

function upgradePointsPerTick() {
  if (points >= upgradePrice) {
    points -= upgradePrice;
    upgradePrice *= 2;
    ++pointsPerTick;
    document.getElementById("upgrade-ppt-price").innerText = upgradePrice;
    document.getElementById("points-per-second").innerText =
      (1000 * pointsPerTick) / timeInterval;
    document.getElementById("points").innerText = points;
  }
}

document.onkeypress = keyPressHandler;
upgradeBtn.onclick = upgradePointsPerTick;
let interval = setInterval(increasePoints, 1000);
