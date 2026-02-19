function solution(myString) {
  return myString.split("x").map((v) => v.length);
}

/*
function solution(myString) {
  let res = [];
  let count = 0;
  for (let s of myString) {
    if (s === "x") {
      res.push(count);
      count = 0;
    } else {
      count++;
    }
  }
  res.push(count);
  return res;
}
  편하게 map을 사용하는 방식도 있지만, 이렇게 풀어보며 이해를 해보았다,
  x면 카운트 0 아니면 카운트 ++ 이 방식을 각 문자열마다 돌린다,
*/
