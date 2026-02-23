function solution(my_string, s, e) {
  let arr = my_string.split("");
  let rev = arr.slice(s, e + 1).reverse();

  arr.splice(s, e - s + 1, ...rev);

  return arr.join("");
}

/*
  s 부터 e - s + 1부분에 rev 아까 잘라놓은 원소 집어 넣기
*/
