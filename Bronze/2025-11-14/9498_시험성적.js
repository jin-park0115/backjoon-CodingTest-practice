const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("");

const score = Number(input);

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 60 && score <= 69) {
  console.log("D");
} else {
  console.log("F");
}

// 조금더 생각해서 AND 연산자로 구상하였다.
// 의문인게 3번째꺼 보니까 예전에 저렇게 제출해서 맞았던 기록이 있는데 왜 안되징..

/*
1번째 제출 답안, 틀렸음
const score = input;

if (90 <= score <= 100) {
  console.log("A");
} else if (80 <= score <= 89) {
  console.log("B");
} else if (70 <= score <= 79) {
  console.log("C");
} else if (60 <= score <= 69) {
  console.log("D");
} else {
  console.log("F");
}



2번째도 실패
const score = input;

switch (true) {
  case 90 <= score <= 100:
    console.log("A");
    break;
  case 80 <= score <= 89:
    console.log("B");
    break;
  case 70 <= score <= 79:
    console.log("C");
    break;
  case 60 <= score < 69:
    console.log("D");
  default:
    console.log("F");
    break;
}


3 번째 시도, 이거도 틀렸다고 나온다.
const score = parseInt(input);

switch (true) {
  case score < 60:
    console.log("F");
    break;
  case score < 70:
    console.log("D");
    break;
  case score < 80:
    console.log("C");
    break;
  case score < 90:
    console.log("B");
  default:
    console.log("A");
    break;
}
 */
