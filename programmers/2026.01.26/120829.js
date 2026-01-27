/* 각도기 */
function solution(angle) {
  if (angle < 90) {
    return 1;
  } else if (angle == 90) {
    return 2;
  } else if (angle < 180) {
    return 3;
  } else {
    return 4;
  }
}

/*
  여기서 주의 할 점 if (0 < angle < 90) 이런식으로 표현하면 안된다.
  자바스크립트에서는 0 < angle < 90 이라는 표현이 두 개의 비교 연산으로 나누어져서 평가된다.
  먼저, 0 < angle 이 평가되어 true 또는 false 값을 반환한다.
  그런 다음, 이 불리언 값이 숫자형으로 변환되어( true는 1로, false는 0으로) 90과 비교된다.
  따라서, if (0 < angle < 90) 은 의도한 대로 작동하지 않는다.
*/
