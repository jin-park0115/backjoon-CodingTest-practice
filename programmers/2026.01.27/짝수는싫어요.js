function solution(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      res.push(i);
    }
  }
  return res;
}

function solution(n) {
  let res = [];
  for (let i = 1; i <= n; i += 2) res.push(i);
  return res;
}

/*
  삽질한 이유 n.length를 사용했다, 주어진 n은 정수인데 말이다.
  숫자에는 당연히 length 속성이 없다.
  그리고 이하이기 때문에 <=를 사용



*/
