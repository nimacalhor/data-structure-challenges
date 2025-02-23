"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var products = [
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
var deepCopy = function (data) { return JSON.parse(JSON.stringify(data)); };
function getMinBasePrice(priceList) {
    return Math.min.apply(Math, priceList.map(function (price) { return price.base_price; }));
}
var sortedProducts = deepCopy(products)
    .map(function (product) {
    // sort price list
    product.price_list.sort(function (a, b) { return a.base_price - b.base_price; });
    return product;
})
    .sort(function (a, b) {
    // sort products by min base_price
    var minBasePriceA = getMinBasePrice(a.price_list);
    var minBasePriceB = getMinBasePrice(b.price_list);
    return minBasePriceA - minBasePriceB;
});
fs.writeFileSync("./sortedProducts.json", JSON.stringify(sortedProducts));
