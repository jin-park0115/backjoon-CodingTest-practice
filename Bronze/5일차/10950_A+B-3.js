const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split("\n");

const num = parseInt(input[0]);

for (let i = 1; i <= num; i++) {
  let score = input[i].split(" ");
  console.log(parseInt(score[0]) + parseInt(score[1]));
}

/*
 문제 풀이
 입력이
 5
 1 1
 2 3
 3 4
 이런식으로 들어온다고 한다, split("\n")해서 줄 단위로 배열로 만들어준다.
 그래서 input배열은
 [
  '5',
  '1 1',
  '2 3',
  '3 4'
 ]
 이렇게 된다.

 const num = parseInt(input[0])은 첫 번째 5를 숫자 5로 바꿔서 반복횟수로 사용한다.

 for문 상세 설명
 i = 1부터 시작하는 이유가 input[0]은 테스트 개수이고 실제 숫자 2개가 있는 줄은 input[1] 부터이기 때문에, i = 1로 한다.
 input[i].split(" ") "1 1" => ["1", "1"] 이렇게 변환
 콘솔에 socre[0] + score[1] 얘네를 숫자로 바꿔서 더해줌.


 문제 이해가 어려웠다.
*/
