const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim("").split("\n");

const [n, k] = input[0].split(" ").map(Number);
const x = input[1].split(" ").map(Number);

x.sort((a, b) => b - a);

console.log(x[k - 1]);

/*
  배열을 정렬해서 앞에서부터 받는 사람의 수 k로 해야할지?
  정렬을 한다면 sort((a,b) => b - a)로 해서 내림차순 큰거가 앞으로,
  해서 slice(0, k -1)? 해볼까

  삐빅 틀렸음, 그냥 2번째 인덱스만 뽑으면 되는거였음

*/
