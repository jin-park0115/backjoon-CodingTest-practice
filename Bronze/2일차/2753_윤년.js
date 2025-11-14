const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("");

const year = Number(input);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("1");
} else {
  console.log("0");
}

/*
  수학문제.. 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
  흠...
  4의배수 && !100의배수 OR 400의배수

  빼이 성공!

  시간 104ms
*/
