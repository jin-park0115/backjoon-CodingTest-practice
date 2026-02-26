const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const K = Number(input[0]);
const stack = [];

for (let i = 1; i <= K; i++) {
  const num = Number(input[i]);
  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}

const res = stack.reduce((acc, cur) => acc + cur, 0);
console.log(res);

/*
  문제 핵심
  - 정수 k개를 입력 받는다 0이 나오면 최근 쓴 숫자 지운다. 마지막에 수들의 합을 출력한다.
  for 문에서 2번째줄에서 부터 받는 숫자를 0이랑 비교후 0이면 pop하고 아니면 push를 한다.

*/
