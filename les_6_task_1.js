/*Задача 1. Продолжаем реализовывать модуль корзины:

a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;

b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.*/

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
//cart.products.push(prodApple)
//cart.products.push(new product('груша', 5, 89))

var prodСatalog = []
prodСatalog.push(new product('яблоко', 1, 45))
prodСatalog.push(new product('груша', 1, 89))
prodСatalog.push(new product('авокадо', 1, 97))

function catalog(divCatalog) {
    for (let i = 0; i < prodСatalog.length; i++) {
        var div = document.createElement('div')
        div.style = "border: 1px solid #ccc; padding: 10px;"
        var span_name = document.createElement('span')
        span_name.textContent = prodСatalog[i].name + ' '
        var span_price = document.createElement('span')
        span_price.textContent = prodСatalog[i].price + ' руб. '
        var button = document.createElement('button')
        button.id = i
        button.textContent = 'купить'
        button.addEventListener('click', catalogAct)
        div.appendChild(span_name)
        div.appendChild(span_price)
        div.appendChild(button)
        divCatalog.appendChild(div)
    }

}

function init() {
    let spanCart = document.createElement('span')
    spanCart.id = "spanCartId"
    spanCart.style = "border: 1px solid rgb(65, 62, 62); height: 50px; font-size: xx-large;"
    document.getElementById('div').appendChild(spanCart)
    cartDynam()
    var divCatalog = document.createElement('div')
    catalog(divCatalog)
    document.getElementById('div').appendChild(divCatalog)
}

function cartDynam() {
    const spanCart = document.getElementById("spanCartId")
    if (cart.products.length == 0) {
        spanCart.textContent = "Корзина пуста"
    }
    else {
        spanCart.textContent = `В корзине: ${cart.products.length}
        товаров на сумму ${cart.countCartPrice()} рублей`
    }
}

function catalogAct(event) {
    cart.products.push(prodСatalog[event.target.id])
    cartDynam();
}

window.onload = init