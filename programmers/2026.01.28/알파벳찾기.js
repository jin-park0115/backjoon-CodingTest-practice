const fs = require("fs");
const input = fs.readFile(0, "utf-8").toString().trim();

function solution() {
  const S = input[0];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const res = [];

  for (let char of alphabet) {
    res.push(S.indexOf(char));
  }

  console.log(res.join(""));
}
solution();

/*
  알파벳 총 27개
  indexOf() 메서드는 배열에서 특정요소를 찾을 때 사용.
  indexOf()는 찾는 요소가 없으면 -1을 반환하고, 있다면 처음 등장하는 위치에 index를 반환한다.
*/
