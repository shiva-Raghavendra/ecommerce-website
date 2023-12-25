document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const price = parseFloat(button.getAttribute('data-price'));
            total += price;
            cartTotal.innerText = total.toFixed(2);
            const itemName = button.previousElementSibling.previousElementSibling.innerText;
            const listItem = document.createElement('li');
            listItem.innerText = itemName;
            cartItems.appendChild(listItem);
       });
});
});