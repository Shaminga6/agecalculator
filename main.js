const calculateBtn = document.getElementById("calculateBtn");
const emptyData = document.querySelectorAll(".emptyData");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const yearsData = document.querySelector(".yearsData");
const monthsData = document.querySelector(".monthsData");
const daysData = document.querySelector(".daysData");

const yearTitle = document.getElementById("yearTitle");
const yearError = document.getElementById("yearError");

const dayTitle = document.getElementById("dayTitle");
const dayError = document.getElementById("dayError");

const monthTitle = document.getElementById("monthTitle");
const monthError = document.getElementById("monthError");

const yearData = document.getElementById("yearData");
const monthData = document.getElementById("monthData");
const dayData = document.getElementById("dayData");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = new Intl.DateTimeFormat("en-US")
  .format(currentDate)
  .slice(2, 4);

let calculatedYears = 0;
let calculatedMonths = 0;
let calculatedDays = 0;

calculateBtn.addEventListener("click", () => {
  // ------- Year Logic ------
  if (year.value !== "" && year.value <= currentYear) {
    year.style.border = "1px solid #d1d0d0";
    yearTitle.style.color = "unset";
    yearError.style.display = "none";

    calculatedYears = currentYear - year.value;
  } else {
    year.style.border = "solid 1px red";
    yearTitle.style.color = "red";
    yearError.style.display = "unset";
  }

  // ------- Month Logic ------
  if (month.value > 0 && month.value <= 12) {
    month.style.border = "1px solid #d1d0d0";
    monthTitle.style.color = "unset";
    monthError.style.display = "none";

    let totalMonths = calculatedYears * 12;
    let unlivedMonths = 12 - (currentMonth + 1);

    calculatedMonths = totalMonths - unlivedMonths;
  } else {
    month.style.border = "solid 1px red";
    monthTitle.style.color = "red";
    monthError.style.display = "unset";
  }

  // ------- Day Logic ------
  if (day.value > 0 && day.value <= 31) {
    day.style.border = "1px solid #d1d0d0";
    dayTitle.style.color = "unset";
    dayError.style.display = "none";

    let totalDays = 365 * calculatedYears;
    let unlivedMonths = 12 - (currentMonth + 1);
    let unlivedDays = 30.42 * unlivedMonths;

    let unlivedDaysInCurrentWeek = 30.42 - currentDay;

    calculatedDays =
      totalDays -
      (Math.round(unlivedDays) - Math.round(unlivedDaysInCurrentWeek));
  } else {
    day.style.border = "solid 1px red";
    dayTitle.style.color = "red";
    dayError.style.display = "unset";
  }

  if (calculatedDays === 0 || calculatedMonths === 0 || calculatedYears === 0) {
  } else {
    emptyData.forEach((line) => {
      line.style.visibility = "hidden";
    });

    yearData.innerText = calculatedYears;
    dayData.innerText = calculatedDays;
    monthData.innerText = calculatedMonths;
  }
});
