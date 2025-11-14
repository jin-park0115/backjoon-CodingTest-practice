const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim("").split(" ");

let H = parseInt(input[0]);
let M = parseInt(input[1]);

M -= 45;

if (M < 0) {
  M += 60;
  H -= 1;
}

if (H < 0) {
  H = 23;
}

console.log(H, M);

/*
  입력 시간은 24시간 표현을 사용한다 H는 시, M는 분.
  흠 어떻게 풀어야 할까..
  예시 입력이 10 10 이면 출력은 9 25
  0 30 이면 23 45

  원래 설정된거보다 45분이 앞서는. 흠...

  와 어렵다. 내 머리로는 이해가 안간다 gpt에게 물어보자.

  1 번째 제출, 오답. 이유는 const 로 H, M을 선언을 해서 그렇다. H, M은 값이 바뀌어야 한다. 그래서 let을 사용하자.
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf-8").toString().trim("").split(" ");

  const H = parseInt(input[0]);
  const M = parseInt(input[1]);

  M -= 45;

  if (M < 0) {
    M += 60;
    H -= 1;
  }

  if (H < 0) {
    H = 23;
  }

  console.log(H, M);

  문제 풀이

  먼저 M에 들어온 분을 45분 빼줘야 한다.
  근데 이제 음수가 될 경우가 있다. 그거를 if문으로 해서 60을 더해주고 H: 시간도 -1을 해준다.

  그 다음 H: 시간도 음수가 될 경우가 있다.
  하루 전으로 돌아가서 23시로 설정.

  알람시계는 어렵다..
*/
