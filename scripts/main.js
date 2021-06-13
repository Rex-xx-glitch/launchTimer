import { getEl, getDays, getHours, getMinutes, getSeconds } from "./helper.js";

let launchTime = 14 * 24 * 60 * 60; //in seconds
const DaysEl = getEl("days");
const HoursEl = getEl("hours");
const MinutesEl = getEl("minutes");
const SecondsEl = getEl("seconds");

function tick() {
  launchTime -= 1;

  const days = getDays(launchTime);
  const hours = getHours(launchTime);
  const minutes = getMinutes(launchTime);
  const seconds = getSeconds(launchTime);

  if (DaysEl.innerHTML !== String(days)) {
    DaysEl.innerHTML = days;
    //animate(DaysEl);
  }

  if (HoursEl.innerHTML !== String(hours)) {
    HoursEl.innerHTML = hours;
    //animate(HoursEl);
  }

  if (MinutesEl.innerHTML !== String(minutes)) {
    MinutesEl.innerHTML = minutes;
    //animate(MinutesEl);
  }

  if (SecondsEl.innerHTML !== String(seconds)) {
    SecondsEl.innerHTML = seconds;
    //animate(SecondsEl);
  }
}

setInterval(tick, 1000);
