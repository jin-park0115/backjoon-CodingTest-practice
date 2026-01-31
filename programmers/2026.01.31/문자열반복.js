const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString("").trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let [R, S] = input[i].split(" ");
  let repeat = Number(R);
  let res = "";

  for (let k = 0; k < S.length; k++) {
    for (let j = 0; j < repeat; j++) {
      res += S[k];
    }
  }
  console.log(res);
}
