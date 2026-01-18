const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const inputGroup = document.querySelector(".input-group");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showError() {
  inputGroup.classList.add("error");
  errorMessage.style.display = "block";
}

function hideError() {
  inputGroup.classList.remove("error");
  errorMessage.style.display = "none";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    showError();
    return;
  }

  if (validateEmail(email)) {
    hideError();
    console.log("Send email : ", email);
    emailInput.value = "";
  } else {
    showError();
  }
});

emailInput.addEventListener("input", function () {
  if (inputGroup.classList.contains("error")) {
    hideError();
  }
});

emailInput.addEventListener("blur", function () {
  const email = emailInput.value.trim();

  if (email && !validateEmail(email)) {
    showError();
  }
});
