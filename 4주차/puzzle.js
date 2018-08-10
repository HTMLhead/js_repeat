// puzzle
// by mrdoo
// 2018 .08 .08

// html element
const output = document.getElementById('answer'); // answer
const word = document.getElementById('word'); // display button
const check = document.getElementById('check'); // checking
const progress = document.getElementById('progress');
const time = document.getElementById('time');

const game = {
    btns: [],
    maxNum: 3,
    current: 0,
};

game.startTime = Date.now();

game.words = 'CRAZYBOY,NADOONADOO,SIMPSON,GGAMDOONGLEE,QUESTION'.split(',')
game.choose = function () {
    var idx = Math.floor(Math.random() * this.words.length);
    this.answer = this.words[idx];
    this.letters = this.answer.split('');
    output.innerHTML = 'answer : ' + this.answer;
};

game.addButtons = function () {
    for (let i = 0; i < this.letters.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.letters[i]
        word.appendChild(btn)
        this.btns.push(btn)
    }
}

game.removeButtons = function() {
    for (let i = 0; i < this.btns.length; i++) {
        word.removeChild(this.btns[i])
    }
    this.btns = [];
}

game.isAnswer = function() {
    return this.answer === this.letters.join('');
}

game.checking = function () {
    if (this.isAnswer()) {
        check.innerHTML = '일치합니다'
    } else {
        check.innerHTML = '다릅니다.'
    }
};

game.swap = function () {
    let blank = [];
    while (this.letters.length != 0) {
        let s = this.letters.pop();
        blank.push(s);
    }

    this.letters = blank;
    this.repeat();
    this.checking();
}

game.rpush = function () {
    let s = this.letters.pop();
    this.letters.unshift(s);
    this.repeat();
    this.checking();
}

game.lpush = function () {
    let s = this.letters.shift();
    this.letters.push(s);
    this.repeat();
    this.checking();
}

game.progress = function() {
    if (this.isAnswer()) {
        this.current++
        this.removeButtons();
        this.init();
        this.shuffle();
        let str = "";
        for (let i = 0; i < this.current; i++) {
            str += '0'
        }
        progress.innerHTML = str;
    }
};

game.isEnd = function() {
    if (this.current === 3) {
        var sec = (Date.now() - game.startTime) / 1000;
        alert('thank you for playing record :' + sec);
        clearInterval(x);
    }
}

game.init= function() {
    this.choose();
    this.addButtons();
    this.checking();
    this.isEnd();
}
game.init();


game.repeat = function () {
    for (let i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i]
    }
}

// event Handler

const swap = function() {
    game.swap();
    game.progress();
}

const rpush = function() {
    game.rpush();
    game.progress();
}

const lpush = function() {
    game.lpush();
    game.progress();
}


// shuffle
game.shuffle = function () {
    var toggle = Math.floor(Math.random() * 2) === 0;

    if (toggle) {
        swap();
    }

    var n = Math.floor(Math.random() * this.letters.length - 1);

    for (let i = 0; i < n; i++) {
        lpush();
    }
}
game.shuffle();

var updateTime = function() {
    var now = Date.now() - game.startTime;
    time.innerHTML = now / 1000 + ' s';
}

var x = setInterval(updateTime, 50);