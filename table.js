var table = document.getElementById('tbl');
var addRow = table.getElementsByClassName('addRow')[0];

addRow.onclick = function () {
    table.insertAdjacentHTML('afterBegin', '<tr><td></td><td></td><td></td></tr>');
};

table.addEventListener("click", function (event) {
    if (event.target == addRow) {
        return;
    }
    if (event.target.tagName != 'TD') {
        return;
    }


    var input = document.createElement('input');
    var text;

    text = event.target.innerHTML;
    event.target.innerHTML = '';
    event.target.appendChild(input);
    input.value = text;
    input.focus();

    input.onblur = function () {
        var savetext = input.value;
        event.target.innerHTML = savetext;
    }

});