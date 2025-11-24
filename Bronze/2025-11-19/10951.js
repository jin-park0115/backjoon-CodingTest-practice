const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

let res = "";

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  res += a + b + "\n";
}

console.log(res);

/*
  백준 순서가 잘못 된듯. 이거 다음에 아까 a==0 && b== 0이거를 갔어야 하는데
*/
