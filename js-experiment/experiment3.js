// Events and listeners

const alertButton = document.querySelector(".alert-button");

alertButton.addEventListener("click", function () {
  alert("I have been clicked!");
});

const paragraphInput = document.querySelector(".input");
const paragraph = document.querySelector(".paragraph");

paragraphInput.addEventListener("keyup", () => {
  paragraph.innerText = paragraphInput.value;
});

const box = document.querySelector(".box");
const boxInput = document.querySelector(".color-input");

boxInput.addEventListener("change", () => {
  box.style.backgroundColor = boxInput.value;
});

const buttonContainer = document.querySelector(".button-container");

buttonContainer.addEventListener("click", (event) => {
  if (event.target.localName === "button") {
    alert(`You clicked on a button ${event.target.innerText}`);
  }
});
