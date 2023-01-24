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
function billTotal(subtotal, serviceQuality) {
    return subtotal + subtotal*tipPercent(serviceQuality);
}
function splitCost(partySize, subtotal, serviceQuality) {
    return billTotal(subtotal, serviceQuality) / partySize;
}

const subtotal = 10.98;
const quality = "good";
const partySize = 10;

console.log(`subtotal: ${subtotal}, ${quality} service`);
console.log(`total: ${billTotal(subtotal, quality)}, tipping ${tipPercent(quality)*100}%`);
console.log(`cost per person (group of ${partySize}): ${splitCost(partySize, subtotal, quality)}`);

