const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split("\n");

let SH = parseInt(input[0].split(" ")[0]);
let SM = parseInt(input[0].split(" ")[1]);
let TIME = parseInt(input[1]);

let totalM = (SM += TIME);

let addH = Math.floor(totalM / 60);
let finalM = totalM % 60;

let finalH = (SH + addH) % 24;

console.log(finalH + " " + finalM);

/*
  첫째 줄에는 현재 시각이, 둘 째 줄에는 요리하는데 필요한 시간
  한 번도 split을 해주어야 할거 같다.

  SM에 TIME을 더해보자.
  그러면 총 분이 나올것이다
  Math.floor를 사용해서 60미만이면 시간 + 0 증가.


*/
