const buttons = document.querySelectorAll(".pizza-price-row button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => alert("Buy Me"));
});

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

document.querySelector(".pizza-products-prices").addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;

  const card = btn.closest(".pizza-products");
  const name = card.querySelector(".pizza-info p").textContent;
  const priceText = card.querySelector(".pizza-price-row p").textContent;
  const price = Number(priceText.replace(/[^\d]/g, ""));

  const cart = getCart();
  cart.push({ name, price });
  saveCart(cart);

  console.log(`Cart now has ${cart.length} item(s)`, cart);
});