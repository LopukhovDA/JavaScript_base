/*Задача 1. Реализовать страницу корзины. Добавить возможность не только смотреть состав корзины, но и редактировать его, обновляя общую стоимость или выводя сообщение «Корзина пуста»:
1.1 Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
1.2 Сделать эти поля сворачиваемыми;
1.3 Заполнять поля по очереди, то есть давать посмотреть состав корзины, внизу которого есть кнопка «Далее». Если нажать ее, сворачивается «Состав корзины» и открывается «Адрес доставки» и так далее.*/

// Функция создания нового продукта (товара)

product = function (_name, _count, _price) {
    this.name = _name;
    this.count = _count;
    this.price = _price;
    this.total = function () { return this.count * this.price; }
}

var prodApple = new product('яблоко', 3, 45)

// объект корзины

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
// каталог товаров
var prodСatalog = []
prodСatalog.push(new product('яблоко', 1, 45))
prodСatalog.push(new product('груша', 1, 89))
prodСatalog.push(new product('авокадо', 1, 97))

var userAddress = ""
var userComments = ""

// функция создания каталога товаров и отображения на сайте
function catalog() {
    var divCatalog = document.createElement('div')
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
    document.getElementById('div').appendChild(divCatalog)

}

// функция создания и отображения на сайте состава корзины 
function cartList() {
    if (document.getElementById("divCartList") != null) {
        var divCartList = document.getElementById("divCartList");
        divCartList.innerHTML = "";
    }
    else {
        var title = document.createElement('div')
        title.innerText = "Состав корзины"
        title.id = "titleCartList"
        title.style.fontSize = "xx-large"
        title.style.border = "1px solid #000"
        title.style.padding = "10px"
        title.style.backgroundColor = "#ccc"
        title.addEventListener('click', changeDisplay)
        document.getElementById('div').appendChild(title)

        var divCartList = document.createElement('div')
        divCartList.id = "divCartList"
    }

    for (let i = 0; i < cart.products.length; i++) {
        var div = document.createElement('div')
        div.style = "border: 1px solid #ccc; padding: 10px;"
        var span_name = document.createElement('span')
        span_name.textContent = cart.products[i].name + ' '
        var span_price = document.createElement('span')
        span_price.textContent = cart.products[i].price + ' руб. '
        var buttonDec = document.createElement('button')
        buttonDec.id = i
        buttonDec.textContent = '-'
        buttonDec.addEventListener('click', decCartList)
        var span_count = document.createElement('span')
        span_count.textContent = ' ' + cart.products[i].count + ' шт. '
        var buttonInc = document.createElement('button')
        buttonInc.id = i
        buttonInc.textContent = '+'
        buttonInc.addEventListener('click', incCartList)
        div.appendChild(span_name)
        div.appendChild(span_price)
        div.appendChild(buttonDec)
        div.appendChild(span_count)
        div.appendChild(buttonInc)
        divCartList.appendChild(div)
    }
    const totalPrice = document.createElement('div')
    if (cart.products.length == 0) {
        totalPrice.innerText = "Корзина пуста"
    }
    else {
        totalPrice.innerText = `Итого: ${cart.countCartPrice()} руб.`
    }
    divCartList.appendChild(totalPrice)
    const nextButton = document.createElement('button')
    nextButton.textContent = "Далее"
    nextButton.id = "buttonCart"
    nextButton.addEventListener('click', changeDisplay)
    divCartList.appendChild(nextButton)
    document.getElementById('div').insertBefore(divCartList, document.getElementById('titleAddress'))

}

function init() {
    let spanCart = document.createElement('span')
    spanCart.id = "spanCartId"
    spanCart.style = "border: 1px solid rgb(65, 62, 62); height: 50px; font-size: xx-large;"
    document.getElementById('div').appendChild(spanCart)
    cartDynam()
    catalog()
    cartList()
    deliveryAddress()
    comments()
}

