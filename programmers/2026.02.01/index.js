const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString("").trim().split("\n");

const [N, K, M] = input[0].split(" ").map(Number);

const list = [];
for (let i = 1; i <= N; i++) {
  const [name, priceStr, discountStr, stockStr, ratingStr] = input[i]
    .trim()
    .split(" ");
  const price = Number(priceStr)
  const discount = Number(discountStr)
  const stock = Number(stockStr)
  const rating = Number(ratingStr)

  const finalPrice = Math.floor(price * (1 - discount))

  if (stock > 0 && finalPrice >= M){
    list.push({name, finalPrice, rating})
  }
}


