const btn = "btn";
const clearBtn = `${btn} clear`;
const backBtn = `${btn} back`;
const numBtn = `${btn} num`;
const operatorBtn = `${btn} op`;
const divideBtn = `${operatorBtn} divide`;
const multiplyBtn = `${operatorBtn} multiply`;
const minusBtn = `${operatorBtn} minus`;
const plusBtn = `${operatorBtn} plus`;
const zeroBtn = `${btn} num zero`;
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
    class: plusBtn,
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

function clearCalcInput() {
  calcInput.value = "";
}

// populate buttons in dom
const keyPad = document.querySelector(".key-pad");

for (const button of buttonData) {
  keyPad.innerHTML += `<button class="${button.class}">${button.content}</button>`;
}

let inputs = [];

// Step back
const backKey = document.querySelector(".back");

backKey.addEventListener("click", () => {
  if (inputs.length === 1) {
    calcInput = "";
  } else {
    calcInput.value = calcInput.value.slice(0, -1);
  }
});

// Add numbers to Input
const numberKeys = document.querySelectorAll(".num");
const calcInput = document.querySelector(".calculator-input");

for (const key of numberKeys) {
  key.addEventListener("click", () => {
    calcInput.value += key.innerText;
  });
}

// Clear input
const clearKey = document.querySelector(".clear");

clearKey.addEventListener("click", () => {
  clearCalcInput();
  inputs = [];
});

// Operations
const plusKey = document.querySelector(".plus");
const minusKey = document.querySelector(".minus");
const multiplyKey = document.querySelector(".multiply");
const divideKey = document.querySelector(".divide");

const calcKeys = [
  {
    btn: plusKey,
    operator: "+",
  },
  {
    btn: minusKey,
    operator: "−",
  },
  {
    btn: multiplyKey,
    operator: "x",
  },
  {
    btn: divideKey,
    operator: "÷",
  },
];

for (const key of calcKeys) {
  key.btn.addEventListener("click", () => {
    inputs.push(calcInput.value);
    inputs.push(key.operator);

    clearCalcInput();
  });
}

// Equals
const equalsKey = document.querySelector(".equals");

const errorMsg = "ERROR - click clear";

equalsKey.addEventListener("click", () => {
  if (inputs.length != 2) {
    calcInput.value = errorMsg;
  } else {
    inputs.push(calcInput.value);

    [a, operation, b] = inputs;
    const num1 = Number(a);
    const num2 = Number(b);

    const operations = {
      "+": (num1, num2) => num1 + num2,
      "−": (num1, num2) => num1 - num2,
      x: (num1, num2) => num1 * num2,
      "÷": (num1, num2) => num1 / num2,
    };

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      calcInput.value = errorMsg;
    } else {
      calcInput.value = operations[operation](num1, num2);
    }
  }
});
