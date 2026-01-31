const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString("").trim().split(" ");

const a = Number(input[0].split("").reverse().join(""));
const b = Number(input[1].split("").reverse().join(""));

console.log(a < b ? b : a);
