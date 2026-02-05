function solution(a, b, c) {
  if ((a !== b) !== c) {
    return a + b + c;
  } else if ((a !== b) !== c || (a === b) !== c || (a !== b) === c) {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  } else {
    return (
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) + (a ** 3 + b ** 3 + c ** 3)
    );
  }
}

/*
  1 ~ 6까지 주사위 세개
  a != b != c ? a + b +c : (a + b + c) X (a ** 2 + b ** 2 + c ** 2) X (a**3 + b**3 + c**3)
  벗 어떤게 두 개가 다를 지 모름.

((a ** 3) + (b ** 3) + (c ** 3))

 내 풀이는 틀렸다.

 방향은 맞지만 조건식이 깨진다.
 a !== b !== c 이런 식은 "연쇄 비교"가 되어서 JS에서 의도대로 동작하지 않는다.
 왜냐면 a!== b가 먼저 true/false가 되고, 그 다음에 true !== c 이런 비교가 되어버리기 떄문.

 올바른 조건 분기
 셋다 다르면 a + b + c
 둘만 같을 때 (합) X (제곱합)
 셋다 같을 때 (합) X (제곱합) X (세제곱합)

 function solution(a, b, c) {
    const sum = a + b + c;
    const sum2 = a**2 + b**2 + c**2;


    if (a === b && b === c) {
      const sum3 = a**3 + b**3 + c**3;
      return sum * sum2 * sum3;
    }

    if (a !== b && b !== c && a !== c) {
      return sum;
    }

    return sum * sum2;
  } 풀이법 && 이런식으로 해쳐 나가야 함
*/
