const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(A % B);

// 처음에 parseFloat로 했다가 틀렸다.
// 문제를 보니 나누기는 소수점이 나오면 안되는걸 봄.
// 그 다음 들어온 문자열을 넘버로 바꾸고 나누기만 parseInt로 감싸고 문제를 통과했다.
