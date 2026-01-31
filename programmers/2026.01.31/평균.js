const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const N = Number(input[0]);
const scores = input[1].split(" ").map(Number);
const maxScores = Math.max(...scores);

let sum = 0;
for (let s of scores) {
  sum += (s / maxScores) * 100;
}
console.log(sum / N);
