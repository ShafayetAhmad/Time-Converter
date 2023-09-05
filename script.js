function convertTime() {
  const fromTimeZone = document.getElementById("fromTimeZone").value;
  const toTimeZone = document.getElementById("toTimeZone").value;
  const timeInput = document.getElementById("timeInput").value;

  const fromTime = new Date(`1970-01-01T${timeInput}Z`);
  const toTime = new Date(
    fromTime.toLocaleString("en-US", { timeZone: toTimeZone })
  );

  const resultElement = document.getElementById("result");
  resultElement.textContent = `Converted Time: ${toTime.toLocaleTimeString()}`;
}

function updateTime() {
  const currentTimeElement = document.getElementById("current_time");
  const currentTime = new Date().toLocaleTimeString();
  currentTimeElement.innerHTML = currentTime;
}

setInterval(updateTime, 1000);

updateTime();