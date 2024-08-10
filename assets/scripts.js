
let elec = 41000
let co2e = 270
let trees = 6750
let cars = 70
let dollar = 0.6 

let elecUnit = "KWh Saved"
let co2eUnit  = "CO2e Reduced"
let treesUnit = "Trees Absorbed Carbon"
let carsUnit = "Times of Driving Round the Earth"
let dollarUnit = "Millions of HKD saved"

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('electricity').innerText = elec.toLocaleString();
  document.getElementById('electricity-unit').innerText = elecUnit;
  document.getElementById('electricity-eqv').innerText = co2e;
  document.getElementById('electricity-eqv-unit').innerText = co2eUnit;
});

function updateToTrees() {
  document.getElementById('electricity-eqv').innerText = trees.toLocaleString();
  document.getElementById('electricity-eqv-unit').innerText = treesUnit;
}

function updateToCo2e() {
  document.getElementById('electricity-eqv').innerText = co2e;
  document.getElementById('electricity-eqv-unit').innerText = co2eUnit;
}

function updateToCars() {
  document.getElementById('electricity-eqv').innerText = cars;
  document.getElementById('electricity-eqv-unit').innerText = carsUnit;
}

function updateToDollar() {
  document.getElementById('electricity-eqv').innerText = dollar;
  document.getElementById('electricity-eqv-unit').innerText = dollarUnit;
}
