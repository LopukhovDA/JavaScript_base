/*Задача 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

function getObjNum(num) {
    let obj = {'единицы': NaN, 'десятки': NaN, 'сотни': NaN};
    if ((num < 0) || (num > 999)) {
        console.log('Введенное число находится за диапазоном от 0 до 999')
        return obj;
    }
    var res = num;
    obj.единицы = res % 10;
    res = Math.floor(res / 10);
    obj.десятки = res % 10;
    res = Math.floor(res / 10);
    obj.сотни = res;
    return obj;
}

console.log(getObjNum(452))


/* Задача 2. Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только
для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для
различных модулей сайта, но в разных местах давал возможность вызывать разные методы. */


product = function(_name, _count, _price) {
    this.name = _name;
    this.count = _count;
    this.price = _price;
    this.total = function() {return this.count * this.price;}
    }

var prodApple = new product('яблоко', 3, 45)
console.log(prodApple)

function countCartPrice(shop_cart) {
    let countPrice = 0
    for (var item of shop_cart) {
        countPrice += item.total()
    }
    return countPrice
}

// с методом reduce обязательно разберусь!

var cart = []
cart.push(prodApple)
cart.push(new product('груша', 2, 50))
cart.push(new product('макароны', 10, 55))
cart.push(new product('майонез', 2, 120))
cart.push(new product('чай', 3, 101))

console.log(countCartPrice(cart))
