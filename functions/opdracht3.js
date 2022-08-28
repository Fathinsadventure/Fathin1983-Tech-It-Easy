import inventory from "../data/inventory.js";

function createBrandList(tvArray) {
    const brandsList = document.getElementById('inventory-brands');

    const listItems = tvArray.map((tv) => {
        return `<li>${tv.brand}</li>`;
    });

    brandsList.innerHTML = `${listItems.join('')}`;
}

createBrandList(inventory);


export default createBrandList;









// import inventory from "../main.js";
// // //3.a
//
// //
// //
// // const listOfBrands = document.getElementById('inventory-brands');
// //
// // const listOfItems = inventory.map((tv) => {
// //     return `<li>${tv.brand}</li>`;
// // });
// // //
// // listOfBrands.innerHTML = `${listOfItems.join('')}`;
// //3.b
// function createListOfbrands(tvArray) {
//     const listOfBrands = document.getElementById('inventory-brands');
//
//     const listOfItems = tvArray.map((tv) => {
//         return `<li>${tv.brand}</li>`;
//     });
//
//     listOfBrands.innerHTML = `${listOfItems.join('')}`;
// }
//
// createListOfbrands(inventory);
//
//
//
