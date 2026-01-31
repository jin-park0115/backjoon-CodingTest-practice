const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let number = input.map(Number);
let res = [];

for (let n of number) {
  let mod = n % 42;

  if (!res.includes(mod)) {
    res.push(mod);
  }
}

console.log(res.length);
