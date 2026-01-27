function solution(numer1, denom1, numer2, denom2) {
  let top = numer1 * denom2 + numer2 * denom1;
  let bottom = denom1 * denom2;

  const getGCD = (a, b) => {
    while (b !== 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  };

  const gcd = getGCD(top, bottom);

  return [top / gcd, bottom / gcd];
}

// 부모를 곱해서 더하는 것에 그치지 않고, 결과값을 기약 분수(더 이상 나눠지지 않는 상태)로 만들어야 한다.
/*
  분수의 덧셈은 통분이 핵심이라고 한다, 가장 쉬운 방법은 상대방의 분모를 서로 곱해준다.
  분자 (top) : (numer1 * denom2) + (numer2 * denom1)
  분모 (bottom) : denom1 * denom2
  기약분수로 만들어야 하는데 이를 위해 최대공약수 (GCD)를 구해야 한다.
  이때 사용하는게 유클리드 호제법이라고 한다.

  유클리드 호제법의 원리:
  1. 큰 수를 작은 수 로 나눈 나머지를 구한다.
  2. 나눴던 수를 다시 나머지로 나눈다.
  3. 나머지가 0이 될 때까지 반복한다.
  4. 마지막에 나머지를 0으로 만든 그 숫자가 바로 최대 공약수이다.

  구한 최대공약수로 분자와 분모를 각각 나누면 된다.
*/
