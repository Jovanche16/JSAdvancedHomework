class Product {
    constructor(name, category, hasDiscount, price) {
        this.name = name;
        this.category = category;
        this.hasDiscount = hasDiscount;
        this.price = price;
    }
}

let rearrangedProducts = [
    new Product('Strawberries', 'Food', true, 14),
    new Product('Tomato', 'Food', true, 18),
    new Product('Butter', 'Dairy', true, 20),
    new Product('Cheese', 'Dairy', false, 30),
    new Product('Banana', 'Food', false, 10),
    new Product('Pork', 'Meat', false, 38),
    new Product('Cucumber', 'Food', false, 7),
    new Product('Apple', 'Food', true, 15),
    new Product('Milk', 'Dairy', false, 25),
    new Product('Grapes', 'Food', true, 16),
    new Product('Chicken', 'Meat', true, 35),
    new Product('Orange', 'Food', true, 12),
    new Product('Eggplant', 'Food', false, 22),
    new Product('Fish', 'Meat', false, 28),
    new Product('Peach', 'Food', false, 24)
];


const vowels = ['a', 'e', 'i', 'o', 'u'];

let isPriceGreaterThan20 = product => product.price > 20;
let isFoodOnDiscount = product => product.category === 'Food' && product.hasDiscount;
let getDiscountedPrice = product => product.hasDiscount ? product.price : null;
let isNameStartingWithVowelAndNotOnDiscount = product => {
    return vowels.includes(product.name[0].toLowerCase()) && !product.hasDiscount;
};

function applyCheck(products, checkFunction) {
    return products.filter(checkFunction);
}

console.log('Products with price greater than 20:', applyCheck(products, isPriceGreaterThan20));
console.log('Names of Food products on discount:', applyCheck(products, isFoodOnDiscount).map(product => product.name));
console.log('Prices of products on discount:', applyCheck(products, isFoodOnDiscount).map(getDiscountedPrice));
console.log('Name and price of products starting with a vowel that are not on discount:', applyCheck(products, isNameStartingWithVowelAndNotOnDiscount).map(product => ({ name: product.name, price: product.price })));
