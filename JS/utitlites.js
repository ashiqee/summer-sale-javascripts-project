//get product name
function getProductName(elementId) {
  const getData = document.getElementById(elementId);
  const getDataString = getData.innerText;
  return getDataString;
}

//get price from product
function getProductPrice(priceId) {
  const getDataText = document.getElementById(priceId);
  const getDataString = getDataText.innerText;
  const getDataValue = parseFloat(getDataString);
  return getDataValue;
}

//Product Name set in List Cart
function setTextElement(productName) {
  const cartListEntry = document.getElementById("list-cart");
  const count = cartListEntry.childElementCount;
  const p = document.createElement("p");
  p.innerHTML = `
  ${count + 1}. ${productName}
  `;
  cartListEntry.appendChild(p);
}

// Set Text In Total Price
function setTextPrice(setPriceElementId, totalPrice) {
  const setTextEntry = document.getElementById(setPriceElementId);
  setTextEntry.innerText = totalPrice.toFixed(2);
}

// coupon input Enable

function enableCouponBtn() {
  const inputText = document.getElementById("input-coupon-code");
  const inputTextString = inputText.value;

  const totalPriceValue = getProductPrice("total-price");

  if (inputTextString == "SELL200" && totalPriceValue >= 200) {
    document.getElementById("coupon-btn").disabled = false;
  }

  if (inputTextString.length == 7) {
    inputText.value = "";
  }
}
