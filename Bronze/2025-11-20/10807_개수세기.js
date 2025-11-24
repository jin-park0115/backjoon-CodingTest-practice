const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number); // [1 4 1 2 4 2 4 2 3 4 4]
const v = parseInt(input[2]); // 2

const res = arr.filter((num) => num === v).length;
// [2, 2, 2]
console.log(res);

/*
  흠..
  N개의 정수 중에 v가 몇 개인지..
  filter?


  메모: filter는 조건을 통과한 요소들만 모아서 새로운 배열을 만든다
  ex; [1,2,3,4,5].filter(n=> n > 3);
  => [4, 5]
  원본 배열은 바뀌지 않는다.

  언제 쓰나
  특정 값들만 추려내고 싶을 때,
  정수 배열에서 짝수만 골라내기
  문자열 배열에서 특정 단어만 필터링
  */
