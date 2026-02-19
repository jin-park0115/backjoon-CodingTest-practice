function solution(l, r) {
  let res = [];
  for (let i = l; i <= r; i++) {
    const s = String(i);
    let pass = true;
    for (let ch of s) {
      if (ch !== "0" && ch !== "5") {
        pass = false;
        break;
      }
    }

    if (pass) res.push(i);
  }

  return res.length ? res : [-1];
}

/*
  i = l 부터 r까지 반복문 돌림, i를 문자열로 변경,
  0 또는 5인지 확인 맞으면 배열에 push 아니면 -1
*/
