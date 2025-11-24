const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

let N = input[1].split(" ").map(Number); // [20, 10, 35, 30, 7]
const min = Math.min(...N);
const max = Math.max(...N);

console.log(min, max); // 3 번째 방식, 가독성이 최고

/*
  최소, 최대
  이거는 min(), max()를 써야 하겠군,
  Math.min()을 해야 하는데 그냥 min을 했군..

  첫 번째 줄에 개수, 두 번째 줄에 첫 번째 줄에 들어온 숫자개의 정수를 공백으로 해서 주어진다잉.


  1. 오답
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

  let N = input[1].split(" ").map(Number); // [20, 10, 35, 30, 7]
  // min(), max()
  let res = []
  res =+ NN.min()
  res =+ NN.max()
  console.log(res[0], res[1])


  여기서 ...N 스프레드연산자를 사용한 이유는
  Math.min(), max()는 숫자를 인자로 받는 함수이다,
  그래서 배열인 N을 배열을 얕게 복사하면서, 배열 형태를 없애고 각각의 요소로 펼친다.



  2번째 방법 통과
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

  let N = input[1].split(" ").map(Number); // [20, 10, 35, 30, 7]
  let res = [];
  res.push(Math.min(...N));
  res.push(Math.max(...N));

  console.log(res[0], res[1]);
*/
