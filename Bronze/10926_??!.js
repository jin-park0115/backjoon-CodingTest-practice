const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split(" ");

const id = input[0];
console.log(id + "??!");

// 입력으로 아이디를 준다고 해서 받고, + 연산자를 이용해서 문자열 ??!를 입력 해주었다.

// 다른 분들 문제풀이를 보니 입력 데이터가 여러 개가 아니라 하나의 문자열을 받는거라 split을 안쓴 거를 보았다.

// const input = fs.readFileSync(0, "utf-8").toString().trim();
// console.log(input + "??!");
// 이런식으로
