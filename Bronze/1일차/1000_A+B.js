const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split(" "); // 입력을 4 8로 줬다고 하면 반환 값은 "4 8"문자열
// 이미 utf-8로 읽었지만 buffer가 올 경우 대비용 결과는 여전히 "4 8"
// .trim() 문자열 양 끝의 공백/개행 제거. 백준 입력은 종종 마지막에 \n이 있어서 꼭 필요하다고 한다.
// split() 객체를 지정한 구분자를 이용하여 여러개의 문자열로 나눈다.
// "4 8" 그리고 split " "빈 스페이스 구분으로 배열로 나눠짐.
// 좀더 쉽게 const name = "jin park"
// const fullname = name.split(" ")
// console.log(fullname[0]) === "jin"
// console.log(fullname[1]) === "park" 이 되기 때문에
// a 에 input[0] 배열 1번째 받으니 4
// b 에 input[1] 배열 2번째 받으니 8

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);
