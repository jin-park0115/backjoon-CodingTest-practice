const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString("").trim();

const str = input.toUpperCase().split("");
const count = {};

for (let s of str) {
  count[s] = (count[s] || 0) + 1;
}

let max = 0;
for (let m in count) {
  if (count[m] > max) {
    max = count[m];
  }
}

let res = "";
let cnt = 0;

for (let key in count) {
  if (count[key] === max) {
    res = key;
    cnt++;
  }
}

console.log(cnt > 1 ? "?" : res);

/*
  출력은 toUpperCase()로
  알파벳이 등장횟수가 같으면 ?로

  알파벳 등장횟수 세기
  최대 등장 횟수 찾기
  최대값이 1개면 그 문자, 여러개면 ?

  Object를 써야 한다
  왜? 알파벳마다 개수를 세야 하기 때문이다

  1.등장횟수세기
  const count = {};
  for (let s of str){
    count[s] = (count[s] || 0) + 1 // 처음 등장하면 undefinde -> 0 있으면 기존 값 사용
  }
  2. 최대 등장 횟수 세기
  let max = 0;
  for(let m in count){
  if(count[m] > max){
      max = count[m]
    }
  }
  3. 최대값이 몇개인지 체크
  let res = "";
  let cnt = 0;

  for (let key in count) {
    if (count[key] === max) {
      res = key;
      cnt++;
    }
  } // cnt > 1이면 ? 아니면 res


  꼭 기억할 패턴 빈도수 문제의 교과서인 문제라고 한다.
  obj[x] = (obj[x] || 0) + 1;
*/
