const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split(" ");
// +랑 똑같다. 근데 Number도 되나 해보니까 된다
// 차이점을 찾아보니까. parseInt는 숫자랑 문자열이 섞이면 숫자가 나오고 Number는 NaN으로 뜨고
// 빈 문자열("")이면 parseInt는 NaN, Number는 0
const A = Number(input[0]);
const B = Number(input[1]);

console.log(A - B);
