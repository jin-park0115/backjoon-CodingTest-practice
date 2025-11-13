const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split(" ");
// Number, parseInt 안붙여도 통과가 되긴함.
//
const A = Number(input[0]);
const B = Number(input[1]);

console.log(A * B);
