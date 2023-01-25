function tipPercent(quality) {
    if (quality == "terrible") {
        return 0;
    } else if (quality == "good") {
        return 0.1;
    } else if (quality == "great") {
        return 0.2;
    } else {
        return;
    }
}
function applyTip(cost, serviceQuality) {
    return cost + cost*tipPercent(serviceQuality);
}
function splitCost(partySize, cost, serviceQuality) {
    return applyTip(cost, serviceQuality) / partySize;
}


const costInput = document.getElementById("cost");
const partySizeInput = document.getElementById("party-size");
const serviceQualityInput = document.getElementById("service-quality");
const output = document.getElementById("output");
const tipPercentOutput = document.getElementById("tip-percent");

partySizeInput.value = 1;
costInput.value = 0;

function updateDisplay() {
    const quality = serviceQualityInput.value;
    const percent = tipPercent(quality)*100; // convert from 0-1 percentage to 0-100 percentage
    tipPercentOutput.textContent = percent + "%";

    const partySize = parseInt(partySizeInput.value, 10);
    const cost = parseFloat(costInput.value);

    const total = splitCost(partySize, cost, quality);
    output.textContent = total.toFixed(2); // converts 'total' to a string with 2 decimal places
}
updateDisplay();
serviceQualityInput.addEventListener("change", _ => { updateDisplay(); });
partySizeInput.addEventListener("change", _ => {
    const value = parseInt(partySizeInput.value, 10); // validate input
    partySizeInput.value = value > 0 ? value : 1;
    updateDisplay();
});
costInput.addEventListener("change", _ => {
    const value = parseFloat(costInput.value); // validate input
    costInput.value = value > 0 ? value : 1;
    updateDisplay();
});