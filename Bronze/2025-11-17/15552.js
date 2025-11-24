const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split("\n");

let res = "";
const test = parseInt(input[0]);

for (let i = 1; i <= test; i++) {
  let num = input[i].split(" ");
  res += Number(num[0]) + Number(num[1]) + "\n";
}
console.log(res);
