function solution(myString, pat) {
  let res = "";
  for (let s of myString) {
    if (s === "A") {
      return (res += "B");
    } else return (res += "A");
  }
  return res.includes(pat);
}

/*
  내 코드에 문제 return을 반복문에 넣어서 첫 글자만 처리하고 함수가 바로 종료된다. 그래서 문자열 전체를 변환하지 못함
  function solution(myString, pat) {
    let res = "";
    for (let s of myString) {
      if (s === "A") {
        (res += "B");
      } else return (res += "A");
    }
    return res.includes(pat)? 1 : 0;
  }
  이것이 최종 코드
  또 오답이뭐냐면 res.includes(pat)을 하면 true/false가 반환이 됨, 여기서 결과는 1 or 0이 나와야 하기에 저렇게 했다.
*/
