function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

/*
  정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2 번째 인덱스까지 자른 정수 배열을 return 하도록
  solution 함수를 완성하라.

  function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
  }
  내 풀이: slice()메서드를 활용해서 배열 num1 번째 부터 num2 + 1번까지 나오도록 함.
  왜냐면 slice는 (1, 2) 첫번째 인자 인덱스 부터, 2번째 인자 미만 까지 이므로 배열이니까 +1을 해준다.
  numbers.slice(1,3) => 1부터 3번미만까지만 가져온다 그래서 0,1,2 그래서 +1 을 해서 0,1,2,3을 반환하도록 한다.
*/
