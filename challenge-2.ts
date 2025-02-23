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
