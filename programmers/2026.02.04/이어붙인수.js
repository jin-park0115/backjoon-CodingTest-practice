function solution(num_list) {
  const odd = "";
  const even = "";

  for (let x of num_list) {
    if (x % 2 === 1) odd += x;
    else even += x;
  }
  return Number(odd) + Number(even);
}
