const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split("\n");

const T = parseInt(input[0]);
let res = "";

for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  res += `Case #${i}: ${a} + ${b} = ${a + b} \n`;
}
console.log(res);

/*
  res += `Case #${i}: ${a} + ${b} =  ${a + b} \n`;
  이래 돼있어서 틀림
  수정 후 통과
  이제 이 문제는 감을 잡았다
*/
