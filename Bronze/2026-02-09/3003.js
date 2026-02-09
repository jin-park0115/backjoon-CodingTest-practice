/* 킹, 퀸, 룩, 비숍, 나이트, 폰 */
/*
  킹 = 1 퀸 = 1 룩 = 2 비숍 = 2 나이트 = 2 폰 = 8
  단순하게 기존 있던 피스 - 입력으로 받는 피스를 계산해준다, 대신 map으로 index사용
*/

const fs = require("fs");
const input = fs
  .readFileSync(0, "utf-8")
  .toString("")
  .trim()
  .split(" ")
  .map(Number);

const whiteChess = input;
const blcakChess = [1, 1, 2, 2, 2, 8];

const piece = blcakChess.map((v, i) => v - whiteChess[i]);

console.log(piece.join(" "));
