const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const N = parseInt(input);
let res = "";
for (let i = 1; i <= N; i++) {
  res += "*".repeat(i) + "\n";
}

console.log(res);

/*
  repeat()
  문자열을 N번 반복해서 이어 붙여서 반환하는 문자열 메소드이다.
  반복 문자 만들 때 제일 직관적이다.

  repeat없이 하려면 2중 중첩문을 이용해서
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf-8").toString().trim();

  const N = parseInt(input);
  let res = "";

  for (let i = 1; i <= N; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    res += line + "\n";
  }

  console.log(res);
*/
