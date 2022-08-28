import inventory from "../data/inventory.js";


// 1.a
//
//
const typeOfInventory = inventory.map((item) => {
    return item.type
})

console.log(typeOfInventory);

// //1.b
const soldOut = inventory.filter((tvs) => {
    return tvs.originalStock === tvs.sold;

})
console.log(soldOut);
//
//1.c
const ambiLightIncluded = inventory.filter((ambiIncluded) => {
    return ambiIncluded.options.ambiLight === true;

})
console.log(ambiLightIncluded);
//
//1.d
inventory.sort((a, b) => a.price - b.price) ;
console.log(inventory);
// ///////////////////
//

export default typeOfInventory;
