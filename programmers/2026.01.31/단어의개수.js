const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString("").trim();

if (input === "") {
  console.log(0);
} else {
  console.log(input.split(/\s+/).length);
}