// функция создания и отображения на сайте адреса доставки
function deliveryAddress() {
    const address = document.createElement('div')
    address.innerText = "Адрес доставки"
    address.id = "titleAddress"
    address.style.fontSize = "xx-large"
    address.style.border = "1px solid #000"
    address.style.padding = "10px"
    address.style.backgroundColor = "#ccc"
    address.addEventListener('click', changeDisplay)
    document.getElementById('div').appendChild(address)
    const addrField = document.createElement('div')
    const addr = document.createElement('input')
    addr.id = "inputAddr"
    addr.style.height = "40px"
    addr.style.width = "900px"
    const nextAddr = document.createElement('button')
    nextAddr.textContent = "Далее"
    nextAddr.id = "buttonAddress"
    nextAddr.addEventListener('click', changeDisplay)
    addrField.appendChild(addr)
    addrField.appendChild(document.createElement('div'))
    addrField.appendChild(nextAddr)
    addrField.style.display = 'none'
    addrField.id = "address"
    document.getElementById('div').appendChild(addrField)
}

// функция создания и отображения на сайте комментариев
function comments() {
    const userComm = document.createElement('div')
    userComm.innerText = "Комментарии"
    userComm.id = "titleComments"
    userComm.style.fontSize = "xx-large"
    userComm.style.border = "1px solid #000"
    userComm.style.padding = "10px"
    userComm.style.backgroundColor = "#ccc"
    userComm.addEventListener('click', changeDisplay)
    document.getElementById('div').appendChild(userComm)
    const commField = document.createElement('div')
    const comms = document.createElement('input')
    comms.id = "inputComm"
    comms.style.height = "40px"
    comms.style.width = "900px"
    const nextComms = document.createElement('button')
    nextComms.textContent = "Далее"
    nextComms.id = "buttonComments"
    nextComms.addEventListener('click', changeDisplay)
    commField.appendChild(comms)
    commField.appendChild(document.createElement('div'))
    commField.appendChild(nextComms)
    commField.style.display = "none"
    commField.id = "comments"
    document.getElementById('div').appendChild(commField)
}

// функция отображения динамической корзины
function cartDynam() {
    const spanCart = document.getElementById("spanCartId")
    if (cart.products.length == 0) {
        spanCart.textContent = "Корзина пуста"
    }
    else {
        let countProd = 0
        for (let item of cart.products) {
            countProd += item.count
        }
        spanCart.textContent = `В корзине: ${countProd}
        товаров на сумму ${cart.countCartPrice()} рублей`
    }
}

// функция, вызываемая при покупке товаров (добавляет товары в корзину)
function catalogAct(event) {
    let isNotAdd = true
    for (let i = 0; i < cart.products.length; i++) {
        if (prodСatalog[event.target.id].name == cart.products[i].name) {
            cart.products[i].count++
            isNotAdd = false
        }
    }
    if (isNotAdd) {
        cart.products.push(prodСatalog[event.target.id])
    }
    cartDynam()
    cartList()
}

// функция переключения видимости элементов
function displaySwitch(elementId, swMode = null) {
    const obj = document.getElementById(elementId)
    if (swMode == null) {
        if (obj.style.display == "none") {
            obj.style.display = "block"
        }
        else {
            obj.style.display = "none"
        }
    }
    else if (swMode == 'on') {
        obj.style.display = "block"
    }
    else if (swMode == 'off') {
        obj.style.display = "none"
    }
}

// функция уменьшения кол-ва шт. товаров в корзине 
function decCartList(event) {
    cart.products[event.target.id].count--
    if (cart.products[event.target.id].count == 0) {
        cart.products.splice(event.target.id, 1)
    }
    cartDynam()
    cartList()
}

// функция увеличения кол-ва шт. товаров в корзине
function incCartList(event) {
    cart.products[event.target.id].count++
    cartDynam()
    cartList()
}

// функция переключения отображения элементов на сайте
function changeDisplay(event) {
    switch (event.target.id) {
        case "titleCartList":
            displaySwitch("divCartList");
            break;
        case "titleAddress":
            displaySwitch("address");
            break;
        case "titleComments":
            displaySwitch("comments");
            break;
        case "buttonCart":
            displaySwitch("divCartList", 'off');
            displaySwitch("address", 'on');
            break;
        case "buttonAddress":
            displaySwitch("address", 'off');
            displaySwitch("comments", 'on');
            userAddress = document.getElementById("inputAddr").value
            break;
        case "buttonComments":
            displaySwitch("comments", 'off');
            userComments = document.getElementById("inputComm").value
            break;
    }
}

window.onload = init;
