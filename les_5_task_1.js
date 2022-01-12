/*Задача 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8,
столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

function chessBoard() {
    var div = document.getElementById('div')
    var table = document.createElement("table");

    const bordStyle = "border: 1px solid black;"
    const blackBoxStyle = "background-color: black; height: 50px; width: 50px;"
    const whiteBoxStyle = "height: 50px; width: 50px;"

    table.style = bordStyle

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']


    function addLetters() {
        var trLetters = document.createElement("tr")
        let thEmpty = "<th></th>"
        trLetters.innerHTML = thEmpty
        for (let letter of letters) {
            let thLetter = document.createElement("th")
            thLetter.innerHTML = letter
            trLetters.appendChild(thLetter)
        }
        trLetters.innerHTML += thEmpty
        table.appendChild(trLetters)
    }
    addLetters()

    for (let i = 8; i > 0; i--) {
        let row = document.createElement("tr")
        let thNum = `<th>${i}</th>`
        row.innerHTML = thNum
        row.style = bordStyle
        for (let n = 0; n < 8; n++) {
            const box = document.createElement("th")
            if ((i + n) % 2 == 0) {
                box.style = whiteBoxStyle + bordStyle
            }
            else {
                box.style = blackBoxStyle + bordStyle
            }
            row.appendChild(box)
        }
        row.innerHTML += thNum
        table.appendChild(row)

    }
    addLetters()
    div.appendChild(table)
}

window.onload = chessBoard;