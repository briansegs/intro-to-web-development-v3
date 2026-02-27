const btn = "btn2";
const clearBtn = `${btn} clear2`;
const backBtn = `${btn} back2`;
const numBtn = `${btn} num2`;
const operatorBtn = `${btn} op2`;
const divideBtn = `${operatorBtn} divide2`;
const multiplyBtn = `${operatorBtn} multiply2`;
const minusBtn = `${operatorBtn} minus2`;
const plusBtn = `${operatorBtn} plus2`;
const zeroBtn = `${btn} zero2`;
const equalsBtn = `${operatorBtn} equals2`;

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
    content: "X",
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

const cal2 = document.querySelector(".cal2");

for (const button of buttonData) {
  cal2.innerHTML += `<button class="${button.class}">${button.content}</button>`;
}
