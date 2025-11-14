const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split(" ");
// 일단 소수점까지 나와야 한다고해서. Number를 해봄
// 흠 문제를 잘못이해했나, parseInt도 된다.
// 아 문제에 두 "정수" 정수라고 표현이 되어서 그런거 같다.
const A = Number(input[0]);
const B = Number(input[1]);

console.log(A / B);
