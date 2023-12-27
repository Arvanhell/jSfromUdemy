//* Exporting module

console.log('Exporting module 🚚'); // logged as first to console
//
//Blocking code
//       console.log('start fetching users');
//        await fetch('https://jsonplaceholder.typicode.com/users');
//       console.log('finish fetching');
//

const shippingCost = 10;
export const cart = [];


export const addToCart = function(product, quantity) {
    cart.push ({product, quantity });
    console.log(`${quantity} ${product} added to cart`);
    // 5 bread added to cart
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice as price, totalQuantity};
//* 'as'
// is for changing name of variable set before into new name which we use 
// after exporting, we can change name now ar after within imported file.


export default function(product, quantity) {
    cart.push ({product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};