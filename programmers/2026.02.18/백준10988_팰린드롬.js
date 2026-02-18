const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

const arr = input.split("");

let painDrome = 1;

for (let i = 0; i < arr.length / 2; i++) {
  if (arr[i] !== arr[arr.length - 1 - i]) {
    painDrome = 0;
    break;
  }
}
console.log(painDrome);

/*
  문자열을 배열로 만들어서 앞/뒤 비교 방식 사용
*/
