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

  if (DaysEl.cardFront.innerHTML !== String(days)) {
    setData(DaysEl, days);
  }

  if (HoursEl.cardFront.innerHTML !== String(hours)) {
    setData(HoursEl, hours);
  }

  if (MinutesEl.cardFront.innerHTML !== String(minutes)) {
    setData(MinutesEl, minutes);
  }

  if (SecondsEl.cardFront.innerHTML !== String(seconds)) {
    setData(SecondsEl, seconds);
  }
}


function setData(el, next){

  
  el.element.dataset.numAfter = el.element.dataset.numBefore;
  el.element.dataset.numBefore = next;
  el.cardFront.innerHTML = el.element.dataset.numBefore;
  el.cardBack.innerHTML =  el.element.dataset.numAfter;
  animate(el);
}

function animate(el){
  el.card.classList.add("flipped");
  setTimeout(()=> {
    el.card.classList.remove("flipped");
  }, 250);
}

setInterval(tick, 1000);
