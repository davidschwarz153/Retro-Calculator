const display = document.getElementById("display") as HTMLInputElement | null;
document.getElementById("equals")?.addEventListener("click", calculate);
document.getElementById("clear")?.addEventListener("click", clearDisplay);
function appendToDisplay(input: string): void {
    if (display) {
        display.value += input;
    }
}
function clearDisplay(): void {
    if (display) {
        display.value = "";
    }
}
function calculate(): void {
    if (display) {
        try {
            display.value = eval(display.value).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
}
document.getElementById("keys")?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const input = target.getAttribute("data-input");

    if (input) {
        appendToDisplay(input);
    }
});


