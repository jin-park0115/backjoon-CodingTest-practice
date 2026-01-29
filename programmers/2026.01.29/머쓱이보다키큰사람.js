function solution(array, height) {
  let res = array.filter((v) => v > height);
  return res.length;
}

/*
  머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때,
  머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성하라.

  function solution(array, height) {
    let res = 0
    for (let arr of array){
        if(height < arr){
            res += 1
        }
    }
    return res;
  }
  내 풀이: array를 arr로 풀어서 하나씩 비교 후 res 변수에 카운트를 늘리는 방법.

  위 풀이는 filter로 풀이 한 방법이다. 변수안에 필터로 머쓱이보다 키 큰 애들을 저장, 그리고 return으로 배열 길이 반환.
  저 방법이 좀더 안전해 보인다.
*/
