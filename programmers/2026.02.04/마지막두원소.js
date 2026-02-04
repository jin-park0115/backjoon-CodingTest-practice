function solution(num_list) {
  let num = [];
  for (let i = 0; i < num_list.length; i++) {
    num.push(num_list[i]);
  }
  num[num.length - 1] > num[num.length - 2]
    ? num.push(num[num.length - 1] - num[num.length - 2])
    : num.push(num[num.length - 1] * 2);
  return num;
}

/*
  저번에도 그랬던거 같은데 배열안에 [-1] 이건 안됨.
  그래서 arr[arr.length - 1] 이렇게 해야 마지막 원소값이 나옴.
*/
