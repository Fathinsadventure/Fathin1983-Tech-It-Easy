import inventory from "../data/inventory.js";

function createTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;

}

function createTvPrice(price) {
    return `€${price},-`;

}

function createScreenSizesString(sizesArray) {
    let output = '';

    for (let i = 0; i < sizesArray.length; i++) {
        const currentSizeInches = sizesArray[i];
        const currentSizeCm = sizesArray[i] * 2.54;


        output = output + `${currentSizeInches} inch (${currentSizeCm} cm)`;

        if (i < sizesArray.length - 1) {
            output = `${output} | `;
        }
    }

    return output;
}

const singleTvContainer = document.getElementById('single-tv');

singleTvContainer.innerHTML = `
  <h3>${createTvName(inventory[3])}</h3>
  <h4>${createTvPrice(inventory[3].price)}</h4>
  <p>${createScreenSizesString(inventory[3].availableSizes)}</p>
`;

function generateTvList(tvArray) {
    const tvModelList = document.getElementById('inventory-models');

    const modelItems = tvArray.map((tvObject) => {
        return `
      <li>
        <h3>${createTvName(tvObject)}</h3>
        <h4>${createTvPrice(tvObject.price)}</h4>
        <p>${createScreenSizesString(tvObject.availableSizes)}</p>
      </li>
    `;
    });

    tvModelList.innerHTML = `${modelItems.join('')}`;
}

generateTvList(inventory);

// 4-Bonus
const sortPriceButton = document.getElementById('sort-price-button');
const filterAmbilightButton = document.getElementById('sort-ambilight-button');
const filterSoldOutButton = document.getElementById('sort-sold-out-button');

sortPriceButton.addEventListener('click', displaySortedTvs);
filterAmbilightButton.addEventListener('click', displayAmbilightTvs);
filterSoldOutButton.addEventListener('click', displaySoldOutTvs);

function displaySortedTvs() {
    sortTvs(inventory);
    generateTvList(inventory);
}

function displayAmbilightTvs() {
    const itemsWithAmbi = inventory.filter((tv) => {
        return tv.options.ambiLight === true;
    })
    generateTvList(itemsWithAmbi);
}

function displaySoldOutTvs() {
    const soldOutItems = inventory.filter((tv) => {
        return tv.originalStock === tv.sold;
    })
    generateTvList(soldOutItems);
}

export default createTvName;

// //4.a
//
//
// function tvFormat (selectedTv) {
//     return `${selectedTv.brand} ${selectedTv.type} - ${selectedTv.name}`;
// }
// //
// console.log(tvFormat(inventory[i]))
// // //4.b
// function createTvPrice(price) {
//     return `€${price},-`;
// //
// // //4.c
//     function createScreenSizesString(sizesArray) {
//         let output = '';
//
//         for (let i = 0; i < sizesArray.length; i++) {
//             const currentSizeInches = sizesArray[i];
//             const currentSizeCm = sizesArray[i] * 2.54;
//
//
//             output = output + `${currentSizeInches} inch (${currentSizeCm} cm)`;
//
//             if (i < sizesArray.length - 1) {
//                 output = `${output} | `;
//             }
//         }
//
//         return output;
//     }
//
// //4.d
// const singleTvContainer = document.getElementById('single-tv');
//
//     singleTvContainer.innerHTML = `
//   <h3>${createTvName(inventory[3])}</h3>
//   <h4>${createTvPrice(inventory[3].price)}</h4>
//   <p>${createScreenSizesString(inventory[3].availableSizes)}</p>
// `;
//
// //4.e
//     function generateTvList(tvArray) {
//         const tvModelList = document.getElementById('inventory-models');
//
//         const modelItems = tvArray.map((tvObject) => {
//             return `
//       <li>
//         <h3>${createTvName(tvObject)}</h3>
//         <h4>${createTvPrice(tvObject.price)}</h4>
//         <p>${createScreenSizesString(tvObject.availableSizes)}</p>
//       </li>
//     `;
//         });
//
//         tvModelList.innerHTML = `${modelItems.join('')}`;
//     }
//
//     generateTvList(inventory);
// }
