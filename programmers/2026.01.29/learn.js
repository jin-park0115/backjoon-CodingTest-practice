const basket = [
  { name: "사과", price: 1000 },
  { name: "포도", price: 5000 },
  { name: "바나나", price: 2000 },
];

const targetIdx = basket.findIndex((item) => item.name === "포도");

if (targetIdx !== -1) {
  basket.splice(targetIdx, 1);
}

console.log(basket);

let birthYears = [1990, 2010, 2005, 1985, 2015];
function solution(birthYears) {
  return birthYears.map((v) => 2026 - v).filter((v) => v >= 19);
}

let users = [
  { name: "A", score: 80 },
  { name: "B", score: 0 },
  { name: "C", score: 50 },
  { name: "D", score: 0 },
];

function del(users) {
  let a = users.findIndex((v) => v.score === 0);
  if (a !== -1) {
    users.splice(a, 1);
  }
  return users;
}

let data = [1, 2, 2, 3, 4, 4, 5];
function wndqhr(data) {
  // 1
  // 2
  // 2
  // 3
  // 4
  data.filter((v) => v);
}

// 4.
let word = "사과 바나나 포도 딸기";
let ban = ["바나나", "딸기"];

function noword(word, ban) {
  return word
    .split(" ")
    .map((v) => (ban.includes(v) ? "**" : v))
    .join(" ");
}
