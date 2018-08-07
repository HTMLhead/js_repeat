const str = document.getElementById('answer').innerHTML;
const word = document.getElementById('word');
const check = document.getElementById('check');

var game = {};

game.word = str.split('')
game.btns = [];
for (let i = 0; i < str.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = str[i]
    word.appendChild(btn)
    game.btns.push(btn)
}

const checking = function() {
    if (game.word.join('') === str) {
        check.innerHTML = '일치합니다.'
    } else {
        check.innerHTML = '일치하지 않습니다.'
    }
}

const repeat = function() {
    for (let i = 0; i < game.word.length; i++) {
        game.btns[i].innerHTML = game.word[i]
    }
}

const swap = function() {
    let blank = [];
    while(game.word.length != 0) {
        var s = game.word.pop();
        blank.push(s)
    }
    game.word = blank;
    repeat();
    checking();
}

const rpush = function() {
    let s = game.word.pop()
    game.word.unshift(s)
    repeat();
    checking();
}

const lpush = function() {
    let s = game.word.shift()
    game.word.push(s)
    repeat();
    checking();
}
