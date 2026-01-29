function solution(numbers) {
  let a = numbers.sort((a, b) => b - a);
  return a[0] * a[1];
}

/*
  정수 배열 numbers가 매개변수로 주어진다. numbers의 원소 중 두개를 곱해 만들 수 있는 최댓값을 return 하도록 solutuib 함수를 완성해라.
  function solution(numbers) {
  let a = numbers.sort((a, b) => a - b);
  let b = [];
  for (let i = 1; i <= 2; i++) {
    b.push(a.pop());
  }
  let c = b.map((v) => Number(v));
  let d = c[0] * c[1];
  return d;
  }
  내 풀이는 이렇다 배열을 오름차순으로 정렬을 하고, 끝에 두개만 pop을 하고 b배열에 push해서 최댓값 2개만 남기고 Number로 만들고,
  배열 인덱스를 사용해서 최댓값 두개 곱하기.

  위에 풀이도 가능하다. 내림차순으로해서 큰 값 순으로 정렬 후 바로 곱하기
*/
