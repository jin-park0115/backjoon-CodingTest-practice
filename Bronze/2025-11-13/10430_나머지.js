const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);

// 문제에서 주어진 기대 출력값을보고 연산식만 넣어주었다.
// 이번에는 입력값이 A,B,C가 순서대로 주어진다고 하여 split을 사용하였다.
