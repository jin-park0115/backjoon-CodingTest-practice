const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split(" ");

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

console.log(A + B + C);

/* 처음 풀때는 개발자 마인드로 ㅋㅋㅋㅋ console.log(Number(input[0]+ input[1]+ input[2]))
  했다가 틀려서 그냥 위에 방식 대로 했다, 근데 적다가 보니까 말도 안되는 공식이네
  할거면 input하나하나 Number로 감싸줘야 할거 같다

  console.log(Number(input[0]) + Number(input[1]) + Number(input[2]) )
  이것도 통과가 되긴한다.
  gpt한테 뭐가 가독성 좋은지 물어봐야겠다.

  물어보니까. 짧게쓰고 싶으면 두 번째 방식,
  가독성은 첫 번째 방식이라고 한다.

  근데 두 번째는 만약 input[i]를 여러 번 써야 하면 조금 복잡하고 가독성이 떨어진다고 한다.
*/
