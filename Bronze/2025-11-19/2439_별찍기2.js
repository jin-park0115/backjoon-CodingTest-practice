const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const N = parseInt(input);
let res = "";

for (let i = 1; i <= N; i++) {
  res += " ".repeat(N - i) + "*".repeat(i) + "\n";
}
console.log(res);

/*
  repeat없이 푸는 2중 for문

  const fs = require('fs')
  const input = fs.readFileSync(0, 'utf-8').toString().trim();

  const N = parseInt(input)
  let res = "";

  for(let i = 1; i <= N; i++){
    let line = "";
    for(let j = 1; j <= N - 1; j++){
      line += " ";
    }
    for (let k = 1; k <= j; k++){
      line += "*"
    }

    res += line + '\n';
  }
  console.log(res)
*/
