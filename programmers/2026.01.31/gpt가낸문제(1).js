const orders = [
  { brand: "Nike", price: 120000, quantity: 1 },
  { brand: "Adidas", price: 89000, quantity: 2 },
  { brand: "Nike", price: 59000, quantity: 3 },
  { brand: "Puma", price: 79000, quantity: 1 },
  { brand: "Adidas", price: 45000, quantity: 1 },
  { brand: "Nike", price: 99000, quantity: 1 },
];

function solution(orders) {
  let totals = {};
  for (let item of orders) {
    const amount = item.price * item.quantity;
    if (totals[item.brand] === undefined) {
      totals[item.brand] = amount;
    } else {
      totals[item.brand] += amount;
    }
  }
  const res = Object.entries(totals)
    .map(([brand, amount]) => ({ brand, amount }))
    .filter((v) => v.amount >= 150000)
    .sort((a, b) => b.amount - a.amount || a.brand.localeCompare(b.brand))
    .map((v) => `${v.brand} : ${v.amount}`);

  return res;
}
