const apiLink = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const button = document.querySelector(".dice-container");

button.addEventListener("click", getAdvice);

async function getAdvice() {
  let response = await fetch(apiLink);
  let data = await response.json();

  let id = data.slip.id;
  let advice = data.slip.advice;

  adviceId.classList.add("pre-animation");
  adviceId.innerHTML = `ADVICE #${id}`;
  setTimeout(function () {
    adviceId.classList.remove("pre-animation");
  }, 250);

  adviceText.classList.add("pre-animation-main");
  adviceText.innerHTML = advice;
  setTimeout(function () {
    adviceText.classList.remove("pre-animation-main");
  }, 250);
}
