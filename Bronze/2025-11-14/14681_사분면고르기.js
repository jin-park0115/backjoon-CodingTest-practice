const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split("\n");

const X = parseInt(input[0]);
const Y = parseInt(input[1]);

if (X > 0 && Y > 0) {
  console.log("1");
} else if (X > 0 && Y < 0) {
  console.log("4");
} else if (X < 0 && Y > 0) {
  console.log("2");
} else if (X < 0 && Y < 0) {
  console.log("3");
}

/*
  와 문제보면 어지럽다.. ㅋㅋㅋㅋ
  데이터를 받고 데이터가 둘다 양수이면 1사분면, X만 양수이면 4사분면,
  Y만 양수이면 2사분면
  둘다 음수이면 3사분면

  그러면 0보다 아래면 음수인걸로 해봐야겠다.

  원트 성공!
*/
