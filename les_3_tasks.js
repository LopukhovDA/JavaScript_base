/*Задача 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100*/

var i = 3
var STOP = 100
var result = '2'
while (i <= STOP) {
    let k = 2
    while (k < i) {
        if (i % k == 0) {
            break;
        }
        k++;
        if (k == i) {result += " " + i;}
    }
    i++;
}

alert(result)

/*Задача 2. С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости
от находящихся в ней товаров. Товары в корзине хранятся в массиве.
Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countCartPrice, которая будет считать стоимость корзины.*/

var cart = []
// массив организован по принципу - для каждого товара подмассив, в котором три элемента:
// 1. название товара, 2. Кол-во ед. товара, 3. Цена ед. товара

function countCartPrice(shop_cart) {
    let countPrice = 0
    for (var item of shop_cart) {
        countPrice += item[1] * item[2]
    }
    return countPrice
}

cart.push(['яблоко', 3.5, 30])
cart.push(['груша', 2, 50])
cart.push(['макароны', 10, 55])
cart.push(['майонез', 2, 120])
cart.push(['чай', 3, 101])

alert(countCartPrice(cart))

/*Задача 3. *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто} */

for (var count = 0; count < 10; alert(count++)) {}


/*Задача 4. **Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */

for (var i = 1; i <= 20; i++) {
    let res = ''
    for (var x = 1; x <= i; x++) {
        res += "x"
    }
    console.log(res);
}
