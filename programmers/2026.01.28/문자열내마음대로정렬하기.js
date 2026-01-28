function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] !== b[n]) {
      return a[n] < b[n] ? -1 : 1;
    }
    return a < b ? -1 : 1;
  });
}

/*
  sort() 이해하기
  sort의 비교 함수는 두 값 a, b를 받는다.
  sort((a,b) => a - b) 만약 a가 b보다 작으면 음수를 반환하여 a가 b보다 앞에 오도록 정렬한다.
  반대로 a가 b보다 크면 양수를 반환하여 b가 a보다 앞에 오도록 정렬한다.
  a와 b가 같으면 0을 반환하여 순서를 변경하지 않는다.

  - 음수 반환: a가 b보다 앞에 위치
  - 0 반환: 순서 변경 없음
  - 양수 반환: b가 a보다 앞에 위치
  strings.sort((a, b) => {
      if (a[n] !== b[n]) { // n번째 문자가 다를 때
        return a[n] < b[n] ? -1 : 1; // n번째 문자 기준 오름차순 정렬
      }
      return a < b ? -1 : 1; // n번째 문자가 같을 때 전체 문자열 기준 오름차순 정렬
    });

*/
