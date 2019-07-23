var div = document.getElementById('div1');
var inputX = document.getElementById('inpX');
var inputY = document.getElementById('inpY');
var button = document.getElementById('btn');

div1.addEventListener('keyup', function () {

    (inputX.value != '' && inputY.value != '') ? button.removeAttribute('disabled') :
        button.setAttribute('disabled', null);
});

button.addEventListener('click', function (e) {
    e.preventDefault();

    if (isNaN(inputX.value) || isNaN(inputY.value) || inputX.value < 1 || inputX.value > 10 || inputY.value < 1 || inputY.value > 10)
        return alert('Введены неверные значения, попробуйте заново');

    function ChessBoard() {
        var board = document.querySelector('.board');
        var block = document.createElement('table');

        for (i = 0; i < inputX.value; i++) {
            var tr = document.createElement('tr');

            for (j = 0; j < inputY.value; j++) {
                var td = document.createElement('td');

                (i % 2 == j % 2) ? td.classList.add('black') : td.classList.add('white');

                tr.appendChild(td);
            }

            block.appendChild(tr);
        }
        board.innerHTML = ('<div3>');
        board.appendChild(block);

        document.body.getElementsByClassName('board')[0].onclick = function () {
            var tds = block.getElementsByTagName('TD')

            for (var i = 0; i < tds.length; i++) {
                tds[i].classList.toggle('black');
            }
        }

    }

    ChessBoard();
});