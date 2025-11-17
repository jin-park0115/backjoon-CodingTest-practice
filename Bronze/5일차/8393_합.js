const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("");

const num = parseInt(input);

let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(sum);
/*
  n을 하나 주는데 그 n까지의 합을 구한다. ㅇㅋ
  3을 준다면
  i = 1
  1 + 2 + 3 이 되어서 6이 나와야 한다.

  오답 노트: console.log를 블럭안에 넣고 있어서 되지 않는거였다.
  전 문제는 블럭안에 넣었는데 그 문제는 출력이 여러 개 나오는거고
  이거는 하나만 나오면 되는거여서 그런듯 하다.
*/
