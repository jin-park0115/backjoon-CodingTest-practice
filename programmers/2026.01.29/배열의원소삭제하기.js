function solution(arr, delete_list) {
  return arr.filter((v) => !delete_list.includes(v));
}

/*
  정수 배열 arr과 delete_list가 있다. arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던
  순서를 유지한 배열을 return 하는 solution 함수를 작성하라.

  정수 배열 arr을 filter를 써서 delete_list에 포함이 되있나를 체크 함 포함이 되있다면 포함된 애들이 필터링 되고
  앞에 부정연산자를 넣어서 포함이 안된애들을 반환한다.
*/
