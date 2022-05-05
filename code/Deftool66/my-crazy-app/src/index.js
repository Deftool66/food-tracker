import convertUnix from "./convert_unix";

const dateInput = document.querySelector("#date-input");
const unixInput = document.querySelector("#unix-input");
const form = document.querySelector("#form");
const btn = document.querySelector("#btn");

function clearInputs() {
  console.log("called");
  unixInput.setAttribute("value", "");
  dateInput.setAttribute("value", "");
  dateInput.setAttribute("value", "");
}

form.addEventListener("reset", (event) => {
  clearInputs();
  btn.setAttribute("value", "Submit");
  btn.setAttribute("type", "Submit");
  btn.setAttribute("class", "submit-btn");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const dateValue = dateInput.value;
  const unixValue = parseInt(unixInput.value);

  if (unixValue && !isNaN(unixValue)) {
    dateInput.setAttribute("value", convertUnix(unixValue));
  } else if (dateValue) {
    const timeStamp = new Date(dateValue).getTime();
    unixInput.setAttribute("value", timeStamp);
  }

  btn.setAttribute("value", "Reset");
  btn.setAttribute("type", "Reset");
  btn.setAttribute("class", "reset-btn");
});
