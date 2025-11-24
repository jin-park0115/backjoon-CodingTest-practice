const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

let maxValue = -Infinity;
let maxIndex = -1;

for (let i = 0; i < input.length; i++) {
  let value = Number(input[i]);
  if (value > maxValue) {
    maxValue = value;
    maxIndex = i + 1;
  }
}
console.log(maxValue);
console.log(maxIndex);

/*
  -Infinity 를 한 이유는 9번째줄 첫 비교를 할 때 무조건 ture가 되기에 value[0] 이 maxValue에 담기고,
  index 도 0 부터시작이니까 하나씩 증가하기 만약 8번째께 크다면 length만큼 하니까 index 8에서 최댓값이 담기고 index도 그 8이 나올것
*/
