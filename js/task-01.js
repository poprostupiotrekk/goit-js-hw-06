const categories = document.querySelectorAll(".item");
const categoriesLenght = categories.length;

console.log(`Number of categories: ${categoriesLenght}`);
for (const category of categories) {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
}
