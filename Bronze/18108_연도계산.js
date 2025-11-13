const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("");

console.log(input - 543);

// 이번에 'y' 입력데이터가 하나인것을 보고 split을 뺏다.
// 예제에 2541을 입력하면 1998이 출력이 되는것을 보고 둘이 뺄샘을 하면 543이 나온다.
// 그래서 받은 데이터에 - 543 하면 정답이 된다.
