// 2일차부터 조건문

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else if (A == B) {
  console.log("==");
}

/* 단순한 조건문 분기 */
