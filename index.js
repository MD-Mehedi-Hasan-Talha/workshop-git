const { getProducts } = require('./server/server.js');
console.log("hello world!")

const products = getProducts();

console.log(products);
