const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

let res = 0;

for (let a of input) {
  if ("ABC".includes(a)) res += 3;
  else if ("DEF".includes(a)) res += 4;
  else if ("GHI".includes(a)) res += 5;
  else if ("JKL".includes(a)) res += 6;
  else if ("MNO".includes(a)) res += 7;
  else if ("PQRS".includes(a)) res += 8;
  else if ("TUV".includes(a)) res += 9;
  else if ("WXYZ".includes(a)) res += 10;
}

console.log(res);
