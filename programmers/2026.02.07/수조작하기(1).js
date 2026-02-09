function solution(n, control) {
  let count = n;
  for (let str of control) {
    if (str === "w") {
      count += 1;
    } else if (str === "s") {
      count -= 1;
    } else if (str === "d") {
      count += 10;
    } else if (str === "a") {
      count -= 10;
    }
  }
  return count;
}
