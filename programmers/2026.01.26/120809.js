function solution(numbers) {
  var answer = numbers.map((num) => num * 2);
  return answer;
}

/*
  1. 첫 번째 풀이 방식 push
  function solution(numbers) {
    var answer = [];
    for (i = 0; i < numbers.length; i++) {
      answer.push(numbers[i] * 2);
    }
    return answer;
  }
  2. 2 번째 풀이 방식 map
  js에서 배열의 모든 요소를 순회하며 특정 연산을 적용해 새로운 배열을 만들 때는 map 메서드를 사용하는 것이 가장 간결하고 효율적이다.
*/
