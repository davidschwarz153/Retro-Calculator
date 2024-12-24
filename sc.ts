const resultElement = document.getElementById("result") as HTMLDivElement;
const buttons = document.querySelectorAll(".btn");

let currentInput = ""
let previousInput = ""
let operator = ""

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const key = button.getAttribute("data-key");

        if (!key) return
        if (key === "C") {
            clear();
        } else if (key === "=") {
            calculate();
        } else if (["+", "-", "*", "/"].includes(key)) {
            setOperator(key);
        } else {
            appendNumber(key);
        }
    });
});

function clear() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay("0");
}

function appendNumber(num: string) {
    if (num === "." && currentInput.includes(".")) return;
    currentInput += num;
    updateDisplay(currentInput);
}

function setOperator(op: string) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    if (currentInput === "" || previousInput === "" || operator === "") return;

    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    let result: number;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            return;
    }

    updateDisplay(result.toString());
    previousInput = result.toString();
    currentInput = "";
    operator = "";
}

function updateDisplay(value: string) {
    resultElement.innerText = value;
}
