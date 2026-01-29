const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  let res = "";
  for (let s of str) {
    res += s == s.toLowerCase() ? s.toUpperCase() : s.toLowerCase();
  }
  console.log(res);
});

/*
  영어 알파벳으로 이루어진 `문자열` str이 주어집니다. 각 알파벳을 대문자는 소문자로, 소문자는 대문자로 변환해서 출력하는 코드를 작성하시오.

  내 풀이: for ... of 문으로 먼저 문자열을 s 변수에 하나씩 담고, 그 s가 소문자인지 확인 후 소문자 true면 toUpperCase()로 대문자 변환, 대문자라면 소문자 toLowerCase()로 변환

*/
