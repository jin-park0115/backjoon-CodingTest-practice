const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split("\n");

const T = parseInt(input[0]);

let res = "";
for (let i = 1; i <= T; i++) {
  num = input[i].split(" ");
  res += parseInt(num[0]) + parseInt(num[1]) + "\n";
}
console.log(res);

/*
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf-8").toString().trim("").split("\n");

  const T = parseInt(input[0]);

  let res = 0;
  for (let i = 1; i <= T; i++) {
    num = input[i].split(" ");
    res += parseInt(num[0]) + parseInt(num[1]) + "\n";
  }
  console.log(res);

  이렇게 제출했는데 오답, 이유는 res를 숫자로 선언해놓고서는 23번째 줄에 "\n" 써서 문자열이 되버림
  쓸거면 res 저거를 문자열로 변경
*/
