function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

/*
  number가 n의 배수면서 m의 배수이냐를 삼항연산자로 풀이
*/
