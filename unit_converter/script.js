// Select Elements
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

// Function to convert unities
function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if (fromValue === toValue) {
        outputElement.value = fromElement.value;
        messageElement.textContent = "";
        return;
    }

    // Convert the input to meters (makes the others easier to accept)
    let meters;
    switch (fromValue) {
        case "m":
            meters = inputElement.value;
            break;
        case "km":
            meters = inputElement.value * 1000;
            break;
        case "cm":
            meters = inputElement.value / 100;
            break;
        case "mm":
            meters = inputElement.value / 1000;
            break;
    }

    // Convert meters to output unit:
    let result;
    switch (toValue) {
        case "m":
            result = meters;
            break;
        case "km":
            result = meters / 1000;
            break;
        case "cm":
            result = meters * 100;
            break;
        case "mm":
            result = meters * 1000;
            break;
    }

    // Display result on input
    outputElement.value = result;

    // Display result in message:
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;
    const message = `${inputElement.value} ${fromLabel} are equivalent to ${result} ${toLabel}`;
    messageElement.textContent = message;

    console.log(fromValue, toValue);
    console.log(meters, result);
    console.log(fromLabel, toLabel);

    return;
}

convertButton.addEventListener("click", convert);
