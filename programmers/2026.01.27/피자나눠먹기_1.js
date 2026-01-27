function solution(n) {
  let answer = Math.floor(n / 7);
  if (n % 7 !== 0) {
    answer += 1;
  }
  return answer;
}

/*
  피자 나눠 먹기
  1. 7조각 피자 한 판을 n명이 먹을 때, 최소 몇 판이 필요한지 구하는 문제
  2. n을 7로 나눈 몫이 최소 판 수가 된다.
  3. 만약 n이 7의 배수가 아니라면, 나머지가 발생하므로 한 판을 더 시켜야 한다.
  4. 따라서 n을 7로 나눈 몫에 나머지가 있으면 1을 더해준다.

  초간단 버전
  function solution(n) {
   return Math.ceil(n / 7);
  }
*/
