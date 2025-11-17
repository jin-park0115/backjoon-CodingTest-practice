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
*/
