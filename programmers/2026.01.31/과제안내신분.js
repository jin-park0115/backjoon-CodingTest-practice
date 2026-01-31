const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString("").trim().split("\n");

let num = input.map(Number); // 여기는 입력 한 숫자
let all = []; // 여기는 30까지 채운
for (let i = 1; i <= 30; i++) {
  all.push(i);
}

let notSub = all.filter((v) => !num.includes(v));

console.log(notSub.join("\n"));
