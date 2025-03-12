//menu items list
const menuUlRef = document.getElementById("Menu");
//cart table
const cartUlRef = document.getElementById("cart");
//no items row
const noItemsUlRef = document.getElementById("no-items");
//remove item button
const removeButtonUlRef = document.getElementById("remove-item");

//array for menu items and cart
const menuItems = [
    "Hamburger - $2.99",
    "Cheeseburger - $3.99",
    "Cheese Pizza - $3.99",
    "Pepperoni Pizza - $4.99",
    "Sausage Pizza - $4.99",
    "Caesar Salad - $3.99",
    "Fries - $1.99",
    "Onion Rings - $2.49",
];

let cartItems = [];

function updateCartUI() {
    cartUlRef.innerHTML = "";
    for (let i = 0; i < cartItems.length; i++) {
const listItem = document.createElement("cart")
        listItem.textContent = cartItems;
        cartUlRef.innerHTML = "<table id=\"cart\">"

        cartUlRef.innerHTML = "<tr id='items'"
        cartUlRef.innerHTML = "<td>Item Name</td>\n" +
            "            <td>Price</td>\n" +
            "            <td>Special Request <br> <textarea></textarea></td>\n" +
            "            <td>Actions</td>\n" +
            "        </td>"
        cartUlRef.appendChild(listItem);
            }
    if (cartItems.length === 0) {
        noItemsUlRef.style.display = "block";
    } else {
        noItemsUlRef.style.display = "none";
    }
}

for (let i = 0; i < menuItems.length; i++) {
    const listItem = document.createElement("tr");
    listItem.textContent = menuItems[i];

    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.setAttribute("data-item", menuItems[i]);

    addButton.addEventListener("click", function () {
        cartItems[cartItems.length] = menuItems[i];
        updateCartUI();
    });

    listItem.appendChild(addButton);
    menuUlRef.appendChild(listItem);
}

removeButtonUlRef.addEventListener("click", function () {
    if (cartItems.length > 0) {
        cartItems.length = cartItems.length - 1;
        updateCartUI();
    }
});

updateCartUI();

