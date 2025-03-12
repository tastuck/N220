const itemsUlRef = document.querySelector("#items");
const cartUlRef = document.querySelector("cart");
const removeButtonRef= document.querySelector("#remove-item");

const items = [
    "apple",
    "orange",
    "plum",
    "pear",
    "potato"
];

const cart = [];

function removeItemFromCart() {

}

function showCart(){
    for (let i = 0; i < cart.length; i++) {
        //cartUlRef.innerHTML += "<li>" + cart[i] + "</li>";
        cartUlRef.innerHTML += `<li>${cart[i]}</li>`;
    }
}
function addItemToCart(e) {
cart.push(e.target.dataset.name);
}

for (let i = 0; i < items.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = items[i];

}

const newButton = document.createElement("button");
newButton.innerText = "+";
newButton.dataset.name = items[i];
newButton.onclick = addItemToCart;
newLi.appendChild(newButton);


itemsUlRef.appendChild(newLi);

//itemsUlRef.innerHTML += "</li>";