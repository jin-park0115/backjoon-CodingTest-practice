const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString("").trim().split("\n");

const first = input[0].split(" ");
const N = Number(first[0]);
const M = Number(first[1]);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

for (let i = 1; i <= M; i++) {
  let secondline = input[i].split(" ");
  let a = Number(secondline[0]);
  let b = Number(secondline[1]);

  let swap = arr[a - 1];
  arr[a - 1] = arr[b - 1];
  arr[b - 1] = swap;
}

console.log(arr.join(" "));

/* const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString("").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let arr = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i <= M; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  [arr[a - 1], arr[b - 1]] = [arr[b - 1], arr[a - 1]];
}

console.log(arr.join(" "));
 */
