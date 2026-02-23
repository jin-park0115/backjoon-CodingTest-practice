function solution(my_string, m, c) {
  let res = "";
  for (let i = c - 1; i < my_string.length; i += m) {
    res += my_string[i];
  }
  return res;
}

/*
  먼저 가로로 자른다. m = 4이기 떄문에 4번째 자리까지만,
  i h r h
  b a k r
  f p n d
  o p l j
  h y g c
  그 다음 c = 2 인덱스로 따지면 1, c - 1인 셈.
  그러면 happy가 나온다.

  문자열이 이미 1차원 배열처럼 저장되어 있음.
  2차원 배열을 만들 필요가 없음

  c 번째 열 인덱스 값은 위에 적은대로 c - 1이고,
  그 다음 같은열 = +m

*/
