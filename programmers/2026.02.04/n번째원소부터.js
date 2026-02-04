function solution(num_list, n) {
  return num_list.slice(n - 1);
}

/*

  n번째부터	slice(n - 1)
  n번째까지	slice(0, n)
  n개	slice(0, n)
  뒤에서 n개	slice(length - n)
  앞에서 n개	slice(0, n)

*/
