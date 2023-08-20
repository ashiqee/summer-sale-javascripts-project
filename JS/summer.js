// product one btn call
function productOne() {
  const productOne = getProductName("product-name-one");

  const productPrice = getProductPrice("product-one-price");

  // set product name cart list
  setTextElement(productOne);

  //get total price
  const previousTotalPrice = getProductPrice("total-price");

  //   calculate price

  const totalPrice = previousTotalPrice + productPrice;

  //set total price
  setTextPrice("total-price", totalPrice);
  setTextPrice("total", totalPrice);

  document.getElementById("make-purchase").disabled = false;
}

// product two btn call
function productTwo() {
  const productName = getProductName("product-name-two");
  // set product name cart list
  setTextElement(productName);

  const productPrice = getProductPrice("product-two-price");

  //get total price
  const previousTotalPrice = getProductPrice("total-price");

  //   calculate price

  const totalPrice = previousTotalPrice + productPrice;

  //set total price
  setTextPrice("total-price", totalPrice);
  setTextPrice("total", totalPrice);

  document.getElementById("make-purchase").disabled = false;
}

// product three btn call
function productThree() {
  const productName = getProductName("product-name-three");
  // set product name cart list
  setTextElement(productName);

  const productPrice = getProductPrice("product-three-price");

  //get total price
  const previousTotalPrice = getProductPrice("total-price");

  //   calculate price

  const totalPrice = previousTotalPrice + productPrice;

  //set total price
  setTextPrice("total-price", totalPrice);
  setTextPrice("total", totalPrice);

  document.getElementById("make-purchase").disabled = false;
}
// product four btn call
function productFour() {
  const productName = getProductName("product-name-four");
  // set product name cart list
  setTextElement(productName);

  const productPrice = getProductPrice("product-four-price");

  //get total price
  const previousTotalPrice = getProductPrice("total-price");

  //   calculate price

  const totalPrice = previousTotalPrice + productPrice;

  //set total price
  setTextPrice("total-price", totalPrice);
  setTextPrice("total", totalPrice);

  document.getElementById("make-purchase").disabled = false;
}
// product five btn call
function productFive() {
  const productName = getProductName("product-name-five");
  // set product name cart list
  setTextElement(productName);

  const productPrice = getProductPrice("product-five-price");

  //get total price
  const previousTotalPrice = getProductPrice("total-price");

  //   calculate price

  const totalPrice = previousTotalPrice + productPrice;

  //set total price
  setTextPrice("total-price", totalPrice);
  setTextPrice("total", totalPrice);

  document.getElementById("make-purchase").disabled = false;
}
// product six btn call
function productSix() {
  const productName = getProductName("product-name-six");
  // set product name cart list
  setTextElement(productName);

  const productPrice = getProductPrice("product-six-price");

  //get total price
  const previousTotalPrice = getProductPrice("total-price");

  //   calculate price

  const totalPrice = previousTotalPrice + productPrice;

  //set total price
  setTextPrice("total-price", totalPrice);
  setTextPrice("total", totalPrice);

  document.getElementById("make-purchase").disabled = false;
}

function couponCode() {
  const totalPriceValue = getProductPrice("total-price");

  // cal
  const discountAmount = (totalPriceValue / 100) * 20;

  setTextPrice("discount", discountAmount);

  const totalPrice = totalPriceValue - discountAmount;
  setTextPrice("total", totalPrice);
}
