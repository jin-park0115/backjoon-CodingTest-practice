function solution(a, b) {
  const concat = Number(`${a}${b}`);
  const muliply = 2 * a * b;

  return concat >= muliply ? concat : muliply;
}
