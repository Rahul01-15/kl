// script.js
let form1 = document.getElementsByClassName("form-1")[0];
let form2 = document.getElementsByClassName("form-2")[0];
let form3 = document.getElementsByClassName("form-3")[0];

form2.style.display = "none";
form3.style.display = "none";
function showForm1() {
  form1.style.display = "block";
  form2.style.display = "none";
  form3.style.display = "none";
}
function showForm2() {
  form1.style.display = "none";
  form2.style.display = "block";
  form3.style.display = "none";
}
function showForm3() {
    document.getElementById("summaryName").innerText =
    document.getElementById("name").value;
  document.getElementById("summaryEmail").innerText =
    document.getElementById("email").value;
  document.getElementById("summaryDOB").innerText =
    document.getElementById("dob").value;
  document.getElementById("summaryPhone").innerText =
    document.getElementById("tel").value;

  form1.style.display = "none";
  form2.style.display = "none";
  form3.style.display = "block";
}
function success() {
  alert("Thanks for submitting the form");
}
function validateForm(form) {
  let isValid = true;
  const inputs = form.getElementsByTagName("input");

  for (let input of inputs) {
    if (!input.checkValidity()) {
      isValid = false;
      input.reportValidity(); // Show validation error message
      break;
    }
  }

  return isValid;
}

window.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form");
  let button = document.getElementById("submit");
  let status = document.getElementById("status");

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
  });
});
document.getElementById("btn1").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  if (validateForm(form1)) {
    showForm2();
  }
});
document.getElementById("btn2").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  if (validateForm(form2)) {
    showForm3();
  }
});
document.getElementById("btn3").addEventListener("click", function (event) {
  // Prevent form submission{
  success();
  showForm1();
});
