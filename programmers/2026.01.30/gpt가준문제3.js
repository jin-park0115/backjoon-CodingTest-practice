const orders = [
  { id: 1, brand: "Nike", price: 120000, quantity: 1, member: true },
  { id: 2, brand: "Adidas", price: 89000, quantity: 2, member: false },
  { id: 3, brand: "New Balance", price: 139000, quantity: 1, member: true },
  { id: 4, brand: "Nike", price: 59000, quantity: 3, member: false },
  { id: 5, brand: "Puma", price: 79000, quantity: 1, member: true },
];

function solution(orders) {
  list = [];
  for (let item of orders) {
    const pay = item.member
      ? Math.floor(item.price * item.quantity * 0.9)
      : Math.floor(item.price * item.quantity);
    if (pay >= 1000000) {
      list.push({
        brand: item.brand,
        pay,
      });
    }
  }
  list.sort((a, b) => {
    if (b.pay !== a.pay) return b.pay - a.pay;
    return a.brand - b.brand;
  });
  return list.map((v) => `${v.brand} - ${v.pay}`);
}

/*
  주문금액 계산
  회원인 경우 주문금액의 10% 할인
  최종금액이 1000000 이상인 주문만 남긴다
  최종금액은 내림차순하고 brand 사전순 오름차순한다.

  [
    "Nike - 120000",
    "New Balance - 125100",
    ...
  ]
  오답노트:
  list let, const, var선언 안하고 씀,
  가격 0을 하나 더 붙임
  문자열 정렬은 localeCompare를 써야 한다. return a.brand.localeCompare(b.brand)
*/
