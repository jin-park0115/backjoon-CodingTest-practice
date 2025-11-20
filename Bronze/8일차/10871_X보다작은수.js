const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [N, X] = input[0].split(" ").map(Number); // N = 10, X = 5
const A = input[1].split(" ").map(Number); // [1, 10, 4, 9, 2, 3, 8, 5, 7, 6]

let res = A.filter((n) => n < X);

console.log(res.join(" ")); // 순서대로 공백으로 구분해 출력하라고 해서 join " "

/*
  N 은 총 정수 개수
  x 는 비교할 숫자
*/
