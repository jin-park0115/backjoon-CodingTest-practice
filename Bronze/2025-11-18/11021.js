const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split("\n");

const T = parseInt(input[0]);

for (let i = 1; i < 1 + T; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${a + b}`);
}

/*
  백준 사이트가 이상한건지 노트북이 이상한건지 모르겠지만,
  gemini한테 물어보니까, 정답이라고는 한다,
  gemini가
  최적화 한 코드

  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf-8').toString().split('\n');

  const T = parseInt(input[0]);
  let result = '';

  for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    result += `Case #${i}: ${a + b}\n`;
  }

  // 마지막에 한 번에 출력 (console.log를 한 번만 사용하여 성능 향상)

  근데 코드 이상한거 같음, 8번째줄 input[i]? 아인거 같다, 그냥 i로 하는게 맞는 듯
*/
