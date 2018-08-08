// puzzle
// by mrdoo
// 2018 .08 .08

// html element
const output = document.getElementById('answer'); // answer
const word = document.getElementById('word'); // display button
const check = document.getElementById('check'); // checking

const game = {
    btns: [],
};

game.words = 'CRAZYBOY,NADOONADOO,SIMPSON,GGAMDOONGLEE,QUESTION'.split(',')
game.choose = function () {
    var idx = Math.floor(Math.random() * this.words.length);
    this.answer = this.words[idx];
    this.letters = this.answer.split('');
    output.innerHTML = this.answer;
};

game.addButtons = function () {
    for (let i = 0; i < this.letters.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.letters[i]
        word.appendChild(btn)
        this.btns.push(btn)
    }
}

game.checking = function () {
    var gameStr = this.letters.join('')
    if (gameStr === this.answer) {
        check.innerHTML = '일치합니다'
    } else {
        check.innerHTML = '다릅니다.'
    }
};

game.init= function() {
    this.choose();
    this.addButtons();
    this.checking();
}
game.init();


game.repeat = function () {
    for (let i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i]
    }
}

// event Handler
const swap = function () {
    let blank = [];
    while (game.letters.length != 0) {
        let s = game.letters.pop();
        blank.push(s);
    }

    game.letters = blank;
    game.repeat();
    game.checking();
}

const rpush = function () {
    let s = game.letters.pop();
    game.letters.unshift(s);
    game.repeat();
    game.checking();
}

const lpush = function () {
    let s = game.letters.shift();
    game.letters.push(s);
    game.repeat();
    game.checking();
}

// shuffle
game.shuffle = function () {
    const toggle = Math.floor(Math.random() * 2) === 0;

    if (toggle) {
        swap();
    }

    const n = Math.floor(Math.random() * this.letters.length);

    for (let i = 0; i < n; i++) {
        lpush();
    }
}
game.shuffle();