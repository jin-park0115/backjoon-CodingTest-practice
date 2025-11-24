const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split("\n");

const X = parseInt(input[0]); // 총금액
const N = parseInt(input[1]); // 종류의 수고 ex) 6이라 카믄 N은 6이고 이제 물건 정보는 6개가 들어가질것. 반복문은 0~7까지 돌아갈것
// 핵심은 반복문 범위랑, 물건가격과 개수를 잘 집어 넣어야 하는 부분인거 같다.

let sum = 0;

for (let i = 2; i < 2 + N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  sum += a * b;
}

if (sum === X) {
  console.log("Yes");
} else {
  console.log("No");
}
/*
내 머리 굴린 코드
const X = parseInt(input[0]); // 총 금액
const N = parseInt(input[1].split("\n")); // 종류의 수
// 이후 N개의 줄에는 각 물건의 가격 a와 개수 b가 공백을 사이에 두고 주어진다.
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += input[i].split("");
}
if (X == sum) {
  console.log("Yes");
} else {
  console.log("No");
}
 */

/*
  X = 총금액
  N = 구매한 물건 종류 수
  다음 줄부터 a b (가격, 개수)

  예시 입력이
  260000
  4
  20000 5
  30000 2
  이런식으로 들어온다잉 input[2]부터 물건 가격과 개수가 시작됨.
  a, b로 가격과 개수를 받고,
  sum += a * b 하고
  비교 연산자를 사용해서 yes or no를 출력한다.

  for문 범위를 왜 i < 2 + N을 했는지 이해가 오래 걸렸다.
  N = 4 일때
  i = 2;
  i = 3;
  i = 4;
  i = 5;
  i = 6;

  2 가 물건 시작되는 줄이고 2 + N이 물건 정보가 끝나는 다음 줄인것.

  우와 반복문 빡세다 ㅋㅋㅋ
*/
