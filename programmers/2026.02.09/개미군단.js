function solution(hp) {
  let count = 0;

  count += Math.floor(hp / 5);
  hp %= 5;

  count += Math.floor(hp / 3);
  hp %= 3;

  count += hp;
  return count;
}

/*
  hp = 39

  5: Math.floor(39 / 5) = 7 → 7마리 (35)
  남은 hp = 4

  3: Math.floor(4 / 3) = 1 → 1마리 (3)
  남은 hp = 1

  1: 1마리

*/
