const fs = require("fs");
const input = Number(fs.readFileSync(0, "utf-8").trim());

for (let i = 1; i <= input; i++) {
  const space = " ".repeat(input - i);
  const star = "*".repeat(2 * i - 1);
  console.log(space + star);
}

for (let i = input - 1; i >= 1; i--) {
  const space = " ".repeat(input - i);
  const star = "*".repeat(2 * i - 1);
  console.log(space + star);
}

/* let first = 2 * input - 1;
let second = (2 * input - 1) / 2;

for (let i = 1; i <= first; i -= 2) {
  console.log("*" * i);
  for (let j = 1; j <= (2 * second - 1) / 2; j += 2) {
    console.log("*" * j);
  }
}

for문 증가해야하는데 - 중, 문자열 곱셈 불가능 repeat를 써야함
중첩 for문도 틀림 줄 단위로 처리해야 한다.


  ⭐ 별 개수: 2*i - 1

  공백 개수: N - i

  위/아래는 i 증가 vs 감소 차이
 */
