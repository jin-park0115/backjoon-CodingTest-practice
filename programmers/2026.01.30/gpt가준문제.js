const products = [
  {
    id: 1,
    name: "Basic Hoodie",
    price: 39000,
    discountRate: 0.2,
    inStock: true,
  },
  {
    id: 2,
    name: "Wide Denim",
    price: 59000,
    discountRate: 0.15,
    inStock: false,
  },
  { id: 3, name: "Logo Cap", price: 19000, discountRate: 0.3, inStock: true },
  {
    id: 4,
    name: "Minimal Tee",
    price: 29000,
    discountRate: 0.2,
    inStock: true,
  },
  {
    id: 5,
    name: "Cargo Pants",
    price: 69000,
    discountRate: 0.15,
    inStock: true,
  },
  {
    id: 6,
    name: "Leather Belt",
    price: 31000,
    discountRate: 0.2,
    inStock: true,
  },
];

function solution(products) {
  return products
    .filter((v) => v.inStock === true && v.price >= 30000)
    .sort((a, b) => {
      if (b.discountRate !== a.discountRate)
        return b.discountRate - a.discountRate;
    })
    .map((item) => `${item.name}(${item.price})`);
}

/*
  1. inStock: true인 상품만남겨라,
  2. price가 30000이상인 것만 남겨라
  3. 남은 상품을 discoutRate 내림차순으로 정렬
  4. 최종 결과를 "name(price)"형태의 문자열 배여로 반환
    예: "Basic Hoodie(39000)"
*/
