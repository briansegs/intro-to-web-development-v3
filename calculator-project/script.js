const btn = "btn";
const clearBtn = `${btn} clear`;
const backBtn = `${btn} back`;
const numBtn = `${btn} num`;
const operatorBtn = `${btn} op`;
const divideBtn = `${operatorBtn} divide`;
const multiplyBtn = `${operatorBtn} multiply`;
const minusBtn = `${operatorBtn} minus`;
const plusBtn = `${operatorBtn} plus`;
const zeroBtn = `${btn} zero`;
const equalsBtn = `${operatorBtn} equals`;

const buttonData = [
  {
    class: clearBtn,
    content: "C",
  },
  {
    class: backBtn,
    content: "‹",
  },
  {
    class: divideBtn,
    content: "÷",
  },
  {
    class: numBtn,
    content: "7",
  },
  {
    class: numBtn,
    content: "8",
  },
  {
    class: numBtn,
    content: "9",
  },
  {
    class: multiplyBtn,
    content: "x",
  },
  {
    class: numBtn,
    content: "4",
  },
  {
    class: numBtn,
    content: "5",
  },
  {
    class: numBtn,
    content: "6",
  },
  {
    class: minusBtn,
    content: "−",
  },
  {
    class: numBtn,
    content: "1",
  },
  {
    class: numBtn,
    content: "2",
  },
  {
    class: numBtn,
    content: "3",
  },
  {
    class: minusBtn,
    content: "+",
  },
  {
    class: zeroBtn,
    content: "0",
  },
  {
    class: equalsBtn,
    content: "=",
  },
];

const keyPad = document.querySelector(".key-pad");

for (const button of buttonData) {
  keyPad.innerHTML += `<button class="${button.class}">${button.content}</button>`;
}
