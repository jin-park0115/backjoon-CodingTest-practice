function solution(intStrs, k, s, l) {
  let res = [];
  for (let str of intStrs) {
    const sliced = str.slice(s, s + l);
    const num = Number(sliced);

    if (num > k) {
      res.push(num);
    }
  }

  return res;
}
