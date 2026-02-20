const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);

let arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i]);
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let avg = sum / arr.length;

arr.sort((a, b) => a - b);
let mid = arr[2];

console.log(avg);
console.log(mid);
