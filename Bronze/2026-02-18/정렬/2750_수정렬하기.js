const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const N = Number(input[0]);
const numbers = input.slice(1).map(Number);

const asc = numbers.sort((a, b) => a - b);

console.log(asc.join("\n"));
