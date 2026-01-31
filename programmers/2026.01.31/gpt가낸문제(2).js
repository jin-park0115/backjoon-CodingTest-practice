const orders = [
  { brand: "Nike", quantity: 1 },
  { brand: "Adidas", quantity: 2 },
  { brand: "Nike", quantity: 3 },
  { brand: "Puma", quantity: 1 },
  { brand: "Adidas", quantity: 1 },
  { brand: "Nike", quantity: 2 },
];

function solution(orders) {
  const totals = new Map();

  for (const { brand, quantity } of orders) {
    totals.set(brand, (totals.get(brand) || 0) + quantity);
  }

  return [...totals.entries()]
    .filter(([brand, qty]) => qty >= 3)
    .sort(
      ([brandA, qtyA], [brandB, qtyB]) =>
        qtyB - qtyA || brandA.localeCompare(brandB),
    )
    .map(([brand, qty]) => `${brand}: ${qty}`);
}
