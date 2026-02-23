function solution(my_string) {
  var answer = new Array(52).fill(0);
  for (let char of my_string) {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      answer[code - 65]++;
    } else if (code >= 97 && code <= 122) {
      answer[code - 97 + 26]++;
    }
  }
  return answer;
}

/*
  charCodeAt()메서드는 문자열에서 특정 인덱스에 위치한 문자의 아스키코드를 나타내는 0부터 65535사이의 정수를 반환한다.
  첫 if문은 대문자냐 아니냐를 판단
  두번째 else if는 소문자냐 아니냐 판단하고
  이 문자의 알파벳 순서를 구하고 그 위치에 1을 더한다라는 뜻이다.
  P가 첫번째 문자면
  대문자이고 80 - 65 = 15
  answer[15] 자리이고
  answer[15] 자리에 + 1을 해라 이말이다

*/
