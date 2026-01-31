const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString("").trim().split("\n");

let T = Number(input[0]);

let out = [];
for (let i = 1; i <= T; i++) {
  const s = (input[i] ?? "").trim();
  out.push(s[0] + s[s.length - 1]);
}

console.log(out.join("\n"));
