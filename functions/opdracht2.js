import inventory from "../data/inventory.js";

//2.a


let soldTelevisions = 0;

for (let i =0; i <inventory.length; i++) {
    soldTelevisions = soldTelevisions + (inventory[i].sold);
}
console.log(soldTelevisions);

//2.b
const soldItemsContainer = document.getElementById('items-sold');
soldItemsContainer.innerHTML = `
    <h3>Aantal verkochte items<h3>
    <h2>${soldTelevisions}</h2>
`;

//2.c
let stockItems = 0;

for (let i = 0; i < inventory.length; i++) {
    stockItems = stockItems + inventory[i].originalStock;
}

console.log(stockItems);

//2.d
const stockItemsContainer = document.getElementById('original-items');

stockItemsContainer.innerHTML = `
  <h3>Aantal ingekochte items<h3>
  <h2>${stockItems}</h2>
`;

//2.e
const itemsToSellContainer = document.getElementById('items-left-to-sell');

itemsToSellContainer.innerHTML = `
  <h3>Items te verkopen<h3>
  <h2>${stockItems - soldTelevisions}</h2>
`;

export default soldTelevisions;

