const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("");

const N = parseInt(input);
const count = N / 4;
let res = "";
for (let i = 0; i < count; i++) {
  res += "long ";
}
console.log(res + "int");

// 4바이트 증가일때 long이 추가가 된다.
// 4 8 12 16 20
// long, long long, long long long, 이런식으로 간다.
/*
  음...
 간단한거 같으면서도 어렵다...

*/
