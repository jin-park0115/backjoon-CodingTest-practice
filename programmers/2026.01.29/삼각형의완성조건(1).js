function solution(sides) {
  let res = sides.sort((a, b) => a - b);
  return res[0] + res[1] > res[2] ? 1 : 2;
}

/*
  선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 한다
  - 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
  삼각형의 세 변의 길이가 담긴 배열 sides 이 매개변수로 주어진다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return 하도록 함수를 완성하라.

  function solution(sides) {
    // 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다. 안되면 2, 되면 1
    let sd = sides.sort((a, b) => a - b);
    let sum = sd[0] + sd[1];
    let max = sd[2];
    if (sum > max) {
      return 1;
    } else {
      return 2;
    }
  }
  내 풀이: 배열을 정렬 한 후 작은 수 [0] [1]을 더한 후 큰 값과 비교 를 한다.

  위 풀이 방법 처럼 삼항연산자를 사용한 풀이가 있다. 쩝.. 아는게 힘이다...
*/
