const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function solution() {
  const T = Number(input[0]);

  for (let i = 1; i <= T; i++) {
    const [R, S] = input[i].split(" ");
    const repeatCount = Number(R);
    let res = "";
    for (let j = 0; j < S.length; j++) {
      for (let K = 0; K < repeatCount; K++) {
        res += S[j];
      }
    }
    console.log(res);
  }
}
solution();

/*
  내 풀이 방법.
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf-8").toString().trim(" ").split("\n");

  function solution() {
    const S = input[0];
    const R = input[1];

    let res = "";
    for (let i = 0; i <= S.length; i++) {
      for (let j = 0; j <= R.length; j++) {
        print((res += S[j]));
      }
    }
  }
  */
