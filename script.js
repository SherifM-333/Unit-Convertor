const inputEl = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-data")
const volumeEl = document.getElementById("volume-data")
const massEl = document.getElementById("mass-data")

convertBtn.addEventListener("click", function() {
    feetValue = convertToFeet(inputEl.value).toFixed(3)
    metreValue = convertToMetres(inputEl.value).toFixed(3)

    gallonValue = convertToGallons(inputEl.value).toFixed(3)
    litreValue = convertToLitres(inputEl.value).toFixed(3)

    poundValue = convertToPounds(inputEl.value).toFixed(3)
    kilogramValue = convertToKilograms(inputEl.value).toFixed(3)

    lengthEl.textContent = `
    ${inputEl.value} metres = ${feetValue} feet | ${inputEl.value} feet = ${metreValue} metres
    `
    volumeEl.textContent = `
    ${inputEl.value} litres = ${gallonValue} gallons | ${inputEl.value} gallons = ${litreValue} litres
    `
    massEl.textContent = `
    ${inputEl.value} kilograms = ${poundValue} pounds | ${inputEl.value} pounds = ${kilogramValue} kilograms
    `
})

function convertToFeet(val) {
    return val * 3.28084
}

function convertToMetres(val) {
    return val * 0.3048
}

function convertToGallons(val) {
    return val * 0.264172
}

function convertToLitres(val) {
    return val * 3.78541
}

function convertToPounds(val) {
    return val * 2.20462
}

function convertToKilograms(val) {
    return val * 0.453592
}