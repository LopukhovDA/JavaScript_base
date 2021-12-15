/*Задача 1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?*/

alert('Задача 1')
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2   - оператор ++ перед переменной инкрементирует ее до присваивания
d = b++; alert(d);           // 1   - оператор ++ после переменной инкрементирует ее после присваивания
c = (2+ ++a); alert(c);      // 5   - тоже самое что написано выше
d = (2+ b++); alert(d);      // 4   - тоже самое что написано выше
alert(a);                    // 3   - была равна 1, два раза инкрементировали
alert(b);                    // 3   - была равна 1, два раза инкрементировали

/* Задача 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); */

alert('Задача 2')
var a = 2;
var x = 1 + (a *= 2);   // x будет равен 5, так как a *= 2 означает a = a * 2

// проверим
alert(x) // все верно


/* Задача 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.   */

alert('Задача 3')
var a = +prompt('Введите целочисленное число a: ')
var b = +prompt('Введите целочисленное число b: ')

if (a >= 0 && b >= 0) {
    alert(a - b)
}
else if (a < 0 && b < 0) {
    alert(a * b)
}
else {alert(a + b)}

/* Задача 4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15. */

alert('Задача 4')
var a = +prompt('Введите целое число от 0 до 15 (включительно): ')
switch(a) {
    case 0:
        alert(0);
    case 1:
        alert(1);
    case 2:
        alert(2);
    case 3:
        alert(3);
    case 4:
        alert(4);
    case 5:
        alert(5);
    case 6:
        alert(6);
    case 7:
        alert(7);
    case 8:
        alert(8);
    case 9:
        alert(9);
    case 10:
        alert(10);
    case 11:
        alert(11);
    case 12:
        alert(12);
    case 13:
        alert(13);
    case 14:
        alert(14);
    case 15:
        alert(15);
        break;
    default:
        alert('Вы ввели неверное значение')
}

/* Задача 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return. */

alert('Задача 5')

function sum(a, b) {
    return a + b
}

function dif(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    if (b != 0) {
        return a / b
    }
    return
}

alert(sum(4, -5))
alert(dif(99, -5))
alert(mul(4, 32))
alert(div(20, 5))

/* Задача 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).  */

alert('Задача 6')

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'sum':
            return sum(arg1, arg2);
        case 'dif':
            return dif(arg1, arg2);
        case 'mul':
            return mul(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
    }
}

alert(mathOperation(5, 4, 'mul'))

/* Задача 7. *Сравнить null и 0. Попробуйте объяснить результат.  */

alert('Задача 7*')


alert(null != 0)  // true     
alert(null == 0)  // false   
alert(null === 0) // false
alert(null !== 0) // true
alert(null > 0)   // false
alert(null < 0)   // false

// Значение null представляет отсутствие какого-либо объектного значения, если мы сравниваем его с числом (0)
// то это дает соответствующие результаты


/* Задача 8. *С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень. */

alert('Задача 8*')

function power(val, pow) {
    if (pow == 1) {
        return val
    }
    else if (pow == -1) {
        return 1 / val
    }
    else if (pow == 0) {
        return 1
    }
    else if (pow > 0) {
        return val * power(val, pow - 1)
    }
    else if (pow < 0){
        return power(val, pow + 1) / val
    }
}

alert(power(4, 3))
alert(power(4, -3))
alert(power(4, 0))