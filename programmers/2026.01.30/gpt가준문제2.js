const cart = [
  { id: 1, name: "Basic Hoodie", price: 39000, quantity: 1, coupon: 0.1 },
  { id: 2, name: "Wide Denim", price: 59000, quantity: 2, coupon: 0 },
  { id: 3, name: "Logo Cap", price: 19000, quantity: 1, coupon: 0.2 },
  { id: 4, name: "Leather Belt", price: 31000, quantity: 3, coupon: 0.15 },
];

function solution(cart) {
  let list = [];
  for (let item of cart) {
    console.log(item);
    const pay = Math.floor(item.price * item.quantity * (1 - item.coupon));
    if (pay >= 30000) {
      list.push({
        name: item.name,
        pay: item.pay,
      });
    }
  }
  list.sort((a, b) => {
    if (b.pay !== a.pay) return b.pay - a.pay;
    return a.name - b.name;
  });
  return list.map((v) => `${v.name}: ${v.pay}`);
}

/*
  1. 각 상품의 결제 금액 계산
  결제금액 = price * quantity * (1 - coupon)
  2. 결제금액이 30000 이상인 상품만 남긴다.
  3. 정렬 기준
  - 1순위: 결제금액 내림차순
  - 2순위: 결제금액 같으면 name 사전순 오름차순
  4. 최종결과 형식
  [
    "Wide Denim: 118000",
    "Leather Belt: 79050",
    ...
  ]
  금액은 정수(소수점 버림)
*/
