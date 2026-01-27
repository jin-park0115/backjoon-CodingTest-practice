function solution(n) {
  let pizza = 1;
  while ((pizza * 6) % n !== 0) {
    pizza++;
  }
  return pizza;
}
/*
  while문 조건이 true인 동안 계속 반복된다.
  사람이 10명이라면
  6 % 10 = 6 → false
  12 % 10 = 2 → false
  18 % 10 = 8 → false
  24 % 10 = 4 → false
  30 % 10 = 0 → true 멈춤

  따라서 피자판 수는 5판이 된다.
*/
