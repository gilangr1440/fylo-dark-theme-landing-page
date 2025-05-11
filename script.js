const submitButton = document.querySelector(".card__email-submit");
const emailInput = document.querySelector(".card__email-input");
const errorMessage = document.querySelector(".card__error-text");
const regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

submitButton.addEventListener("click", () => {
  if (regex.test(emailInput.value)) {
    location.reload();
  } else {
    errorMessage.classList.add("show");
  }
});
