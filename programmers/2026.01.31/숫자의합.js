const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

console.log(
  input[1]
    .split("")
    .map(Number)
    .reduce((a, c) => a + c, 0),
);

/*
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf-8").trim().split("\n");

  const N = input[0];
  const numstr = input[1].split("").map(Number);

  let res = 0;
  for (let i = 0; i < N; i++) {
    res += numstr[i];
  }

  console.log(res);

*/
