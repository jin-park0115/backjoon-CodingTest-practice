const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("");

const N = Number(input);

for (let i = 1; i < 10; i++) {
  console.log(N + " * " + i + " = " + N * i);
}

// 3일차 반복문인데, 토요일 일정이 생겨서 하다가 두통이 심해서 문제 하나만 풀고 GG
