const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString("").trim().split("\n");

const N = Number(input[0]);
const A = new Set(input[1].split(" ").map(Number));

const M = Number(input[2]);
const target = input[3].split(" ").map(Number);

let res = "";

for (let i = 0; i < M; i++) {
  res += A.has(target[i]) ? "1\n" : "0\n";
}

console.log(res);
