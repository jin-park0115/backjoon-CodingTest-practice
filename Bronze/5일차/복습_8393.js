const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("");

const N = parseInt(input);
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
}
console.log(sum);
