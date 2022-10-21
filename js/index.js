const redValue = document.querySelector("#red-value");
const greenValue = document.querySelector("#green-value");
const blueValue = document.querySelector("#blue-value");

const redRange = document.querySelector(".red-range");
const greenRange = document.querySelector(".green-range");
const blueRange = document.querySelector(".blue-range");

const redBox = document.querySelector(".red");
const greenBox = document.querySelector(".green");
const blueBox = document.querySelector(".blue");

const colorMix = document.querySelector("#mix");
const text = document.querySelector("#rgb-value");

let r = redRange.value;
let g = greenRange.value;
let b = blueRange.value;

function rgb(r, g, b) {
  colorMix.style.backgroundColor = `rgb(${r},${g},${b})`;
  text.textContent = `rgb(${r},${g},${b})`;
}

// RED

redRange.addEventListener("input", function () {
  r = redRange.value;
  g = greenRange.value;
  b = blueRange.value;
  redValue.textContent = r;
  redBox.style.backgroundColor = `rgb(${r},0,0)`;
  rgb(r, g, b);
});
// GREEN

greenRange.addEventListener("input", function () {
  r = redRange.value;
  g = greenRange.value;
  b = blueRange.value;
  greenValue.textContent = g;
  greenBox.style.backgroundColor = `rgb(0,${g},0)`;
  rgb(r, g, b);
});
// BLUE

blueRange.addEventListener("input", function () {
  r = redRange.value;
  g = greenRange.value;
  b = blueRange.value;
  blueValue.textContent = b;
  blueBox.style.backgroundColor = `rgb(0,0,${b})`;
  rgb(r, g, b);
});

window.addEventListener("load", function () {
  colorMix.style.backgroundColor = `rgb(${r},${g},${b})`;
  text.textContent = `rgb(${r},${g},${b})`;
  //   blue
  blueBox.style.backgroundColor = `rgb(0,0,${b})`;
  blueValue.textContent = b;
  //   green
  greenValue.textContent = g;
  greenBox.style.backgroundColor = `rgb(0,${g},0)`;
  //   red
  redValue.textContent = r;
  redBox.style.backgroundColor = `rgb(${r},0,0)`;
});
