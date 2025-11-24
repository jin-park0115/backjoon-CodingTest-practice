const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

let res = "";

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  if (a == 0 && b == 0) break;
  res += a + b + "\n";
}
console.log(res);

/*
  오답 노트 내 가 제출한 답안
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

  const T = parseInt(input);

  let res = "";
  for (let i = 0; i <= T.length; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    if (a == 0 && b == 0) null;
    res += a + b + "\n";
  }
  console.log(res);

  입력의 줄 개수가 정해져 있지 않고, input은 배열이고 for 문에 바로 넣어줘야 한다. input.length
  그리고 null이 아니라 break를 걸어줘야 한다

  뭔가 입력 줄을 주지 않을 때는 바로 input.length를 해야 할거만 같군..
*/
