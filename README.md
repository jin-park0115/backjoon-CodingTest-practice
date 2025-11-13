fs모듈
모듈(module)이란?
여러 기능들에 관한 코드가 모여있는 하나의 파일이다.
다른 모듈을 사용할 때는 require를, 모듈을 해당 스코프 밖으로 보낼 때에는 module.exports를 사용한다.

fs모듈에서 readFileSync함수로 표준 인풋을 참조해서 불러오는 것.
불러온 입력값을 toString으로, trim()으로 \n 제거, split(" ")으로 구분해서 변수를 배열에 저장 하는 것.
