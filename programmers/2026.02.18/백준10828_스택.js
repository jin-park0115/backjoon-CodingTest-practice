const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString("").trim().split("\n");

const N = Number(input[0]);
const stack = [];
let out = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].trim();
  const [cmd, val] = line.split(" ");

  if (cmd === "push") {
    stack.push(Number(val));
  } else if (cmd === "pop") {
    out.push(stack.length ? stack.pop() : -1);
  } else if (cmd === "size") {
    out.push(stack.length);
  } else if (cmd === "empty") {
    out.push(stack.length ? 0 : 1);
  } else if (cmd === "top") {
    out.push(stack.length ? stack[stack.length - 1] : -1);
  }
}

console.log(out.join("\n"));

/*
  input으로 첫째 줄에 명령어 개수, 두번 째 줄부터는 이제 명령어 그러니까 input[0] == 명령어 개수
  input[i] i = 1 1부터 ~ 명령어 개수 까지 반복문 돌림,
  돌릴 때 input[i] 부터는 split을 또 해줘야 함, 명령어와 정수를 쪼개준다,
  if문으로 각 명령어 마다 분기를 처리해준다.

*/
