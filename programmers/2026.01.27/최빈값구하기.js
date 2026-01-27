function solution(array) {
  const counts = new Map();

  for (const num of array) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  let maxCount = 0;
  let mode = -1;
  let isDuplicate = false;

  for (const [num, count] of counts) {
    if (count > maxCount) {
      maxCount = count;
      mode = num;
      isDuplicate = false;
    } else if (count === maxCount) {
      isDuplicate = true;
    }
  }
  return isDuplicate ? -1 : mode;
}
/*
  최빈 값 구하기 문제.
  이 문제는 공부를 더 해야한다.
  먼저 풀이 가이드:
  1. 빈도수 계산: Map을 사용하여 {숫자: 등장횟수} 형태로 저장한다. counts.get(num) || 0은
  해당 숫자가 처음 등장할 때 undefinded 대신 0을 기본값으로 쓰기 위한 트릭이다.
  2. 최빈값 추적: for...of 문을 통해 전체 데이터를 한 번 훑는다.
  현재 숫자의 등장 횟수가 지금까지의 최고 기록 (maxCount) 보다 많으면, mode를 교체하고 isDuplicate를 false로 돌려놓는다.
  만약 최고 기록과 똑같은 횟수가 가진 숫자가 또 나오면, 최빈값이 여러 개인 상황이므로 isDuplicate를 true로 바꾼다.
  3. 최종 판단: 반복문이 끝난 후 isDuplicate가 true라면 -1을, 아니면 찾은 mode를 반환한다.


  for...of 로직
  const array = [1, 2, 3, 3, 3, 4]; // 우리가 가진 배열
  const counts = new Map();         // 빈도수를 담을 주머니

  "배열(array)에서 숫자(num)를 하나씩 꺼내올게!"
  for (const num of array) {
      // 1. 꺼내온 숫자(num)가 주머니(counts)에 몇 개 있는지 확인해보고 (없으면 0)
      // 2. 거기다 1을 더해서 다시 주머니에 넣어줘.
      counts.set(num, (counts.get(num) || 0) + 1);
  }
    여기서 for...of가 한 일
    맨 처음 1을 꺼내서 num에 담고 실행 → counts에 1: 1 저장

    그다음 2를 꺼내서 num에 담고 실행 → counts에 2: 1 저장

    그다음 3을 꺼내서 num에 담고 실행 → counts에 3: 1 저장

    또 3을 꺼내서 num에 담고 실행 → counts에 3: 2 (기존 1에 +1)

*/
