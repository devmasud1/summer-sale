let total = 0;

function addToCard(id, price) {
  const productName = document.getElementById(id);
  const product = productName.innerText;

  const productPrice = document.getElementById(price);
  const product1 = productPrice.innerText;

  total = parseInt(total) + parseInt(product1);

  const applyBtn = document.getElementById("apply-btn");
  const PurchaseBtn = document.getElementById("PurchaseBtn");

  if (total >= 200) {
    applyBtn.removeAttribute("disabled");
  }
  if (total > 0) {
    PurchaseBtn.removeAttribute("disabled");
  }

  add(product, total);
}

let count = 0;

function add(name, price) {
  const addedItem = document.getElementById("addedItem");
  document.getElementById("addedItemPrice").innerText = price.toFixed(2);

  const count = addedItem.childElementCount;
  const h1 = document.createElement("h1");
  h1.innerHTML = `${count + 1}. ${name}`;
  addedItem.appendChild(h1);
}

function applyForDiscound() {
  const cuponId = document.getElementById("cupon-id");
  const cupon = cuponId.value;
  if (cupon === "SELL200") {
    const discountAmount = (total * 20) / 100;
    const discountedPrice = total - discountAmount;

    document.getElementById("discound-price").innerText = discountAmount.toFixed(2);
    document.getElementById("grand-total").innerText = discountedPrice.toFixed(2);
  }
}

function goHome() {
  window.location.reload();
}
