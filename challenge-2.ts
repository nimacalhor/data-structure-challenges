import * as fs from "fs";
interface PriceType {
  base_price: number;
  discount: number;
  tax: number;
  duration: number;
}

interface ProductType {
  id: number;
  name: string;
  price_list: PriceType[];
}

const products: ProductType[] = [
  {
    id: 1,
    name: "digikala.com",
    price_list: [
      { base_price: 100000, discount: 0, tax: 2, duration: 5 },
      { base_price: 50000, discount: 5, tax: 3, duration: 1 },
      { base_price: 87000, discount: 5, tax: 3, duration: 4 },
      { base_price: 67000, discount: 5, tax: 3, duration: 2 },
      { base_price: 72000, discount: 5, tax: 3, duration: 3 },
    ],
  },
  {
    id: 2,
    name: "scaler.com",
    price_list: [
      { base_price: 45000, discount: 15, tax: 8, duration: 2 },
      { base_price: 30000, discount: 20, tax: 10, duration: 1 },
      { base_price: 65000, discount: 15, tax: 8, duration: 3 },
    ],
  },
  {
    id: 3,
    name: "irantools.ir",
    price_list: [
      {
        base_price: 20000,
        discount: 10,
        duration: 4,
        tax: 20,
      },
      {
        base_price: 17000,
        discount: 0,
        duration: 3,
        tax: 25,
      },
      {
        base_price: 12000,
        discount: 20,
        duration: 1,
        tax: 34,
      },
      {
        base_price: 15000,
        discount: 20,
        duration: 2,
        tax: 34,
      },
    ],
  },
  {
    id: 4,
    name: "github.com",
    price_list: [
      { base_price: 150000, discount: 0, tax: 2, duration: 5 },
      { base_price: 55000, discount: 5, tax: 3, duration: 1 },
      { base_price: 89000, discount: 5, tax: 3, duration: 4 },
      { base_price: 63000, discount: 5, tax: 3, duration: 2 },
      { base_price: 77000, discount: 5, tax: 3, duration: 3 },
    ],
  },
];

const deepCopy = <T>(data: T): T => JSON.parse(JSON.stringify(data));

function getMinBasePrice(priceList: PriceType[]) {
  return Math.min(...priceList.map((price) => price.base_price));
}

const sortedProducts = deepCopy(products)
  .map((product) => {
    // sort price list
    product.price_list.sort((a, b) => a.base_price - b.base_price);
    return product;
  })
  .sort((a, b) => {
    // sort products by min base_price
    const minBasePriceA = getMinBasePrice(a.price_list);
    const minBasePriceB = getMinBasePrice(b.price_list);
    return minBasePriceA - minBasePriceB;
  });

fs.writeFileSync("./sortedProducts.json", JSON.stringify(sortedProducts));
