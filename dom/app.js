/* create a new list item and add it

let li = document.createElement("li");
li.innerHTML = "New Item";
li.className = "list-group-item";

let newLi = createElement("li", "list-group-item", "New Item 2");

let list = document.getElementById("list");
list.appendChild(li);
list.appendChild(newLi);

function createElement(tagName, className, innerHTML) {
  let element = document.createElement(tagName);
  element.className = className;
  element.innerHTML = innerHTML;
  return element;
}

// update and remove
let firstChild = list.firstElementChild;

setTimeout(() => {
  firstChild.innerHTML = firstChild.innerHTML + "1";
  firstChild.classList.add("active");
}, 2000);

setTimeout(() => {
  list.lastChild.remove();
}, 3000);

*/

//style by dom

let title = document.getElementById("title");
title.style.color = "#F12FF3";

let list = document.getElementById("list");

[...list.children].forEach((item) => {
  item.style.color = "#F12FF3";
  item.style.backgroundColor = "#FF3";
});

function removeItem() {
  list.removeChild(list.lastChild);
}
// Event Listener

let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  let item = list.lastElementChild.cloneNode(true);
  item.innerHTML = "New Item";
  list.appendChild(item);
});

// [...list.children].forEach((li) => {
//   li.addEventListener("click", function (e) {
//     e.target.remove();
//   });
// });

list.addEventListener("click", function (e) {
  if (this.contains(e.target)) {
    e.target.remove();
  }
});
