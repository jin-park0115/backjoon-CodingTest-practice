const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split("\n");

const A = input[0];
const B = input[1];

const one = B % 10;
const ten = Math.floor((B % 100) / 10);
const hundred = Math.floor(B / 100);

console.log(A * one);
console.log(A * ten);
console.log(A * hundred);
console.log(A * B);

/* 두개의 세자리 수 입력값을 주고 곱셈식을 하는데 각 라인을 출력하는 문제.
처음 생각은 변수에 A*B를 넣어볼까 했지만.
그건 바보같은 생각 ㅋㅋㅋ 그냥 총 결과가 들어가짐.
도무지 라인마다 값을 어떻게 내지 해서 구글에 검색을 했다.
근데 B 나머지 10은 5인데
뭐지 흠.
split(" ")은 틀리고 split("\n")은 맞는다. gpt한테 물어봐봐야겠다.
아 줄바꿈이 필요해서...
문제가 첫째 줄과 둘째 줄이니까...
와우...

그리고 위에 one, ten, hundred부분 일의자리, 십의자리, 백의 자리를 추출하는 계산식이다.
그래서 첫번째 줄은 A 랑 일의 자리 곱셈
두 번째 줄은 십의자리, 세 번째 줄은 백의 자리, 마지막 줄은 전체 곱하는 식. */

/* const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const A = Number(input[0]);
const B = input[1]; // 문자열 그대로

// B의 각 자리 숫자
const B1 = Number(B[2]); // 일의 자리
const B2 = Number(B[1]); // 십의 자리
const B3 = Number(B[0]); // 백의 자리

console.log(A * B1);
console.log(A * B2);
console.log(A * B3);
console.log(A * Number(B)); */
// 이 방법이 뭔가 더 깔끔해 보이기도 하네..
