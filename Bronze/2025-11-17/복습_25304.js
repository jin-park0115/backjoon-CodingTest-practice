const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split("\n");

const X = parseInt(input[0]);
const N = parseInt(input[1]);

let res = 0;
for (let i = 2; i < 2 + N; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  res += a * b;
}

console.log(res === X ? "Yes" : "No");
