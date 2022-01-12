/*Задача 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/

product = function (_name, _count, _price) {
    this.name = _name;
    this.count = _count;
    this.price = _price;
    this.total = function () { return this.count * this.price; }
}

var prodApple = new product('яблоко', 3, 45)

var cart = {
    products: [],
    countCartPrice: function () {
        let countPrice = 0
        for (var item of this.products) {
            countPrice += item.total()
        }
        return countPrice
    }
}
cart.products.push(prodApple)
cart.products.push(new product('груша', 5, 89))

function cartDynam() {
    var spanCart = document.createElement('span')
    spanCart.style = "border: 1px solid rgb(65, 62, 62); height: 50px; font-size: xx-large;"
    if (cart.products.length == 0) {
        spanCart.textContent = "Корзина пуста"
    }
    else {
        spanCart.textContent = `В корзине: ${cart.products.length}
        товаров на сумму ${cart.countCartPrice()} рублей`
    }

    document.getElementById('div').appendChild(spanCart)
}

window.onload = cartDynam;