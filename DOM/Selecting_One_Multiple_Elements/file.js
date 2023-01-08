/*Selecting One/Multiple Elements
Create two unordered lists on the page.
Create a function that selects the second list and applies a class that sets some
background color to it.
Create a second function that, when triggered, selects all <li> elements on the
page.
The function also sets a class that sets some bg color to every <li> element.
Create one more unordered list and one more function
The function​ should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the
text to uppercase. */
function setBgColor() {
  let list = document.querySelector("#list2");
  list.classList.add("bg-color");
}
function setAllBgColor() {
  let items = document.querySelectorAll("li");
  items.forEach(function (item) {
    item.style.backgroundColor = "red";
  });
}
function setBgColorAndTransformText() {
  // Select all list items in the last list
  //const listItems = document.querySelectorAll("ul:last-of-type li");
  let listItems = document.querySelectorAll("ul:last-of-type li");

  // Apply the class to each list item
  listItems.forEach((item) => {
    item.classList.add("list3");
    item.textContent = item.textContent.toUpperCase();
  });
}
const button = document.querySelector("#btn");

// Add the event listener
button.addEventListener("click", setBgColorAndTransformText);
