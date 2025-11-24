const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const bucket = new Array(N).fill(0);

for (let m = 1; m <= M; m++) {
  let [i, j, k] = input[m].split(" ").map(Number);
  for (let x = i - 1; x < j; x++) {
    bucket[x] = k;
  }
}
console.log(bucket.join(" "));

/*
 문제 레전드
 뭘캐 어려우워워
*/
