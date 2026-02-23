// DOM experiements

const itemsToChange = document.querySelectorAll(".js-target");

// for (let i = 0; i < itemsToChange.length; i++) {
//   const currentItem = itemsToChange[i];
//   currentItem.innerHTML = "Changed";
// }

// itemsToChange.forEach((currentItem) => {
//   currentItem.innerHTML = "Changed with forEach";
// });

// for (const item of itemsToChange) {
//   item.innerHTML = "Changed with forOf Loop";
// }

for (const [index, item] of itemsToChange.entries()) {
  item.innerHTML = `${index} - Changed with For OF Loop`;
}
