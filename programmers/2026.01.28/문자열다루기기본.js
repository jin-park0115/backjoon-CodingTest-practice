function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  for (let char of s) {
    if (char < "0" || char > "9") return false;
  }
  return true;
}

/*
  숫자에는 length가 안되지만, 문자열에는 length가 됨.
  isNaN 은 이게 숫자가 아니야? 라고 물어보는 함수이다.
  is Not a Number의 약자.
  ex) isNaN("1234") -> 이거는 숫자니까 false
      isNaN("a234") -> 이거는 숫자가 아니니까 true
  그래서 우리는 답을 4자리나 6자리 모두 숫자 일 때 true를 반환해야 하므로 isNaN의 결과에 !를 붙여서 반대로 한다.

  전 코드는 정규표현식이 들어가면 맞다고 나와버리기에, 틀린답이라나와서, 고쳤다.
*/
