const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

let maxValue = -Infinity;
let maxIndex = -1;

for (let i = 0; i < input.length; i++) {
  let value = Number(input[i]);
  if (value > maxValue) {
    maxValue = value;
    maxIndex = i + 1;
  }
}
console.log(maxValue);
console.log(maxIndex);
