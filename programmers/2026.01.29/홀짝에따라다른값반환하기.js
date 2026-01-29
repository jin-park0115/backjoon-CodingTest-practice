function solution(n) {
  let res = 0;

  if (n % 2 !== 0) {
    for (let i = 1; i <= n; i += 2) {
      res += i;
    }
  } else {
    for (let i = 2; i <= n; i += 2) {
      res += i ** 2;
    }
  }

  return res;
}
