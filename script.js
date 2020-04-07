let textarea = document.createElement('textarea');
textarea.id = "textarea";
textarea.innerHTML = "";
document.body.append(textarea);
let div = document.createElement('div');
div.id = "keyboard";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
document.body.append(div);

const keyboard = ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "Enter", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "ShiftL", "`", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "ShiftR", "Ctrl", "Alt", "Cmd", " ", "Cmd", "Alt", "ArrowLeft", "ArrowDown", "ArrowRight"];
const specSymbols = {
    "Backspace" : "&larr;", "Enter" : "&crarr;", "CapsLock" : "	&#11014;", "ShiftL" : "&#8679;", "ShiftR" : "&#8679;", "ArrowLeft" : "&larr;", "ArrowDown" : "	&darr;", "ArrowRight" : "	&rarr;"
}

function init() {
    let out = '';
    for (i of keyboard) {
        if (i == "Tab" || i == "CapsLock" || i =="ShiftL" || i == "Ctrl") {
            out += '<div class="clearfix"></div>';
        }
        out += '<div class="key" data="' + i + '" >' + (specSymbols[i] || i) + '</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
}
init();

function addToTextarea(letter) {
    document.getElementById('textarea').value = letter;
}

document.onkeydown = (e) => {
    document.querySelectorAll('#keyboard .key').forEach(function (e) {
        e.classList.remove('active');
    });
    addToTextarea(e.key);
    document.querySelector('#keyboard .key[data="' + e.key + '"]').classList.add('active');
}

document.querySelectorAll('#keyboard .key').forEach(function (e) {
    e.onclick = function (e) {
        document.querySelectorAll('#keyboard .key').forEach(function (e) {
            e.classList.remove('active');
        });
        addToTextarea(e.key);
        let code = this.getAttribute('active');
        this.classList.add('active');
    }
});



// let keyboard = [];
// document.onkeydown = (e) => {
// keyboard.push(e.key);
// console.log(keyboard);
// }



