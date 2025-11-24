const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split(" ");

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

let total;

if (A === B && B === C) {
  total = 10000 + A * 1000;
} else if (A === B || A === C) {
  total = 1000 + A * 100;
} else if (B === C) {
  total = 1000 + B * 100;
} else {
  let max = Math.max(A, B, C);
  total = max * 100;
}

console.log(total);

/*
  A === B === C : 10,000 + 같은 눈 숫자 X 1,000
  A === B, A === C, B === C: 1,000 + 같은 눈 숫자 X 100
  A != B != C : 가장 큰 눈 숫자 x 100

  아닐때 최대값을 구해서 거기에 곱하는 식으로 가보았다.

  두개씩 비교를 해야함. 나는 무식하게 세개씩 비교하려했다

  수학 어렵다
*/
