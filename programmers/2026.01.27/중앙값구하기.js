function solution(array) {
  array.sort((a, b) => a - b);
  const middle = Math.floor(array.length / 2);

  return array[middle];
}

/*
  중앙 값 구하기 문제.
  풀이: 먼저 입력으로 들어오는 array를 오름차순으로 정렬 한다.
  그 후 배열의 가운데 값을 구한다. floor를 사용하여 소수점 이하는 버린다. 길이가 5일 때, 5/2 = 2.5 이므로 floor를 사용하여 2로 만든다. floor() = 내림.
  마지막으로 정렬된 배열에서 가운데 값을 리턴한다.
*/
