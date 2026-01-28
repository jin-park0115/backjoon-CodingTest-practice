const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function solution() {
  const T = Number(input[0]);

  for (let i = 1; i <= T; i++) {
    const [R, S] = input[i].split(" ");
    const repeatCount = Number(R);
    let res = "";
    for (let j = 0; j < S.length; j++) {
      for (let K = 0; K < repeatCount; K++) {
        res += S[j];
      }
    }
    console.log(res);
  }
}
solution();

/*
  내 풀이 방법.
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf-8").toString().trim(" ").split("\n");

  function solution() {
    const S = input[0];
    const R = input[1];

    let res = "";
    for (let i = 0; i <= S.length; i++) {
      for (let j = 0; j <= R.length; j++) {
        print((res += S[j]));
      }
    }
  }

  오답 노튼 정리 테스트 케이스 처리가 없음, 그리고 입력 파싱이 잘못됨
  그리고 배열 인덱스는 0 부터 length - 1 까지임.
  S, R혼동함, R = 반복횟수, S = 문자열 순서를 바꿔버림;
  그리고 노드.js에서는 print말고 console.log를 사용해야 한다.

  핵심 포인트
  1. 입력 형식 정확히 파악: 첫 줄은 테스트 케이스 개수
  2. 각 문자를 R번 반복 : 이중 for문 사용
  3. 배열 인덱스는 0부터 length-1 까지임
  4. 출력은 console.log 사용
  오랜만에 node.js로 문제풀이 하려니 잊어버렸다.
*/
