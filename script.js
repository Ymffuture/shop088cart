// Function to increase quantity for the first item
function increase() {
  var quantityElement = document.getElementById("quantity");
  var currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
  updateCart();
}

// Function to decrease quantity for the first item
function decrease() {
  var quantityElement = document.getElementById("quantity");
  var currentQuantity = parseInt(quantityElement.textContent);
  if (currentQuantity > 0) {
    quantityElement.textContent = currentQuantity - 1;
    updateCart();
    console.log(`decreased button clicked`)
  }
}

// Function to increase quantity for the second item
function increase2() {
  var quantityElement = document.getElementById("quantity2");
  var currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
  updateCart();
}

// Function to decrease quantity for the second item
function decrease2() {
  var quantityElement = document.getElementById("quantity2");
  var currentQuantity = parseInt(quantityElement.textContent);
  if (currentQuantity > 0) {
    quantityElement.textContent = currentQuantity - 1;
    updateCart();
    console.log(`decreased2 button clicked`)
  }
}

// Function to increase quantity for the third item
function increase3() {
  var quantityElement = document.getElementById("quantity3");
  var currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
  updateCart();
}

// Function to decrease quantity for the third item
function decrease3() {
  var quantityElement = document.getElementById("quantity3");
  var currentQuantity = parseInt(quantityElement.textContent);
  if (currentQuantity > 0) {
    quantityElement.textContent = currentQuantity - 1;
    updateCart();
    console.log(`decreased3 button clicked`)
  }
}

// Function to increase quantity for the fourth item
function increase4() {
  var quantityElement = document.getElementById("quantity4");
  var currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
  updateCart();
}

// Function to decrease quantity for the fourth item
function decrease4() {
  var quantityElement = document.getElementById("quantity4");
  var currentQuantity = parseInt(quantityElement.textContent);
  if (currentQuantity > 0) {
    quantityElement.textContent = currentQuantity - 1;
    updateCart();
    console.log(`decreased4 button clicked`)
  }
}

// Function to increase quantity for the fifth item
function increase5() {
  var quantityElement = document.getElementById("quantity5");
  var currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
  updateCart();
}

// Function to decrease quantity for the fifth item
function decrease5() {
  var quantityElement = document.getElementById("quantity5");
  var currentQuantity = parseInt(quantityElement.textContent);
  if (currentQuantity > 0) {
    quantityElement.textContent = currentQuantity - 1;
    updateCart();
    console.log(`decreased5 button clicked`)
  }
}

function increase6() {
  var quantityElement = document.getElementById("quantity6");
  var currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
  updateCart();
}

function decrease6() {
  var quantityElement = document.getElementById("quantity6");
  var currentQuantity = parseInt(quantityElement.textContent);
  if (currentQuantity > 0) {
    quantityElement.textContent = currentQuantity - 1;
    updateCart();
    console.log(`decreased6 button clicked`)
  }
}
// Function to update the cart total
function updateCart() {
  var items = document.querySelectorAll(".items");
  var totalPrice = 0;
  var totalQuantity = 0;

  items.forEach(function (item) {
    var quantity = parseInt(item.querySelector(".quantity").textContent);
    var price = parseFloat(
      item.querySelector(".price-quat h3").textContent.replace(/[^\d.]/g, "")
    );
    totalQuantity += quantity;
    totalPrice += price * quantity;
  });
  var totalPriceWithVAT = totalPrice * (1 + 0.015);
  document.querySelector(".cartAmount").textContent = totalQuantity;
  document.querySelector(".cart-total-price").textContent =
    "R" + totalPriceWithVAT.toFixed(2);
}

// Function to save item quantity to localStorage
function saveToLocalStorage(itemId, quantity) {
  localStorage.setItem(itemId, quantity);
}

// Function to retrieve item quantity from localStorage and update the UI
function retrieveFromLocalStorage() {
  var items = document.querySelectorAll(".items");
  items.forEach(function (item) {
    var itemId = item.id.split("-")[1];
    var quantity = localStorage.getItem(itemId);
    if (quantity !== null) {
      item.querySelector(".quantity").textContent = quantity;
    }
  });
}

// Initial cart update
updateCart("+");
// Retrieve item quantities from localStorage on page load
retrieveFromLocalStorage();

document.addEventListener("DOMContentLoaded", function () {
  const purchaseBtn = document.getElementById("purchase-btn");
  const purchasedList = document.getElementById("purchased-list");

  purchaseBtn.addEventListener("click", function () {
    const items = document.querySelectorAll(".items");
    purchasedList.innerHTML = ""; // Clear the list before adding items

    items.forEach((item) => {
      const quantityElem = item.querySelector(".quantity");
      const quantity = parseInt(quantityElem.textContent);

      if (quantity > 0) {
        const itemName = item.querySelector("h4").textContent;
        const itemPrice = item.querySelector("h3").textContent;

        const img = item.querySelectorAll(".pics").textContent; // trying to add a pic

        const listItem = document.createElement("li");
        listItem.textContent = `${quantity} x ${itemName} - ${itemPrice} ${img}`;
        purchasedList.appendChild(listItem);
      }
    });
  });
});
